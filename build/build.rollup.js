const rollup = require('rollup');
const commonjs = require('rollup-plugin-commonjs');
const minify = require('rollup-plugin-babel-minify');
const fs = require('fs');
const path = require('path');
const pkgJson = require('../package.json');


const buildOptions = [
    { // Browser
        input: {
            input: path.join(__dirname, '..', 'src', 'main.js'),
            plugins: [
                commonjs()
            ],
        },
        output: {
            file: path.join(__dirname, '..', 'dist', `${pkgJson.name}-${pkgJson.version}.browser.mod.js`),
            format: 'esm'
        }
    },
    { // Browser minified
        input: {
            input: path.join(__dirname, '..', 'src', 'main.js'),
            plugins: [
                commonjs(),
                minify({
                    'comments': false
                })
            ],
        },
        output: {
            file: path.join(__dirname, '..', 'dist', `${pkgJson.name}-${pkgJson.version}.browser.mod.min.js`),
            format: 'esm'
        }
    },
    { // Node
        input: {
            input: path.join(__dirname, '..', 'src', 'main.js'),
        },
        output: {
            file: path.join(__dirname, '..', 'dist', `${pkgJson.name}-${pkgJson.version}.node.js`),
            format: 'cjs'
        }
    },
];

for (const options of buildOptions) {
    build(options);
}



/* --- HELPLER FUNCTIONS --- */

async function build(options) {
    // create a bundle
    const bundle = await rollup.rollup(options.input);

    // generate code
    await bundle.generate(options.output);

    // or write the bundle to disk
    await bundle.write(options.output);

    // copy the latest build as pkg_name-latest
    fs.copyFileSync(
        options.output.file,
        options.output.file.replace(`${pkgJson.name}-${pkgJson.version}.`, `${pkgJson.name}-latest.`)
    );
}

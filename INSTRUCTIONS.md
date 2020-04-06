[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Skeleton for both Node.js and native JS modules

Clone this repo to your desired project directory (`my-project` in the following example), unlink the git, install the required development dependencies and start working.

```bash
git clone https://github.com/juanelas/node-browser-skel.git my-project
cd my-project
rm -rf .git .gitignore lib/.gitignore test/browser/.gitignore types/.gitignore README.md
npm i -D rollup @rollup/plugin-commonjs @rollup/plugin-multi-entry @rollup/plugin-node-resolve @rollup/plugin-replace chai jsdoc-to-markdown mocha npm-run-all rollup-plugin-terser standard typescript
```
A new JS project is created and it is ready to bundle IIFE, ESM and CJS modules with the corresponding declaration files for TypeScript. Code follows [JavaScript Standard](https://standardjs.com) style. The bundles are created with [Rollup](https://rollupjs.org).

A structure like the following is going to be created:

```
.
├── build/
│   ├── build.dts.js
│   ├── rollup.config.js
│   └── rollup.tests.config.js
├── INSTRUCTIONS.md
├── lib/
├── LICENSE
├── package.json
├── src/
│   ├── browser/
│   │   └── tests-template.html
│   ├── doc/
│   │   └── readme-template.md
│   └── js/
│       └── index.js
├── test/
│   ├── browser/
│   └── test1.js
└── types/
```

The file `INSTRUCTIONS.md` contains a copy of what you are reading now. You can safely delete it when you don't need it any more.

## Init your project

Edit `package.json` to suit your needs and initialize the project with:

```bash
npm install
npm run build
```

The `README.md` file of your project will be created during the build process, DO NOT EDIT it; edit `./src/doc/readme-template.md` instead. The JS Doc will be automatically added to the end of the `README.md`.

After editing `./src/doc/readme-template.md`, you can build your `README.md` as:

```
npm run build:docs
```

## Write JS code and build for node.js and native browsers

Write your code in ES6 using file `./src/js/index.js`. You can use boolean variable `process.browser` to create specific code for native JS or Node. For example:

```javascript
if (process.browser) {
  // browser specific code here
} else {
  // node.js specific code here
}
```

Once your source code is ready, you can build the final browser/node files (the node.js specific code will be stripped from the browser final files and vice versa) as:

```bash
npm run build:js
```

Final browser/node files include an ESM file, a bundle ESM file, and a bundle IIFE file for browsers; and a CJS module for node:

```
lib
├── index.browser.bundle.js
├── index.browser.bundle.mod.js
├── index.browser.mod.js
└── index.node.js
```

A file with Typescript definition types can also be built to `./types/index.d.ts` with :

```
npm run build:dts
```

> Consider using JS Doc with your exports. If the JS doc includes typing in the documentation, the created types definition file will honour the JS doc typing instead of using `any` everywhere.

## Create and run tests for node.js and browser

Mocha/Chai tests are created using Node.js common js format and should be placed in directory `./test/`. You can create separate test files but follow the instructions in `./test/test1.js`.

You can run tests in Node.js with:

```bash
npm test
```

Browser tests are built from the node.js ones:

```
npm run build:browserTests
```

Don't forget rebuilding after adding/modifying a test.

> Opening the browser tests requires a local live server to serve `./test/browser/index.html`. With VSCode, you can use the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) and just right click over the file and `Open with Live Server`; although any other server solution should be fine.

## Build all in one step

You can just go through all the build steps in one step:

```
npm run build
```

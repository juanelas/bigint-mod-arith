function n(n){return n>=0?n:-n}function t(n){if("number"==typeof n&&(n=BigInt(n)),1n===n)return 1;let t=1;do{t++}while((n>>=1n)>1n);return t}function r(n,t){if("number"==typeof n&&(n=BigInt(n)),"number"==typeof t&&(t=BigInt(t)),n<=0n||t<=0n)throw new RangeError("a and b MUST be > 0");let r=0n,e=1n,o=1n,i=0n;for(;0n!==n;){const u=t/n,f=t%n,g=r-o*u,c=e-i*u;t=n,n=f,r=o,e=i,o=g,i=c}return{g:t,x:r,y:e}}function e(n,t){if("number"==typeof n&&(n=BigInt(n)),"number"==typeof t&&(t=BigInt(t)),t<=0n)throw new RangeError("n must be > 0");const r=n%t;return r<0n?r+t:r}function o(n,t){const o=r(e(n,t),t);if(1n!==o.g)throw new RangeError(`${n.toString()} does not have inverse modulo ${t.toString()}`);return e(o.x,t)}function i(n,t,r){if(n.length!==t.length)throw new RangeError("The remainders and modulos arrays should have the same length");const i=r??t.reduce(((n,t)=>n*t),1n);return t.reduce(((t,r,u)=>{const f=i/r;return e(t+f*o(f,r)%i*n[u]%i,i)}),0n)}function u(t,r){let e="number"==typeof t?BigInt(n(t)):n(t),o="number"==typeof r?BigInt(n(r)):n(r);if(0n===e)return o;if(0n===o)return e;let i=0n;for(;0n===(1n&(e|o));)e>>=1n,o>>=1n,i++;for(;0n===(1n&e);)e>>=1n;do{for(;0n===(1n&o);)o>>=1n;if(e>o){const n=e;e=o,o=n}o-=e}while(0n!==o);return e<<i}function f(t,r){return"number"==typeof t&&(t=BigInt(t)),"number"==typeof r&&(r=BigInt(r)),0n===t&&0n===r?BigInt(0):n(t/u(t,r)*r)}function g(n,t){return n>=t?n:t}function c(n,t){return n>=t?t:n}function m(n,t){const r=BigInt(t);return e(n.map((n=>BigInt(n)%r)).reduce(((n,t)=>n+t%r),0n),r)}function p(n,t){const r=BigInt(t);return e(n.map((n=>BigInt(n)%r)).reduce(((n,t)=>n*t%r),1n),r)}function a(n){return n.map((n=>n[0]**(n[1]-1n)*(n[0]-1n))).reduce(((n,t)=>t*n),1n)}function s(t,r,u,f){if("number"==typeof t&&(t=BigInt(t)),"number"==typeof r&&(r=BigInt(r)),"number"==typeof u&&(u=BigInt(u)),u<=0n)throw new RangeError("n must be > 0");if(1n===u)return 0n;if(t=e(t,u),r<0n)return o(s(t,n(r),u,f),u);if(void 0!==f)return function(n,t,r,e){const o=e.map((n=>n[0]**n[1])),u=e.map((n=>a([n]))),f=u.map(((r,e)=>s(n,t%r,o[e])));return i(f,o,r)}(t,r,u,function(n){const t={};return n.forEach((n=>{if("bigint"==typeof n||"number"==typeof n){const r=String(n);void 0===t[r]?t[r]={p:BigInt(n),k:1n}:t[r].k+=1n}else{const r=String(n[0]);void 0===t[r]?t[r]={p:BigInt(n[0]),k:BigInt(n[1])}:t[r].k+=BigInt(n[1])}})),Object.values(t).map((n=>[n.p,n.k]))}(f));let g=1n;for(;r>0;)r%2n===1n&&(g=g*t%u),r/=2n,t=t**2n%u;return g}export{n as abs,t as bitLength,i as crt,r as eGcd,u as gcd,f as lcm,g as max,c as min,m as modAdd,o as modInv,p as modMultiply,s as modPow,a as phi,e as toZn};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubm9kZS5lc20uanMiLCJzb3VyY2VzIjpbIi4uL3NyYy90cy9hYnMudHMiLCIuLi9zcmMvdHMvYml0TGVuZ3RoLnRzIiwiLi4vc3JjL3RzL2VnY2QudHMiLCIuLi9zcmMvdHMvdG9abi50cyIsIi4uL3NyYy90cy9tb2RJbnYudHMiLCIuLi9zcmMvdHMvY3J0LnRzIiwiLi4vc3JjL3RzL2djZC50cyIsIi4uL3NyYy90cy9sY20udHMiLCIuLi9zcmMvdHMvbWF4LnRzIiwiLi4vc3JjL3RzL21pbi50cyIsIi4uL3NyYy90cy9tb2RBZGQudHMiLCIuLi9zcmMvdHMvbW9kTXVsdGlwbHkudHMiLCIuLi9zcmMvdHMvcGhpLnRzIiwiLi4vc3JjL3RzL21vZFBvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6bnVsbCwibmFtZXMiOlsiYWJzIiwiYSIsImJpdExlbmd0aCIsIkJpZ0ludCIsImJpdHMiLCJlR2NkIiwiYiIsIlJhbmdlRXJyb3IiLCJ4IiwieSIsInUiLCJ2IiwicSIsInIiLCJtIiwibiIsImciLCJ0b1puIiwiYVpuIiwibW9kSW52IiwiZWdjZCIsInRvU3RyaW5nIiwiY3J0IiwicmVtYWluZGVycyIsIm1vZHVsb3MiLCJtb2R1bG8iLCJsZW5ndGgiLCJwcm9kdWN0IiwicmVkdWNlIiwiYWNjIiwidmFsIiwic3VtIiwibW9kIiwiaW5kZXgiLCJwYXJ0aWFsUHJvZHVjdCIsImdjZCIsImFBYnMiLCJiQWJzIiwic2hpZnQiLCJsY20iLCJtYXgiLCJtaW4iLCJtb2RBZGQiLCJhZGRlbmRzIiwibWFwIiwibW9kTXVsdGlwbHkiLCJmYWN0b3JzIiwicHJvZCIsInBoaSIsInByaW1lRmFjdG9yaXphdGlvbiIsInByZXYiLCJjdXJyIiwibW9kUG93IiwiZSIsInVuZGVmaW5lZCIsIm1vZHMiLCJwaGlzIiwiaSIsIm1vZFBvd1dpdGhGYWN0b3JpemF0aW9uIiwicHJpbWVGYWN0b3JzIiwicHJpbWVQb3dlcnMiLCJmb3JFYWNoIiwicHJpbWVGYWN0b3IiLCJrZXkiLCJT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

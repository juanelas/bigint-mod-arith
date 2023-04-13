"use strict";function n(n){return n>=0?n:-n}function t(n,t){if("number"==typeof n&&(n=BigInt(n)),"number"==typeof t&&(t=BigInt(t)),n<=0n||t<=0n)throw new RangeError("a and b MUST be > 0");let r=0n,e=1n,o=1n,i=0n;for(;0n!==n;){const u=t/n,f=t%n,g=r-o*u,p=e-i*u;t=n,n=f,r=o,e=i,o=g,i=p}return{g:t,x:r,y:e}}function r(t,r){let e="number"==typeof t?BigInt(n(t)):n(t),o="number"==typeof r?BigInt(n(r)):n(r);if(0n===e)return o;if(0n===o)return e;let i=0n;for(;0n===(1n&(e|o));)e>>=1n,o>>=1n,i++;for(;0n===(1n&e);)e>>=1n;do{for(;0n===(1n&o);)o>>=1n;if(e>o){const n=e;e=o,o=n}o-=e}while(0n!==o);return e<<i}function e(n,t){if("number"==typeof n&&(n=BigInt(n)),"number"==typeof t&&(t=BigInt(t)),t<=0n)throw new RangeError("n must be > 0");const r=n%t;return r<0n?r+t:r}function o(n,r){const o=t(e(n,r),r);if(1n!==o.g)throw new RangeError(`${n.toString()} does not have inverse modulo ${r.toString()}`);return e(o.x,r)}exports.abs=n,exports.bitLength=function(n){if("number"==typeof n&&(n=BigInt(n)),1n===n)return 1;let t=1;do{t++}while((n>>=1n)>1n);return t},exports.eGcd=t,exports.gcd=r,exports.lcm=function(t,e){return"number"==typeof t&&(t=BigInt(t)),"number"==typeof e&&(e=BigInt(e)),0n===t&&0n===e?BigInt(0):n(t/r(t,e)*e)},exports.max=function(n,t){return n>=t?n:t},exports.min=function(n,t){return n>=t?t:n},exports.modInv=o,exports.modPow=function t(r,i,u){if("number"==typeof r&&(r=BigInt(r)),"number"==typeof i&&(i=BigInt(i)),"number"==typeof u&&(u=BigInt(u)),u<=0n)throw new RangeError("n must be > 0");if(1n===u)return 0n;if(r=e(r,u),i<0n)return o(t(r,n(i),u),u);let f=1n;for(;i>0;)i%2n===1n&&(f=f*r%u),i/=2n,r=r**2n%u;return f},exports.toZn=e;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubm9kZS5janMiLCJzb3VyY2VzIjpbIi4uL3NyYy90cy9hYnMudHMiLCIuLi9zcmMvdHMvZWdjZC50cyIsIi4uL3NyYy90cy9nY2QudHMiLCIuLi9zcmMvdHMvdG9abi50cyIsIi4uL3NyYy90cy9tb2RJbnYudHMiLCIuLi9zcmMvdHMvYml0TGVuZ3RoLnRzIiwiLi4vc3JjL3RzL2xjbS50cyIsIi4uL3NyYy90cy9tYXgudHMiLCIuLi9zcmMvdHMvbWluLnRzIiwiLi4vc3JjL3RzL21vZFBvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6bnVsbCwibmFtZXMiOlsiYWJzIiwiYSIsImVHY2QiLCJiIiwiQmlnSW50IiwiUmFuZ2VFcnJvciIsIngiLCJ5IiwidSIsInYiLCJxIiwiciIsIm0iLCJuIiwiZyIsImdjZCIsImFBYnMiLCJiQWJzIiwic2hpZnQiLCJ0b1puIiwiYVpuIiwibW9kSW52IiwiZWdjZCIsInRvU3RyaW5nIiwiYml0cyIsIm1vZFBvdyIsImUiXSwibWFwcGluZ3MiOiJhQU9NLFNBQVVBLEVBQUtDLEdBQ25CLE9BQVFBLEdBQUssRUFBS0EsR0FBS0EsQ0FDekIsQ0NPZ0IsU0FBQUMsRUFBTUQsRUFBb0JFLEdBSXhDLEdBSGlCLGlCQUFORixJQUFnQkEsRUFBSUcsT0FBT0gsSUFDckIsaUJBQU5FLElBQWdCQSxFQUFJQyxPQUFPRCxJQUVsQ0YsR0FBSyxJQUFNRSxHQUFLLEdBQUksTUFBTSxJQUFJRSxXQUFXLHVCQUU3QyxJQUFJQyxFQUFJLEdBQ0pDLEVBQUksR0FDSkMsRUFBSSxHQUNKQyxFQUFJLEdBRVIsS0FBYSxLQUFOUixHQUFVLENBQ2YsTUFBTVMsRUFBSVAsRUFBSUYsRUFDUlUsRUFBWVIsRUFBSUYsRUFDaEJXLEVBQUlOLEVBQUtFLEVBQUlFLEVBQ2JHLEVBQUlOLEVBQUtFLEVBQUlDLEVBQ25CUCxFQUFJRixFQUNKQSxFQUFJVSxFQUNKTCxFQUFJRSxFQUNKRCxFQUFJRSxFQUNKRCxFQUFJSSxFQUNKSCxFQUFJSSxDQUNMLENBQ0Qs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

// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).itermmeanabs2=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,S=isNaN,x=Array.isArray;function A(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,o,a,f,l,s,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=A(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function N(r){return"string"==typeof r}function O(r){var e,t,n;if(!N(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var V,P=Object.prototype,C=P.toString,$=P.__defineGetter__,B=P.__defineSetter__,L=P.__lookupGetter__,R=P.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var G=V;function M(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=/./;function U(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&z.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=X()?function(r){var e,t,n;if(null==r)return Y.call(r);t=r[H],e=q(r,H);try{r[H]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[H]=t:delete r[H],n}:function(r){return Y.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=X();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return U(r)||er(r)}function nr(){return new Function("return this;")()}M(tr,"isPrimitive",U),M(tr,"isObject",er);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="object"==typeof global?global:null,ur="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!U(r))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ur)return ur;if(ir)return ir;if(or)return or;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=cr.document&&cr.document.childNodes,lr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;M(sr,"REGEXP",pr);var gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function dr(r){return null!==r&&"object"==typeof r}function yr(r){var e,t,n,i;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return dr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr));var vr="function"==typeof Z||"object"==typeof lr||"function"==typeof fr?function(r){return yr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?yr(r).toLowerCase():e};function br(r){return"function"===vr(r)}function hr(r){return"number"==typeof r}var wr=Number,mr=wr.prototype.toString;var jr=X();function Er(r){return"object"==typeof r&&(r instanceof wr||(jr?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function _r(r){return hr(r)||Er(r)}M(_r,"isPrimitive",hr),M(_r,"isObject",Er);var Sr=Number.POSITIVE_INFINITY,xr=wr.NEGATIVE_INFINITY,Ar=Math.floor;function Tr(r){return r<Sr&&r>xr&&Ar(e=r)===e;var e}function Ir(r){return hr(r)&&Tr(r)}function kr(r){return Er(r)&&Tr(r.valueOf())}function Fr(r){return Ir(r)||kr(r)}function Nr(r){return Ir(r)&&r>0}function Or(r){return kr(r)&&r.valueOf()>0}function Vr(r){return Nr(r)||Or(r)}M(Fr,"isPrimitive",Ir),M(Fr,"isObject",kr),M(Vr,"isPrimitive",Nr),M(Vr,"isObject",Or);var Pr="function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;function Cr(r){return r!=r}var $r="function"==typeof Float64Array;var Br="function"==typeof Float64Array?Float64Array:null;var Lr="function"==typeof Float64Array?Float64Array:void 0;var Rr=function(){var r,e,t;if("function"!=typeof Br)return!1;try{e=new Br([1,3.14,-3.14,NaN]),t=e,r=($r&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};function Gr(r){var e;if(!Nr(r))throw new TypeError(O("invalid argument. Must provide a positive integer. Value: `%s`.",r));return e=function(r){var e,t,n,i,o;if(!Nr(r))throw new TypeError(O("invalid argument. Must provide a positive integer. Value: `%s`.",r));return t=new Rr(r),n=0,o=-1,i=0,function(a){var u;if(0===arguments.length)return 0===i?null:n;if(o=(o+1)%r,Cr(a))i=r,n=NaN;else if(i<r)n+=(e=a-n)/(i+=1);else if(Cr(t[o])){for(i=1,n=a,u=0;u<r;u++)if(u!==o){if(Cr(t[u])){i=r,n=NaN;break}i+=1,e=t[u]-n,n+=e/i}}else!1===Cr(n)&&(e=a-t[o],n+=e/r);return t[o]=a,n}}(r),function(r){if(0===arguments.length)return e();return e(r*r)}}function Mr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}return function r(e,t){var n,i,o,a,u;if(u=typeof(a=e),null===a||"object"!==u&&"function"!==u||!br(a.next))throw new TypeError(Mr("1L13v,IA",e));if(!Nr(t))throw new TypeError(Mr("1L145,IB",t));return o=Gr(t),M(n={},"next",(function(){var r;if(i)return{done:!0};if((r=e.next()).done)return i=!0,{done:!0};r="number"==typeof r.value?o(r.value):o(NaN);return{value:r,done:!1}})),M(n,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Pr&&br(e[Pr])&&M(n,Pr,(function(){return r(e[Pr](),t)})),n}}));
//# sourceMappingURL=index.js.map

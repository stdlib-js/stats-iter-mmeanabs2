// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":f(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):l.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var _=String.fromCharCode,S=isNaN,x=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,o,a,f,l,s,p;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(f="",l=1,s=0;s<e.length;s++)if(c(n=e[s]))f+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function N(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function V(e){return"string"==typeof e}function I(e){var r,t,n;if(!V(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=N(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var O,P=Object.prototype,$=P.toString,C=P.__defineGetter__,B=P.__defineSetter__,R=P.__lookupGetter__,G=P.__lookupSetter__;O=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(e,r,t.get),a&&B&&B.call(e,r,t.set),e};var L=O;function M(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=/./;function W(e){return"boolean"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,z=Object.prototype.hasOwnProperty;function q(e,r){return null!=e&&z.call(e,r)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"",J=X()?function(e){var r,t,n;if(null==e)return Y.call(e);t=e[H],r=q(e,H);try{e[H]=void 0}catch(r){return Y.call(e)}return n=Y.call(e),r?e[H]=t:delete e[H],n}:function(e){return Y.call(e)},K=Boolean,Q=Boolean.prototype.toString,ee=X();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function te(e){return W(e)||re(e)}function ne(){return new Function("return this;")()}M(te,"isPrimitive",W),M(te,"isObject",re);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="object"==typeof globalThis?globalThis:null,ue=function(e){if(arguments.length){if(!W(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ae)return ae;if(ie)return ie;if(oe)return oe;throw new Error("unexpected error. Unable to resolve global object.")}(),ce=ue.document&&ue.document.childNodes,fe=Int8Array;function le(){return/^\s*function\s*([^(]*)/i}var se=/^\s*function\s*([^(]*)/i;M(le,"REGEXP",se);var pe=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function ge(e){return null!==e&&"object"==typeof e}function de(e){var r,t,n,i;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=se.exec(n.toString()))return r[1]}return ge(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(ge,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!pe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ge));var ye="function"==typeof Z||"object"==typeof fe||"function"==typeof ce?function(e){return de(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?de(e).toLowerCase():r};function be(e){return"function"===ye(e)}function he(e){return"number"==typeof e}var ve=Number,we=ve.prototype.toString,me=X();function je(e){return"object"==typeof e&&(e instanceof ve||(me?function(e){try{return we.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function Ee(e){return he(e)||je(e)}M(Ee,"isPrimitive",he),M(Ee,"isObject",je);var _e=Number.POSITIVE_INFINITY,Se=ve.NEGATIVE_INFINITY,xe=Math.floor;function Te(e){return e<_e&&e>Se&&xe(r=e)===r;var r}function Ae(e){return he(e)&&Te(e)}function ke(e){return je(e)&&Te(e.valueOf())}function Fe(e){return Ae(e)||ke(e)}function Ne(e){return Ae(e)&&e>0}function Ve(e){return ke(e)&&e.valueOf()>0}function Ie(e){return Ne(e)||Ve(e)}M(Fe,"isPrimitive",Ae),M(Fe,"isObject",ke),M(Ie,"isPrimitive",Ne),M(Ie,"isObject",Ve);var Oe="function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;function Pe(e){return e!=e}var $e="function"==typeof Float64Array,Ce="function"==typeof Float64Array?Float64Array:null,Be="function"==typeof Float64Array?Float64Array:void 0,Re=function(){var e,r,t;if("function"!=typeof Ce)return!1;try{r=new Ce([1,3.14,-3.14,NaN]),t=r,e=($e&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?Be:function(){throw new Error("not implemented")};function Ge(e){var r;if(!Ne(e))throw new TypeError(I("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=function(e){var r,t,n,i,o;if(!Ne(e))throw new TypeError(I("invalid argument. Must provide a positive integer. Value: `%s`.",e));return t=new Re(e),n=0,o=-1,i=0,function(a){var u;if(0===arguments.length)return 0===i?null:n;if(o=(o+1)%e,Pe(a))i=e,n=NaN;else if(i<e)n+=(r=a-n)/(i+=1);else if(Pe(t[o])){for(i=1,n=a,u=0;u<e;u++)if(u!==o){if(Pe(t[u])){i=e,n=NaN;break}i+=1,r=t[u]-n,n+=r/i}}else!1===Pe(n)&&(r=a-t[o],n+=r/e);return t[o]=a,n}}(e),function(e){return 0===arguments.length?r():r(e*e)}}return function e(r,t){var n,i,o,a,u;if(u=typeof(a=r),null===a||"object"!==u&&"function"!==u||!be(a.next))throw new TypeError(I("invalid argument. First argument must be an iterator. Value: `%s`.",r));if(!Ne(t))throw new TypeError(I("invalid argument. Second argument must be a positive integer. Value: `%s`.",t));return o=Ge(t),M(n={},"next",(function(){var e;return i?{done:!0}:(e=r.next()).done?(i=!0,{done:!0}):{value:e="number"==typeof e.value?o(e.value):o(NaN),done:!1}})),M(n,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Oe&&be(r[Oe])&&M(n,Oe,(function(){return e(r[Oe](),t)})),n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).itermmeanabs2=r();
//# sourceMappingURL=browser.js.map

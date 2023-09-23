// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,b,"e"),t=f.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var k=String.fromCharCode,S=isNaN,I=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,i,t,a,o,p,l,u,f;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(t=e[u]))p+=t;else{if(r=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,i,t,n;for(i=[],n=0,t=$.exec(e);t;)(r=e.slice(n,$.lastIndex-t[0].length)).length&&i.push(r),i.push(A(t)),n=$.lastIndex,t=$.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function j(e){return"string"==typeof e}function C(e){var r,i,t;if(!j(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=T(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return F.apply(null,i)}var R,_=Object.prototype,N=_.toString,Z=_.__defineGetter__,O=_.__defineSetter__,L=_.__lookupGetter__,W=_.__lookupSetter__;R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===N.call(i))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(L.call(e,r)||W.call(e,r)?(t=e.__proto__,e.__proto__=_,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,i.get),o&&O&&O.call(e,r,i.set),e};var P=R;function G(e,r,i){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}var U=/./;function X(e){return"boolean"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return M&&"symbol"==typeof Symbol.toStringTag}var z,Y=Object.prototype.toString,q=Object.prototype.hasOwnProperty,D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";z=B()?function(e){var r,i,t,n,a;if(null==e)return Y.call(e);i=e[H],a=H,r=null!=(n=e)&&q.call(n,a);try{e[H]=void 0}catch(r){return Y.call(e)}return t=Y.call(e),r?e[H]=i:delete e[H],t}:function(e){return Y.call(e)};var J=z,K=Boolean,Q=Boolean.prototype.toString,ee=B();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function ie(e){return X(e)||re(e)}function te(e){return"number"==typeof e}function ne(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ae(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ne(n):ne(n)+e,t&&(e="-"+e)),e}G(ie,"isPrimitive",X),G(ie,"isObject",re);var oe=String.prototype.toLowerCase,se=String.prototype.toUpperCase;function ce(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!te(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ae(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ae(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===se.call(e.specifier)?se.call(i):oe.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function pe(e){return"string"==typeof e}var le=Math.abs,ue=String.prototype.toLowerCase,fe=String.prototype.toUpperCase,ge=String.prototype.replace,de=/e\+(\d)$/,he=/e-(\d)$/,we=/^(\d+)$/,ve=/^(\d+)e/,be=/\.0$/,ye=/\.0*e/,me=/(\..*[^0])0*e/;function Ee(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!te(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":le(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=ge.call(i,me,"$1e"),i=ge.call(i,ye,"e"),i=ge.call(i,be,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=ge.call(i,de,"e+0$1"),i=ge.call(i,he,"e-0$1"),e.alternate&&(i=ge.call(i,we,"$1."),i=ge.call(i,ve,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===fe.call(e.specifier)?fe.call(i):ue.call(i)}function xe(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function ke(e,r,i){var t=r-e.length;return t<0?e:e=i?e+xe(t):xe(t)+e}var Se=String.fromCharCode,Ie=isNaN,Ve=Array.isArray;function Fe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $e(e){var r,i,t,n,a,o,s,c,p;if(!Ve(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(pe(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Fe(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Ie(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Ie(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ce(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Ie(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ie(a)?String(t.arg):Se(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ee(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ae(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ke(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ae=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Te(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function je(e){var r,i,t,n;for(i=[],n=0,t=Ae.exec(e);t;)(r=e.slice(n,Ae.lastIndex-t[0].length)).length&&i.push(r),i.push(Te(t)),n=Ae.lastIndex,t=Ae.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ce(e){return"string"==typeof e}function Re(e){var r,i,t;if(!Ce(e))throw new TypeError(Re("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=je(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return $e.apply(null,i)}function _e(){return new Function("return this;")()}var Ne="object"==typeof self?self:null,Ze="object"==typeof window?window:null,Oe="object"==typeof globalThis?globalThis:null,Le=function(e){if(arguments.length){if(!X(e))throw new TypeError(Re("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return _e()}if(Oe)return Oe;if(Ne)return Ne;if(Ze)return Ze;throw new Error("unexpected error. Unable to resolve global object.")}(),We=Le.document&&Le.document.childNodes,Pe=Int8Array;function Ge(){return/^\s*function\s*([^(]*)/i}var Ue,Xe=/^\s*function\s*([^(]*)/i;G(Ge,"REGEXP",Xe),Ue=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};var Me=Ue;function Be(e){return"number"==typeof e}function ze(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Ye(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ze(n):ze(n)+e,t&&(e="-"+e)),e}var qe=String.prototype.toLowerCase,De=String.prototype.toUpperCase;function He(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Be(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Ye(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Ye(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===De.call(e.specifier)?De.call(i):qe.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Je(e){return"string"==typeof e}var Ke=Math.abs,Qe=String.prototype.toLowerCase,er=String.prototype.toUpperCase,rr=String.prototype.replace,ir=/e\+(\d)$/,tr=/e-(\d)$/,nr=/^(\d+)$/,ar=/^(\d+)e/,or=/\.0$/,sr=/\.0*e/,cr=/(\..*[^0])0*e/;function pr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Be(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Ke(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=rr.call(i,cr,"$1e"),i=rr.call(i,sr,"e"),i=rr.call(i,or,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=rr.call(i,ir,"e+0$1"),i=rr.call(i,tr,"e-0$1"),e.alternate&&(i=rr.call(i,nr,"$1."),i=rr.call(i,ar,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===er.call(e.specifier)?er.call(i):Qe.call(i)}function lr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function ur(e,r,i){var t=r-e.length;return t<0?e:e=i?e+lr(t):lr(t)+e}var fr=String.fromCharCode,gr=isNaN,dr=Array.isArray;function hr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function wr(e){var r,i,t,n,a,o,s,c,p;if(!dr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Je(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=hr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,gr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,gr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=He(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!gr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=gr(a)?String(t.arg):fr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=pr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Ye(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ur(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var vr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function br(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function yr(e){var r,i,t,n;for(i=[],n=0,t=vr.exec(e);t;)(r=e.slice(n,vr.lastIndex-t[0].length)).length&&i.push(r),i.push(br(t)),n=vr.lastIndex,t=vr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function mr(e){return"string"==typeof e}function Er(e){var r,i,t;if(!mr(e))throw new TypeError(Er("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=yr(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return wr.apply(null,i)}function xr(e){return null!==e&&"object"==typeof e}var kr=function(e){if("function"!=typeof e)throw new TypeError(Er("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!Me(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(xr);function Sr(e){var r,i,t,n;if(("Object"===(i=J(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=Xe.exec(t.toString()))return r[1]}return xr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}G(xr,"isObjectLikeArray",kr);var Ir="function"==typeof U||"object"==typeof Pe||"function"==typeof We?function(e){return Sr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Sr(e).toLowerCase():r};function Vr(e){return"function"===Ir(e)}function Fr(e){return"number"==typeof e}var $r=Number,Ar=$r.prototype.toString,Tr=B();function jr(e){return"object"==typeof e&&(e instanceof $r||(Tr?function(e){try{return Ar.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function Cr(e){return Fr(e)||jr(e)}G(Cr,"isPrimitive",Fr),G(Cr,"isObject",jr);var Rr=Number.POSITIVE_INFINITY,_r=$r.NEGATIVE_INFINITY,Nr=Math.floor;function Zr(e){return e<Rr&&e>_r&&Nr(r=e)===r;var r}function Or(e){return Fr(e)&&Zr(e)}function Lr(e){return jr(e)&&Zr(e.valueOf())}function Wr(e){return Or(e)||Lr(e)}function Pr(e){return Or(e)&&e>0}function Gr(e){return Lr(e)&&e.valueOf()>0}function Ur(e){return Pr(e)||Gr(e)}G(Wr,"isPrimitive",Or),G(Wr,"isObject",Lr),G(Ur,"isPrimitive",Pr),G(Ur,"isObject",Gr);var Xr,Mr,Br=Object.prototype.hasOwnProperty,zr="function"==typeof D&&"symbol"==typeof D("foo")&&(Mr="iterator",null!=(Xr=D)&&Br.call(Xr,Mr))&&"symbol"==typeof D.iterator?Symbol.iterator:null;function Yr(e){return e!=e}var qr,Dr="function"==typeof Float64Array,Hr="function"==typeof Float64Array?Float64Array:null,Jr="function"==typeof Float64Array?Float64Array:void 0;qr=function(){var e,r;if("function"!=typeof Hr)return!1;try{e=function(e){return Dr&&e instanceof Float64Array||"[object Float64Array]"===J(e)}(r=new Hr([1,3.14,-3.14,NaN]))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?Jr:function(){throw new Error("not implemented")};var Kr=qr;function Qr(e){return"number"==typeof e}function ei(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ri(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ei(n):ei(n)+e,t&&(e="-"+e)),e}var ii=String.prototype.toLowerCase,ti=String.prototype.toUpperCase;function ni(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Qr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ri(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ri(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===ti.call(e.specifier)?ti.call(i):ii.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ai(e){return"string"==typeof e}var oi=Math.abs,si=String.prototype.toLowerCase,ci=String.prototype.toUpperCase,pi=String.prototype.replace,li=/e\+(\d)$/,ui=/e-(\d)$/,fi=/^(\d+)$/,gi=/^(\d+)e/,di=/\.0$/,hi=/\.0*e/,wi=/(\..*[^0])0*e/;function vi(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Qr(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":oi(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=pi.call(i,wi,"$1e"),i=pi.call(i,hi,"e"),i=pi.call(i,di,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=pi.call(i,li,"e+0$1"),i=pi.call(i,ui,"e-0$1"),e.alternate&&(i=pi.call(i,fi,"$1."),i=pi.call(i,gi,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ci.call(e.specifier)?ci.call(i):si.call(i)}function bi(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function yi(e,r,i){var t=r-e.length;return t<0?e:e=i?e+bi(t):bi(t)+e}var mi=String.fromCharCode,Ei=isNaN,xi=Array.isArray;function ki(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Si(e){var r,i,t,n,a,o,s,c,p;if(!xi(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(ai(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=ki(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Ei(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Ei(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ni(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Ei(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ei(a)?String(t.arg):mi(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=vi(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ri(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=yi(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ii=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Vi(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Fi(e){var r,i,t,n;for(i=[],n=0,t=Ii.exec(e);t;)(r=e.slice(n,Ii.lastIndex-t[0].length)).length&&i.push(r),i.push(Vi(t)),n=Ii.lastIndex,t=Ii.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function $i(e){return"string"==typeof e}function Ai(e){var r,i,t;if(!$i(e))throw new TypeError(Ai("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Fi(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Si.apply(null,i)}function Ti(e){var r,i,t,n,a;if(!Pr(e))throw new TypeError(Ai("invalid argument. Must provide a positive integer. Value: `%s`.",e));return i=new Kr(e),t=0,a=-1,n=0,function(o){var s;if(0===arguments.length)return 0===n?null:t;if(a=(a+1)%e,Yr(o))n=e,t=NaN;else if(n<e)t+=(r=o-t)/(n+=1);else if(Yr(i[a])){for(n=1,t=o,s=0;s<e;s++)if(s!==a){if(Yr(i[s])){n=e,t=NaN;break}n+=1,r=i[s]-t,t+=r/n}}else!1===Yr(t)&&(r=o-i[a],t+=r/e);return i[a]=o,t}}function ji(e){return"number"==typeof e}function Ci(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Ri(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Ci(n):Ci(n)+e,t&&(e="-"+e)),e}var _i=String.prototype.toLowerCase,Ni=String.prototype.toUpperCase;function Zi(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ji(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Ri(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Ri(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Ni.call(e.specifier)?Ni.call(i):_i.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Oi(e){return"string"==typeof e}var Li=Math.abs,Wi=String.prototype.toLowerCase,Pi=String.prototype.toUpperCase,Gi=String.prototype.replace,Ui=/e\+(\d)$/,Xi=/e-(\d)$/,Mi=/^(\d+)$/,Bi=/^(\d+)e/,zi=/\.0$/,Yi=/\.0*e/,qi=/(\..*[^0])0*e/;function Di(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ji(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Li(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Gi.call(i,qi,"$1e"),i=Gi.call(i,Yi,"e"),i=Gi.call(i,zi,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Gi.call(i,Ui,"e+0$1"),i=Gi.call(i,Xi,"e-0$1"),e.alternate&&(i=Gi.call(i,Mi,"$1."),i=Gi.call(i,Bi,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Pi.call(e.specifier)?Pi.call(i):Wi.call(i)}function Hi(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Ji(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Hi(t):Hi(t)+e}var Ki=String.fromCharCode,Qi=isNaN,et=Array.isArray;function rt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function it(e){var r,i,t,n,a,o,s,c,p;if(!et(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Oi(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=rt(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Qi(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Qi(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Zi(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Qi(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Qi(a)?String(t.arg):Ki(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Di(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Ri(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ji(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var tt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function nt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function at(e){var r,i,t,n;for(i=[],n=0,t=tt.exec(e);t;)(r=e.slice(n,tt.lastIndex-t[0].length)).length&&i.push(r),i.push(nt(t)),n=tt.lastIndex,t=tt.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function ot(e){return"string"==typeof e}function st(e){var r,i,t;if(!ot(e))throw new TypeError(st("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=at(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return it.apply(null,i)}function ct(e){var r;if(!Pr(e))throw new TypeError(st("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=Ti(e),function(e){return 0===arguments.length?r():r(e*e)}}function pt(){var e,r=arguments,i=r[0],t="https://stdlib.io/e/"+i+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return function e(r,i){var t,n,a;if(!function(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&Vr(e.next)}(r))throw new TypeError(pt("1L13v,IA",r));if(!Pr(i))throw new TypeError(pt("1L145,IB",i));return a=ct(i),G(t={},"next",(function(){var e;return n?{done:!0}:(e=r.next()).done?(n=!0,{done:!0}):{value:e="number"==typeof e.value?a(e.value):a(NaN),done:!1}})),G(t,"return",(function(e){return n=!0,arguments.length?{value:e,done:!0}:{done:!0}})),zr&&Vr(r[zr])&&G(t,zr,(function(){return e(r[zr](),i)})),t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).itermmeanabs2=r();
//# sourceMappingURL=browser.js.map
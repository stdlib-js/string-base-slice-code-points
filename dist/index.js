"use strict";var _=function(u,i){return function(){return i||u((i={exports:{}}).exports,i),i.exports}};var R=_(function(P,s){
var l=require('@stdlib/string-num-code-points/dist'),n=require('@stdlib/math-base-special-fast-max/dist'),h=/[\uDC00-\uDFFF]/,x=/[\uD800-\uDBFF]/;function C(u,i,r){var o,f,a,c,t,v,F,e;if(a=u.length,a===0||(o=l(u),i<0&&(i=n(o+i,0)),r<0?r=n(o+r,0):r>o&&(r=o),i>=o||r<=i))return"";for(f="",v=0,e=0;e<a&&v<r;e++)c=u[e],F=c,e<a-1&&x.test(c)&&(t=u[e+1],h.test(t)&&(F+=t,e+=1)),v>=i&&v<r&&(f+=F),v+=1;return f}s.exports=C
});var D=R();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

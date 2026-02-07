// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-num-code-points@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-max@v0.3.1-esm/index.mjs";var e=/[\uDC00-\uDFFF]/,r=/[\uD800-\uDBFF]/;function n(n,i,m){var d,u,a,o,f,l,p,h;if(0===(a=n.length))return"";if(d=t(n),i<0&&(i=s(d+i,0)),m<0?m=s(d+m,0):m>d&&(m=d),i>=d||m<=i)return"";for(u="",l=0,h=0;h<a&&l<m;h++)p=o=n[h],h<a-1&&r.test(o)&&(f=n[h+1],e.test(f)&&(p+=f,h+=1)),l>=i&&l<m&&(u+=p),l+=1;return u}export{n as default};
//# sourceMappingURL=index.mjs.map

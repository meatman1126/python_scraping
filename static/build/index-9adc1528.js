function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let u;function i(t,n){return u||(u=document.createElement("a")),u.href=n,t===u.href}function a(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function f(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function d(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function h(t,n,e,o,r,c){if(r){const s=l(n,e,o,c);t.p(s,r)}}function $(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function p(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function g(t,n){const e={};n=new Set(n);for(const o in t)n.has(o)||"$"===o[0]||(e[o]=t[o]);return e}function m(t){return null==t?"":t}function y(t,n,e){return t.set(e),n}function b(t,n){t.appendChild(n)}function _(t,n,e){t.insertBefore(n,e||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function k(){return E(" ")}function w(){return E("")}function O(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function j(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function A(t){return function(n){n.target===this&&t.call(this,n)}}function N(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}const L=["width","height"];function P(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:"__value"===o?t.value=t[o]=n[o]:e[o]&&e[o].set&&-1===L.indexOf(o)?t[o]=n[o]:N(t,o,n[o])}function S(t,n){n=""+n,t.data!==n&&(t.data=n)}function C(t,n){t.value=null==n?"":n}function M(t,n,e){t.classList[e?"add":"remove"](n)}let q;function B(t){q=t}function D(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const T=[],z=[];let F=[];const G=[],H=Promise.resolve();let I=!1;function J(t){F.push(t)}function K(t){G.push(t)}const Q=new Set;let R=0;function U(){if(0!==R)return;const t=q;do{try{for(;R<T.length;){const t=T[R];R++,B(t),V(t.$$)}}catch(t){throw T.length=0,R=0,t}for(B(null),T.length=0,R=0;z.length;)z.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];Q.has(n)||(Q.add(n),n())}F.length=0}while(T.length);for(;G.length;)G.pop()();I=!1,Q.clear(),B(t)}function V(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(J)}}const W=new Set;let X;function Y(){X={r:0,c:[],p:X}}function Z(){X.r||r(X.c),X=X.p}function tt(t,n){t&&t.i&&(W.delete(t),t.i(n))}function nt(t,n,e,o){if(t&&t.o){if(W.has(t))return;W.add(t),X.c.push((()=>{W.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}function et(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],u=n[c];if(u){for(const t in s)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[c]=u}else for(const t in s)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function ot(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function rt(t){t&&t.c()}function ct(t,n,o,s){const{fragment:u,after_update:i}=t.$$;u&&u.m(n,o),s||J((()=>{const n=t.$$.on_mount.map(e).filter(c);t.$$.on_destroy?t.$$.on_destroy.push(...n):r(n),t.$$.on_mount=[]})),i.forEach(J)}function st(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];F.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),F=n}(e.after_update),r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){-1===t.$$.dirty[0]&&(T.push(t),I||(I=!0,H.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function it(n,e,c,s,u,i,a,f=[-1]){const l=q;B(n);const d=n.$$={fragment:null,ctx:[],props:i,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:e.target||l.$$.root};a&&a(d.root);let h=!1;if(d.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&u(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&ut(n,t)),e})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(x)}else d.fragment&&d.fragment.c();e.intro&&tt(n.$$.fragment),ct(n,e.target,e.anchor,e.customElement),U()}B(l)}class at{$destroy(){st(this,1),this.$destroy=t}$on(n,e){if(!c(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{st as A,a as B,E as C,S as D,w as E,Y as F,Z as G,g as H,n as I,p as J,P as K,et as L,m as M,y as N,i as O,M as P,at as S,k as a,N as b,f as c,_ as d,v as e,b as f,j as g,A as h,it as i,$ as j,d as k,O as l,nt as m,x as n,D as o,z as p,C as q,r,s,tt as t,h as u,t as v,ot as w,rt as x,ct as y,K as z};
//# sourceMappingURL=index-9adc1528.js.map
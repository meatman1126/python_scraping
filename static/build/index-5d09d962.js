function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function s(t,n,e,o){if(t){const r=i(t,n,e,o);return t[0](r)}}function i(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function a(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function f(t,n,e,o,r,c){if(r){const u=i(n,e,o,c);t.p(u,r)}}function l(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function d(t,n){t.appendChild(n)}function h(t,n,e){t.insertBefore(n,e||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function m(){return g(" ")}function b(){return g("")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function x(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function _(t){return function(n){n.target===this&&t.call(this,n)}}function E(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function v(t,n){n=""+n,t.data!==n&&(t.data=n)}function k(t,n){t.value=null==n?"":n}let w;function j(t){w=t}function A(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const N=[],O=[];let C=[];const S=[],q=Promise.resolve();let B=!1;function L(t){C.push(t)}function M(t){S.push(t)}const P=new Set;let z=0;function D(){if(0!==z)return;const t=w;do{try{for(;z<N.length;){const t=N[z];z++,j(t),F(t.$$)}}catch(t){throw N.length=0,z=0,t}for(j(null),N.length=0,z=0;O.length;)O.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];P.has(n)||(P.add(n),n())}C.length=0}while(N.length);for(;S.length;)S.pop()();B=!1,P.clear(),j(t)}function F(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}const G=new Set;let T;function H(){T={r:0,c:[],p:T}}function I(){T.r||o(T.c),T=T.p}function J(t,n){t&&t.i&&(G.delete(t),t.i(n))}function K(t,n,e,o){if(t&&t.o){if(G.has(t))return;G.add(t),T.c.push((()=>{G.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}function Q(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function R(t){t&&t.c()}function U(t,e,c,u){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,c),u||L((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(L)}function V(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];C.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),C=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function W(t,n){-1===t.$$.dirty[0]&&(N.push(t),B||(B=!0,q.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function X(n,r,c,u,s,i,a,f=[-1]){const l=w;j(n);const d=n.$$={fragment:null,ctx:[],props:i,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(l?l.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||l.$$.root};a&&a(d.root);let h=!1;if(d.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&W(n,t)),e})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!u&&u(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach($)}else d.fragment&&d.fragment.c();r.intro&&J(n.$$.fragment),U(n,r.target,r.anchor,r.customElement),D()}j(l)}class Y{$destroy(){V(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{V as A,u as B,Q as C,M as D,H as E,g as F,v as G,Y as S,m as a,E as b,s as c,h as d,p as e,d as f,x as g,_ as h,X as i,l as j,a as k,y as l,K as m,$ as n,A as o,O as p,t as q,o as r,c as s,J as t,f as u,k as v,R as w,b as x,U as y,I as z};
//# sourceMappingURL=index-5d09d962.js.map

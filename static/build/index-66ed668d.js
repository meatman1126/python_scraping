function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let u,s;function i(t,n){return u||(u=document.createElement("a")),u.href=n,t===u.href}function a(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function f(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function d(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function h(t,n,e,o,r,c){if(r){const u=l(n,e,o,c);t.p(u,r)}}function $(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function p(t){return null==t?"":t}function g(t,n,e){return t.set(e),n}function m(t,n){t.appendChild(n)}function b(t,n,e){t.insertBefore(n,e||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function _(){return t=" ",document.createTextNode(t);var t}function v(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function E(t){return function(n){return n.preventDefault(),t.call(this,n)}}function k(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function w(t){return function(n){n.target===this&&t.call(this,n)}}function j(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function A(t,n){t.value=null==n?"":n}function N(t,n,e){t.classList[e?"add":"remove"](n)}function O(t){s=t}function C(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const L=[],S=[];let q=[];const B=[],D=Promise.resolve();let M=!1;function P(t){q.push(t)}function z(t){B.push(t)}const F=new Set;let G=0;function T(){if(0!==G)return;const t=s;do{try{for(;G<L.length;){const t=L[G];G++,O(t),H(t.$$)}}catch(t){throw L.length=0,G=0,t}for(O(null),L.length=0,G=0;S.length;)S.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];F.has(n)||(F.add(n),n())}q.length=0}while(L.length);for(;B.length;)B.pop()();M=!1,F.clear(),O(t)}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(P)}}const I=new Set;function J(t,n){t&&t.i&&(I.delete(t),t.i(n))}function K(t,n,e,o){if(t&&t.o){if(I.has(t))return;I.add(t),undefined.c.push((()=>{I.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}function Q(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function R(t){t&&t.c()}function U(t,e,c,u){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,c),u||P((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(P)}function V(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];q.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),q=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function W(t,n){-1===t.$$.dirty[0]&&(L.push(t),M||(M=!0,D.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function X(n,r,c,u,i,a,f,l=[-1]){const d=s;O(n);const h=n.$$={fragment:null,ctx:[],props:a,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:e(),dirty:l,skip_bound:!1,root:r.target||d.$$.root};f&&f(h.root);let $=!1;if(h.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&i(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),$&&W(n,t)),e})):[],h.update(),$=!0,o(h.before_update),h.fragment=!!u&&u(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(y)}else h.fragment&&h.fragment.c();r.intro&&J(n.$$.fragment),U(n,r.target,r.anchor,r.customElement),T()}O(d)}class Y{$destroy(){V(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{V as A,a as B,E as C,p as D,g as E,i as F,N as G,Y as S,_ as a,j as b,f as c,b as d,x as e,m as f,k as g,w as h,X as i,$ as j,d as k,v as l,K as m,y as n,C as o,S as p,A as q,o as r,c as s,J as t,h as u,t as v,Q as w,R as x,U as y,z};
//# sourceMappingURL=index-66ed668d.js.map

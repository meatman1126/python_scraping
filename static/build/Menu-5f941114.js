import{S as e,i as t,s as n,E as s,c as l,t as o,g as a,f as c,h as i,j as r,k as d,l as $,m as u,o as p,e as f,x as m,X as g,y as h,z as y,H as x,Y as b,Z as v,_ as k,$ as w,v as O,p as L,u as A,q as N,r as C,a as j,b as z,d as E,C as M,D as T,n as q,a0 as D,a7 as H,L as P,M as S,N as W,af as X,a1 as Y,W as Z,ab as _,a5 as B,a6 as F,ag as G,w as I,ah as J,T as K}from"./Portal-83fead5b.js";function Q(e){let t,n,s,o,a,c,i=[{role:"presentation"},e[3],{class:e[2]}],d={};for(let e=0;e<i.length;e+=1)d=$(d,i[e]);return{c(){t=f("div"),m(t,d),g(t,"fade",e[1])},m(n,s){l(n,t,s),o=!0,a||(c=h(t,"click",e[5]),a=!0)},p(e,n){m(t,d=y(i,[{role:"presentation"},8&n&&e[3],(!o||4&n)&&{class:e[2]}])),g(t,"fade",e[1])},i(e){o||(x((()=>{o&&(s&&s.end(1),n=b(t,v,{}),n.start())})),o=!0)},o(e){n&&n.invalidate(),s=k(t,w,{}),o=!1},d(e){e&&r(t),e&&s&&s.end(),a=!1,c()}}}function R(e){let t,n,d=e[0]&&Q(e);return{c(){d&&d.c(),t=s()},m(e,s){d&&d.m(e,s),l(e,t,s),n=!0},p(e,[n]){e[0]?d?(d.p(e,n),1&n&&o(d,1)):(d=Q(e),d.c(),o(d,1),d.m(t.parentNode,t)):d&&(a(),c(d,1,1,(()=>{d=null})),i())},i(e){n||(o(d),n=!0)},o(e){c(d),n=!1},d(e){d&&d.d(e),e&&r(t)}}}function U(e,t,n){let s;const l=["class","isOpen","fade"];let o=d(t,l),{class:a=""}=t,{isOpen:c=!1}=t,{fade:i=!0}=t;return e.$$set=e=>{t=$($({},t),u(e)),n(3,o=d(t,l)),"class"in e&&n(4,a=e.class),"isOpen"in e&&n(0,c=e.isOpen),"fade"in e&&n(1,i=e.fade)},e.$$.update=()=>{16&e.$$.dirty&&n(2,s=p(a,"offcanvas-backdrop"))},[c,i,s,o,a,function(t){O.call(this,e,t)}]}class V extends e{constructor(e){super(),t(this,e,U,R,n,{class:4,isOpen:0,fade:1})}}function ee(e){let t,n;const s=e[4].default,a=L(s,e,e[3],null);let i=[e[1],{class:e[0]}],d={};for(let e=0;e<i.length;e+=1)d=$(d,i[e]);return{c(){t=f("div"),a&&a.c(),m(t,d)},m(e,s){l(e,t,s),a&&a.m(t,null),n=!0},p(e,[l]){a&&a.p&&(!n||8&l)&&A(a,s,e,e[3],n?C(s,e[3],l,null):N(e[3]),null),m(t,d=y(i,[2&l&&e[1],(!n||1&l)&&{class:e[0]}]))},i(e){n||(o(a,e),n=!0)},o(e){c(a,e),n=!1},d(e){e&&r(t),a&&a.d(e)}}}function te(e,t,n){let s;const l=["class"];let o=d(t,l),{$$slots:a={},$$scope:c}=t,{class:i=""}=t;return e.$$set=e=>{t=$($({},t),u(e)),n(1,o=d(t,l)),"class"in e&&n(2,i=e.class),"$$scope"in e&&n(3,c=e.$$scope)},e.$$.update=()=>{4&e.$$.dirty&&n(0,s=p(i,"offcanvas-body"))},[s,o,i,c,a]}class ne extends e{constructor(e){super(),t(this,e,te,ee,n,{class:2})}}const se=e=>({}),le=e=>({});function oe(e){let t;const n=e[7].default,s=L(n,e,e[6],null);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,l){s&&s.p&&(!t||64&l)&&A(s,n,e,e[6],t?C(n,e[6],l,null):N(e[6]),null)},i(e){t||(o(s,e),t=!0)},o(e){c(s,e),t=!1},d(e){s&&s.d(e)}}}function ae(e){let t;return{c(){t=M(e[0])},m(e,n){l(e,t,n)},p(e,n){1&n&&T(t,e[0])},i:q,o:q,d(e){e&&r(t)}}}function ce(e){let t,n,s;return{c(){t=f("button"),z(t,"aria-label",e[1]),z(t,"class","btn-close"),z(t,"type","button")},m(o,a){l(o,t,a),n||(s=h(t,"click",(function(){D(e[2])&&e[2].apply(this,arguments)})),n=!0)},p(n,s){e=n,2&s&&z(t,"aria-label",e[1])},d(e){e&&r(t),n=!1,s()}}}function ie(e){let t,n,d,u,p,g;const h=[ae,oe],x=[];function b(e,t){return e[0]?0:1}d=b(e),u=x[d]=h[d](e);const v=e[7].close,k=L(v,e,e[6],le),w=k||function(e){let t,n="function"==typeof e[2]&&ce(e);return{c(){n&&n.c(),t=s()},m(e,s){n&&n.m(e,s),l(e,t,s)},p(e,s){"function"==typeof e[2]?n?n.p(e,s):(n=ce(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){n&&n.d(e),e&&r(t)}}}(e);let O=[e[4],{class:e[3]}],M={};for(let e=0;e<O.length;e+=1)M=$(M,O[e]);return{c(){t=f("div"),n=f("h5"),u.c(),p=j(),w&&w.c(),z(n,"class","offcanvas-title"),m(t,M)},m(e,s){l(e,t,s),E(t,n),x[d].m(n,null),E(t,p),w&&w.m(t,null),g=!0},p(e,[s]){let l=d;d=b(e),d===l?x[d].p(e,s):(a(),c(x[l],1,1,(()=>{x[l]=null})),i(),u=x[d],u?u.p(e,s):(u=x[d]=h[d](e),u.c()),o(u,1),u.m(n,null)),k?k.p&&(!g||64&s)&&A(k,v,e,e[6],g?C(v,e[6],s,se):N(e[6]),le):w&&w.p&&(!g||6&s)&&w.p(e,g?s:-1),m(t,M=y(O,[16&s&&e[4],(!g||8&s)&&{class:e[3]}]))},i(e){g||(o(u),o(w,e),g=!0)},o(e){c(u),c(w,e),g=!1},d(e){e&&r(t),x[d].d(),w&&w.d(e)}}}function re(e,t,n){let s;const l=["class","children","closeAriaLabel","toggle"];let o=d(t,l),{$$slots:a={},$$scope:c}=t,{class:i=""}=t,{children:r}=t,{closeAriaLabel:f="Close"}=t,{toggle:m}=t;return e.$$set=e=>{t=$($({},t),u(e)),n(4,o=d(t,l)),"class"in e&&n(5,i=e.class),"children"in e&&n(0,r=e.children),"closeAriaLabel"in e&&n(1,f=e.closeAriaLabel),"toggle"in e&&n(2,m=e.toggle),"$$scope"in e&&n(6,c=e.$$scope)},e.$$.update=()=>{32&e.$$.dirty&&n(3,s=p(i,"offcanvas-header"))},[r,f,m,s,o,i,c,a]}class de extends e{constructor(e){super(),t(this,e,re,ie,n,{class:5,children:0,closeAriaLabel:1,toggle:2})}}const{document:$e}=G,ue=e=>({}),pe=e=>({});function fe(e){let t,n;return t=new de({props:{toggle:e[6],$$slots:{default:[ge]},$$scope:{ctx:e}}}),{c(){P(t.$$.fragment)},m(e,s){S(t,e,s),n=!0},p(e,n){const s={};64&n&&(s.toggle=e[6]),268435472&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(o(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){W(t,e)}}}function me(e){let t;return{c(){t=M(e[4])},m(e,n){l(e,t,n)},p(e,n){16&n&&T(t,e[4])},d(e){e&&r(t)}}}function ge(e){let t,n,s=e[4]&&me(e);const a=e[25].header,i=L(a,e,e[28],pe);return{c(){s&&s.c(),t=j(),i&&i.c()},m(e,o){s&&s.m(e,o),l(e,t,o),i&&i.m(e,o),n=!0},p(e,l){e[4]?s?s.p(e,l):(s=me(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),i&&i.p&&(!n||268435456&l)&&A(i,a,e,e[28],n?C(a,e[28],l,ue):N(e[28]),pe)},i(e){n||(o(i,e),n=!0)},o(e){c(i,e),n=!1},d(e){s&&s.d(e),e&&r(t),i&&i.d(e)}}}function he(e){let t;const n=e[25].default,s=L(n,e,e[28],null);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,l){s&&s.p&&(!t||268435456&l)&&A(s,n,e,e[28],t?C(n,e[28],l,null):N(e[28]),null)},i(e){t||(o(s,e),t=!0)},o(e){c(s,e),t=!1},d(e){s&&s.d(e)}}}function ye(e){let t,n;return t=new ne({props:{$$slots:{default:[xe]},$$scope:{ctx:e}}}),{c(){P(t.$$.fragment)},m(e,s){S(t,e,s),n=!0},p(e,n){const s={};268435456&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(o(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){W(t,e)}}}function xe(e){let t;const n=e[25].default,s=L(n,e,e[28],null);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,l){s&&s.p&&(!t||268435456&l)&&A(s,n,e,e[28],t?C(n,e[28],l,null):N(e[28]),null)},i(e){t||(o(s,e),t=!0)},o(e){c(s,e),t=!1},d(e){s&&s.d(e)}}}function be(e){let t,n;return t=new V({props:{fade:e[3],isOpen:e[0]}}),t.$on("click",(function(){D(e[6]?e[27]:void 0)&&(e[6]?e[27]:void 0).apply(this,arguments)})),{c(){P(t.$$.fragment)},m(e,s){S(t,e,s),n=!0},p(n,s){e=n;const l={};8&s&&(l.fade=e[3]),1&s&&(l.isOpen=e[0]),t.$set(l)},i(e){n||(o(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){W(t,e)}}}function ve(e){let t,n,d,u,p,g,h,x,b,v,k,w=(e[6]||e[4]||e[13].header)&&fe(e);const O=[ye,he],L=[];function A(e,t){return e[2]?0:1}d=A(e),u=L[d]=O[d](e);let N=[e[12],{"aria-hidden":p=!e[0]||void 0},{"aria-modal":g=!!e[0]||void 0},{class:e[10]},{role:h=e[0]||e[7]?"dialog":void 0},{style:x=`visibility: ${e[0]||e[7]?"visible":"hidden"};${e[5]}`},{tabindex:"-1"}],C={};for(let e=0;e<N.length;e+=1)C=$(C,N[e]);let z=e[1]&&be(e);return{c(){t=f("div"),w&&w.c(),n=j(),u.c(),b=j(),z&&z.c(),v=s(),m(t,C)},m(s,o){l(s,t,o),w&&w.m(t,null),E(t,n),L[d].m(t,null),e[26](t),l(s,b,o),z&&z.m(s,o),l(s,v,o),k=!0},p(e,s){e[6]||e[4]||e[13].header?w?(w.p(e,s),8272&s&&o(w,1)):(w=fe(e),w.c(),o(w,1),w.m(t,n)):w&&(a(),c(w,1,1,(()=>{w=null})),i());let l=d;d=A(e),d===l?L[d].p(e,s):(a(),c(L[l],1,1,(()=>{L[l]=null})),i(),u=L[d],u?u.p(e,s):(u=L[d]=O[d](e),u.c()),o(u,1),u.m(t,null)),m(t,C=y(N,[4096&s&&e[12],(!k||1&s&&p!==(p=!e[0]||void 0))&&{"aria-hidden":p},(!k||1&s&&g!==(g=!!e[0]||void 0))&&{"aria-modal":g},(!k||1024&s)&&{class:e[10]},(!k||129&s&&h!==(h=e[0]||e[7]?"dialog":void 0))&&{role:h},(!k||161&s&&x!==(x=`visibility: ${e[0]||e[7]?"visible":"hidden"};${e[5]}`))&&{style:x},{tabindex:"-1"}])),e[1]?z?(z.p(e,s),2&s&&o(z,1)):(z=be(e),z.c(),o(z,1),z.m(v.parentNode,v)):z&&(a(),c(z,1,1,(()=>{z=null})),i())},i(e){k||(o(w),o(u),o(z),k=!0)},o(e){c(w),c(u),c(z),k=!1},d(n){n&&r(t),w&&w.d(),L[d].d(),e[26](null),n&&r(b),z&&z.d(n),n&&r(v)}}}function ke(e){let t,n,d,$,u,p;var f=e[9];function m(e){return{props:{$$slots:{default:[ve]},$$scope:{ctx:e}}}}return f&&(n=H(f,m(e))),{c(){t=j(),n&&P(n.$$.fragment),d=s()},m(s,o){l(s,t,o),n&&S(n,s,o),l(s,d,o),$=!0,u||(p=h($e.body,"mousedown",(function(){D(e[11])&&e[11].apply(this,arguments)})),u=!0)},p(t,[s]){e=t;const l={};if(268449279&s&&(l.$$scope={dirty:s,ctx:e}),512&s&&f!==(f=e[9])){if(n){a();const e=n;c(e.$$.fragment,1,0,(()=>{W(e,1)})),i()}f?(n=H(f,m(e)),P(n.$$.fragment),o(n.$$.fragment,1),S(n,d.parentNode,d)):n=null}else f&&n.$set(l)},i(e){$||(n&&o(n.$$.fragment,e),$=!0)},o(e){n&&c(n.$$.fragment,e),$=!1},d(e){e&&r(t),e&&r(d),n&&W(n,e),u=!1,p()}}}function we(e,t,n){let s,l,o;const a=["class","backdrop","body","container","fade","header","isOpen","placement","scroll","sm","md","lg","xl","xxl","style","toggle"];let c=d(t,a),{$$slots:i={},$$scope:r}=t;const f=X(i),m=Y();let g,h,y,{class:x=""}=t,{backdrop:b=!0}=t,{body:v=!0}=t,{container:k="body"}=t,{fade:w=!0}=t,{header:O}=t,{isOpen:L=!1}=t,{placement:A="start"}=t,{scroll:N=!1}=t,{sm:C=!1}=t,{md:j=!1}=t,{lg:z=!1}=t,{xl:E=!1}=t,{xxl:M=!1}=t,{style:T=""}=t,{toggle:q}=t,D=!1;Z((()=>n(23,g=document.body)));return e.$$set=e=>{t=$($({},t),u(e)),n(12,c=d(t,a)),"class"in e&&n(14,x=e.class),"backdrop"in e&&n(1,b=e.backdrop),"body"in e&&n(2,v=e.body),"container"in e&&n(15,k=e.container),"fade"in e&&n(3,w=e.fade),"header"in e&&n(4,O=e.header),"isOpen"in e&&n(0,L=e.isOpen),"placement"in e&&n(16,A=e.placement),"scroll"in e&&n(17,N=e.scroll),"sm"in e&&n(18,C=e.sm),"md"in e&&n(19,j=e.md),"lg"in e&&n(20,z=e.lg),"xl"in e&&n(21,E=e.xl),"xxl"in e&&n(22,M=e.xxl),"style"in e&&n(5,T=e.style),"toggle"in e&&n(6,q=e.toggle),"$$scope"in e&&n(28,r=e.$$scope)},e.$$.update=()=>{257&e.$$.dirty&&h&&(n(0,L),n(8,h),n(7,D=!0),m(L?"opening":"closing"),setTimeout((()=>{n(7,D=!1),m(L?"open":"close")}),J(h))),8519809&e.$$.dirty&&g&&(N||g.classList.toggle("overflow-noscroll",L||D)),65&e.$$.dirty&&L&&q&&"undefined"!=typeof window&&n(24,y=_(document,"keydown",(e=>{e.key&&"Escape"===e.key&&q()}))),16777217&e.$$.dirty&&!L&&y&&y(),8388675&e.$$.dirty&&n(11,s=b&&q&&g&&L?e=>{e.target===g&&q()}:void 0),8208385&e.$$.dirty&&n(10,l=p({offcanvas:!(C||j||z||E||M),"offcanvas-sm":C,"offcanvas-md":j,"offcanvas-lg":z,"offcanvas-xl":E,"offcanvas-xxl":M,show:L},`offcanvas-${A}`,x)),32768&e.$$.dirty&&n(9,o="inline"===k?B:F)},[L,b,v,w,O,T,q,D,h,o,l,s,c,f,x,k,A,N,C,j,z,E,M,g,y,i,function(e){I[e?"unshift":"push"]((()=>{h=e,n(8,h)}))},()=>q(),r]}class Oe extends e{constructor(e){super(),t(this,e,we,ke,n,{class:14,backdrop:1,body:2,container:15,fade:3,header:4,isOpen:0,placement:16,scroll:17,sm:18,md:19,lg:20,xl:21,xxl:22,style:5,toggle:6})}}function Le(e){let t;return{c(){t=M("☰")},m(e,n){l(e,t,n)},d(e){e&&r(t)}}}function Ae(e){let t,n,s,o,a,c=e[1]("Admin")&&function(e){let t;return{c(){t=f("a"),t.textContent="ユーザ新規登録",z(t,"href","/register"),z(t,"class","list-group-item list-group-item-action")},m(e,n){l(e,t,n)},d(e){e&&r(t)}}}();return{c(){t=f("div"),n=f("a"),n.textContent="ポートフォリオ一覧",s=j(),c&&c.c(),o=j(),a=f("a"),a.textContent="ログアウト",z(n,"href","/index"),z(n,"class","list-group-item list-group-item-action"),z(a,"href","/logout"),z(a,"class","list-group-item list-group-item-action"),z(t,"class","list-group")},m(e,i){l(e,t,i),E(t,n),E(t,s),c&&c.m(t,null),E(t,o),E(t,a)},p:q,d(e){e&&r(t),c&&c.d()}}}function Ne(e){let t,n,s,a;return t=new K({props:{color:"light",size:"lg",$$slots:{default:[Le]},$$scope:{ctx:e}}}),t.$on("click",e[2]),s=new Oe({props:{theme:"light",isOpen:e[0],toggle:e[2],header:"Link",placement:"start",$$slots:{default:[Ae]},$$scope:{ctx:e}}}),{c(){P(t.$$.fragment),n=j(),P(s.$$.fragment)},m(e,o){S(t,e,o),l(e,n,o),S(s,e,o),a=!0},p(e,[n]){const l={};16&n&&(l.$$scope={dirty:n,ctx:e}),t.$set(l);const o={};1&n&&(o.isOpen=e[0]),16&n&&(o.$$scope={dirty:n,ctx:e}),s.$set(o)},i(e){a||(o(t.$$.fragment,e),o(s.$$.fragment,e),a=!0)},o(e){c(t.$$.fragment,e),c(s.$$.fragment,e),a=!1},d(e){W(t,e),e&&r(n),W(s,e)}}}function Ce(e,t,n){let s=!1,l=[];Z((async()=>{const e=await fetch("/api/get-user-roles");console.log(e),l=await e.json(),console.log(l),console.log(o("Admin"))}));const o=e=>l.includes(e);return[s,o,()=>n(0,s=!s)]}class je extends e{constructor(e){super(),t(this,e,Ce,Ne,n,{})}}export{je as M};
//# sourceMappingURL=Menu-5f941114.js.map
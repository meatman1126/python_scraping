import{S as e,i as s,s as a,e as n,a as r,b as t,a4 as i,c as o,d as c,w as u,J as l,j as m,y as f,T as h,a3 as d,a5 as v}from"./stores-e49da877.js";function b(e){let s,a,h,d,v,b,p,H,M,T,w,L,k,y,x;return{c(){s=n("div"),a=n("div"),a.innerHTML="<h1>☰</h1>",h=r(),d=n("div"),v=n("ul"),b=n("li"),b.innerHTML='<a href="/home">Home</a>',p=r(),H=n("li"),H.innerHTML='<a href="/about">About</a>',M=r(),T=n("li"),T.innerHTML='<a href="/services">Services</a>',w=r(),L=n("li"),L.innerHTML='<a href="/contact">Contact</a>',t(a,"class","hamburger svelte-3rw0e8"),t(a,"role","button"),t(a,"tabindex","0"),t(v,"class",k=i(e[0]?"menu open":"menu")+" svelte-3rw0e8")},m(n,r){o(n,s,r),c(s,a),c(s,h),c(s,d),c(d,v),c(v,b),c(v,p),c(v,H),c(v,M),c(v,T),c(v,w),c(v,L),y||(x=[u(a,"click",e[1]),u(a,"keydown",e[2])],y=!0)},p(e,[s]){1&s&&k!==(k=i(e[0]?"menu open":"menu")+" svelte-3rw0e8")&&t(v,"class",k)},i:l,o:l,d(e){e&&m(s),y=!1,f(x)}}}function p(e,s,a){let n;function r(){v(d,n=!n,n)}return h(e,d,(e=>a(0,n=e))),[n,r,function(e){"Enter"!==e.key&&" "!==e.key||r()}]}class H extends e{constructor(e){super(),s(this,e,p,b,a,{})}}export{H as M};
//# sourceMappingURL=Menu-d661dda7.js.map

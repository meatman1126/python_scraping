import{S as e,i as s,s as a,e as n,a as r,b as t,a6 as i,d as o,f as c,l,L as u,n as f,r as m,V as h,a5 as d,a7 as v}from"./stores-e825827e.js";function b(e){let s,a,h,d,v,b,p,H,L,M,T,k,w,x,y;return{c(){s=n("div"),a=n("div"),a.innerHTML="<h1>☰</h1>",h=r(),d=n("div"),v=n("ul"),b=n("li"),b.innerHTML='<a href="/home">Home</a>',p=r(),H=n("li"),H.innerHTML='<a href="/about">About</a>',L=r(),M=n("li"),M.innerHTML='<a href="/services">Services</a>',T=r(),k=n("li"),k.innerHTML='<a href="/contact">Contact</a>',t(a,"class","hamburger svelte-3rw0e8"),t(a,"role","button"),t(a,"tabindex","0"),t(v,"class",w=i(e[0]?"menu open":"menu")+" svelte-3rw0e8")},m(n,r){o(n,s,r),c(s,a),c(s,h),c(s,d),c(d,v),c(v,b),c(v,p),c(v,H),c(v,L),c(v,M),c(v,T),c(v,k),x||(y=[l(a,"click",e[1]),l(a,"keydown",e[2])],x=!0)},p(e,[s]){1&s&&w!==(w=i(e[0]?"menu open":"menu")+" svelte-3rw0e8")&&t(v,"class",w)},i:u,o:u,d(e){e&&f(s),x=!1,m(y)}}}function p(e,s,a){let n;function r(){v(d,n=!n,n)}return h(e,d,(e=>a(0,n=e))),[n,r,function(e){"Enter"!==e.key&&" "!==e.key||r()}]}class H extends e{constructor(e){super(),s(this,e,p,b,a,{})}}export{H as M};
//# sourceMappingURL=Menu-75987523.js.map
import{s as T,u as D,f as d,g as _,h,d as u,j as f,x as g,i as E,y as C,A as I,B as V,C as S}from"./scheduler.380c08c3.js";import{S as b,i as j,a as p,t as q}from"./index.baeac5c0.js";function w(r){let s,n,l,o,a;const c=r[3].default,e=D(c,r,r[2],null);return{c(){s=d("div"),n=d("div"),l=d("div"),e&&e.c(),this.h()},l(t){s=_(t,"DIV",{class:!0});var i=h(s);n=_(i,"DIV",{class:!0});var m=h(n);l=_(m,"DIV",{class:!0});var v=h(l);e&&e.l(v),v.forEach(u),m.forEach(u),i.forEach(u),this.h()},h(){f(l,"class",o=(r[1]?"content ":"")+"text"),f(n,"class","column is-narrow"),f(s,"class","columns"),g(s,"is-centered",r[0])},m(t,i){E(t,s,i),C(s,n),C(n,l),e&&e.m(l,null),a=!0},p(t,[i]){e&&e.p&&(!a||i&4)&&I(e,c,t,t[2],a?S(c,t[2],i,null):V(t[2]),null),(!a||i&2&&o!==(o=(t[1]?"content ":"")+"text"))&&f(l,"class",o),(!a||i&1)&&g(s,"is-centered",t[0])},i(t){a||(p(e,t),a=!0)},o(t){q(e,t),a=!1},d(t){t&&u(s),e&&e.d(t)}}}function y(r,s,n){let{$$slots:l={},$$scope:o}=s,{centered:a=!0}=s,{hasText:c=!0}=s;return r.$$set=e=>{"centered"in e&&n(0,a=e.centered),"hasText"in e&&n(1,c=e.hasText),"$$scope"in e&&n(2,o=e.$$scope)},[a,c,o,l]}class k extends b{constructor(s){super(),j(this,s,y,w,T,{centered:0,hasText:1})}}export{k as C};
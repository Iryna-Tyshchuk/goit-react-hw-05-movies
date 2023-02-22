"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[557],{378:function(n,e,r){r.d(e,{Df:function(){return s},WF:function(){return p},d0:function(){return f},tx:function(){return d},zv:function(){return l}});var t=r(861),a=r(757),c=r.n(a),i=r(912),u="https://api.themoviedb.org/3/",o="56d4ceaf5914372ad31f8531463bd1af",s=function(){var n=(0,t.Z)(c().mark((function n(){var e,r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={params:{api_key:o}},n.next=3,i.Z.get("".concat(u,"trending/movie/week"),e);case 3:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={params:{api_key:o,query:e}},n.next=3,i.Z.get("".concat(u,"search/movie"),r);case 3:return t=n.sent,a=t.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"movie/").concat(e,"?api_key=").concat(o));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"movie/").concat(e,"/credits?api_key=").concat(o));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"movie/").concat(e,"/reviews?api_key=").concat(o));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},864:function(n,e,r){r.d(e,{O:function(){return l}});var t,a=r(683),c=r(87),i=r(689),u=r(249),o=r(184),s=function(n){var e=n.id,r=n.title,t=n.poster_path,a=(0,i.TH)(),s=t?"https://image.tmdb.org/t/p/w300".concat(t):"https://via.placeholder.com/395x574?text=Sorry+No+Poster";return(0,o.jsx)("li",{children:(0,o.jsxs)(c.rU,{to:"/"+u._.MOVIES+"/"+e,state:{from:a},children:[(0,o.jsx)("img",{src:s,alt:r}),r]})})},p=r(168),f=r(444).ZP.ul(t||(t=(0,p.Z)(["\n  display: flex;\n  gap: 30px;\n  flex-wrap: wrap;\n\n  & li {\n    cursor: pointer;\n    width: 100%;\n    transition: all 250ms linear;\n    &:hover,\n    &:focus {\n      box-shadow: 0px 5px 15px 10px rgba(36, 34, 34, 0.1);\n      border-radius: 5px;\n    }\n    @media screen and (min-width: 768px) {\n      width: calc((100% - 30px) / 2);\n      gap: 32px;\n    }\n    @media screen and (min-width: 1280px) {\n      width: calc((100% - 60px) / 3);\n      column-gap: 16px;\n      row-gap: 32px;\n    }\n  }\n\n  & img {\n    border-radius: 5px;\n    /* \n    @media screen and (min-width: 768px) {\n      height: 455px;\n    } */\n\n    @media screen and (min-width: 1280px) {\n      height: 574px;\n    }\n  }\n"]))),l=function(n){var e=n.movies;return(0,o.jsx)(f,{children:e&&e.map((function(n){return(0,o.jsx)(s,(0,a.Z)({},n),n.id)}))})}},557:function(n,e,r){r.r(e),r.d(e,{default:function(){return g}});var t,a,c=r(861),i=r(439),u=r(757),o=r.n(u),s=r(791),p=r(87),f=r(993),l=r(168),d=r(444),x=d.ZP.div(t||(t=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),h=d.ZP.input(a||(a=(0,l.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),v=r(184),m=function(){var n=(0,p.lr)(),e=(0,i.Z)(n,2)[1];return(0,v.jsx)(x,{children:(0,v.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=n.target.query.value.toLowerCase().trim();r&&e({search:r})},children:[(0,v.jsx)(h,{type:"text",placeholder:"Enter name of movie...",name:"query"}),(0,v.jsx)("button",{type:"submit",children:"Search"})]})})},b=r(864),w=r(378),g=function(){var n=(0,s.useState)([]),e=(0,i.Z)(n,2),r=e[0],t=e[1],a=(0,s.useState)(!1),u=(0,i.Z)(a,2),l=u[0],d=u[1],x=(0,s.useState)(null),h=(0,i.Z)(x,2),g=h[0],y=h[1],j=(0,p.lr)(),Z=(0,i.Z)(j,1)[0].get("search");return(0,s.useEffect)((function(){if(Z){var n=function(){var n=(0,c.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),n.next=4,(0,w.WF)(Z);case 4:e=n.sent,t(e),y(null),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),y(n.t0.message);case 12:return n.prev=12,d(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}}),[Z]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h3",{children:"Search Movies"}),(0,v.jsx)(m,{}),!(null===r||void 0===r||!r.length)&&(0,v.jsx)(b.O,{movies:r}),null!==g&&(0,v.jsxs)("p",{children:["Oops, some error occured... Message: ",g]}),l&&(0,v.jsx)(f.a,{})]})}},683:function(n,e,r){function t(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function c(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){t(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}r.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=557.63db8509.chunk.js.map
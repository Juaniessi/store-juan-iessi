(this["webpackJsonpstore-juan-iessi"]=this["webpackJsonpstore-juan-iessi"]||[]).push([[0],{20:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(13),i=c.n(a),o=(c(20),c(3)),u=c.n(o),l=c(4),j=c(5),d=c(8),b=c(9),p=function(){function e(){Object(d.a)(this,e)}return Object(b.a)(e,null,[{key:"getUser",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0"},"https://coding-challenge-api.aerolab.co/user/me",e.prev=2,e.next=5,fetch("https://coding-challenge-api.aerolab.co/user/me",{headers:t});case 5:if(200===(c=e.sent).status){e.next=8;break}throw new Error("Ups, something went wrong!");case 8:return e.next=10,c.json();case 10:return c=e.sent,e.abrupt("return",c);case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",!1);case 17:case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"getHistory",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0"},"https://coding-challenge-api.aerolab.co/user/history",e.prev=2,e.next=5,fetch("https://coding-challenge-api.aerolab.co/user/history",{headers:t});case 5:if(200===(c=e.sent).status){e.next=8;break}throw new Error("Ups, something went wrong!");case 8:return e.next=10,c.json();case 10:return c=e.sent,e.abrupt("return",c);case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",!1);case 17:case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"postCoins",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var c,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0"},n={body:JSON.stringify({amount:t}),method:"post",mode:"cors",headers:c},"https://coding-challenge-api.aerolab.co/user/points",e.prev=3,e.next=6,fetch("https://coding-challenge-api.aerolab.co/user/points",n);case 6:if(200===(r=e.sent).status){e.next=9;break}throw new Error("Ups, something went wrong!");case 9:return e.next=11,r.json();case 11:return r=e.sent,e.abrupt("return",!0);case 15:return e.prev=15,e.t0=e.catch(3),e.abrupt("return",!1);case 18:case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),h=s.a.createContext();function m(e){var t=e.children,c=Object(r.useState)(null),s=Object(j.a)(c,2),a=s[0],i=s[1],o=Object(r.useState)([]),d=Object(j.a)(o,2),b=d[0],m=d[1],O=Object(r.useState)({name:"",points:"",redeemHistory:[]}),x=Object(j.a)(O,2),f=x[0],g=x[1],v=Object(r.useState)(!1),N=Object(j.a)(v,2),w=N[0],y=N[1],k=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getUser();case 2:t=e.sent,g(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return k()}),[]),Object(n.jsx)(h.Provider,{value:{user:f,products:b,setUser:g,setProducts:m,redeemState:a,setRedeemState:i,onHistory:w,setOnHistory:y},children:t})}var O=c.p+"static/media/aerolab-logo.0a8fb170.svg",x=c.p+"static/media/coin.b8bc711d.svg",f=c(7),g=c(6),v=[{callback:function(e,t){var c=e.createDate?"createDate":"_id";return e[c]<t[c]?-1:1},wording:"Most recent"},{callback:function(e,t){return e.cost-t.cost},wording:"Lowest price"},{callback:function(e,t){return t.cost-e.cost},wording:"Highest price"}],N={success:{className:"success",icon:g.d,message:"Coins added succesfully!"},error:{className:"error",icon:g.c,message:"We couldn\xb4t add the credit, please try again later"}};var w=function(e){var t=e.succeed,c=N[t?"success":"error"],r=c.className,s=c.icon,a=c.message;return Object(n.jsxs)("div",{className:"add-coins-notification ".concat(r),children:[Object(n.jsx)(f.a,{className:"status-icon",icon:s}),Object(n.jsx)("h4",{className:"message",children:a})]})};var y=function(){var e=Object(r.useContext)(h).setUser,t=Object(r.useState)({status:!1,succeed:!1}),c=Object(j.a)(t,2),s=c[0],a=c[1],i=function(){var t=Object(l.a)(u.a.mark((function t(c,n){var r,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.disabled=!0,t.next=3,p.postCoins(c);case 3:return r=t.sent,a({status:!0,succeed:r}),setTimeout((function(){return a({status:!1,succeed:!1})}),4e3),t.next=8,p.getUser();case 8:s=t.sent,e(s),n.disabled=!1;case 11:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"more-coins",children:[Object(n.jsxs)("button",{className:"add-coins",onClick:function(e){return i(1e3,e.target)},children:["+ 1000",Object(n.jsx)("img",{className:"img-coin",alt:"Coin",src:x})]}),Object(n.jsxs)("button",{className:"add-coins",onClick:function(e){return i(5e3,e.target)},children:["+ 5000",Object(n.jsx)("img",{className:"img-coin",alt:"Coin",src:x})]}),Object(n.jsxs)("button",{className:"add-coins",onClick:function(e){return i(7500,e.target)},children:["+ 7500",Object(n.jsx)("img",{className:"img-coin",alt:"Coin",src:x})]})]}),Object(n.jsx)("div",{className:"alert",children:s.status&&Object(n.jsx)(w,{succeed:s.succeed})})]})};var k=function(){var e=Object(r.useContext)(h),t=e.user,c=t.name,s=t.points,a=e.products,i=e.setProducts,o=e.setOnHistory,d=Object(r.useState)(!1),b=Object(j.a)(d,2),m=b[0],v=b[1],N=Object(r.useState)(null),w=Object(j.a)(N,2),k=w[0],C=w[1],I=Object(r.useState)([]),M=Object(j.a)(I,2),P=M[0],J=M[1],E=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getHistory();case 2:t=e.sent,a!==t&&J(a),i(k?t:P),o(k);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){null!=k&&E()}),[k]),Object(n.jsxs)("nav",{children:[Object(n.jsxs)("div",{className:"header-bar",children:[Object(n.jsx)("img",{src:O,alt:"Barrilete de aerolab"}),Object(n.jsxs)("div",{className:"user",children:[Object(n.jsx)("h3",{children:c}),Object(n.jsx)("button",{className:"header-button",onClick:function(){C(!k)},title:"see ".concat(c," history"),children:k?Object(n.jsx)(f.a,{icon:g.b}):Object(n.jsx)(f.a,{icon:g.a})}),Object(n.jsxs)("div",{className:"user-coin",title:"Add more coins",onClick:function(){v(!m)},children:[Object(n.jsx)("span",{className:"cant-coin",children:s}),Object(n.jsx)("img",{className:"icon-coin",src:x,alt:"Monedas"})]})]})]}),m&&Object(n.jsx)(y,{})]})},C=c.p+"static/media/header-x1.b6f067c6.png";var I=function(){var e=Object(r.useContext)(h).onHistory;return Object(n.jsxs)("div",{className:"header-img",children:[Object(n.jsx)("img",{className:"img-electronics",src:C,alt:"Electronics Header"}),Object(n.jsx)("h1",{children:e?"Redeem history":"Electronics"})]})};var M=function(){return Object(n.jsxs)("header",{children:[Object(n.jsx)(k,{}),Object(n.jsx)(I,{})]})},P=c.p+"static/media/arrow-right.3306c112.svg",J=c.p+"static/media/arrow-left.e6eb9be1.svg";var E=function(e){var t=e.products,c=e.setProducts,s=e.hidden,a=e.prevPage,i=e.nextPage,o=e.maxProdQuant,u=e.shownProducts,l=Object(r.useState)(0),d=Object(j.a)(l,2),b=d[0],p=d[1];return Object(n.jsxs)("div",{className:"filter",children:[Object(n.jsxs)("div",{className:"buttons-board",children:[Object(n.jsx)("span",{className:"prod-quant",children:"".concat(u," of ").concat(o," products")}),Object(n.jsxs)("div",{className:"sort ".concat(s?"hidden":""),children:[Object(n.jsx)("span",{className:"sort-by",children:"Sort by:"}),Object(n.jsxs)("p",{className:"sort-controls-ctn",children:[v.map((function(e,r){var s=e.callback,a=e.wording;return Object(n.jsx)("button",{className:"filter-btn ".concat(b===r?"active":""),onClick:function(){return function(e,n){var r=t.slice().sort(n);c(r),p(e)}(r,s)},children:a},r)}))," "]})]})]}),Object(n.jsxs)("div",{className:"move-btn",children:[Object(n.jsx)("button",{className:"arrow-btn",onClick:a,children:Object(n.jsx)("img",{src:J,alt:"Flecha izquierda"})}),Object(n.jsx)("button",{className:"arrow-btn",onClick:i,children:Object(n.jsx)("img",{src:P,alt:"Flecha derecha"})})]})]})},Y=c(14),Q=c.p+"static/media/buy-white.9b6e6567.svg",U=function(){function e(){Object(d.a)(this,e)}return Object(b.a)(e,null,[{key:"getProducts",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0"},"https://coding-challenge-api.aerolab.co/products",e.prev=2,e.next=5,fetch("https://coding-challenge-api.aerolab.co/products",{headers:t});case 5:if(200===(c=e.sent).status){e.next=8;break}throw new Error("Ups, something went wrong!");case 8:return e.next=10,c.json();case 10:return c=e.sent,e.abrupt("return",c);case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",!1);case 17:case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"postRedeem",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var c,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0"},n={body:JSON.stringify({productId:t}),method:"post",mode:"cors",headers:c},"https://coding-challenge-api.aerolab.co/redeem",e.prev=3,e.next=6,fetch("https://coding-challenge-api.aerolab.co/redeem",n);case 6:if(200===(r=e.sent).status){e.next=9;break}throw new Error("Ups, something went wrong!");case 9:return e.next=11,r.json();case 11:return r=e.sent,e.abrupt("return",r);case 15:return e.prev=15,e.t0=e.catch(3),e.abrupt("return",!1);case 18:case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}()}]),e}();var z=function(e){var t=Object(r.useContext)(h),c=t.setUser,s=t.setRedeemState,a=e.cost,i=e.id,o=null,j=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.target.disabled=!0,e.next=3,U.postRedeem(i);case 3:return o=e.sent,s(o),e.next=7,p.getUser();case 7:n=e.sent,c(n),t.target.disabled=!1;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"hover-card",children:[Object(n.jsx)("img",{className:"buy-bag",src:Q,alt:"comprar"}),Object(n.jsxs)("div",{className:"cost",children:[Object(n.jsx)("span",{className:"cant-coin",children:a}),Object(n.jsx)("img",{className:"coin",src:x,alt:"coin"})]}),Object(n.jsx)("button",{className:"redeem-btn",onClick:j,children:"Redeem now"})]})},A=c.p+"static/media/buy-blue.c5c4f01c.svg";var S=function(e){var t=e._id,c=e.category,s=e.cost,a=e.img,i=e.name,o=Object(r.useContext)(h),u=o.user.points,l=o.onHistory;return Object(n.jsxs)("div",{className:"product-card",children:[s<u&&!l&&Object(n.jsx)(z,{cost:s,id:t}),Object(n.jsxs)("div",{className:"images-ctn",children:[u>s||l?Object(n.jsx)("img",{src:A,alt:"buy-icon",className:"buy-icon"}):Object(n.jsxs)("div",{className:"buy-icon cant-buy",children:[Object(n.jsx)("h3",{className:"missing-coins",children:"You need ".concat(s-u)}),Object(n.jsx)("img",{src:x,alt:"coin",className:"coin"})]}),Object(n.jsx)("img",{src:a.url,alt:i,className:"prod-img"})]}),Object(n.jsxs)("div",{className:"text-box",children:[Object(n.jsx)("h4",{className:"prod-category",children:c}),Object(n.jsx)("h3",{className:"prod-name",children:i})]})]})};var B=function(){var e=Object(r.useContext)(h),t=e.redeemState,c=e.setRedeemState;return null!==t?Object(n.jsx)("div",{className:"full-container",children:Object(n.jsxs)("div",{className:"message-container ".concat(t?"success-background":"error-background"),children:[Object(n.jsx)(f.a,{icon:t?g.d:g.c,className:"icon-message"}),Object(n.jsx)("h3",{className:"message",children:t?"success!":"error!"}),Object(n.jsx)("span",{className:"large-message",children:t?"thanks for your redeem, everything went wonderfully.":"oh no, something went wrong."}),Object(n.jsx)("button",{onClick:function(){return c(null)},className:"close-button",children:t?"great!":"try again"})]})}):null};var D=function(e){var t=e.products;return Object(n.jsxs)("div",{className:"products-galery",children:[t.map((function(e,t){return Object(n.jsx)(S,Object(Y.a)({},e),e._id+t)}))," ",Object(n.jsx)(B,{})]})};var R=function(e,t){var c=Object(r.useState)(1),n=Object(j.a)(c,2),s=n[0],a=n[1],i=Math.ceil(e.length/t),o=e.length,u=Math.min(s*t,o);return Object(r.useEffect)((function(){a(1)}),[e]),{nextPage:function(){a((function(e){return Math.min(e+1,i)}))},prevPage:function(){a((function(e){return Math.max(e-1,1)}))},currentItems:function(){var c=(s-1)*t,n=c+t;return e.slice(c,n)},currentPage:s,maxPage:i,maxProdQuant:o,shownProducts:u}};var V=function(){var e=Object(r.useContext)(h),t=e.products,c=e.setProducts,s=R(t,16),a=s.nextPage,i=s.prevPage,o=s.currentItems,j=s.maxProdQuant,d=s.shownProducts,b=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.getProducts();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)(b,[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{products:t,setProducts:c,hidden:!1,nextPage:a,prevPage:i,maxProdQuant:j,shownProducts:d})," ",Object(n.jsx)(D,{products:o()})," ",Object(n.jsx)(E,{products:t,setProducts:c,hidden:!0,nextPage:a,prevPage:i,maxProdQuant:j,shownProducts:d})]})};var Z=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(m,{children:[Object(n.jsx)(M,{}),Object(n.jsx)(V,{})]})})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(Z,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.8b19826c.chunk.js.map
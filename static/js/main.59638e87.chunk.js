(this["webpackJsonpstore-juan-iessi"]=this["webpackJsonpstore-juan-iessi"]||[]).push([[0],{20:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),r=c.n(s),a=c(13),i=c.n(a),o=(c(20),c(5)),u=c(3),j=c.n(u),l=c(4),d=c(6),b=c(7),p=function(){function e(){Object(d.a)(this,e)}return Object(b.a)(e,null,[{key:"getUser",value:function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0"},e.prev=1,e.next=4,fetch("https://coding-challenge-api.aerolab.co/user/me",{headers:t});case 4:return c=e.sent,e.next=7,c.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"postCoins",value:function(){var e=Object(l.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={body:{amount:t},method:"post",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0"}},e.prev=2,e.next=5,fetch("https://private-anon-0211b9ef35-aerolabchallenge.apiary-mock.com/user/points",c);case 5:return n=e.sent,e.next=8,n.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),h=r.a.createContext();function O(e){var t=e.children,c=Object(s.useState)([]),r=Object(o.a)(c,2),a=r[0],i=r[1],u=Object(s.useState)({name:"",points:""}),d=Object(o.a)(u,2),b=d[0],O=d[1],m=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getUser();case 2:t=e.sent,O(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){return m()}),[]),Object(n.jsx)(h.Provider,{value:{user:b,products:a,setProducts:i},children:t})}var m=c.p+"static/media/aerolab-logo.0a8fb170.svg",f=c.p+"static/media/coin.b8bc711d.svg";var x=function(){var e=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.postCoins(t);case 2:alert("Agregaste ".concat(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"more-coins",children:[Object(n.jsxs)("button",{className:"add-coins",onClick:function(){return e(1e3)},children:["+ 1000",Object(n.jsx)("img",{className:"img-coin",alt:"Coin",src:f})]}),Object(n.jsxs)("button",{className:"add-coins",onClick:function(){return e(5e3)},children:["+ 5000",Object(n.jsx)("img",{className:"img-coin",alt:"Coin",src:f})]}),Object(n.jsxs)("button",{className:"add-coins",onClick:function(){return e(7500)},children:["+ 7500",Object(n.jsx)("img",{className:"img-coin",alt:"Coin",src:f})]})]})},v=c(10),g=c(12);var N=function(){var e=Object(s.useContext)(h),t=e.user,c=t.name,r=t.points,a=t.redeemHistory,i=e.products,u=e.setProducts,j=Object(s.useState)(!1),l=Object(o.a)(j,2),d=l[0],b=l[1],p=Object(s.useState)(!1),O=Object(o.a)(p,2),N=O[0],y=O[1],k=Object(s.useState)([]),I=Object(o.a)(k,2),w=I[0],C=I[1];return Object(s.useEffect)((function(){i!==a&&C(i),u(N?a:w)}),[N]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"header-bar",children:[Object(n.jsx)("img",{src:m,alt:"Barrilete de aerolab"}),Object(n.jsxs)("div",{className:"user",children:[Object(n.jsx)("h3",{children:c}),Object(n.jsx)("button",{className:"header-button",onClick:function(){y(!N)},title:"see ".concat(c," history"),children:!1===N?Object(n.jsx)(v.a,{icon:g.a}):Object(n.jsx)(v.a,{icon:g.b})}),Object(n.jsxs)("div",{className:"user-coin",title:"Add more coins",onClick:function(){b(!d)},children:[Object(n.jsx)("span",{className:"cant-coin",children:r}),Object(n.jsx)("img",{className:"icon-coin",src:f,alt:"Monedas"})]})]})]}),!1===d?"":Object(n.jsx)(x,{})]})},y=c.p+"static/media/header-x1.b6f067c6.png";var k=function(){var e=Object(s.useContext)(h),t=e.user.redeemHistory,c=e.products;return Object(n.jsxs)("div",{className:"header-img",children:[Object(n.jsx)("img",{className:"img-electronics",src:y,alt:"Electronics Header"}),Object(n.jsx)("h1",{children:c===t?"Redeem history":"Electronics"})]})};var I=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(N,{}),Object(n.jsx)(k,{})]})},w=c.p+"static/media/arrow-right.3306c112.svg",C=c.p+"static/media/arrow-left.e6eb9be1.svg",M=[{callback:function(e,t){return e._id<t._id?-1:1},wording:"Most recent"},{callback:function(e,t){return e.cost-t.cost},wording:"Lowest price"},{callback:function(e,t){return t.cost-e.cost},wording:"Highest price"}];var J=function(e){var t=e.products,c=e.setProducts,r=e.hidden,a=Object(s.useState)(0),i=Object(o.a)(a,2),u=i[0],j=i[1];return Object(n.jsxs)("div",{className:"filter",children:[Object(n.jsxs)("div",{className:"buttons-board",children:[Object(n.jsx)("span",{className:"prod-quant",children:"16 of 32 products"}),Object(n.jsxs)("div",{className:"sort ".concat(r?"hidden":""),children:[Object(n.jsx)("span",{className:"sort-by",children:"Sort by:"}),Object(n.jsxs)("p",{className:"sort-controls-ctn",children:[M.map((function(e,s){var r=e.callback,a=e.wording;return Object(n.jsx)("button",{className:"filter-btn ".concat(u===s?"active":""),onClick:function(){return function(e,n){var s=t.slice().sort(n);c(s),j(e)}(s,r)},children:a},s)}))," "]})]})]}),Object(n.jsxs)("div",{className:"move-btn",children:[Object(n.jsx)("button",{className:"arrow-btn",children:Object(n.jsx)("img",{src:C,alt:"Flecha izquierda"})}),Object(n.jsx)("button",{className:"arrow-btn",children:Object(n.jsx)("img",{src:w,alt:"Flecha derecha"})})]})]})},Y=c(14),A=c.p+"static/media/buy-white.9b6e6567.svg",z=function(){function e(){Object(d.a)(this,e)}return Object(b.a)(e,null,[{key:"getProducts",value:function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0"},e.prev=1,e.next=4,fetch("https://coding-challenge-api.aerolab.co/products",{headers:t});case 4:return c=e.sent,e.next=7,c.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"getHistory",value:function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0"},e.prev=1,e.next=4,fetch("https://coding-challenge-api.aerolab.co/user/history",{headers:t});case 4:return c=e.sent,e.next=7,c.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"postRedeem",value:function(){var e=Object(l.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={body:{productId:t},method:"post",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0"}},e.prev=2,e.next=5,fetch("https://private-anon-20e65f592c-aerolabchallenge.apiary-mock.com/redeem",c);case 5:return n=e.sent,e.next=8,n.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}()}]),e}();var E=function(e){var t=e.cost,c=e._id;return Object(n.jsxs)("div",{className:"hover-card",children:[Object(n.jsx)("img",{className:"buy-bag",src:A,alt:"comprar"}),Object(n.jsxs)("div",{className:"cost",children:[Object(n.jsx)("span",{className:"cant-coin",children:t}),Object(n.jsx)("img",{className:"coin",src:f,alt:"coin"})]}),Object(n.jsx)("button",{className:"redeem-btn",onClick:function(){z.postRedeem(c),alert("\xa1bien! (no mentira)")},children:"Redeem now"})]})},Q=c.p+"static/media/buy-blue.c5c4f01c.svg";var B=function(e){var t=e._id,c=e.category,r=e.cost,a=e.img,i=e.name,o=Object(s.useContext)(h).user.points;return Object(n.jsxs)("div",{className:"product-card",children:[r<o&&Object(n.jsx)(E,{cost:r,id:t}),Object(n.jsxs)("div",{className:"images-ctn",children:[o>r?Object(n.jsx)("img",{src:Q,alt:"buy-icon",className:"buy-icon"}):Object(n.jsxs)("div",{className:"buy-icon cant-buy",children:[Object(n.jsx)("h3",{className:"missing-coins",children:"You need ".concat(r-o)}),Object(n.jsx)("img",{src:f,alt:"coin",className:"coin"})]}),Object(n.jsx)("img",{src:a.url,alt:i,className:"prod-img"})]}),Object(n.jsxs)("div",{className:"text-box",children:[Object(n.jsx)("h4",{className:"prod-category",children:c}),Object(n.jsx)("h3",{className:"prod-name",children:i})]})]})};var D=function(e){var t=e.products;return Object(n.jsxs)("div",{className:"products-galery",children:[t.map((function(e){return Object(n.jsx)(B,Object(Y.a)({},e),e._id)}))," "]})};var V=function(){var e=Object(s.useContext)(h),t=e.products,c=e.setProducts,r=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getProducts();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)(r,[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(J,{products:t,setProducts:c,hidden:!1})," ",Object(n.jsx)(D,{products:t})," ",Object(n.jsx)(J,{products:t,setProducts:c,hidden:!0})]})};var Z=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(O,{children:[Object(n.jsx)(I,{}),Object(n.jsx)(V,{})]})})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Z,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.59638e87.chunk.js.map
(this["webpackJsonpredux-shoply"]=this["webpackJsonpredux-shoply"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('{"products":{"47314fa1-ae56-4eae-80be-af6691145951":{"name":"tv","price":219.99,"description":"A beautiful, big-screen TV. Because hey, Netflix isn\'t going to watch itself.","image_url":"https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"},"3fdd689a-02cc-4ae7-903b-f6d2776ff3b9":{"name":"microwave","price":100,"description":"Heat your food with the power of SCIENCE!","image_url":"https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140"},"b04b779c-1cfb-48a7-8424-25a8c7e608ae":{"name":"toaster oven","price":20.49,"description":"Tasty bread not included.","image_url":"https://images-na.ssl-images-amazon.com/images/I/81110bb7g2L._SL1500_.jpg"},"4260bf52-218a-480e-87ea-4ff42470ce98":{"name":"chair","price":100.89,"description":"It\'s a chair. You can sit in it.","image_url":"https://www.ikea.com/PIAimages/0355482_PE547815_S5.JPG"},"6a56c22f-2a85-4751-98a9-14e280fcecd8":{"name":"mirror","price":20.99,"description":"Mirror mirror on the wall, who has the greatest mirror of them all? YOU WILL, if you buy this.","image_url":"https://target.scene7.com/is/image/Target/GUEST_703892ef-2db0-4e02-b9c8-685e4a5c37a0"},"2266b2d6-3d71-4356-8065-392f1fceab07":{"name":"phone","price":399.99,"description":"Because there are absolutely no downsides that come with easier access to social media.","image_url":"https://images-na.ssl-images-amazon.com/images/I/717DO5Q-aCL._SY879_.jpg"}}}')},24:function(e,t,a){e.exports=a(40)},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),l=a.n(r),i=(a(29),a(30),a(31),a(32),a(3)),o=a(5);function m(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=0;for(var c in e){var r=e[c].price,l=t[c]||0;n+=r*l}var i=n*(1-a);return i.toFixed(2)}var s=function(){var e=Object(i.c)((function(e){return function(e){var t=0;for(var a in e)t+=e[a];return t}(e.cartItems)})),t=Object(i.c)((function(e){return e.cartValue})),a=1===e?"item":"items";return c.a.createElement("nav",{className:"navbar navbar-light bg-info"},c.a.createElement(o.b,{to:"/",className:"navbar-brand text-light"},"SHOPLY!"),c.a.createElement("ul",{className:"navbar-nav flex-row"},c.a.createElement("li",{className:"nav-item pr-3"},c.a.createElement("span",{className:"navbar-text text-light"},e," ",a," ($",t,")")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{to:"/cart",className:"nav-link text-light"},"See Cart"))))},u=a(2),d=a(23);a(38);var E=function(e){var t=e.id,a=Object(i.b)();return c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("i",{onClick:function(){return a(function(e){return{type:"ADD_TO_CART",id:e}}(t))},className:"CartIcon fas fa-cart-plus fa-2x text-success"}),c.a.createElement("i",{onClick:function(){return a(function(e){return{type:"REMOVE_FROM_CART",id:e}}(t))},className:"CartIcon fas fa-cart-arrow-down fa-2x text-danger"}))};var b=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],l=Object(i.b)(),m=Object(i.c)((function(e){return e})),s=m.cartItems,u=m.cartValue,b=m.discountAmount,p=m.discountApplied,f=m.products;return c.a.createElement(c.a.Fragment,null,0===Object.keys(s).length?c.a.createElement("h2",null,"Your cart is empty!"):c.a.createElement("div",null,function(){var e=Object.keys(s).map((function(e){return c.a.createElement("tr",{key:e},c.a.createElement("td",{className:"text-center align-middle"},c.a.createElement(o.b,{to:"/products/".concat(e)},f[e].name)),c.a.createElement("td",{className:"text-center align-middle"},"$",f[e].price),c.a.createElement("td",{className:"text-center align-middle"},s[e]),c.a.createElement("td",null,c.a.createElement(E,{id:e})))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"mt-5"},"Your shopping cart:"),c.a.createElement("table",{className:"table table-bordered table-striped mt-4"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Item Name"),c.a.createElement("th",null,"Item Price"),c.a.createElement("th",null,"Item Quantity"),c.a.createElement("th",null,"Actions"))),c.a.createElement("tbody",null,e)))}(),c.a.createElement("p",null,"Total: $",u,p?c.a.createElement("span",{className:"text-success"},"- You saved ",(100*b).toFixed(0),"%!"):null),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l(function(e){return{type:"APPLY_DISCOUNT",discount:e}}(a)),r("")},className:"form-inline"},c.a.createElement("label",{htmlFor:"discount"},"Discount:"),c.a.createElement("input",{id:"discount",value:a,onChange:function(e){r(e.target.value)},name:"discount",type:"text",className:"form-control ml-2 mr-2"}),c.a.createElement("button",{className:"btn btn-primary"},"Apply Discount"))),c.a.createElement(o.b,{to:"/",className:"btn btn-block btn-link"},"Go to product list"))},p=a(9);a(39);var f=function(){var e=Object(u.g)().id,t=Object(i.c)((function(t){return Object(p.a)({},t.products[e])})),a=t.image_url,n=t.name,r=t.price,l=t.description;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",{className:"mt-4"},"Product details:"),c.a.createElement("div",{className:"row justify-content-center border"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("h2",null,n),c.a.createElement("img",{className:"ProductDetails-img card-img-top",src:a,alt:n}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("h5",null,"Price:"),c.a.createElement("p",null,"$",r)),c.a.createElement("p",{className:"text-center"},l),c.a.createElement(E,{id:e})),c.a.createElement(o.b,{to:"/",className:"btn btn-block btn-link"},"Go back"))))};var h=function(){var e=Object(i.c)((function(e){return e.products})),t=Object.keys(e).map((function(t){return c.a.createElement("div",{className:"col-md-3 mb-3 mt-5",key:t},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title text-center"},c.a.createElement(o.b,{to:"/products/".concat(t)},e[t].name)),c.a.createElement(E,{id:t}))))}));return c.a.createElement("div",null,c.a.createElement("h1",{className:"mt-3"},"Welcome to Shoply!"),c.a.createElement("h4",null,"Look at all of our beautiful products!"),c.a.createElement("div",{className:"row"},t))};var v=function(){return c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"/",exact:!0},c.a.createElement(h,null)),c.a.createElement(u.b,{path:"/products/:id",exact:!0},c.a.createElement(f,null)),c.a.createElement(u.b,{path:"/cart",exact:!0},c.a.createElement(b,null)),c.a.createElement(u.a,{to:"/"}))};var g=function(){return c.a.createElement("main",null,c.a.createElement(s,null),c.a.createElement("div",{className:"container"},c.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(14),O=a(22),_={REMOVE10:.1,REMOVE20:.2,REMOVE30:.3},w={products:O.products,cartItems:{},cartValue:0,discountApplied:!1,discountAmount:0};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var a=Object(p.a)({},e.cartItems);return a[t.id]=(a[t.id]||0)+1,Object(p.a)(Object(p.a)({},e),{},{cartItems:a,cartValue:m(e.products,a,e.discountAmount)});case"REMOVE_FROM_CART":var n=Object(p.a)({},e.cartItems);return n[t.id]?(n[t.id]--,0===n[t.id]&&delete n[t.id],Object(p.a)(Object(p.a)({},e),{},{cartItems:n,cartValue:m(e.products,n,e.discountAmount)})):e;case"APPLY_DISCOUNT":if(!1===e.discountApplied&&_[t.discount]){var c=_[t.discount];return Object(p.a)(Object(p.a)({},e),{},{cartValue:m(e.products,e.cartItems,c),discountApplied:!0,discountAmount:c})}return e;default:return e}},j=Object(N.b)(y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(c.a.createElement(i.a,{store:j},c.a.createElement(o.a,null,c.a.createElement(u.b,{path:"/",component:g}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.ad91233f.chunk.js.map
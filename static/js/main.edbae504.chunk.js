(this["webpackJsonpcryptocurrency-calculator"]=this["webpackJsonpcryptocurrency-calculator"]||[]).push([[0],{43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(19),l=a.n(n),s=a(4),i=a.n(s),u=a(9),o=a(2),d=a(7),b=a(10),j=a.n(b),p=new Date,O=p.getFullYear(),_=p.getMonth()+1,v=p.getDate();_<=9&&(_="0"+_),v<=9&&(v="0"+v);var h=v+"-"+_+"-"+O,m=(a(43),a(0));var f=function(){var e,t,a=Object(c.useState)(""),r=Object(o.a)(a,2),n=r[0],l=r[1],s=Object(c.useState)(""),b=Object(o.a)(s,2),p=b[0],O=b[1],_=Object(c.useState)(""),v=Object(o.a)(_,2),f=v[0],x=v[1],y=Object(c.useState)(0),g=Object(o.a)(y,2),S=g[0],N=g[1],w=Object(c.useState)(0),k=Object(o.a)(w,2),D=k[0],F=k[1],C=Object(c.useState)(0),Y=Object(o.a)(C,2),E=Y[0],I=Y[1],R=Object(c.useState)(0),q=Object(o.a)(R,2),B=q[0],J=q[1],M=Object(c.useState)(0),T=Object(o.a)(M,2),U=T[0],G=T[1],L=Object(c.useState)(0),$=Object(o.a)(L,2),z=$[0],A=$[1],H=Object(c.useState)(""),K=Object(o.a)(H,2),P=K[0],Q=K[1],V=Object(c.useState)(""),W=Object(o.a)(V,2),X=W[0],Z=W[1],ee=Object(c.useState)(""),te=Object(o.a)(ee,2),ae=te[0],ce=te[1],re=Object(c.useState)(0),ne=Object(o.a)(re,2),le=ne[0],se=ne[1],ie=Object(c.useState)(!1),ue=Object(o.a)(ie,2),oe=ue[0],de=ue[1],be=Object(c.useState)(!1),je=Object(o.a)(be,2),pe=je[0],Oe=je[1],_e=Object(c.useState)(!1),ve=Object(o.a)(_e,2),he=ve[0],me=ve[1],fe=Object(c.useState)(!1),xe=Object(o.a)(fe,2),ye=xe[0],ge=xe[1],Se=Object(c.useState)(!1),Ne=Object(o.a)(Se,2),we=Ne[0],ke=Ne[1],De=Object(c.useState)(!1),Fe=Object(o.a)(De,2),Ce=Fe[0],Ye=Fe[1],Ee=Object(c.useState)(!0),Ie=Object(o.a)(Ee,2),Re=Ie[0],qe=Ie[1],Be=Object(c.useState)(!0),Je=Object(o.a)(Be,2),Me=Je[0],Te=Je[1],Ue=Object(c.useState)(!0),Ge=Object(o.a)(Ue,2),Le=Ge[0],$e=Ge[1],ze=Object(c.useState)(!0),Ae=Object(o.a)(ze,2),He=Ae[0],Ke=Ae[1],Pe=Object(c.useState)(0),Qe=Object(o.a)(Pe,2),Ve=Qe[0],We=Qe[1],Xe=!pe||!he||!ye||!Ce,Ze=n.toLowerCase().replace(/\s/g,"-");"bitcoin"===n&&(e="28-04-2013"),"ethereum"===n&&(e="07-08-2015"),"ripple"===n&&(e="04-08-2013"),"tether"===n&&(e="02-03-2015"),"dogecoin"===n&&(e="15-12-2013"),t=le<=10?new Intl.NumberFormat("ru-RU").format(parseFloat(le).toFixed(2)):new Intl.NumberFormat("ru-RU").format(parseFloat(le).toFixed(0));var et=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://api.coingecko.com/api/v3/coins/".concat(Ze,"/history?date=").concat(p)).then((function(e){N(e.data.market_data.current_price.rub),F(e.data.market_data.current_price.usd),I(e.data.market_data.current_price.eur)})).catch((function(e){We(1e-7),console.log("\u043e\u0448\u0438\u0431\u043a\u0430 \u0434\u0430\u0442\u044b \u043f\u043e\u043a\u0443\u043f\u043a\u0438")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),tt=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://api.coingecko.com/api/v3/coins/".concat(Ze,"/history?date=").concat(f)).then((function(e){J(e.data.market_data.current_price.rub),G(e.data.market_data.current_price.usd),A(e.data.market_data.current_price.eur)})).catch((function(e){return console.log("\u043e\u0448\u0438\u0431\u043a\u0430 \u0434\u0430\u0442\u044b \u043f\u0440\u043e\u0434\u0430\u0436\u0438")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){et()}),[p,n]),Object(c.useEffect)((function(){tt(),Ve>S?(Te(!1),me(!1),x("")):We(0)}),[f]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Crypto Calculator"}),Object(m.jsxs)("form",{className:"calculator__container",children:[Object(m.jsx)("div",{className:"calculator__field",children:Object(m.jsxs)("select",{className:"cruptocurrency__name",name:"coinname",type:"text",placeholder:"\u0432\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u0443",value:n,onChange:function(e){l(e.target.value),Oe(e.target.validity.valid)},required:!0,children:[Object(m.jsx)("option",{className:"cruptocurrency__name-option",value:"",selected:!0,disabled:!0,hidden:!0,children:"\u0432\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u0443"}),Object(m.jsx)("option",{value:"bitcoin",children:"Bitcoin"}),Object(m.jsx)("option",{value:"ethereum",children:"Ethereum"}),Object(m.jsx)("option",{value:"dogecoin",children:"Dogecoin"}),Object(m.jsx)("option",{value:"ripple",children:"Ripple"}),Object(m.jsx)("option",{value:"tether",children:"Tether"})]})}),Object(m.jsx)("div",{className:"calculator__field-date",children:Object(m.jsx)(d.a,{className:"cruptocurrency__input",name:"buydate",type:"text",format:"##-##-####",mask:["_","_","_","_","_","_","_","_"],placeholder:"\u0434\u0430\u0442\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0438",autoComplete:"off",value:p,disabled:!n,onChange:function(e){O(e.target.value),me(e.target.validity.valid)},pattern:"(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d"})}),!Re&&Object(m.jsxs)("span",{className:"error__date-buy",children:["\u0432\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0434\u0430\u0442\u0443 \u043d\u0435 \u0440\u0430\u043d\u0435\u0435 ",e]}),!Me&&Object(m.jsxs)("span",{className:"error__date-buy",children:["\u0432\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0434\u0430\u0442\u0443 \u043d\u0435 \u043f\u043e\u0437\u0434\u043d\u0435\u0435 \u0441\u0435\u0433\u043e\u0434\u043d\u044f ",h]}),Object(m.jsxs)("div",{className:"calculator__field-date",children:[Object(m.jsx)(d.a,{className:"cruptocurrency__input",name:"selldate",type:"text",format:"##-##-####",mask:["_","_","_","_","_","_","_","_"],placeholder:"\u0434\u0430\u0442\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0438",autoComplete:"off",value:f,disabled:!he,onChange:function(t){var a=p.split("-"),c=e.split("-"),r=h.split("-"),n=new Date,l=new Date,s=new Date;n.setFullYear(a[2],a[1]-1,a[0]),l.setFullYear(c[2],c[1]-1,c[0]),s.setFullYear(r[2],r[1]-1,r[0]),n<l?(qe(!1),Te(!0),me(!1),ge(t.target.validity.unvalid)):n>s?(Te(!1),qe(!0),me(!1),ge(t.target.validity.unvalid)):(x(t.target.value),qe(!0),Te(!0),ge(t.target.validity.valid))},pattern:"(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d"}),Object(m.jsx)("button",{className:"btn__calculator ".concat(he?"":"btn_disabled"),disabled:!he,onClick:function(t){t.preventDefault();var a=p.split("-"),c=e.split("-"),r=h.split("-"),n=new Date,l=new Date,s=new Date;n.setFullYear(a[2],a[1]-1,a[0]),l.setFullYear(c[2],c[1]-1,c[0]),s.setFullYear(r[2],r[1]-1,r[0]),n<l?(qe(!1),Te(!0),me(!1),ge(t.target.validity.unvalid)):n>s?(Te(!1),qe(!0),me(!1),ge(t.target.validity.unvalid)):(x(h),ge(t.target.validity.valid),qe(!0),Te(!0))},children:"\u0441\u0435\u0433\u043e\u0434\u043d\u044f"})]}),!Le&&Object(m.jsx)("span",{className:"error__date-buy",children:"\u0434\u0430\u0442\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u0430 \u0434\u0430\u0442\u0435 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"}),!He&&Object(m.jsxs)("span",{className:"error__date-buy",children:["\u0434\u0430\u0442\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 ",h]}),Object(m.jsx)("div",{className:"calculator__field",children:Object(m.jsxs)("select",{className:"cruptocurrency__currency-name",name:"currency",type:"text",placeholder:"\u0432\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443 \u043f\u043e\u043a\u0443\u043f\u043a\u0438",value:P,disabled:!ye,onChange:function(e){e.preventDefault();var t=p.split("-"),a=f.split("-"),c=h.split("-"),r=new Date,n=new Date,l=new Date;r.setFullYear(t[2],t[1]-1,t[0]),n.setFullYear(a[2],a[1]-1,a[0]),l.setFullYear(c[2],c[1]-1,c[0]),r>=n?(Q(""),ke(e.target.validity.unvalid),ge(!1),$e(!1),Ke(!0)):n>l?(Q(""),ke(e.target.validity.unvalid),ge(!1),Ke(!1),$e(!0)):(Q(e.target.value),ke(e.target.validity.valid),ge(!0),$e(!0),Ke(!0))},required:!0,children:[Object(m.jsx)("option",{className:"cruptocurrency__name-option",value:"",selected:!0,disabled:!0,hidden:!0,children:"\u0432\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"}),Object(m.jsx)("option",{value:"rub",children:"\u0420\u0443\u0431\u043b\u0438"}),Object(m.jsx)("option",{value:"usd",children:"\u0414\u043e\u043b\u043b\u0430\u0440\u044b"}),Object(m.jsx)("option",{value:"eur",children:"\u0415\u0432\u0440\u043e"})]})}),Object(m.jsx)("div",{className:"calculator__field",children:Object(m.jsx)(d.a,{className:"cruptocurrency__input",thousandsGroupStyle:"thousand",decimalSeparator:"",displayType:"input",type:"text",thousandSeparator:!0,prefix:X,allowNegative:!0,placeholder:"\u0441\u0443\u043c\u043c\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0438",autoComplete:"off",value:ae,disabled:!we,onChange:function(e){ce(e.target.value),Ye(e.target.validity.valid),Z("usd"===P?"$":"eur"===P?"\u20ac":"\u20bd")}})}),Object(m.jsx)("button",{className:"btn__calculator_big ".concat(Xe?"btn_disabled":""),onClick:function(e){e.preventDefault();var t=Number(ae.replace(/[^0-9]/g,""));se("rub"===P?t/S*B:"usd"===P?t/D*U:t/E*z),de(!0)},disabled:Xe,children:"\u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c"}),Object(m.jsx)("button",{className:"btn__calculator_big ".concat(n?"":"btn_disabled"),onClick:function(e){e.preventDefault(),l(""),O(""),x(""),N(0),F(0),I(0),J(0),G(0),A(0),ce(""),Q(""),de(!1),Oe(!1),me(!1),ge(!1),Ye(!1),ke(!1),We(0),qe(!0),Te(!0),$e(!0),Ke(!0)},disabled:!n,children:"\u043e\u0431\u043d\u0443\u043b\u0438\u0442\u044c \u0432\u0441\u0435"}),oe?Object(m.jsx)("div",{className:"calculator__container_rub",children:Object(m.jsxs)("p",{className:"calculator__total",children:["\u0421\u0435\u0439\u0447\u0430\u0441 \u0431\u044b\u043b\u043e \u0431\u044b: ",t,X]})}):null]})]})};a(45);l.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.edbae504.chunk.js.map
(this["webpackJsonpcryptocurrency-calculator"]=this["webpackJsonpcryptocurrency-calculator"]||[]).push([[0],{42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(18),s=a.n(r),u=a(4),l=a.n(u),i=a(8),o=a(2),j=a(9),b=a.n(j),d=new Date,p=d.getFullYear(),O=d.getMonth()+1,h=d.getDate();O<=9&&(O="0"+O),h<=9&&(h="0"+h);var m=h+"-"+O+"-"+p,v=(a(42),a(0));function _(e){var t=e.value,a=e.onChange;return Object(v.jsxs)("div",{className:"wrapper__name-input",children:[Object(v.jsx)("h2",{className:"name-input__title",children:"\u041a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u0430"}),Object(v.jsxs)("select",{className:"name-input__select",name:"coinname",type:"text",placeholder:"\u0432\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u0443",value:t,onChange:a,children:[Object(v.jsx)("option",{className:"name-input__option",value:"",selected:!0,disabled:!0,hidden:!0}),Object(v.jsx)("option",{value:"bitcoin",children:"Bitcoin"}),Object(v.jsx)("option",{value:"ethereum",children:"Ethereum"}),Object(v.jsx)("option",{value:"dogecoin",children:"Dogecoin"}),Object(v.jsx)("option",{value:"ripple",children:"Ripple"}),Object(v.jsx)("option",{value:"tether",children:"Tether"})]})]})}a(44);function f(e){var t=e.valueDay,a=e.valueMonth,n=e.valueYear,c=e.onChangeDay,r=e.onChangeMonth,s=e.onChangeYear,u=e.onClick,l=e.label,i=e.title,o=e.showBtnDate,j=e.errBuyFirst,b=e.errBuyFirstMessage,d=e.errBuySecond,p=e.errSellFirst,O=e.errSellSecond,h=e.onBlur,_=e.disabled,f=e.disabledBtn;return Object(v.jsxs)("div",{className:"wrapper__date-input",children:[Object(v.jsx)("h2",{className:"date-input__title",children:i}),Object(v.jsxs)("div",{className:"date-input__inputs",children:[Object(v.jsx)("input",{className:"date-input__dd",value:t,placeholder:"DD",onChange:c,maxLength:2,disabled:_}),Object(v.jsx)("input",{className:"date-input__mm",value:a,placeholder:"MM",onChange:r,maxLength:2,disabled:_}),Object(v.jsx)("input",{className:"date-input__yyyy",value:n,placeholder:"YYYY",onChange:s,maxLength:4,onBlur:h,disabled:_}),o?Object(v.jsx)("button",{className:"date-input__btn",onClick:u,disabled:f,children:l}):null]}),j&&Object(v.jsxs)("span",{className:"date-input__error",children:["\u0432\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0434\u0430\u0442\u0443 \u043d\u0435 \u0440\u0430\u043d\u0435\u0435 ",b]}),d&&Object(v.jsxs)("span",{className:"date-input__error",children:["\u0432\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0434\u0430\u0442\u0443 \u043d\u0435 \u043f\u043e\u0437\u0434\u043d\u0435\u0435 \u0441\u0435\u0433\u043e\u0434\u043d\u044f ",m]}),p&&Object(v.jsx)("span",{className:"date-input__error",children:"\u0434\u0430\u0442\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u0430 \u0434\u0430\u0442\u0435 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"}),O&&Object(v.jsxs)("span",{className:"date-input__error",children:["\u0434\u0430\u0442\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 ",m]})]})}a(45);function x(e){var t=e.value,a=e.onChange,n=e.disabled;return Object(v.jsxs)("div",{className:"wrapper__currency-input",children:[Object(v.jsx)("h2",{className:"currency-input__title",children:"\u0412\u0430\u043b\u044e\u0442\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"}),Object(v.jsxs)("select",{className:"currency-input__select",name:"currency",type:"text",placeholder:"\u0432\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443 \u043f\u043e\u043a\u0443\u043f\u043a\u0438",value:t,onChange:a,disabled:n,children:[Object(v.jsx)("option",{className:"currency-input__option",value:"",selected:!0,disabled:!0,hidden:!0}),Object(v.jsx)("option",{value:"rub",children:"\u0420\u0443\u0431\u043b\u0438"}),Object(v.jsx)("option",{value:"usd",children:"\u0414\u043e\u043b\u043b\u0430\u0440\u044b"}),Object(v.jsx)("option",{value:"eur",children:"\u0415\u0432\u0440\u043e"})]})]})}a(46);function g(e){var t=e.value,a=e.onChange,n=e.disabled;return Object(v.jsxs)("div",{className:"wrapper__amount-input",children:[Object(v.jsx)("h2",{className:"amount-input__title",children:"\u0421\u0443\u043c\u043c\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"}),Object(v.jsx)("input",{className:"amount-input__input",autoComplete:"off",value:t,onChange:a,disabled:n})]})}a(47);var S=function(){var e,t,a=Object(n.useState)(""),c=Object(o.a)(a,2),r=c[0],s=c[1],u=Object(n.useState)(""),j=Object(o.a)(u,2),d=j[0],S=j[1],y=Object(n.useState)(""),N=Object(o.a)(y,2),C=N[0],w=N[1],D=Object(n.useState)(""),F=Object(o.a)(D,2),k=F[0],Y=F[1],B=Object(n.useState)(""),M=Object(o.a)(B,2),E=M[0],L=M[1],I=Object(n.useState)(""),R=Object(o.a)(I,2),J=R[0],U=R[1],T=Object(n.useState)(""),$=Object(o.a)(T,2),q=$[0],z=$[1],A=Object(n.useState)(0),G=Object(o.a)(A,2),H=G[0],K=G[1],P=Object(n.useState)(0),Q=Object(o.a)(P,2),V=Q[0],W=Q[1],X=Object(n.useState)(0),Z=Object(o.a)(X,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(0),ne=Object(o.a)(ae,2),ce=ne[0],re=ne[1],se=Object(n.useState)(0),ue=Object(o.a)(se,2),le=ue[0],ie=ue[1],oe=Object(n.useState)(0),je=Object(o.a)(oe,2),be=je[0],de=je[1],pe=Object(n.useState)(""),Oe=Object(o.a)(pe,2),he=Oe[0],me=Oe[1],ve=Object(n.useState)(""),_e=Object(o.a)(ve,2),fe=_e[0],xe=_e[1],ge=Object(n.useState)(""),Se=Object(o.a)(ge,2),ye=Se[0],Ne=Se[1],Ce=Object(n.useState)(0),we=Object(o.a)(Ce,2),De=we[0],Fe=we[1],ke=Object(n.useState)(0),Ye=Object(o.a)(ke,2),Be=Ye[0],Me=Ye[1],Ee=Object(n.useState)(!1),Le=Object(o.a)(Ee,2),Ie=Le[0],Re=Le[1],Je=Object(n.useState)(!1),Ue=Object(o.a)(Je,2),Te=Ue[0],$e=Ue[1],qe=Object(n.useState)(!1),ze=Object(o.a)(qe,2),Ae=ze[0],Ge=ze[1],He=Object(n.useState)(!1),Ke=Object(o.a)(He,2),Pe=Ke[0],Qe=Ke[1],Ve=Object(n.useState)(!1),We=Object(o.a)(Ve,2),Xe=We[0],Ze=We[1],et=Object(n.useState)(!1),tt=Object(o.a)(et,2),at=tt[0],nt=tt[1],ct=Object(n.useState)(!1),rt=Object(o.a)(ct,2),st=rt[0],ut=rt[1],lt=Object(n.useState)(!1),it=Object(o.a)(lt,2),ot=it[0],jt=it[1],bt=Object(n.useState)(!0),dt=Object(o.a)(bt,2),pt=dt[0],Ot=dt[1],ht=Object(n.useState)("\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c"),mt=Object(o.a)(ht,2),vt=mt[0],_t=mt[1],ft=r.toLowerCase().replace(/\s/g,"-"),xt=d+"-"+C+"-"+k,gt=E+"-"+J+"-"+q;e=De<=10?new Intl.NumberFormat("ru-RU").format(parseFloat(De).toFixed(2)):new Intl.NumberFormat("ru-RU").format(parseFloat(De).toFixed(0)),"bitcoin"===r&&(t="28-04-2013"),"ethereum"===r&&(t="07-08-2015"),"ripple"===r&&(t="04-08-2013"),"tether"===r&&(t="02-03-2015"),"dogecoin"===r&&(t="15-12-2013");var St=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.coingecko.com/api/v3/coins/".concat(ft,"/history?date=").concat(xt)).then((function(e){K(e.data.market_data.current_price.rub),W(e.data.market_data.current_price.usd),te(e.data.market_data.current_price.eur)})).catch((function(e){console.log(e,"\u043e\u0448\u0438\u0431\u043a\u0430 \u0434\u0430\u0442\u044b \u043f\u043e\u043a\u0443\u043f\u043a\u0438")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),yt=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.coingecko.com/api/v3/coins/".concat(ft,"/history?date=").concat(gt)).then((function(e){re(e.data.market_data.current_price.rub),ie(e.data.market_data.current_price.usd),de(e.data.market_data.current_price.eur)})).catch((function(e){return console.log(e,"\u043e\u0448\u0438\u0431\u043a\u0430 \u0434\u0430\u0442\u044b \u043f\u0440\u043e\u0434\u0430\u0436\u0438")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){St()}),[xt,r]),Object(n.useEffect)((function(){yt()}),[gt,r]),Object(v.jsxs)("div",{className:"wrapper",children:[Object(v.jsx)("h1",{children:"Crypto Calculator"}),Object(v.jsxs)("form",{className:"form",children:[Object(v.jsx)(_,{value:r,onChange:function(e){s(e.target.value)}}),Object(v.jsx)(f,{valueDay:d,valueMonth:C,valueYear:k,onChangeDay:function(e){S(e.target.value)},onChangeMonth:function(e){w(e.target.value)},onChangeYear:function(e){Y(e.target.value)},title:"\u0414\u0430\u0442\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0438",errBuyFirst:Te,errBuyFirstMessage:t,errBuySecond:Ae,onBlur:function(){var e=xt.split("-"),a=t.split("-"),n=m.split("-"),c=new Date,r=new Date,s=new Date;c.setFullYear(e[2],e[1]-1,e[0]),r.setFullYear(a[2],a[1]-1,a[0]),s.setFullYear(n[2],n[1]-1,n[0]),c<r?($e(!0),Ge(!1),nt(!1)):c>s?(Ge(!0),$e(!1),nt(!1)):($e(!1),Ge(!1),nt(!0))},disabled:!r}),Object(v.jsx)(f,{valueDay:E,valueMonth:J,valueYear:q,onChangeDay:function(e){L(e.target.value)},onChangeMonth:function(e){U(e.target.value)},onChangeYear:function(e){z(e.target.value)},showBtnDate:!0,onClick:function(e){e.preventDefault(),L(h),U(O),z(p),Qe(!1),Ze(!1),ut(!0)},label:"\u0441\u0435\u0433\u043e\u0434\u043d\u044f",title:"\u0414\u0430\u0442\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0438",errSellFirst:Pe,errSellSecond:Xe,onBlur:function(){var e=xt.split("-"),t=gt.split("-"),a=m.split("-"),n=new Date,c=new Date,r=new Date;n.setFullYear(e[2],e[1]-1,e[0]),c.setFullYear(t[2],t[1]-1,t[0]),r.setFullYear(a[2],a[1]-1,a[0]),n>=c?(Qe(!0),Ze(!1),ut(!1)):c>r?(Ze(!0),Qe(!1),ut(!1)):(Qe(!1),Ze(!1),ut(!0))},disabled:!at,disabledBtn:!at}),Object(v.jsx)(x,{value:he,onChange:function(e){e.preventDefault(),me(e.target.value),jt(!0)},disabled:!st}),Object(v.jsx)(g,{value:fe,onChange:function(e){xe(e.target.value),Ot(!1)},disabled:!ot}),Object(v.jsx)("button",{className:"btn__calculate",onClick:function(e){e.preventDefault();var t=Number(fe.replace(/[^0-9]/g,""));"usd"===he?(Fe(t/V*le),Me((le-V)/V*100),Ne("$")):"eur"===he?(Fe(t/ee*be),Me((be-ee)/ee*100),Ne("\u20ac")):(Fe(t/H*ce),Me((ce-H)/H*100),Ne("\u20bd")),_t("\u041f\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u0442\u044c"),Re(!0)},disabled:pt,children:vt})]}),Ie?Object(v.jsxs)("div",{className:"calculator__container_rub",children:[Object(v.jsxs)("p",{className:"calculator__total",children:["\u0421\u0435\u0439\u0447\u0430\u0441 \u0431\u044b\u043b\u043e \u0431\u044b: ",e,ye]}),Object(v.jsxs)("p",{className:"calculator__total",children:["\u0420\u043e\u0441\u0442 \u043d\u0430: ",Math.round(Be),"%"]}),Object(v.jsx)("button",{className:"btn__reset",onClick:function(e){e.preventDefault(),s(""),S(""),w(""),Y(""),L(""),U(""),z(""),K(0),W(0),te(0),re(0),ie(0),de(0),me(""),xe(""),Ne(""),Fe(0),Me(0),Re(!1),$e(!1),Ge(!1),Qe(!1),Ze(!1),nt(!1),ut(!1),jt(!1),Ot(!0),_t("\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c")},children:"\u041e\u0431\u043d\u0443\u043b\u0438\u0442\u044c \u0432\u0441\u0435"})]}):null]})};a(48);s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.480c9383.chunk.js.map
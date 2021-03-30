(this.webpackJsonpaviasales_react=this.webpackJsonpaviasales_react||[]).push([[0],{31:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c(5),i=c.n(s),a=(c(31),c(3)),l=c(4),o=c(22),u=c(23),d=c.n(u),f=c(24),j=(c(55),c(56),c(57),{DATA:"DATA"}),h=function(e){return e[j.DATA].tickets},p=function(e){return e[j.DATA].activeFilterType},b=function(e){return e[j.DATA].filteredTickets},m=function(e){return e[j.DATA].activeSortType},_=c(12),v=function(e,t){return Object.assign({},e,t)},O=function(e){var t=Math.trunc(e/60),c=e%60;return"".concat(t,"\u0447 ").concat(c,"\u043c")},T=function e(t,c,n){return t.get("/tickets?searchId=".concat(n)).then((function(r){var s=r.data.tickets;c(C.loadTickets(s)),c(C.finishLoading()),r.data.stop||e(t,c,n)})).catch((function(){c(C.catchError())}))},k={ALL:{title:"\u0412\u0441\u0435",value:"all-transfer",checked:!0,count:"all"},NOT_TRANSFER:{title:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",value:"not-transfer",count:0},ONE_TRANSFER:{title:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",value:"one-transfer",count:1},TWO_TRANSFER:{title:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",value:"two-transfer",count:2},THREE_TRANSFER:{title:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",value:"three-transfer",count:3}},x="cheaper",g="faster",y={tickets:[],filteredTickets:null,isLoading:!0,isError:!1,activeFilterType:[k.ALL.count],errorFilterMessage:"",activeSortType:x},N="LOAD_TICKETS",A="FINISH_LOADING",E="CATCH_ERROR",S="CLEAR_SENDING_ERROR",R="FILTERED_TICKETS",F="CHANGE_FILTER_TYPE",L="CHANGE_SORT_TYPE",D="SET_TICKETS_BY_SORT",C={loadTickets:function(e){return{type:N,payload:e}},finishLoading:function(){return{type:A,payload:!1}},catchError:function(){return{type:E,payload:!0}},clearError:function(){return{type:S,payload:!1}},filteredTickets:function(e,t){var c=[];return t.length||(c=[]),c=e.filter((function(e){return t.includes(k.ALL.count)||t.includes(e.segments[0].stops.length)&&t.includes(e.segments[1].stops.length)?e:void 0})),{type:R,payload:c}},changeFilterType:function(e){return{type:F,payload:e}},changeSortType:function(e){return{type:L,payload:e}},setTicketsBySort:function(e,t){return{type:D,payload:e}}},I=function(){return function(e,t,c){return c.get("/search").then((function(t){var n=t.data.searchId;T(c,e,n)})).catch((function(){e(C.catchError())}))}};var w=Object(l.b)((function(e){return{tickets:h(e),activeFilterType:p(e)}}),(function(e){return{changeFilter:function(t){e(C.changeFilterType(t))},setFilteredTickets:function(t,c){e(C.filteredTickets(t,c))}}}))((function(e){var t=e.tickets,c=e.item,r=e.activeFilterType,s=e.changeFilter,i=e.setFilteredTickets;return Object(n.jsxs)("div",{className:"transfer__checkbox checkbox",children:[Object(n.jsx)("input",{id:c.value,className:"checkbox__input",name:"count-transfer",type:"checkbox",value:c.value,defaultChecked:c.checked,onChange:function(e){return function(e,c){e.target.checked?r.includes(c)||r.push(c):r.includes(c)&&(r=r.filter((function(e){return e!==c}))),s(r),i(t,r)}(e,c.count)}}),Object(n.jsx)("label",{htmlFor:c.value,className:"checkbox__label",children:c.title})]})}));var H=function(){return Object(n.jsxs)("div",{className:"filter__transfer transfer",children:[Object(n.jsx)("p",{className:"transfer__title",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}),Object(n.jsx)("form",{className:"transfer__form",children:Object.keys(k).map((function(e){return Object(n.jsx)(w,{item:k[e]},k[e].title)}))})]})},M=c(10),G=c.n(M);var K=Object(l.b)((function(e){return{activeSortType:m(e)}}),(function(e){return{changeActiveSortType:function(t){return e(C.changeSortType(t))}}}))((function(e){var t=e.activeSortType,c=e.changeActiveSortType,r=function(e){c(e)};return Object(n.jsxs)("div",{className:"filter__sort",children:[Object(n.jsx)("button",{onClick:function(){return r(x)},className:G()({"filter__sort-button":!0,"filter__sort-button--active":t===x}),type:"button",children:"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439"}),Object(n.jsx)("button",{onClick:function(){return r(g)},className:G()({"filter__sort-button":!0,"filter__sort-button--active":t===g}),type:"button",children:"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439"})]})})),Y=(c(58),c(11)),B=c.n(Y);var J=function(e){var t=e.segment,c=t.origin,r=t.destination,s=t.date,i=t.stops,a=t.duration,l=new Date(s);return l.setMinutes(l.getMinutes()+a),Object(n.jsxs)("li",{className:"tickets__transfers-item",children:[Object(n.jsxs)("div",{className:"tickets__transfers-fields",children:[Object(n.jsxs)("span",{className:"tickets__transfers-field",children:[c," \u2013 ",r]}),Object(n.jsxs)("span",{className:"tickets__transfers-field",children:[B()(new Date(s)).format("hh:mm")," \u2013 ",B()(new Date(l)).format("hh:mm")]})]}),Object(n.jsxs)("div",{className:"tickets__transfers-fields",children:[Object(n.jsx)("span",{className:"tickets__transfers-field",children:"\u0412 \u043f\u0443\u0442\u0438"}),Object(n.jsx)("span",{className:"tickets__transfers-field",children:O(a)})]}),Object(n.jsxs)("div",{className:"tickets__transfers-fields",children:[Object(n.jsx)("span",{className:"tickets__transfers-field",children:i.length?"".concat(i.length," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"):"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}),i.length?Object(n.jsx)("span",{className:"tickets__transfers-field",children:i.join(", ")}):""]})]})};var P=function(e){var t=e.segments;return Object(n.jsx)("ul",{className:"tickets__transfers",children:t.map((function(e,t){return Object(n.jsx)(J,{segment:e},t)}))})};var W=function(e){var t=e.ticket,c=t.price,r=t.carrier,s=t.segments;return Object(n.jsx)("li",{className:"tickets__item",children:Object(n.jsxs)("div",{className:"tickets__link",children:[Object(n.jsxs)("div",{className:"tickets__item-header",children:[Object(n.jsxs)("span",{className:"tickets__item-cost",children:[String(c).replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 ")," \u0420 "]}),Object(n.jsx)("img",{className:"tickets__item-carrier",src:"https://pics.avs.io/99/36/".concat(r,".png"),alt:r})]}),Object(n.jsx)(P,{segments:s})]})})},$=(c(60),c.p+"static/media/2.d7d45923.svg"),q=function(){return Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("img",{src:$,alt:"preloader"})})};var U=Object(l.b)((function(e){return{tickets:h(e),filteredTickets:b(e),activeSortType:m(e)}}))((function(e){var t=e.tickets,c=e.filteredTickets,s=e.activeSortType,i=c?c.splice(0,5):t.splice(0,5);return i=s===x?i.sort((function(e,t){return e.price-t.price})):i.sort((function(e,t){return e.segments[0].duration+e.segments[1].duration-(t.segments[0].duration+t.segments[1].duration)})),Object(n.jsx)(r.Fragment,{children:t.length?c&&0===c.length?Object(n.jsx)("p",{children:"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}):Object(n.jsx)("ul",{className:"filter__result-list tickets",children:i.map((function(e,t){return Object(n.jsx)(W,{ticket:e},t)}))}):Object(n.jsx)(q,{})})}));var z=function(){return Object(n.jsxs)("div",{className:"filter__result",children:[Object(n.jsx)(K,{}),Object(n.jsx)(U,{})]})};var Q=function(){return Object(n.jsxs)("section",{className:"filter",children:[Object(n.jsx)(H,{}),Object(n.jsx)(z,{})]})};var V=function(){return Object(n.jsx)("main",{className:"page-main",children:Object(n.jsx)(Q,{})})},X=c.p+"static/media/logo.8bb77c6b.svg";var Z=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("header",{className:"page-header",children:Object(n.jsx)("img",{src:X,alt:"\u041b\u043e\u0433\u043e"})}),Object(n.jsx)(V,{})]})})},ee=c(25),te=Object(a.combineReducers)(Object(ee.a)({},j.DATA,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:var c=[].concat(Object(_.a)(e.tickets),Object(_.a)(t.payload));return v(e,{tickets:c});case A:return v(e,{isLoading:t.payload});case E:case S:return v(e,{isError:t.payload});case R:return v(e,{filteredTickets:t.payload});case F:return v(e,{activeFilterType:t.payload});case L:return v(e,{activeSortType:t.payload});case D:return v(e,{tickets:t.payload});default:return e}}))),ce=function(){var e=d.a.create({baseURL:"https://front-test.beta.aviasales.ru",timeout:5e3});return e.interceptors.response.use((function(e){return e}),(function(e){throw e})),e}(),ne=Object(a.createStore)(te,Object(f.composeWithDevTools)(Object(a.applyMiddleware)(o.a.withExtraArgument(ce))));ne.dispatch(I()),i.a.render(Object(n.jsx)(l.a,{store:ne,children:Object(n.jsx)(Z,{})}),document.querySelector("#root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.da7c91db.chunk.js.map
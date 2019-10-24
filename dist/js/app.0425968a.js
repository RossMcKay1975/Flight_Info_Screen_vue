(function(t){function e(e){for(var r,l,o=e[0],c=e[1],f=e[2],h=0,s=[];h<o.length;h++)l=o[h],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&s.push(i[l][0]),i[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(s.length)s.shift()();return a.push.apply(a,f||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},i={app:0},a=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var f=0;f<o.length;f++)e(o[f]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"149d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"main-container"},[n("h1",[t._v("Flight Information Screen")]),t._l(t.flights,(function(t){return n("flights-table",{attrs:{flight:t}})}))],2)])},a=[],l=(n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[t._m(0),n("tbody",[n("tr",[n("td",[n("flight-image",{attrs:{imageUrl:t.flight.Image}})],1),n("td",[t._v(" "+t._s(t.flight.FlightNo)+" ")]),n("td",[t._v(" "+t._s(t.flight.Date)+" ")]),n("td",[t._v(" "+t._s(t.flight.Time)+" ")]),n("td",[t._v(" "+t._s(t.flight.ArrDep)+" ")]),n("td",[t._v(" "+t._s(t.flight.PortOfCallA)+" ")]),n("td",[t._v(" "+t._s(t.flight.Status)+" ")]),n("td",[t._v(" "+t._s(t.flight.OtherInfo)+" ")]),n("td",[t._v(" "+t._s(t.flight.Additional)+" ")]),n("td",[t._v(" "+t._s(t.flight.dateTime)+" ")]),n("td",[t._v(" "+t._s(t.flight.airlineCode)+" ")]),n("td",[t._v(" "+t._s(t.flight.ParentFlight)+" ")]),n("td",[t._v(" "+t._s(t.flight.Gate)+" ")]),n("td",[t._v(" "+t._s(t.flight.ArrHall)+" ")]),n("td",[t._v(" "+t._s(t.flight.Active)+" ")])])])])}),o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th"),n("th",[t._v(" Flight No ")]),n("th",[t._v(" Date ")]),n("th",[t._v(" Scheduled ")]),n("th",[t._v(" Arr/Dep ")]),n("th",[t._v(" Origin/Destination Airport ")]),n("th",[t._v(" Status ")]),n("th",[t._v(" Other Info ")]),n("th",[t._v(" Additional Info ")]),n("th",[t._v(" Scheduled Date Time ")]),n("th",[t._v(" Airline Code ")]),n("th",[t._v(" Parent Flight ")]),n("th",[t._v(" Gate ")]),n("th",[t._v(" Arrival Hall ")]),n("th",[t._v(" Flight Active ")])])])}],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{attrs:{src:t.checkForImage}})},f=[],u=n("c882"),h=n.n(u),s={name:"flight-image",props:["imageUrl"],computed:{checkForImage:function(){return void 0!=this.imageUrl?this.imageUrl:h.a}}},d=s,p=(n("9b63"),n("2877")),g=Object(p["a"])(d,c,f,!1,null,"dd659bf6",null),v=g.exports,_={name:"flights-table",props:["flight"],components:{"flight-image":v}},m=_,b=(n("65dd"),Object(p["a"])(m,l,o,!1,null,"ee041672",null)),y=b.exports,O={name:"app",data:function(){return{flights:[],timer:"",selectedFlight:null}},components:{"flights-table":y},created:function(){this.fetchData(),this.timer=setInterval(this.fetchData(),5e3)},methods:{fetchData:function(){var t=this;fetch("https://kabrudle.edinburghairport.com/api/flights/all").then((function(t){return t.json()})).then((function(e){return t.flights=e}))}}},j=O,w=(n("034f"),Object(p["a"])(j,i,a,!1,null,null,null)),A=w.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(A)}}).$mount("#app")},"65dd":function(t,e,n){"use strict";var r=n("d2a7"),i=n.n(r);i.a},"85ec":function(t,e,n){},"9b63":function(t,e,n){"use strict";var r=n("149d"),i=n.n(r);i.a},c882:function(t,e,n){t.exports=n.p+"img/noimgfnd.5d6ac57a.jpg"},d2a7:function(t,e,n){}});
//# sourceMappingURL=app.0425968a.js.map
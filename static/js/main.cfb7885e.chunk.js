(this["webpackJsonpcode-challenge"]=this["webpackJsonpcode-challenge"]||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(40),r=n.n(i),s=(n(53),n(9)),u=(n(54),n(55),n(3));function o(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"i'm weekly available at"}),Object(u.jsx)("p",{children:"Note: Currently availability sliders are disabled. Coming soon!"})]})}var l=n(82),d=n(14),j=n(38),b=n(85),h=n(83);function f(){for(var e=[],t=[2,6,10,14],n=0;n<=170;n+=10){var c={};c.value=n,e.push(c)}return e.forEach((function(e,n){t.includes(n)?e.label=6+n:e.label="|"})),e}function O(e){for(var t=[],n=[],c=6;c<=23;c++)t.push(c.toString()+":00");for(var a=0;a<=170;a+=10)n.push(a);var i=[];return n.map((function(n,c){if(e.includes(n))return i.push(t[c])})),i}function x(e){var t=e.disableTime,n=e.day,i=Object(c.useContext)(p),r=i.schedule,o=i.setSchedule,l=a.a.useState([100,140]),d=Object(s.a)(l,2),x=d[0],v=d[1],m=a.a.useState(O(x)),g=Object(s.a)(m,2),y=g[0],k=g[1];console.log(n,r);var C=function(e,t,n){Array.isArray(t)&&(0===n?(v([Math.min(t[0],x[1]-10),x[1]]),k(O(x)),o((function(e){return Object(j.a)(Object(j.a)({},e),{},{day:y})}))):(v([x[0],Math.max(t[1],x[0]+10)]),k(O(x)),o()))};return Object(u.jsxs)(b.a,{sx:{width:1e3},children:[t?Object(u.jsx)(h.a,{getAriaLabel:function(){return"Minimum distance"},min:0,max:170,step:10,value:x,onChange:C,marks:f(),disableSwap:!0}):Object(u.jsx)(h.a,{getAriaLabel:function(){return"Minimum distance"},min:0,max:170,step:10,value:x,onChange:C,marks:f(),disableSwap:!0,disabled:!0}),Object(u.jsx)(b.a,{sx:{m:1}})]})}n(61);function v(e){var t=e.day,n=Object(c.useContext)(p),a=n.checkDay,i=n.setCheckDay;function r(e){return a.includes(e)}return Object(u.jsxs)("div",{className:"weekday",children:[Object(u.jsxs)("div",{className:"containerCheckbox",children:[Object(u.jsx)("input",{type:"checkbox",id:t,checked:r(t),onChange:function(){return function(e){i((function(t){return r(e)?t.filter((function(t){return t!==e})):[].concat(Object(d.a)(t),[e])}))}(t)}}),Object(u.jsx)("label",{htmlFor:t,children:t[0].toUpperCase()+t.slice(1)})]}),Object(u.jsx)(x,{disableTime:r(t),day:t})]})}n(62);function m(){var e=Object(c.useContext)(p).daysOfWeek;return Object(u.jsx)("div",{children:e.map((function(e){return Object(u.jsx)(v,{day:e},e)}))})}var p=a.a.createContext();var g=function(){var e=["mon","tue","wed","thu","fri","sat","sun"],t=Object(c.useState)(e),n=Object(s.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)({mon:[],tue:[],wed:[],thu:[],fri:[],sat:[],sun:[]}),d=Object(s.a)(r,2),j=d[0],b=d[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("div",{children:Object(u.jsxs)(p.Provider,{value:{daysOfWeek:e,checkDay:a,setCheckDay:i,schedule:j,setSchedule:b},children:[Object(u.jsx)(o,{}),Object(u.jsx)(m,{}),Object(u.jsx)(l.a,{variant:"contained",onClick:function(){0===Object.keys(j).length?console.log("No data"):console.log(j)},children:"Save"})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),y()}},[[63,1,2]]]);
//# sourceMappingURL=main.cfb7885e.chunk.js.map
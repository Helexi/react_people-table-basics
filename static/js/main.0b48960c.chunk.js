(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(15),r=n.n(c),a=n(18),s=(n(44),n(3)),i=n(0),j=(n(45),n(1)),o=function(){return Object(j.jsx)("div",{className:"home",children:"HOME PAGE"})},l=n(29),d=n(8),b=n(24),h=n.n(b),u=function(){var e=Object(l.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=n(57),p=function(e){var t=e.person;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.name}),Object(j.jsx)("td",{children:t.sex}),Object(j.jsx)("td",{children:t.born}),Object(j.jsx)("td",{children:t.died}),Object(j.jsx)("td",{children:t.motherName||"no information"}),Object(j.jsx)("td",{children:t.fatherName||"no information"})]})},x=function(e){var t=e.people;return Object(j.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(p,{person:e},e.slug)}))})]})},f=(n(48),function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(l.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){r()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"peoplePage-title",children:"People Page"}),n?Object(j.jsx)(x,{people:n}):Object(j.jsx)("div",{children:"Loading..."})]})}),m=n(58),v=function(){return Object(j.jsxs)("div",{style:{color:"Blue",fontSize:"20px",marginTop:"20px"},children:["PAGE NOT FOUND RETURN"," ",Object(j.jsx)(m.a,{variant:"primary",size:"lg",active:!0,children:Object(j.jsx)(a.b,{style:{textDecoration:"none",color:"Red"},to:"/",children:"HOME"})})]})},N=n(60),g=n(59),k=n(61),y=(n(49),function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)(N.a,{bg:"dark",variant:"dark",children:Object(j.jsx)(g.a,{children:Object(j.jsxs)(k.a,{className:"me-auto",children:[Object(j.jsx)(k.a.Link,{children:Object(j.jsx)(a.b,{className:"link",to:"/",children:"Home Page"})}),Object(j.jsx)(k.a.Link,{children:Object(j.jsx)(a.b,{className:"link",to:"/people",children:"People page"})})]})})})})}),E=function(){var e=Object(s.f)([{path:"/",element:Object(j.jsx)(o,{})},{path:"/people",element:Object(j.jsx)(f,{})},{path:"*",element:Object(j.jsx)(v,{})}]);return Object(j.jsxs)("div",{children:[Object(j.jsx)(y,{}),e]})};r.a.render(Object(j.jsx)(a.a,{children:Object(j.jsx)(E,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.0b48960c.chunk.js.map
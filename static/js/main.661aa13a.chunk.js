(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(15),r=n.n(c),s=n(18),a=(n(44),n(3)),j=n(0),i=(n(45),n(1)),o=function(){return Object(i.jsx)("div",{className:"home",children:"HOME PAGE"})},l=n(29),b=n(8),d=n(24),h=n.n(d),x=function(){var e=Object(l.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=n(57),p=function(e){var t=e.person,n=t.name,c=t.sex,r=t.born,s=t.died,a=t.fatherName,j=t.motherName;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:c}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:j||"no information"}),Object(i.jsx)("td",{children:a||"no information"})]})},u=function(e){var t=e.people;return Object(i.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(p,{person:e},e.slug)}))})]})},f=(n(48),function(){var e=Object(j.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(l.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.useEffect)((function(){r()}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"peoplePage-title",children:"People Page"}),n?Object(i.jsx)(u,{people:n}):Object(i.jsx)("div",{children:"Loading..."})]})}),m=n(58),v=function(){return Object(i.jsxs)("div",{style:{color:"Blue",fontSize:"20px",marginTop:"20px"},children:["PAGE NOT FOUND RETURN"," ",Object(i.jsx)(m.a,{variant:"primary",size:"lg",active:!0,children:Object(i.jsx)(s.b,{style:{textDecoration:"none",color:"Red"},to:"/",children:"HOME"})})]})},N=n(60),g=n(59),k=n(61),y=(n(49),function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)(N.a,{bg:"dark",variant:"dark",children:Object(i.jsx)(g.a,{children:Object(i.jsxs)(k.a,{className:"me-auto",children:[Object(i.jsx)(k.a.Link,{children:Object(i.jsx)(s.b,{className:"link",to:"/",children:"Home Page"})}),Object(i.jsx)(k.a.Link,{children:Object(i.jsx)(s.b,{className:"link",to:"/people",children:"People page"})})]})})})})}),E=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(y,{}),Object(i.jsxs)(a.d,{children:[Object(i.jsx)(a.b,{path:"/",element:Object(i.jsx)(o,{})}),Object(i.jsx)(a.b,{path:"/people",element:Object(i.jsx)(f,{})}),Object(i.jsx)(a.b,{path:"*",element:Object(i.jsx)(v,{})}),Object(i.jsx)(a.b,{path:"/home",element:Object(i.jsx)(a.a,{to:"/",replace:!0})})]})]})};r.a.render(Object(i.jsx)(s.a,{children:Object(i.jsx)(E,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.661aa13a.chunk.js.map
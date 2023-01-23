(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(4),l=c(2),r=c(3),i=c.n(r),o=c(1),d=(c(12),c(13),c(0)),j=function(e){var t=e.visibleTodos,c=e.handleClickModalButton,s=e.isModalOpen,a=e.personalTodo;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(d.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(d.jsx)("td",{className:"is-vcentered",children:Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}):Object(d.jsx)("td",{className:"is-vcentered"}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:s&&a===e?"far fa-eye-slash":"far fa-eye"})})})})]},e.id)}))})]})},u=function(e){var t=e.handleSelectedTodos,c=e.selectedTodos,s=e.searchQuery,a=e.handleSearchQuery,n=e.setSearchQuery;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return t(e.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return n("")}})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(15);var h=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.personalTodo,c=e.onCloseModal,s=Object(o.useState)(""),a=Object(l.a)(s,2),r=a[0],j=a[1],u=Object(o.useState)(!1),O=Object(l.a)(u,2),m=O[0],x=O[1],f=function(){var e=Object(n.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,s=t.userId,b("/users/".concat(s));case 3:c=e.sent,j(c.name),x(!1);case 6:case"end":return e.stop()}var s}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){f()}),[]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),m||!r?Object(d.jsx)(h,{}):Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:Sincere@april.biz",children:r})]})]})]})]})},m=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!1),r=Object(l.a)(a,2),m=r[0],x=r[1],f=Object(o.useState)(null),p=Object(l.a)(f,2),v=p[0],N=p[1],y=Object(o.useState)(!1),g=Object(l.a)(y,2),S=g[0],k=g[1],T=Object(o.useState)("all"),w=Object(l.a)(T,2),C=w[0],M=w[1],Q=Object(o.useState)(""),B=Object(l.a)(Q,2),_=B[0],E=B[1],L=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,b("/todos");case 3:t=e.sent,s(t),x(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){L()}),[]);var I=c.filter((function(e){var t=e.title.toLowerCase().includes(_.toLowerCase());switch(C){case"active":return!1===e.completed&&t;case"completed":return!0===e.completed&&t}return t}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(u,{selectedTodos:C,handleSelectedTodos:function(e){M(e)},searchQuery:_,handleSearchQuery:function(e){E(e)},setSearchQuery:E})}),m?Object(d.jsx)(h,{}):Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(j,{visibleTodos:I,handleClickModalButton:function(e){N(e),k(!0)},isModalOpen:S,personalTodo:v})})]})})}),v&&S&&Object(d.jsx)(O,{personalTodo:v,onCloseModal:function(){k(!1),N(null)}})]})};a.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6be6f105.chunk.js.map
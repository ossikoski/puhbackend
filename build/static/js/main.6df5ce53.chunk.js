(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{16:function(e,n,t){e.exports=t(39)},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(14),l=t.n(r),c=t(15),u=t(2),i=function(e){var n=e.handleFilterChange;return o.a.createElement("div",null,"filter shown with:",o.a.createElement("input",{onChange:n}))},s=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,r=e.newNumber,l=e.handleNumberChange;return o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,"name:",o.a.createElement("input",{value:t,onChange:a})),o.a.createElement("div",null,"number:",o.a.createElement("input",{value:r,onChange:l})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},d=function(e){var n=e.person,t=e.deletePerson;return o.a.createElement("div",null,console.log("id",n.id),n.name," ",n.number,o.a.createElement("button",{onClick:t},"delete"))},m=function(e){var n=e.message,t=n[0];return null===n[1]?null:t?o.a.createElement("div",{className:"error"},n):o.a.createElement("div",{className:"notification"},n)},f=t(3),h=t.n(f),g="http://localhost:3001/api/persons",b=function(){var e=h.a.get(g);return console.log("request.body",e.body),e.then((function(e){return e.data}))},v=function(e){return h.a.post(g,e).then((function(e){return e.data}))},E=function(e,n){return h.a.put("".concat(g,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return h.a.delete("".concat(g,"/").concat(e)).then((function(e){return e.data}))},w=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],l=Object(a.useState)(""),f=Object(u.a)(l,2),h=f[0],g=f[1],w=Object(a.useState)(""),C=Object(u.a)(w,2),j=C[0],N=C[1],O=Object(a.useState)(""),y=Object(u.a)(O,2),D=y[0],T=y[1],P=Object(a.useState)([!1,null]),k=Object(u.a)(P,2),S=k[0],L=k[1],I=t.filter((function(e){return e.name.toLowerCase().includes(D)}));console.log("personstoshow",I),Object(a.useEffect)((function(){console.log("effect"),b().then((function(e){console.log("initialpersons",e),r(e)}))}),[]),console.log("persons after render",t);return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(m,{message:S}),o.a.createElement(i,{handleFilterChange:function(e){console.log(e.target.value.toLowerCase()),T(e.target.value.toLowerCase())}}),o.a.createElement("h3",null,"add a new"),o.a.createElement(s,{addPerson:function(e){e.preventDefault();var n={name:h,number:j},a=t.map((function(e){return e.name}));console.log("Does include",a.includes(h));if(a.includes(h)){if(window.confirm("".concat(h," is already added to phonebook, replace the old number with a new one?"))){var o,l=0,u=Object(c.a)(t);try{for(u.s();!(o=u.n()).done;){var i=o.value;i.name===h&&(l=i.id)}}catch(s){u.e(s)}finally{u.f()}E(l,n).then((function(e){console.log("UPDATE",e),r(t.map((function(n){return n.id!==l?n:e}))),L([!1,"".concat(h," number changed to ").concat(j)]),setTimeout((function(){L([!1,null])}),5e3)})).catch((function(e){L([!0,"".concat(h," has already been deleted from the server")]),r(t.filter((function(e){return e.id!==l}))),setTimeout((function(){L([!1,null])}),5e3)}))}}else v(n).then((function(e){console.log("returnedPerson:",e),r(t.concat(e)),g(""),N("")})),L([!1,"Added ".concat(h)]),setTimeout((function(){L([!1,null])}),5e3)},newName:h,handleNameChange:function(e){console.log(e.target.value),g(e.target.value)},newNumber:j,handleNumberChange:function(e){console.log(e.target.value),N(e.target.value)}}),o.a.createElement("h3",null,"Numbers"),I.map((function(e,n){return o.a.createElement(d,{key:n,person:e,deletePerson:function(){return function(e){console.log("ID",e);var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name," ?"))&&(console.log("DELETING"),p(e).then((function(){r(t.filter((function(n){return n.id!==e}))),console.log("DELETED"),L([!1,"Deleted ".concat(n.name)]),setTimeout((function(){L([!1,null])}),5e3)})).catch((function(a){L([!0,"".concat(n.name," has already been deleted from the server")]),r(t.filter((function(n){return n.id!==e}))),setTimeout((function(){L([!1,null])}),5e3)})))}(e.id)}})})))};t(38);l.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6df5ce53.chunk.js.map
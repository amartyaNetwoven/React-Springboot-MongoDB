(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,a){e.exports=a(342)},342:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"clearContact",function(){return w}),a.d(n,"showContact",function(){return k}),a.d(n,"showImage",function(){return A}),a.d(n,"loadContacts",function(){return D}),a.d(n,"changeContact",function(){return x}),a.d(n,"updateContact",function(){return U});var c=a(0),r=a.n(c),o=a(23),l=a.n(o),i=a(5),s=a(25),m=(a(139),a(6)),u=a(7),d=a(10),p=a(8),h=a(11),f=a(12),E=a.n(f),b=a(14),v=a(9),g="CLEAR_CONTACT",y="SHOW_CONTACT",C="CHANGE_CONTACT",O="UPDATE_CONTACT",N="LOAD_CONTACTS",j="SHOW_IMAGE",w=function(e){return{type:g,payload:e}},k=function(e){return{type:y,payload:e}},A=function(e){return{type:j,payload:e}},D=function(e){return{type:N,payload:e}},x=function(e){return{type:C,payload:e}},U=function(e){return{type:O,payload:e}},S=a(132),T=a.n(S);a(204);function I(e,t){return console.log(e,t),r.a.createElement("section",null,r.a.createElement(i.b,{to:"/show/".concat(t.id)},r.a.createElement("img",{className:"contact-icon",src:"/file/".concat(t.id),alt:""})," ",e))}var _=function(e){function t(e){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/contacts").then(function(t){e.props.loadContacts({contacts:t.data})})}},{key:"render",value:function(){var e=[{dataField:"name",text:"Name",formatter:I},{dataField:"address",text:"Address"},{dataField:"city",text:"City"},{dataField:"email",text:"Email"},{dataField:"phone",text:"Phone"}];return r.a.createElement("section",{className:"col-12 col-sm-12 col-md-12 col-lg-12"},this.props.contacts.length>0&&r.a.createElement(T.a,{keyField:"_id",data:this.props.contacts,columns:e,bordered:!1,striped:!0,hover:!0,condensed:!0,headerClasses:"header-class"}))}}]),t}(r.a.Component),F=Object(b.b)(function(e){return{contacts:e.contacts}},function(e){return Object(v.a)(n,e)})(_),M=(a(55),function(e){function t(e){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark "},r.a.createElement(i.b,{className:"navbar-brand",to:"/"},"CMS"),r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(i.b,{to:"/"},r.a.createElement("i",{className:"fa fa-tachometer","aria-hidden":"true"})," Dashboard")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/create"}," ",r.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})," Add Contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/users"}," ",r.a.createElement("i",{className:"fa fa-user","aria-hidden":"true"})," Add Users"))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",onClick:function(){return window.location.pathname="/logout"}},"Logout ",r.a.createElement("i",{className:"fa fa-sign-out","aria-hidden":"true"})))))}}]),t}(c.Component)),P=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={contacts:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(M,null),r.a.createElement(F,null))}}]),t}(c.Component),L=a(31),W={contacts:[],showContactForm:!1,showDeleteButton:!1,imageUrl:"",contact:{id:"",name:"",address:"",city:"",phone:"",email:""}};var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,a=Object(L.a)({},e);if(t.type===N)return a.contacts=t.payload.contacts,a;if(t.type===y)return a.contact=t.payload.contact,a.imageUrl="/file/".concat(t.payload.contact.id),a;if(t.type===j)return a.imageUrl="/file/".concat(t.payload.contactId),a;if(t.type===C)return a.contact=t.payload.contact,a.contact[t.payload.field]=t.payload.value,a;if(t.type===O){var n=t.payload,c=n.contacts.findIndex(function(e){return e._id===n.updated_contact._id});return a.contacts[c]=n.updated_contact,a.showContactForm=t.payload.showContactForm,a}return t.type===g?(a.contact={id:"",name:"",address:"",city:"",phone:"",email:""},a):a},H=Object(v.b)(B);var G=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onChange=function(e,t){var n=Object(L.a)({},a.props.contact);a.props.changeContact({contact:n,field:e,value:t})},a.onSubmit=function(e){e.preventDefault();var t=a.props.contact,n=t.name,c=t.address,r=t.city,o=t.phone,l=t.email;E.a.put("/contacts/"+a.props.contact.id,{name:n,address:c,city:r,phone:o,email:l}).then(function(e){a.props.clearContact(),a.props.history.push("/logo/"+a.props.match.params.id)})},a.state={contact:{},selectedFile:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/contacts/"+this.props.match.params.id).then(function(t){e.props.showContact({contact:t.data})})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement(M,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},"EDIT Contact")),r.a.createElement("div",{className:"panel-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"name"},"Name:"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",value:this.props.contact.name,onChange:function(t){return e.onChange("name",t.target.value)},placeholder:"Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"title"},"Address:"),r.a.createElement("input",{type:"text",className:"form-control",name:"address",value:this.props.contact.address,onChange:function(t){return e.onChange("address",t.target.value)},placeholder:"Address"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"author"},"City:"),r.a.createElement("input",{type:"text",className:"form-control",name:"city",value:this.props.contact.city,onChange:function(t){return e.onChange("city",t.target.value)},placeholder:"City"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"published_date"},"Phone Number:"),r.a.createElement("input",{type:"text",className:"form-control",name:"phone",value:this.props.contact.phone,onChange:function(t){return e.onChange("phone",t.target.value)},placeholder:"Phone Number"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"description"},"Email:"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",value:this.props.contact.email,onChange:function(t){return e.onChange("email",t.target.value)},placeholder:"Email Address"})),r.a.createElement("button",{type:"submit",className:"btn btn-info"},"Update"))))))}}]),t}(c.Component),J=Object(b.b)(function(e){return{contact:e.contact,imageUrl:e.imageUrl}},function(e){return Object(v.a)(n,e)})(G);var R=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onChange=function(e,t){var n=Object(L.a)({},a.props.contact);a.props.changeContact({contact:n,field:e,value:t})},a.onSubmit=function(e){e.preventDefault();var t=a.props.contact,n=t.name,c=t.address,r=t.city,o=t.phone,l=t.email;E.a.post("/contacts",{name:n,address:c,city:r,phone:o,email:l}).then(function(e){a.props.clearContact(),a.props.history.push("/")})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.clearContact()}},{key:"render",value:function(){var e=this,t=this.props.contact,a=t.name,n=t.address,c=t.city,o=t.phone,l=t.email;return r.a.createElement("section",null,r.a.createElement(M,null),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"panel panel-default"},r.a.createElement("div",{class:"panel-heading"},r.a.createElement("h3",{class:"panel-title"},"ADD CONTACT")),r.a.createElement("div",{class:"panel-body"},r.a.createElement("h4",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{class:"glyphicon glyphicon-th-list","aria-hidden":"true"})," Contacts List")),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"isbn"},"Name:"),r.a.createElement("input",{type:"text",class:"form-control",name:"name",value:a,onChange:function(t){return e.onChange("name",t.target.value)},placeholder:"Name"})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"title"},"Address:"),r.a.createElement("input",{type:"text",class:"form-control",name:"address",value:n,onChange:function(t){return e.onChange("address",t.target.value)},placeholder:"Address"})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"author"},"City:"),r.a.createElement("input",{type:"text",class:"form-control",name:"city",value:c,onChange:function(t){return e.onChange("city",t.target.value)},placeholder:"City"})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"published_date"},"Phone:"),r.a.createElement("input",{type:"text",class:"form-control",name:"phone",value:o,onChange:function(t){return e.onChange("phone",t.target.value)},placeholder:"Phone Number"})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"publisher"},"Email:"),r.a.createElement("input",{type:"email",class:"form-control",name:"email",value:l,onChange:function(t){return e.onChange("email",t.target.value)},placeholder:"Email Address"})),r.a.createElement("button",{type:"submit",class:"btn btn-info"},"Submit"))))))}}]),t}(c.Component),$=Object(b.b)(function(e){return{contact:e.contact}},function(e){return Object(v.a)(n,e)})(R);a(206);var q=function(e){function t(e){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/contacts/"+this.props.match.params.id).then(function(t){var a=t.data,n={id:a.id,name:a.name,address:a.address,city:a.city,phone:a.phone,email:a.email,contactImage:a.contactImage};e.props.showContact({contact:n})})}},{key:"delete",value:function(e){var t=this;console.log(e),E.a.delete("/contacts/"+e).then(function(e){t.props.history.push("/")})}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(M,null),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"panel panel-default"},r.a.createElement("div",{class:"panel-heading"},r.a.createElement("h3",{class:"panel-title"},"Contact Details")),r.a.createElement("div",{class:"panel-body"},r.a.createElement("dl",null,r.a.createElement("dd",null,this.props.imageUrl&&r.a.createElement("img",{className:"contact-image",src:this.props.imageUrl,alt:"contact"})),r.a.createElement("dt",null,"Name:"),r.a.createElement("dd",null,this.props.contact.name),r.a.createElement("dt",null,"Address:"),r.a.createElement("dd",null,this.props.contact.address),r.a.createElement("dt",null,"City:"),r.a.createElement("dd",null,this.props.contact.city),r.a.createElement("dt",null,"Phone Number:"),r.a.createElement("dd",null,this.props.contact.phone),r.a.createElement("dt",null,"Email Address:"),r.a.createElement("dd",null,this.props.contact.email)),r.a.createElement(i.b,{to:"/edit/".concat(this.props.contact.id),className:"btn btn-success"},"Edit"),"\xa0",r.a.createElement("button",{onClick:this.delete.bind(this,this.props.contact.id),className:"btn btn-danger"},"Delete")))))}}]),t}(c.Component),z=Object(b.b)(function(e){return{contact:e.contact,imageUrl:e.imageUrl}},function(e){return Object(v.a)(n,e)})(q);var K=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onChangeContactImage=function(e){var t=new FormData;t.append("file",e.target.files[0]);var n=a.props.match.params.id;E.a.post("/contact/upload/"+n,t,{}).then(function(e){a.props.history.push("/")})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.showImage({contactId:this.props.match.params.id})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement(M,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},"Edit Contact Image")),r.a.createElement("div",{className:"panel-body"},r.a.createElement("form",{onSubmit:this.onSubmit,enctype:"multipart/form-data"},r.a.createElement("div",{className:"form-group"},this.props.imageUrl&&r.a.createElement("img",{className:"contact-image",src:this.props.imageUrl,alt:"contact"}),r.a.createElement("input",{type:"file",name:"file",onChange:function(t){return e.onChangeContactImage(t)}})))))))}}]),t}(c.Component),Q=Object(b.b)(function(e){return{contact:e.contact,imageUrl:e.imageUrl}},function(e){return Object(v.a)(n,e)})(K);var V=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(){E.a.post("/users",{username:"test",password:"test",role:"user"}).then(function(e){a.props.history.push("/")})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.clearContact()}},{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement(M,null),r.a.createElement("button",{type:"button",class:"btn btn-info",onClick:function(){return e.onSubmit()}},"Add User"))}}]),t}(c.Component),X=Object(b.b)(function(e){return{contact:e.contact}},function(e){return Object(v.a)(n,e)})(V);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b.a,{store:H},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:P}),r.a.createElement(s.a,{path:"/edit/:id",render:function(e){return r.a.createElement(J,e)}}),r.a.createElement(s.a,{path:"/create",component:$}),r.a.createElement(s.a,{path:"/show/:id",component:z}),r.a.createElement(s.a,{path:"/logo/:id",component:Q}),r.a.createElement(s.a,{path:"/users",component:X}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,t,a){}},[[134,1,2]]]);
//# sourceMappingURL=main.43440995.chunk.js.map
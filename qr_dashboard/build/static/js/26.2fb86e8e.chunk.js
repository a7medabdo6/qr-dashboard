(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[26],{1083:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return M}));var n=t(0),r=t.n(n),c=t(897),o=t(884),i=t(16),l=t(24),s=t(13),m=t(9),d=t(2),u=t(5),p=t(913),g=t(925),b=t(914),f=(t(958),t(70)),v=(Object(c.a)((function(e){return{root:{},option:{border:"1px solid ".concat(e.palette.divider),display:"flex",alignItems:"flex-start",padding:e.spacing(2),maxWidth:560,"& + &":{marginTop:e.spacing(2)}},selectedOption:{backgroundColor:u.a.grey[50]},optionRadio:{margin:-10},optionDetails:{marginLeft:e.spacing(2)}}})),t(94)),h=t(18),O=t(4),j=t.n(O),E=t(932),y=t(963),k=t(126),N=t(149),C=t.n(N),x=t(125),z=t.n(x),T=["className"],P=Object(c.a)((function(e){return{root:{},alert:{marginBottom:e.spacing(3)},formGroup:{marginBottom:e.spacing(3)},fieldGroup:{display:"flex",alignItems:"center"},fieldHint:{margin:e.spacing(1,0)},tags:{marginTop:e.spacing(1),"& > * + *":{marginLeft:e.spacing(1)}},flexGrow:{flexGrow:1},dateField:{"& + &":{marginLeft:e.spacing(2)}}}})),I=function(e){var a=e.className,t=Object(m.a)(e,T),c=P(),u={name:"",tag:"",tags:["Full-Time","ReactJS"],startDate:j()(),endDate:j()().add(1,"day")},O=r.a.useState("00:00"),N=Object(s.a)(O,2),x=N[0],I=N[1],S=function(e){I(e.target.value)},B=Object(n.useState)(Object(h.a)({},u)),G=Object(s.a)(B,2),w=G[0],D=G[1],H=Object(n.useState)(null),L=Object(s.a)(H,2),A=L[0],F=L[1],M=function(e,a,t){e.persist&&e.persist(),D((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(l.a)({},a,t))}))},V=Boolean(A),$="startDate"===A?j()():j()(w.startDate).add(1,"day"),J=w[A];return r.a.createElement(p.a,Object.assign({},t,{className:Object(d.a)(c.root,a)}),r.a.createElement(g.a,{title:"About this category"}),r.a.createElement(b.a,null,r.a.createElement("form",null,r.a.createElement(i.b,{className:c.alert,message:"Once you choose the Category name you can\u2019t change it unless you contact customer support."}),r.a.createElement("div",{className:c.formGroup},r.a.createElement(E.a,{fullWidth:!0,label:"Category Name",name:"name",onChange:function(e){return M(e,"name",e.target.value)},value:w.name,variant:"outlined"})),r.a.createElement("div",{className:c.formGroup},r.a.createElement("div",{className:c.fieldGroup},r.a.createElement(E.a,{className:c.flexGrow,label:"Category Tags",name:"tag",onChange:function(e){return M(e,"tag",e.target.value)},value:w.tag,variant:"outlined"}),r.a.createElement(o.a,{className:c.addButton,onClick:function(){D((function(e){var a=Object(h.a)({},e);return a.tag&&!a.tags.includes(a.tag)&&(a.tags=Object(v.a)(a.tags),a.tags.push(a.tag)),a.tag="",a}))},size:"small"},r.a.createElement(C.a,{className:c.addIcon}),"Add")),r.a.createElement(f.a,{className:c.fieldHint,variant:"body2"},"Tags will be colored depending the technology if the system recognises."),r.a.createElement("div",{className:c.tags},w.tags.map((function(e){return r.a.createElement(y.a,{deleteIcon:r.a.createElement(z.a,null),key:e,label:e,onDelete:function(){return function(e){D((function(a){var t=Object(h.a)({},a);return t.tags=t.tags.filter((function(a){return a!==e})),t}))}(e)}})})))),r.a.createElement("div",{className:c.formGroup},r.a.createElement("div",{className:c.fieldGroup},r.a.createElement(E.a,{id:"time",label:"Start Time",type:"time",variant:"outlined",value:x,onChange:S,className:c.dateField,InputLabelProps:{shrink:!0},inputProps:{step:300}}),r.a.createElement(E.a,{id:"time",label:"End Time",type:"time",variant:"outlined",value:x,onChange:S,className:c.dateField,InputLabelProps:{shrink:!0},inputProps:{step:300}}))))),r.a.createElement(k.a,{minDate:$,onAccept:function(e){D((function(a){return Object(h.a)(Object(h.a)({},a),{},Object(l.a)({},A,e))}))},onChange:function(){},onClose:function(){F(!1)},open:V,style:{display:"none"},value:J,variant:"dialog"}))},S=["className"],B=Object(c.a)((function(){return{root:{}}})),G=function(e){var a=e.className,t=Object(m.a)(e,S),n=B();return r.a.createElement("div",Object.assign({},t,{className:Object(d.a)(n.root,a)}),r.a.createElement(f.a,{component:"h2",gutterBottom:!0,variant:"overline"},"New Category"))},w=t(934),D=t(969),H=["className"],L=Object(c.a)((function(e){return{root:{},options:{marginTop:e.spacing(2),display:"flex",flexDirection:"column"}}})),A=function(e){var a=e.className,t=Object(m.a)(e,H),n=L();return r.a.createElement(p.a,Object.assign({},t,{className:Object(d.a)(n.root,a)}),r.a.createElement(g.a,{title:"Preferences"}),r.a.createElement(b.a,null,r.a.createElement(f.a,{gutterBottom:!0,variant:"h6"},"Privacy"),r.a.createElement("div",{className:n.options},r.a.createElement(w.a,{control:r.a.createElement(D.a,{color:"primary",defaultChecked:!0}),label:"Private Category"}))))},F=(Object(c.a)((function(){return{root:{}}})),Object(c.a)((function(){return{root:{}}})),Object(c.a)((function(e){return{root:{width:e.breakpoints.values.lg,maxWidth:"100%",margin:"0 auto",padding:e.spacing(3,3,6,3)},aboutAuthor:{marginTop:e.spacing(3)},aboutProject:{marginTop:e.spacing(3)},projectCover:{marginTop:e.spacing(3)},projectDetails:{marginTop:e.spacing(3)},preferences:{marginTop:e.spacing(3)},actions:{marginTop:e.spacing(3)}}}))),M=function(){var e=F();return r.a.createElement(i.k,{className:e.root,title:"Category Create"},r.a.createElement(G,null),r.a.createElement(I,{className:e.aboutProject}),r.a.createElement(A,{className:e.preferences}),r.a.createElement("div",{className:e.actions},r.a.createElement(o.a,{color:"primary",variant:"contained"},"Create Category")))}},969:function(e,a,t){"use strict";var n=t(1),r=t(6),c=t(0),o=(t(7),t(2)),i=t(287),l=t(40),s=Object(l.a)(c.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=Object(l.a)(c.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),d=t(17),u=Object(l.a)(c.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(10),g=t(8),b=c.createElement(m,null),f=c.createElement(s,null),v=c.createElement(u,null),h=c.forwardRef((function(e,a){var t=e.checkedIcon,l=void 0===t?b:t,s=e.classes,m=e.color,d=void 0===m?"secondary":m,u=e.icon,g=void 0===u?f:u,h=e.indeterminate,O=void 0!==h&&h,j=e.indeterminateIcon,E=void 0===j?v:j,y=e.inputProps,k=e.size,N=void 0===k?"medium":k,C=Object(r.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),x=O?E:g,z=O?E:l;return c.createElement(i.a,Object(n.a)({type:"checkbox",classes:{root:Object(o.a)(s.root,s["color".concat(Object(p.a)(d))],O&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:d,inputProps:Object(n.a)({"data-indeterminate":O},y),icon:c.cloneElement(x,{fontSize:void 0===x.props.fontSize&&"small"===N?N:x.props.fontSize}),checkedIcon:c.cloneElement(z,{fontSize:void 0===z.props.fontSize&&"small"===N?N:z.props.fontSize}),ref:a},C))}));a.a=Object(g.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(h)}}]);
//# sourceMappingURL=26.2fb86e8e.chunk.js.map
/*! For license information please see 18.b7284840.chunk.js.LICENSE.txt */
(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[18],{1099:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return V}));var a=r(24),n=r(0),o=r.n(n),i=r(19),c=r(897),l=r(913),s=r(914),u=r(70),d=r(916),h=r(918),m=r(928),p=r(962),f=r(983),v=r.n(f),y=r(54),g=r(16),b=r(982),w=r(18),E=r(13),x=r(9),O=r(271),j=r.n(O),k=r(2),N=r(932),L=r(969),z=r(894),C=r(884),S=r(42),_=["className"];function P(){P=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(N){c=function(e,t,r){return e[t]=r}}function l(e,t,r,a){var n=t&&t.prototype instanceof d?t:d,o=Object.create(n.prototype),i=new O(a||[]);return o._invoke=function(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return k()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=s(e,t,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=l;var u={};function d(){}function h(){}function m(){}var p={};c(p,n,(function(){return this}));var f=Object.getPrototypeOf,v=f&&f(f(j([])));v&&v!==t&&r.call(v,n)&&(p=v);var y=m.prototype=d.prototype=Object.create(p);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;this._invoke=function(n,o){function i(){return new t((function(a,i){!function a(n,o,i,c){var l=s(e[n],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=m,c(y,"constructor",m),c(m,"constructor",h),h.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new b(l(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,n,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return i.type="throw",i.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;x(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var T={firstName:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:32}},lastName:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:32}},email:{presence:{allowEmpty:!1,message:"is required"},email:!0,length:{maximum:64}},password:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:128}},policy:{presence:{allowEmpty:!1,message:"is required"},checked:!0}},H=Object(c.a)((function(e){return{root:{},fields:{margin:e.spacing(-1),display:"flex",flexWrap:"wrap","& > *":{flexGrow:1,margin:e.spacing(1)}},policy:{display:"flex",alignItems:"center"},policyCheckbox:{marginLeft:"-14px"},submitButton:{marginTop:e.spacing(2),width:"100%"}}})),I=function(e){var t=e.className,r=Object(x.a)(e,_),c=H(),l=Object(S.a)().history,s=Object(n.useState)({isValid:!1,values:{},touched:{},errors:{}}),d=Object(E.a)(s,2),m=d[0],p=d[1];Object(n.useEffect)((function(){var e=j()(m.values,T);p((function(t){return Object(w.a)(Object(w.a)({},t),{},{isValid:!e,errors:e||{}})}))}),[m.values]);var f=function(e){e.persist(),p((function(t){return Object(w.a)(Object(w.a)({},t),{},{values:Object(w.a)(Object(w.a)({},t.values),{},Object(a.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:Object(w.a)(Object(w.a)({},t.touched),{},Object(a.a)({},e.target.name,!0))})}))},v=function(){var e=Object(b.a)(P().mark((function e(t){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),l.push("/");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){return!(!m.touched[e]||!m.errors[e])};return o.a.createElement("form",Object.assign({},r,{className:Object(k.a)(c.root,t),onSubmit:v}),o.a.createElement("div",{className:c.fields},o.a.createElement(N.a,{error:y("firstName"),helperText:y("firstName")?m.errors.firstName[0]:null,label:"First name",name:"firstName",onChange:f,value:m.values.firstName||"",variant:"outlined"}),o.a.createElement(N.a,{error:y("lastName"),helperText:y("lastName")?m.errors.lastName[0]:null,label:"Last name",name:"lastName",onChange:f,value:m.values.lastName||"",variant:"outlined"}),o.a.createElement(N.a,{error:y("email"),fullWidth:!0,helperText:y("email")?m.errors.email[0]:null,label:"Email address",name:"email",onChange:f,value:m.values.email||"",variant:"outlined"}),o.a.createElement(N.a,{error:y("password"),fullWidth:!0,helperText:y("password")?m.errors.password[0]:null,label:"Password",name:"password",onChange:f,type:"password",value:m.values.password||"",variant:"outlined"}),o.a.createElement("div",null,o.a.createElement("div",{className:c.policy},o.a.createElement(L.a,{checked:m.values.policy||!1,className:c.policyCheckbox,color:"primary",name:"policy",onChange:f}),o.a.createElement(u.a,{color:"textSecondary",variant:"body1"},"I have read the"," ",o.a.createElement(h.a,{color:"secondary",component:i.a,to:"#",underline:"always",variant:"h6"},"Terms and Conditions"))),y("policy")&&o.a.createElement(z.a,{error:!0},m.errors.policy[0]))),o.a.createElement(C.a,{className:c.submitButton,color:"secondary",disabled:!m.isValid,size:"large",type:"submit",variant:"contained"},"Create account"))},G=Object(c.a)((function(e){return{root:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:e.spacing(6,2)},card:{width:e.breakpoints.values.md,maxWidth:"100%",overflow:"unset",display:"flex",position:"relative","& > *":{flexGrow:1,flexBasis:"50%",width:"50%"}},content:{padding:e.spacing(8,4,3,4)},media:Object(a.a)({borderTopRightRadius:4,borderBottomRightRadius:4,padding:e.spacing(3),color:e.palette.white,display:"flex",flexDirection:"column",justifyContent:"flex-end"},e.breakpoints.down("md"),{display:"none"}),icon:{backgroundImage:y.a.orange,color:e.palette.white,borderRadius:e.shape.borderRadius,padding:e.spacing(1),position:"absolute",top:-32,left:e.spacing(3),height:64,width:64,fontSize:32},registerForm:{marginTop:e.spacing(3)},divider:{margin:e.spacing(2,0)},person:{marginTop:e.spacing(2),display:"flex"},avatar:{marginRight:e.spacing(2)}}})),V=function(){var e=G();return o.a.createElement(g.k,{className:e.root,title:"Register"},o.a.createElement(l.a,{className:e.card},o.a.createElement(s.a,{className:e.content},o.a.createElement(v.a,{className:e.icon}),o.a.createElement(u.a,{gutterBottom:!0,variant:"h3"},"Sign up"),o.a.createElement(u.a,{variant:"subtitle2"},"Sign up on the internal platform"),o.a.createElement(I,{className:e.registerForm}),o.a.createElement(d.a,{className:e.divider}),o.a.createElement(h.a,{align:"center",color:"secondary",component:i.a,to:"/auth/login",underline:"always",variant:"subtitle2"},"Have an account?")),o.a.createElement(m.a,{className:e.media,image:"/images/auth.png",title:"Cover"},o.a.createElement(u.a,{color:"inherit",variant:"subtitle1"},"Hella narvwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life."),o.a.createElement("div",{className:e.person},o.a.createElement(p.a,{alt:"Person",className:e.avatar,src:"/images/avatars/avatar_2.png"}),o.a.createElement("div",null,o.a.createElement(u.a,{color:"inherit",variant:"body1"},"Ekaterina Tankova"),o.a.createElement(u.a,{color:"inherit",variant:"body2"},"Manager at inVision"))))))}},969:function(e,t,r){"use strict";var a=r(1),n=r(6),o=r(0),i=(r(7),r(2)),c=r(287),l=r(40),s=Object(l.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(l.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),d=r(17),h=Object(l.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=r(10),p=r(8),f=o.createElement(u,null),v=o.createElement(s,null),y=o.createElement(h,null),g=o.forwardRef((function(e,t){var r=e.checkedIcon,l=void 0===r?f:r,s=e.classes,u=e.color,d=void 0===u?"secondary":u,h=e.icon,p=void 0===h?v:h,g=e.indeterminate,b=void 0!==g&&g,w=e.indeterminateIcon,E=void 0===w?y:w,x=e.inputProps,O=e.size,j=void 0===O?"medium":O,k=Object(n.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),N=b?E:p,L=b?E:l;return o.createElement(c.a,Object(a.a)({type:"checkbox",classes:{root:Object(i.a)(s.root,s["color".concat(Object(m.a)(d))],b&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:d,inputProps:Object(a.a)({"data-indeterminate":b},x),icon:o.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===j?j:N.props.fontSize}),checkedIcon:o.cloneElement(L,{fontSize:void 0===L.props.fontSize&&"small"===j?j:L.props.fontSize}),ref:t},k))}));t.a=Object(p.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(g)},982:function(e,t,r){"use strict";function a(e,t,r,a,n,o,i){try{var c=e[o](i),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(a,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function c(e){a(i,n,o,c,l,"next",e)}function l(e){a(i,n,o,c,l,"throw",e)}c(void 0)}))}}r.d(t,"a",(function(){return n}))},983:function(e,t,r){"use strict";var a=r(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(0)),o=(0,a(r(14)).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.default.createElement("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"})),"PersonAddOutlined");t.default=o}}]);
//# sourceMappingURL=18.b7284840.chunk.js.map
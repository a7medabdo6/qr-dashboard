(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[3],{1007:function(e,t,a){"use strict";var n=a(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(14)).default)(r.default.createElement("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");t.default=c},1081:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Ne}));var n=a(0),r=a.n(n),c=a(45),o=a(897),i=a(5),s=a(957),l=a(949),m=a(916),u=a(16),d=a(13),p=a(9),g=a(19),b=a(2),v=a(992),f=a.n(v),E=a(41),h=a.n(E),j=a(913),O=a(925),N=a(513),w=a(914),y=a(885),k=a(886),x=a(924),C=a(962),I=a(920),L=a(884),B=a(980),P=a(70),T=a(88),S=a.n(T),R=a(435),z=a.n(R),W=a(1007),D=a.n(W),H=a(27),M=["className"],_=Object(o.a)((function(e){return{root:{},content:{paddingTop:0},search:{padding:e.spacing(2,3),display:"flex",alignItems:"center"},searchIcon:{color:e.palette.text.secondary},searchInput:{marginLeft:e.spacing(1),color:e.palette.text.secondary,fontSize:"14px"},avatar:{height:60,width:60},listItem:{flexWrap:"wrap"},listItemText:{marginLeft:e.spacing(2)},connectButton:{marginLeft:"auto"},pendingButton:{marginLeft:"auto",color:e.palette.white,backgroundColor:i.a.red[600],"&:hover":{backgroundColor:i.a.red[900]}},connectedButton:{marginLeft:"auto",color:e.palette.white,backgroundColor:i.a.green[600],"&:hover":{backgroundColor:i.a.green[900]}},buttonIcon:{marginRight:e.spacing(1)}}})),A=function(e){var t=e.className,a=Object(p.a)(e,M),c=_(),o=Object(n.useState)(!1),i=Object(d.a)(o,2),s=i[0],l=i[1],u=Object(n.useState)([]),v=Object(d.a)(u,2),E=v[0],T=v[1];Object(n.useEffect)((function(){var e=!0;return H.a.get("/api/users/1/connections").then((function(t){e&&T(t.data.connections)})),function(){e=!1}}),[]);var R=function(e){T((function(t){return f.a.map(t,f.a.clone).map((function(t){return t.id===e&&(t.status="connected"===t.status||"pending"===t.status?"not_connected":"pending","pending"===t.status&&l(!0)),t}))}))};return r.a.createElement(j.a,Object.assign({},a,{className:Object(b.a)(c.root,t)}),r.a.createElement(O.a,{title:"Connections"}),r.a.createElement(m.a,null),r.a.createElement("div",{className:c.search},r.a.createElement(S.a,{className:c.searchIcon,color:"inherit"}),r.a.createElement(N.a,{className:c.searchInput,color:"inherit",disableUnderline:!0,placeholder:"Search people & places"})),r.a.createElement(m.a,null),r.a.createElement(w.a,{className:c.content},r.a.createElement(h.a,null,r.a.createElement(y.a,{disablePadding:!0},E.map((function(e,t){return r.a.createElement(k.a,{className:c.listItem,disableGutters:!0,divider:t<E.length-1,key:e.id},r.a.createElement(x.a,null,r.a.createElement(C.a,{alt:"Profile image",className:c.avatar,component:g.a,src:e.avatar,to:"/profile/1/timeline"})),r.a.createElement(I.a,{className:c.listItemText,primary:e.name,secondary:"".concat(e.common," connections in common")}),"not_connected"===e.status&&r.a.createElement(L.a,{className:c.connectButton,onClick:function(){return R(e.id)},size:"small",variant:"contained"},r.a.createElement(D.a,{className:c.buttonIcon}),"Connect"),"pending"===e.status&&r.a.createElement(L.a,{className:c.pendingButton,onClick:function(){return R(e.id)},size:"small",variant:"contained"},r.a.createElement(D.a,{className:c.buttonIcon}),"Pending"),"connected"===e.status&&r.a.createElement(L.a,{className:c.connectedButton,onClick:function(){return R(e.id)},size:"small",variant:"contained"},r.a.createElement(z.a,{className:c.buttonIcon}),"Connected"))}))))),r.a.createElement(B.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3,message:r.a.createElement(P.a,{color:"inherit",variant:"h6"},"Sent connection request"),onClose:function(){l(!1)},open:s}))},G=a(24),q=a(959),J=a(915),U=a(883),V=a(151),X=a.n(V),Z=a(261),$=a.n(Z),F=a(147),K=a.n(F),Q=["className"],Y=Object(o.a)((function(e){var t,a;return{root:{},cover:{position:"relative",height:360,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center","&:before":{position:"absolute",content:'" "',top:0,left:0,height:"100%",width:"100%",backgroundImage:"linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)"},"&:hover":{"& $changeButton":{visibility:"visible"}}},changeButton:(t={visibility:"hidden",position:"absolute",bottom:e.spacing(3),right:e.spacing(3),backgroundColor:i.a.blueGrey[900],color:e.palette.white},Object(G.a)(t,e.breakpoints.down("md"),{top:e.spacing(3),bottom:"auto"}),Object(G.a)(t,"&:hover",{backgroundColor:i.a.blueGrey[900]}),t),addPhotoIcon:{marginRight:e.spacing(1)},container:Object(G.a)({width:e.breakpoints.values.lg,maxWidth:"100%",padding:e.spacing(2,3),margin:"0 auto",position:"relative",display:"flex",flexWrap:"wrap"},e.breakpoints.down("sm"),{flexDirection:"column"}),avatar:{border:"2px solid ".concat(e.palette.white),height:120,width:120,top:-60,left:e.spacing(3),position:"absolute"},details:{marginLeft:136},actions:(a={marginLeft:"auto"},Object(G.a)(a,e.breakpoints.down("sm"),{marginTop:e.spacing(1)}),Object(G.a)(a,"& > * + *",{marginLeft:e.spacing(1)}),a),pendingButton:{color:e.palette.white,backgroundColor:i.a.red[600],"&:hover":{backgroundColor:i.a.red[900]}},personAddIcon:{marginRight:e.spacing(1)},mailIcon:{marginRight:e.spacing(1)}}})),ee=function(e){var t=e.className,a=Object(p.a)(e,Q),c=Y(),o="Shen Zhi",i="Web Developer",s="/images/avatars/avatar_11.png",l="/images/covers/cover_2.jpg",m="not_connected",u=Object(n.useState)(m),v=Object(d.a)(u,2),f=v[0],E=v[1],h=Object(n.useState)(!1),j=Object(d.a)(h,2),O=j[0],N=j[1];Object(n.useEffect)((function(){"pending"===f&&N(!0)}),[f]);var w=function(){E((function(e){return"not_connected"===e?"pending":"not_connected"}))};return r.a.createElement("div",Object.assign({},a,{className:Object(b.a)(c.root,t)}),r.a.createElement("div",{className:c.cover,style:{backgroundImage:"url(".concat(l,")")}},r.a.createElement(L.a,{className:c.changeButton,variant:"contained"},r.a.createElement(X.a,{className:c.addPhotoIcon}),"Change Cover")),r.a.createElement("div",{className:c.container},r.a.createElement(C.a,{alt:"Person",className:c.avatar,src:s}),r.a.createElement("div",{className:c.details},r.a.createElement(P.a,{component:"h2",gutterBottom:!0,variant:"overline"},i),r.a.createElement(P.a,{component:"h1",variant:"h4"},o)),r.a.createElement(q.a,{smDown:!0},r.a.createElement("div",{className:c.actions},r.a.createElement(L.a,{color:"secondary",component:g.a,to:"/chat",variant:"contained"},r.a.createElement($.a,{className:c.mailIcon}),"Send message"),"not_connected"===f&&r.a.createElement(L.a,{color:"primary",onClick:w,variant:"contained"},r.a.createElement(D.a,{className:c.personAddIcon}),"Add connection"),"pending"===f&&r.a.createElement(L.a,{className:c.pendingButton,onClick:w,variant:"contained"},r.a.createElement(D.a,{className:c.personAddIcon}),"Pending connection"),r.a.createElement(J.a,{title:"More options"},r.a.createElement(U.a,null,r.a.createElement(K.a,null)))))),r.a.createElement(B.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3,message:r.a.createElement(P.a,{color:"inherit",variant:"h6"},"Sent connection request"),onClose:function(){N(!1)},open:O}))},te=a(930),ae=["className"],ne=Object(o.a)((function(){return{root:{}}})),re=function(e){var t=e.className,a=Object(p.a)(e,ae),c=ne(),o=Object(n.useState)([]),i=Object(d.a)(o,2),s=i[0],l=i[1];return Object(n.useEffect)((function(){var e=!0;return e&&H.a.get("/api/users/1/projects").then((function(e){return l(e.data.projects)})),function(){e=!1}}),[]),r.a.createElement("div",Object.assign({},a,{className:Object(b.a)(c.root,t)}),r.a.createElement(te.a,{container:!0,spacing:3},s.map((function(e){return r.a.createElement(te.a,{item:!0,key:e.id,lg:4,lx:4,md:6,xs:12},r.a.createElement(u.n,{project:e}))}))))},ce=["ratings","className"],oe=Object(o.a)((function(e){return{root:{},stars:{display:"flex",alignItems:"center"},rating:{marginLeft:e.spacing(2),fontWeight:e.typography.fontWeightBold}}})),ie=function(e){var t=e.ratings,a=e.className,n=Object(p.a)(e,ce),c=oe(),o=0;return t.length>0&&(o=t.reduce((function(e,t){return e+t}),0)/t.length),r.a.createElement(j.a,Object.assign({},n,{className:Object(b.a)(c.root,a)}),r.a.createElement(w.a,null,r.a.createElement(te.a,{alignItems:"center",container:!0,spacing:3},r.a.createElement(te.a,{item:!0},r.a.createElement(P.a,{variant:"h5"},"Overall Reviews")),r.a.createElement(te.a,{className:c.stars,item:!0},r.a.createElement(u.o,{value:o}),r.a.createElement(P.a,{className:c.rating,variant:"h6"},o)),r.a.createElement(te.a,{item:!0},r.a.createElement(P.a,{className:c.total,color:"textSecondary",variant:"body2"},t.length," reviews in total")))))},se=a(4),le=a.n(se),me=a(918),ue=a(102),de=["review","className"],pe=Object(o.a)((function(e){return{root:{},header:{paddingBottom:0},subheader:{flexWrap:"wrap",display:"flex",alignItems:"center"},stars:{display:"flex",alignItems:"center",marginRight:e.spacing(1)},rating:{marginLeft:e.spacing(1),fontWeight:e.typography.fontWeightBold},content:{padding:0,"&:last-child":{paddingBottom:0}},message:{padding:e.spacing(2,3)},details:{padding:e.spacing(1,3)}}})),ge=function(e){var t=e.review,a=e.className,n=Object(p.a)(e,de),c=pe();return r.a.createElement(j.a,Object.assign({},n,{className:Object(b.a)(c.root,a)}),r.a.createElement(O.a,{avatar:r.a.createElement(C.a,{alt:"Reviewer",className:c.avatar,src:t.reviewer.avatar},Object(ue.a)(t.reviewer.name)),className:c.header,disableTypography:!0,subheader:r.a.createElement("div",{className:c.subheader},r.a.createElement("div",{className:c.stars},r.a.createElement(u.o,{value:t.rating}),r.a.createElement(P.a,{className:c.rating,variant:"h6"},t.rating)),r.a.createElement(P.a,{variant:"body2"},"| Reviewd by"," ",r.a.createElement(me.a,{color:"textPrimary",component:g.a,to:"/profile/1/timeline",variant:"h6"},t.reviewer.name)," ","| ",le()(t.created_at).fromNow())),title:r.a.createElement(me.a,{color:"textPrimary",component:g.a,to:"/projects/1/overview",variant:"h5"},t.project.title)}),r.a.createElement(w.a,{className:c.content},r.a.createElement("div",{className:c.message},r.a.createElement(P.a,{variant:"subtitle2"},t.message)),r.a.createElement(m.a,null),r.a.createElement("div",{className:c.details},r.a.createElement(te.a,{alignItems:"center",container:!0,justify:"space-between",spacing:3},r.a.createElement(te.a,{item:!0},r.a.createElement(P.a,{variant:"h5"},t.currency,t.project.price),r.a.createElement(P.a,{variant:"body2"},"Project price")),r.a.createElement(te.a,{item:!0},r.a.createElement(P.a,{variant:"h5"},t.currency,t.pricePerHour),r.a.createElement(P.a,{variant:"body2"},"Per project")),r.a.createElement(te.a,{item:!0},r.a.createElement(P.a,{variant:"h5"},t.hours),r.a.createElement(P.a,{variant:"body2"},"Hours"))))))},be=["className"],ve=Object(o.a)((function(e){return{root:{},review:{marginTop:e.spacing(2)}}})),fe=function(e){var t=e.className,a=Object(p.a)(e,be),c=ve(),o=Object(n.useState)([]),i=Object(d.a)(o,2),s=i[0],l=i[1];return Object(n.useEffect)((function(){var e=!0;return e&&H.a.get("/api/users/1/reviews").then((function(e){return l(e.data.reviews)})),function(){e=!1}}),[]),r.a.createElement("div",Object.assign({},a,{className:Object(b.a)(c.root,t)}),r.a.createElement(ie,{ratings:s.map((function(e){return e.rating}))}),s.map((function(e){return r.a.createElement(ge,{className:c.review,key:e.id,review:e})})))},Ee=["className"],he=Object(o.a)((function(e){return{root:{},posts:{marginTop:e.spacing(2)},post:{marginBottom:e.spacing(2)}}})),je=function(e){var t=e.className,a=Object(p.a)(e,Ee),c=he(),o=Object(n.useState)([]),i=Object(d.a)(o,2),s=i[0],l=i[1];return Object(n.useEffect)((function(){var e=!0;return H.a.get("/api/users/1/posts").then((function(t){e&&l(t.data.posts)})),function(){e=!1}}),[]),r.a.createElement("div",Object.assign({},a,{className:Object(b.a)(c.root,t)}),r.a.createElement(u.a,null),r.a.createElement("div",{className:c.posts},s.map((function(e){return r.a.createElement(u.m,{className:c.post,key:e.id,post:e})}))))},Oe=Object(o.a)((function(e){return{root:{},inner:{width:e.breakpoints.values.lg,maxWidth:"100%",margin:"0 auto",padding:e.spacing(3)},divider:{backgroundColor:i.a.grey[300]},content:{marginTop:e.spacing(3)}}})),Ne=function(e){var t=e.match,a=e.history,n=Oe(),o=t.params,i=o.id,d=o.tab,p=[{value:"timeline",label:"Timeline"},{value:"connections",label:"Connections"},{value:"projects",label:"Projects"},{value:"reviews",label:"Reviews"}];return d?p.find((function(e){return e.value===d}))?r.a.createElement(u.k,{className:n.root,title:"Profile"},r.a.createElement(ee,null),r.a.createElement("div",{className:n.inner},r.a.createElement(s.a,{onChange:function(e,t){a.push(t)},scrollButtons:"auto",value:d,variant:"scrollable"},p.map((function(e){return r.a.createElement(l.a,{key:e.value,label:e.label,value:e.value})}))),r.a.createElement(m.a,{className:n.divider}),r.a.createElement("div",{className:n.content},"timeline"===d&&r.a.createElement(je,null),"connections"===d&&r.a.createElement(A,null),"projects"===d&&r.a.createElement(re,null),"reviews"===d&&r.a.createElement(fe,null)))):r.a.createElement(c.a,{to:"/errors/error-404"}):r.a.createElement(c.a,{to:"/profile/".concat(i,"/timeline")})}},980:function(e,t,a){"use strict";var n=a(6),r=a(22),c=a(1),o=a(0),i=(a(7),a(2)),s=a(8),l=a(43),m=a(939),u=a(30),d=a(10),p=a(74),g=a(515),b=a(981),v=o.forwardRef((function(e,t){var a=e.action,r=e.anchorOrigin,s=(r=void 0===r?{vertical:"bottom",horizontal:"center"}:r).vertical,v=r.horizontal,f=e.autoHideDuration,E=void 0===f?null:f,h=e.children,j=e.classes,O=e.className,N=e.ClickAwayListenerProps,w=e.ContentProps,y=e.disableWindowBlurListener,k=void 0!==y&&y,x=e.message,C=e.onClose,I=e.onEnter,L=e.onEntered,B=e.onEntering,P=e.onExit,T=e.onExited,S=e.onExiting,R=e.onMouseEnter,z=e.onMouseLeave,W=e.open,D=e.resumeHideDuration,H=e.TransitionComponent,M=void 0===H?g.a:H,_=e.transitionDuration,A=void 0===_?{enter:l.b.enteringScreen,exit:l.b.leavingScreen}:_,G=e.TransitionProps,q=Object(n.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),J=o.useRef(),U=o.useState(!0),V=U[0],X=U[1],Z=Object(u.a)((function(){C&&C.apply(void 0,arguments)})),$=Object(u.a)((function(e){C&&null!=e&&(clearTimeout(J.current),J.current=setTimeout((function(){Z(null,"timeout")}),e))}));o.useEffect((function(){return W&&$(E),function(){clearTimeout(J.current)}}),[W,E,$]);var F=function(){clearTimeout(J.current)},K=o.useCallback((function(){null!=E&&$(null!=D?D:.5*E)}),[E,D,$]);return o.useEffect((function(){if(!k&&W)return window.addEventListener("focus",K),window.addEventListener("blur",F),function(){window.removeEventListener("focus",K),window.removeEventListener("blur",F)}}),[k,K,W]),!W&&V?null:o.createElement(m.a,Object(c.a)({onClickAway:function(e){C&&C(e,"clickaway")}},N),o.createElement("div",Object(c.a)({className:Object(i.a)(j.root,j["anchorOrigin".concat(Object(d.a)(s)).concat(Object(d.a)(v))],O),onMouseEnter:function(e){R&&R(e),F()},onMouseLeave:function(e){z&&z(e),K()},ref:t},q),o.createElement(M,Object(c.a)({appear:!0,in:W,onEnter:Object(p.a)((function(){X(!1)}),I),onEntered:L,onEntering:B,onExit:P,onExited:Object(p.a)((function(){X(!0)}),T),onExiting:S,timeout:A,direction:"top"===s?"down":"up"},G),h||o.createElement(b.a,Object(c.a)({message:x,action:a},w)))))}));t.a=Object(s.a)((function(e){var t={top:8},a={bottom:8},n={justifyContent:"flex-end"},o={justifyContent:"flex-start"},i={top:24},s={bottom:24},l={right:24},m={left:24},u={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(c.a)({},t,Object(r.a)({},e.breakpoints.up("sm"),Object(c.a)({},i,u))),anchorOriginBottomCenter:Object(c.a)({},a,Object(r.a)({},e.breakpoints.up("sm"),Object(c.a)({},s,u))),anchorOriginTopRight:Object(c.a)({},t,n,Object(r.a)({},e.breakpoints.up("sm"),Object(c.a)({left:"auto"},i,l))),anchorOriginBottomRight:Object(c.a)({},a,n,Object(r.a)({},e.breakpoints.up("sm"),Object(c.a)({left:"auto"},s,l))),anchorOriginTopLeft:Object(c.a)({},t,o,Object(r.a)({},e.breakpoints.up("sm"),Object(c.a)({right:"auto"},i,m))),anchorOriginBottomLeft:Object(c.a)({},a,o,Object(r.a)({},e.breakpoints.up("sm"),Object(c.a)({right:"auto"},s,m)))}}),{flip:!1,name:"MuiSnackbar"})(v)},981:function(e,t,a){"use strict";var n=a(6),r=a(22),c=a(1),o=a(0),i=(a(7),a(2)),s=a(8),l=a(146),m=a(17),u=o.forwardRef((function(e,t){var a=e.action,r=e.classes,s=e.className,m=e.message,u=e.role,d=void 0===u?"alert":u,p=Object(n.a)(e,["action","classes","className","message","role"]);return o.createElement(l.a,Object(c.a)({role:d,square:!0,elevation:6,className:Object(i.a)(r.root,s),ref:t},p),o.createElement("div",{className:r.message},m),a?o.createElement("div",{className:r.action},a):null)}));t.a=Object(s.a)((function(e){var t="light"===e.palette.type?.8:.98,a=Object(m.c)(e.palette.background.default,t);return{root:Object(c.a)({},e.typography.body2,Object(r.a)({color:e.palette.getContrastText(a),backgroundColor:a,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(u)}}]);
//# sourceMappingURL=3.e6e730a5.chunk.js.map
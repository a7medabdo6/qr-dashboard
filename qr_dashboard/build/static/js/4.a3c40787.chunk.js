(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[4],{1071:function(e,a,t){"use strict";var n=t(12);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(14)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.default.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"})),"InsertDriveFileOutlined");a.default=c},1075:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return Xe}));var n=t(13),r=t(0),c=t.n(r),l=t(45),i=t(897),s=t(5),o=t(957),m=t(949),u=t(916),d=t(27),p=t(16),v=t(300),b=t(9),g=t(4),E=t.n(g),f=t(2),h=t(70),j=t(19),N=t(962),y=t(913),O=t(918),k=t(292),w=t.n(k),x=t(983),C=t.n(x),T=t(185),I=t.n(T),M=t(187),B=t.n(M),z=t(54),_=["activity","className"],A=Object(i.a)((function(e){return{root:{display:"flex",alignItems:"center"},card:{marginLeft:e.spacing(2),flexGrow:1,display:"flex",padding:e.spacing(2),alignItems:"center"},date:{marginLeft:"auto",flexShrink:0},avatarBlue:{backgroundImage:z.a.blue},avatarGreen:{backgroundImage:z.a.green},avatarOrange:{backgroundImage:z.a.orange},avatarIndigo:{backgroundImage:z.a.indigo}}})),P=function(e){var a=e.activity,t=e.className,n=Object(b.a)(e,_),r=A(),l={upload_file:c.a.createElement(N.a,{className:r.avatarBlue},c.a.createElement(w.a,null)),join_team:c.a.createElement(N.a,{className:r.avatarOrange},c.a.createElement(C.a,null)),price_change:c.a.createElement(N.a,{className:r.avatarGreen},c.a.createElement(I.a,null)),contest_created:c.a.createElement(N.a,{className:r.avatarIndigo},c.a.createElement(B.a,null))},i="user"===a.subject_type?"/profile/1/timeline":"/projects/1/overview";return c.a.createElement("div",Object.assign({},n,{className:Object(f.a)(r.root,t)}),l[a.action_type],c.a.createElement(y.a,{className:r.card},c.a.createElement(h.a,{variant:"body1"},c.a.createElement(O.a,{color:"textPrimary",component:j.a,to:i,variant:"h6"},a.subject)," ",a.action_desc),c.a.createElement(h.a,{className:r.date,variant:"body2"},E()(a.created_at).fromNow())))},S=["activities","className"],D=Object(i.a)((function(e){return{root:{},title:{marginBottom:e.spacing(3)},group:{"& + &":{marginTop:e.spacing(4)}},activity:{position:"relative","& + &":{marginTop:e.spacing(3),"&:before":{position:"absolute",content:'" "',height:20,width:1,top:-20,left:20,backgroundColor:e.palette.divider}}}}})),G=function(e){var a,t=e.activities,n=e.className,r=Object(b.a)(e,S),l=D(),i=[],s=[],o=Object(v.a)(t);try{for(o.s();!(a=o.n()).done;){var m=a.value;E()(m.created_at).isSame(E()(),"day")?i.push(m):s.push(m)}}catch(u){o.e(u)}finally{o.f()}return c.a.createElement("div",Object.assign({},r,{className:Object(f.a)(l.root,n)}),c.a.createElement(h.a,{className:l.title,variant:"h3"},"Today"),c.a.createElement("div",{className:l.group},i.map((function(e){return c.a.createElement(P,{activity:e,className:l.activity,key:e.id})}))),c.a.createElement("div",{className:l.group},c.a.createElement(h.a,{className:l.title,variant:"h3"},"Last week"),s.map((function(e){return c.a.createElement(P,{activity:e,className:l.activity,key:e.id})}))))},H=t(914),F=t(930),W=t(928),Y=t(915),L=t(883),R=t(926),V=t(884),q=t(479),J=t(922),U=t(919),K=t(920),Q=t(1071),X=t.n(Q),Z=t(147),$=t.n(Z),ee=t(288),ae=t.n(ee),te=t(166),ne=t.n(te),re=t(973),ce=t.n(re),le=t(383),ie=["file","className"],se=Object(i.a)((function(e){return{root:{},media:{height:240},placeholder:{height:240,backgroundColor:s.a.blueGrey[50],display:"flex",alignItems:"center",justifyContent:"center"},insertDriveFileIcon:{height:e.spacing(6),width:e.spacing(6),fontSize:e.spacing(6)},content:{display:"flex",justifyContent:"space-between"},actions:{justifyContent:"center"},getAppIcon:{marignRight:e.spacing(1)},menu:{width:250,maxWidth:"100%"}}})),oe=function(e){var a=e.file,t=e.className,l=Object(b.a)(e,ie),i=se(),s=Object(r.useRef)(null),o=Object(r.useState)(!1),m=Object(n.a)(o,2),d=m[0],p=m[1];return c.a.createElement(y.a,Object.assign({},l,{className:Object(f.a)(i.root,t)}),a.mimeType.includes("image/")?c.a.createElement(W.a,{className:i.media,image:a.url}):c.a.createElement("div",{className:i.placeholder},c.a.createElement(X.a,{className:i.insertDriveFileIcon})),c.a.createElement(H.a,{className:i.content},c.a.createElement("div",null,c.a.createElement(h.a,{variant:"h5"},a.name),c.a.createElement(h.a,{variant:"subtitle2"},Object(le.a)(a.size))),c.a.createElement("div",null,c.a.createElement(Y.a,{title:"More options"},c.a.createElement(L.a,{edge:"end",onClick:function(){p(!0)},ref:s,size:"small"},c.a.createElement($.a,null))))),c.a.createElement(u.a,null),c.a.createElement(R.a,{className:i.actions},c.a.createElement(V.a,null,c.a.createElement(w.a,{className:i.getAppIcon}),"Download")),c.a.createElement(q.a,{anchorEl:s.current,anchorOrigin:{vertical:"top",horizontal:"left"},classes:{paper:i.menu},onClose:function(){p(!1)},open:d,transformOrigin:{vertical:"top",horizontal:"left"}},c.a.createElement(J.a,{divider:!0},c.a.createElement(U.a,null,c.a.createElement(ce.a,null)),c.a.createElement(K.a,{primary:"Rename"})),c.a.createElement(J.a,{divider:!0},c.a.createElement(U.a,null,c.a.createElement(ae.a,null)),c.a.createElement(K.a,{primary:"Delete"})),c.a.createElement(J.a,null,c.a.createElement(U.a,null,c.a.createElement(ne.a,null)),c.a.createElement(K.a,{primary:"Archive"}))))},me=["files","className"],ue=Object(i.a)((function(e){return{root:{},files:{marginTop:e.spacing(3)}}})),de=function(e){var a=e.files,t=e.className,n=Object(b.a)(e,me),r=ue();return c.a.createElement("div",Object.assign({},n,{className:Object(f.a)(r.root,t)}),c.a.createElement(y.a,null,c.a.createElement(H.a,null,c.a.createElement(p.d,null))),c.a.createElement(F.a,{className:r.files,container:!0,spacing:3},a.map((function(e){return c.a.createElement(F.a,{item:!0,key:e.id,lg:4,md:4,sm:6,xs:12},c.a.createElement(oe,{file:e}))}))))},pe=t(186),ve=t.n(pe),be=t(929),ge=t(932),Ee=t(102),fe=["author","open","onClose","onApply","className"],he=Object(i.a)((function(e){return{root:{width:960},header:{padding:e.spacing(3),maxWidth:720,margin:"0 auto"},content:{padding:e.spacing(0,2),maxWidth:720,margin:"0 auto"},helperText:{textAlign:"right",marginRight:0},author:{margin:e.spacing(4,0),display:"flex"},avatar:{marginRight:e.spacing(2)},actions:{backgroundColor:s.a.grey[100],padding:e.spacing(2),display:"flex",justifyContent:"center"},applyButton:{color:e.palette.white,backgroundColor:s.a.green[600],"&:hover":{backgroundColor:s.a.green[900]}}}})),je=function(e){var a=e.author,t=e.open,l=e.onClose,i=e.onApply,s=e.className,o=Object(b.a)(e,fe),m=Object(r.useState)(""),u=Object(n.a)(m,2),d=u[0],p=u[1],v=he();return c.a.createElement(be.a,{maxWidth:"lg",onClose:l,open:t},c.a.createElement("div",Object.assign({},o,{className:Object(f.a)(v.root,s)}),c.a.createElement("div",{className:v.header},c.a.createElement(h.a,{align:"center",className:v.title,gutterBottom:!0,variant:"h3"},"The project owner requires an introduction"),c.a.createElement(h.a,{align:"center",className:v.subtitle,variant:"subtitle2"},"Write down a short note with your application regarding why you think you'd be a good fit for this position.")),c.a.createElement("div",{className:v.content},c.a.createElement(ge.a,{autoFocus:!0,className:v.textField,FormHelperTextProps:{classes:{root:v.helperText}},fullWidth:!0,helperText:"".concat(200-d.length," characters left"),label:"Short Note",multiline:!0,onChange:function(e){e.persist(),p(e.target.value)},placeholder:"What excites you about this project?",rows:5,value:d,variant:"outlined"}),c.a.createElement("div",{className:v.author},c.a.createElement(N.a,{alt:"Author",className:v.avatar,src:a.avatar},Object(Ee.a)(a.name)),c.a.createElement("div",null,c.a.createElement(h.a,{variant:"h3"},a.name),c.a.createElement(h.a,{variant:"subtitle2"},a.bio)))),c.a.createElement("div",{className:v.actions},c.a.createElement(V.a,{className:v.applyButton,onClick:i,variant:"contained"},"Apply for a role"))))},Ne=["project","className"],ye=Object(i.a)((function(e){return{root:{},label:{marginTop:e.spacing(1)},shareButton:{marginRight:e.spacing(2)},shareIcon:{marginRight:e.spacing(1)},applyButton:{color:e.palette.white,backgroundColor:s.a.green[600],"&:hover":{backgroundColor:s.a.green[900]}}}})),Oe=function(e){var a=e.project,t=e.className,l=Object(b.a)(e,Ne),i=ye(),o=Object(r.useState)(!1),m=Object(n.a)(o,2),u=m[0],d=m[1],v=function(){d(!1)};return c.a.createElement("div",Object.assign({},l,{className:Object(f.a)(i.root,t)}),c.a.createElement(F.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},c.a.createElement(F.a,{item:!0},c.a.createElement(h.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Browse projects"),c.a.createElement(h.a,{component:"h1",gutterBottom:!0,variant:"h3"},a.title),c.a.createElement(p.g,{className:i.label,color:s.a.green[600],variant:"outlined"},"Active project")),c.a.createElement(F.a,{item:!0},c.a.createElement(V.a,{className:i.shareButton,variant:"contained"},c.a.createElement(ve.a,{className:i.shareIcon}),"Share"),c.a.createElement(V.a,{className:i.applyButton,onClick:function(){d(!0)},variant:"contained"},"Apply for a role"))),c.a.createElement(je,{author:a.author,onApply:v,onClose:v,open:u}))};Oe.defaultProps={};var ke=Oe,we=["brief","className"],xe=Object(i.a)((function(){return{root:{}}})),Ce=function(e){var a=e.brief,t=e.className,n=Object(b.a)(e,we),r=xe();return c.a.createElement(y.a,Object.assign({},n,{className:Object(f.a)(r.root,t)}),c.a.createElement(H.a,null,c.a.createElement(p.h,{source:a})))},Te=["className"],Ie=Object(i.a)((function(){return{root:{}}})),Me=function(e){var a=e.className,t=Object(b.a)(e,Te),n=Ie();return c.a.createElement(y.a,Object.assign({},t,{className:Object(f.a)(n.root,a)}),c.a.createElement(H.a,null,c.a.createElement(h.a,{variant:"h4"},"Deliverables:"),c.a.createElement(h.a,{variant:"body1"},"You will be required to provide a zip file. Please check with the client to see if they have a preference.")))},Be=t(925),ze=t(885),_e=t(886),Ae=["project","className"],Pe=Object(i.a)((function(e){return{root:{},header:{paddingBottom:0},content:{paddingTop:0},listItem:{padding:e.spacing(2,0),justifyContent:"space-between"}}})),Se=function(e){var a=e.project,t=e.className,n=Object(b.a)(e,Ae),r=Pe();return c.a.createElement(y.a,Object.assign({},n,{className:Object(f.a)(r.root,t)}),c.a.createElement(Be.a,{avatar:c.a.createElement(N.a,{alt:"Author",className:r.avatar,component:j.a,src:a.author.avatar,to:"/profile/1/timeline"},Object(Ee.a)(a.author.name)),className:r.header,disableTypography:!0,subheader:c.a.createElement(h.a,{component:j.a,to:"/profile/1/timeline",variant:"h5"},a.author.name),title:c.a.createElement(h.a,{display:"block",variant:"overline"},"Contest holder")}),c.a.createElement(H.a,{className:r.content},c.a.createElement(ze.a,null,c.a.createElement(_e.a,{className:r.listItem,disableGutters:!0,divider:!0},c.a.createElement(h.a,{variant:"subtitle2"},"Deadline"),c.a.createElement(h.a,{variant:"h6"},E()(a.deadline).format("DD MMM YYYY"))),c.a.createElement(_e.a,{className:r.listItem,disableGutters:!0,divider:!0},c.a.createElement(h.a,{variant:"subtitle2"},"Per Project"),c.a.createElement(h.a,{variant:"h6"},a.price," ",a.currency)),c.a.createElement(_e.a,{className:r.listItem,disableGutters:!0,divider:!0},c.a.createElement(h.a,{variant:"subtitle2"},"Main Technology"),c.a.createElement(p.g,{color:a.tags[0].color},a.tags[0].text)),c.a.createElement(_e.a,{className:r.listItem,disableGutters:!0,divider:!0},c.a.createElement(h.a,{variant:"subtitle2"},"Last Update"),c.a.createElement(h.a,{variant:"h6"},E()(a.updated_at).format("DD MMM YYYY"))))))},De=t(924),Ge=["members","className"],He=Object(i.a)((function(){return{root:{},header:{paddingBottom:0},content:{paddingTop:0},actions:{backgroundColor:s.a.grey[50]},manageButton:{width:"100%"}}})),Fe=function(e){var a=e.members,t=e.className,n=Object(b.a)(e,Ge),r=He();return c.a.createElement(y.a,Object.assign({},n,{className:Object(f.a)(r.root,t)}),c.a.createElement(Be.a,{className:r.header,title:"Project members",titleTypographyProps:{variant:"overline"}}),c.a.createElement(H.a,{className:r.content},c.a.createElement(ze.a,null,a.map((function(e){return c.a.createElement(_e.a,{disableGutters:!0,key:e.id},c.a.createElement(De.a,null,c.a.createElement(N.a,{alt:"Author",className:r.avatar,src:e.avatar},Object(Ee.a)(e.name))),c.a.createElement(K.a,{primary:e.name,primaryTypographyProps:{variant:"h6"},secondary:e.bio}))})))),c.a.createElement(R.a,{className:r.actions},c.a.createElement(V.a,{className:r.manageButton},"Manage users")))},We=["project","className"],Ye=Object(i.a)((function(e){return{root:{},deliverables:{marginTop:e.spacing(3)},members:{marginTop:e.spacing(3)}}})),Le=function(e){var a=e.project,t=e.className,n=Object(b.a)(e,We),r=Ye();return c.a.createElement(F.a,Object.assign({},n,{className:Object(f.a)(r.root,t),container:!0,spacing:3}),c.a.createElement(F.a,{item:!0,lg:8,xl:9,xs:12},c.a.createElement(Ce,{brief:a.brief}),c.a.createElement(Me,{className:r.deliverables})),c.a.createElement(F.a,{item:!0,lg:4,xl:3,xs:12},c.a.createElement(Se,{project:a}),c.a.createElement(Fe,{className:r.members,members:a.members})))},Re=["subscriber","className"],Ve=Object(i.a)((function(e){return{root:{},media:{height:125},content:{paddingTop:0},avatarContainer:{marginTop:-32,display:"flex",justifyContent:"center"},avatar:{height:64,width:64,borderWidth:4,borderStyle:"solid",borderColor:e.palette.white},divider:{margin:e.spacing(2,0)}}})),qe=function(e){var a=e.subscriber,t=e.className,n=Object(b.a)(e,Re),r=Ve();return c.a.createElement(y.a,Object.assign({},n,{className:Object(f.a)(r.root,t)}),c.a.createElement(W.a,{className:r.media,image:a.cover}),c.a.createElement(H.a,{className:r.content},c.a.createElement("div",{className:r.avatarContainer},c.a.createElement(N.a,{alt:"Subscriber",className:r.avatar,component:j.a,src:a.avatar,to:"/profile/1/timeline"})),c.a.createElement(h.a,{align:"center",component:j.a,display:"block",to:"/profile/1/timeline",variant:"h6"},a.name),c.a.createElement(h.a,{align:"center",variant:"body2"},a.common_connections," connections in common"),c.a.createElement(u.a,{className:r.divider}),c.a.createElement(F.a,{container:!0,spacing:1},a.labels.map((function(e){return c.a.createElement(F.a,{item:!0,key:e},c.a.createElement(p.g,{variant:"outlined"},e))})))))},Je=["subscribers","className"],Ue=Object(i.a)((function(){return{root:{}}})),Ke=function(e){var a=e.subscribers,t=e.className,n=Object(b.a)(e,Je),r=Ue();return c.a.createElement(F.a,Object.assign({},n,{className:Object(f.a)(r.root,t),container:!0,spacing:3}),a.map((function(e){return c.a.createElement(F.a,{item:!0,key:e.id,lg:4,xs:12},c.a.createElement(qe,{subscriber:e}))})))},Qe=Object(i.a)((function(e){return{root:{width:e.breakpoints.values.lg,maxWidth:"100%",margin:"0 auto",padding:e.spacing(3)},tabs:{marginTop:e.spacing(3)},divider:{backgroundColor:s.a.grey[300]},alert:{marginTop:e.spacing(3)},content:{marginTop:e.spacing(3)}}})),Xe=function(e){var a=e.match,t=e.history,i=Qe(),s=a.params,v=s.id,b=s.tab,g=Object(r.useState)(!0),E=Object(n.a)(g,2),f=E[0],h=E[1],j=Object(r.useState)(null),N=Object(n.a)(j,2),y=N[0],O=N[1];Object(r.useEffect)((function(){var e=!0;return d.a.get("/api/projects/1").then((function(a){e&&O(a.data.project)})),function(){e=!1}}),[]);var k=[{value:"overview",label:"Overview"},{value:"files",label:"Files"},{value:"activity",label:"Activity"},{value:"subscribers",label:"Subscribers"}];return b?k.find((function(e){return e.value===b}))?y?c.a.createElement(p.k,{className:i.root,title:"Project Details"},c.a.createElement(ke,{project:y}),c.a.createElement(o.a,{className:i.tabs,onChange:function(e,a){t.push(a)},scrollButtons:"auto",value:b,variant:"scrollable"},k.map((function(e){return c.a.createElement(m.a,{key:e.value,label:e.label,value:e.value})}))),c.a.createElement(u.a,{className:i.divider}),f&&c.a.createElement(p.b,{className:i.alert,message:"The content holder has extended the deadline! Good luck",onClose:function(){h(!1)}}),c.a.createElement("div",{className:i.content},"overview"===b&&c.a.createElement(Le,{project:y}),"files"===b&&c.a.createElement(de,{files:y.files}),"activity"===b&&c.a.createElement(G,{activities:y.activities}),"subscribers"===b&&c.a.createElement(Ke,{subscribers:y.subscribers}))):null:c.a.createElement(l.a,{to:"/errors/error-404"}):c.a.createElement(l.a,{to:"/projects/".concat(v,"/overview")})}},973:function(e,a,t){"use strict";var n=t(12);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(14)).default)(r.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");a.default=c},983:function(e,a,t){"use strict";var n=t(12);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(14)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.default.createElement("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"})),"PersonAddOutlined");a.default=c}}]);
//# sourceMappingURL=4.a3c40787.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{56:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(15),c=n.n(r),i=n(7),o=n(9),l=n(11),j=n(10),h=(n(56),n(57),n(91)),d=n(93),u=n(14),b=n(25),p=n.n(b),m=function e(){var t=this;Object(i.a)(this,e),this.login=function(e,n){return t.app.post("/login",{email:e,pwd:n})},this.signup=function(e,n,s,a,r){return t.app.post("/signup",{name:e,surname:n,pwd:s,email:a,description:r})},this.logout=function(){return t.app.get("/logout")},this.isLoggedIn=function(){return t.app.post("/isLoggedIn")},this.editUser=function(e,n){return t.app.put("/".concat(e),n)},this.getById=function(e){return t.app.get("/".concat(e))},this.getAll=function(){return t.app.get("/")},this.app=p.a.create({baseURL:"".concat("https://ufab-project3.herokuapp.com/api","/user"),withCredentials:!0})},O=n(1),x=function(e){var t=e.storeUser,n=e.loggedUser,s=new m;return Object(O.jsxs)(h.a,{bg:"dark",variant:"dark",expand:"md",style:{marginBottom:"30px"},children:[Object(O.jsx)(h.a.Brand,{href:"#home",children:"UFAB"}),Object(O.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(h.a.Collapse,{className:"justify-content-end",children:Object(O.jsxs)(d.a,{className:"mr-auto",children:[Object(O.jsx)(u.b,{className:"nav-link",to:"/",children:"Inicio"}),n?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(u.b,{className:"nav-link",to:"/jobs",children:"Tus peticiones"}),Object(O.jsx)(u.b,{className:"nav-link",to:"/mi-perfil/".concat(n._id),children:"Perfil"}),Object(O.jsx)("span",{className:"nav-link",onClick:function(){s.logout().then((function(){return t(void 0)})).catch((function(e){return console.log(e)}))},children:"Cerrar sesi\xf3n"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(u.b,{className:"nav-link",to:"/user/signup",children:"Registro de usuario"}),Object(O.jsx)(u.b,{className:"nav-link",to:"/user/login",children:"Inicio de sesi\xf3n"})]}),Object(O.jsxs)("span",{className:"nav-link",children:[" ",n?"Hola,"+n.name:""]})]})})]})},g=n(88),v=n(50),f=function(){return Object(O.jsx)("footer",{style:{background:"#212529",color:"white",textAlign:"center",fontSize:"1em",bottom:0,padding:5,width:"100%"},children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(v.a,{md:4,children:Object(O.jsx)("p",{children:"   Contactanos     "})}),Object(O.jsx)(v.a,{md:4,children:Object(O.jsx)("p",{children:"  Todos los derechos reservados   "})}),Object(O.jsx)(v.a,{md:4,children:Object(O.jsx)("p",{children:"  Contactanos  en Calle de la industria n4 o llamanos al 666-2354-5489  "})})]})})},A=n(8),C=n(12),I=n(31),w=function(e){e.text;return Object(O.jsx)("img",{src:"data:image/png;base64,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",alt:"Logo",style:{width:40,height:70,transform:"translate(-20px, -70px)"}})},S=(n(83),function(e){var t=e.show,n=e.user;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:t?"infoWindow ":"infoWindowHidden",children:[Object(O.jsxs)(u.b,{className:"nav-link",to:"/perfil-de-usuario/".concat(null===n||void 0===n?void 0:n._id),children:[" ",Object(O.jsxs)("strong",{children:[null===n||void 0===n?void 0:n.name," "]})]}),Object(O.jsx)("p",{children:null===n||void 0===n?void 0:n.surname}),Object(O.jsx)("p",{children:null===n||void 0===n?void 0:n.email})]})})})}),y=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).componentDidMount=function(){e.userService.getAll().then((function(t){return e.setState({users:t.data})})).catch((function(e){return console.log(e)}))},e._onChildClick=function(t,n){e.setState(Object(A.a)(Object(A.a)({},e.state),{},{show:!e.state.show,infoWindowPosition:{lat:n.lat,lng:n.lng},infoWindowData:e.state.users[t]}))},e.state={users:void 0,show:!1,infoWindowPosition:{lat:null,lng:null}},e.userService=new m,e}return Object(o.a)(n,[{key:"handleClick",value:function(e){this.setState(Object(A.a)(Object(A.a)({},this.state),{},{show:!1,infoWindowPosition:{lat:null,lng:null}}))}},{key:"render",value:function(){var e,t,n=this;return this.state.users?Object(O.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(O.jsxs)(I.a,{bootstrapURLKeys:{key:"AIzaSyAiWoZMeyUtielp3mdwvhIbbcddZkfUMtU"},defaultCenter:this.props.center,defaultZoom:this.props.zoom,onChildClick:this._onChildClick,onClick:function(e){return n.handleClick(e)},children:[this.state.users&&this.state.users.map((function(e){return e.location&&Object(O.jsx)(w,{onLoad:n.onLoad,lat:e.location.coordinates[0],lng:e.location.coordinates[1],text:e.email})})),Object(O.jsx)(S,{user:this.state.infoWindowData,show:this.state.show,lat:null===(e=this.state.infoWindowPosition)||void 0===e?void 0:e.lat,lng:null===(t=this.state.infoWindowPosition)||void 0===t?void 0:t.lng})]})}):Object(O.jsx)("h1",{children:"Cargando..."})}}]),n}(s.Component);y.defaultProps={center:{lat:28.092381,lng:-15.464042},zoom:12};var k=y,U=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(k,{})})},F=function e(){var t=this;Object(i.a)(this,e),this.getJobs=function(){return t.app.get("/getMyJobs")},this.getJobs2=function(){return t.app.get("/getJobs")},this.getOneJob=function(e){return t.app.get("/getOneJob/".concat(e))},this.createJob=function(e){return t.app.post("/newJob",e)},this.editJob=function(){return t.app.put("/editJob/:job_id")},this.app=p.a.create({baseURL:"".concat("https://ufab-project3.herokuapp.com/api","/jobs"),withCredentials:!0})},M=n(89),D=(n(84),function(e){var t=e.status,n=e.description,s=e.deliveryAdress,a=e._id;return Object(O.jsx)(v.a,{md:12,children:Object(O.jsxs)("div",{className:"Card",children:[Object(O.jsxs)("p",{children:[" Estado: ",t," "]}),Object(O.jsxs)("p",{children:[" Descripci\xf3n: ",n," "]}),Object(O.jsxs)("p",{children:[" Dirrecci\xf3n de envio: ",s," "]}),Object(O.jsx)(u.b,{to:"/detail/".concat(a),children:Object(O.jsx)(M.a,{variant:"dark",children:" Ver detalles del Job"})})]})})}),L=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).componentDidMount=function(){e.jobService.getJobs2().then((function(t){return e.setState({jobs:t.data})})).catch((function(e){return console.log(e)}))},e.state={jobs:void 0},e.jobService=new F,e}return Object(o.a)(n,[{key:"render",value:function(){return this.state.jobs?Object(O.jsx)(g.a,{children:this.state.jobs.map((function(e){return Object(O.jsx)(D,Object(A.a)({},e),e.id)}))}):Object(O.jsx)("p",{children:"Loading..."})}}]),n}(s.Component),E=function(e){var t=e.loggedUser;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:" Tus Jobs"}),t&&Object(O.jsx)(u.b,{to:"/jobs/crear",children:Object(O.jsx)(M.a,{variant:"dark",children:" Crear Job"})}),Object(O.jsx)(L,{loggedUser:t})]})},B=n(90),G=n(18),z=n(92),P=function e(){var t=this;Object(i.a)(this,e),this.createMessage=function(e){return t.app.post("/newMessage",e)},this.getMessage=function(e){return t.app.get("/messages",e)},this.app=p.a.create({baseURL:"".concat("https://ufab-project3.herokuapp.com/api","/message"),withCredentials:!0})},Z=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).handleInputChange=function(e){var t=e.target,n=t.name,a=t.value;s.setState(Object(G.a)({},n,a))},s.handleFormSubmit=function(e){e.preventDefault(),s.messageService.createMessage({message:s.state.message,jobId:s.state.jobId}).then((function(){return s.props.history.push("/jobs")})).catch((function(e){return console.log(e)}))},s.state={message:"",jobId:e.job_id},s.messageService=new P,s}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(B.a,{children:Object(O.jsxs)(z.a,{onSubmit:this.handleFormSubmit,children:[Object(O.jsx)(z.a.Group,{className:"mb-3",controlId:"message",children:Object(O.jsx)(z.a.Control,{type:"text",value:this.state.message,onChange:this.handleInputChange,name:"message"})}),Object(O.jsx)(M.a,{variant:"dark",type:"submit",children:" Crear petici\xf3n "})]})})})}}]),n}(s.Component),J=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={job:void 0},e.jobService=new F,e.messageService=new P,e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.loadJob()}},{key:"loadJob",value:function(){var e=this,t=this.props.match.params.job_id;this.jobService.getOneJob(t).then((function(t){e.setState({job:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.job?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(B.a,{children:Object(O.jsx)(g.a,{children:Object(O.jsxs)(v.a,{md:10,children:[Object(O.jsx)("h1",{children:"Detalles"}),Object(O.jsx)("hr",{})]})})}),Object(O.jsx)(B.a,{children:Object(O.jsxs)(g.a,{children:[Object(O.jsxs)(v.a,{md:2,children:[Object(O.jsxs)("p",{children:[" jobType: ",this.state.job.jobType]}),Object(O.jsxs)("p",{children:[" status: ",this.state.job.status]}),Object(O.jsxs)("p",{children:[" Description: ",this.state.job.description]}),Object(O.jsxs)("p",{children:[" deliveryAdress: ",this.state.job.deliveryAdress]})]}),Object(O.jsxs)(v.a,{md:10,children:[Object(O.jsx)("h4",{children:"Mensajes:"}),this.state.job.messages[0].message,this.state.job.messages.map((function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{children:[" ",e.sender.name]})," ",Object(O.jsxs)("p",{children:[" ",e.message]})]})})),Object(O.jsx)(Z,Object(A.a)({loggedUser:this.props.loggedUser,job_id:this.state.job._id},this.props))]})]})})]}):Object(O.jsx)("h1",{children:"Loading...."})}}]),n}(s.Component),N=(n(85),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).handleInputChange=function(e){var t=e.target,n=t.name,a=t.value;s.setState(Object(G.a)({},n,a))},s.handleFormSubmit=function(e){e.preventDefault(),s.jobService.createJob(Object(A.a)(Object(A.a)({},s.state),{},{sender:s.props.sender,receiver:s.props.receiver})).then((function(){return s.props.history.push("/jobs")})).catch((function(e){return console.log(e)}))},s.state={jobType:"",description:"",deliveryAdress:""},s.jobService=new F,s}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:" Crea una petici\xf3n de JobList"}),Object(O.jsx)(B.a,{children:Object(O.jsxs)(z.a,{onSubmit:this.handleFormSubmit,children:[Object(O.jsxs)(z.a.Group,{className:"mb-3",controlId:"jobType",children:[Object(O.jsx)(z.a.Label,{children:"jobType"}),Object(O.jsx)(z.a.Control,{type:"text",value:this.state.jobType,onChange:this.handleInputChange,name:"jobType"})]}),Object(O.jsxs)(z.a.Group,{className:"mb-3",controlId:"deliveryAdress",children:[Object(O.jsx)(z.a.Label,{children:"dirreccion de envio"}),Object(O.jsx)(z.a.Control,{type:"text",value:this.state.deliveryAdress,onChange:this.handleInputChange,name:"deliveryAdress"})]}),Object(O.jsxs)(z.a.Group,{className:"mb-3",controlId:"Description",children:[Object(O.jsx)(z.a.Label,{children:"Descripcion"}),Object(O.jsx)(z.a.Control,{type:"text",value:this.state.description,onChange:this.handleInputChange,name:"description"})]}),Object(O.jsx)(z.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(O.jsx)(z.a.Check,{type:"checkbox",label:"Check me out"})}),Object(O.jsx)(M.a,{variant:"dark",type:"submit",children:" Crear petici\xf3n "})]})})]})}}]),n}(s.Component)),W=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).componentDidMount=function(){s.userService.getAll().then((function(e){return s.setState({users:e.data})})).catch((function(e){return console.log(e)}))},s.state={users:void 0,lat:void 0,lng:void 0},s.userService=new m,s}return Object(o.a)(n,[{key:"handleClick",value:function(e){e.lat,e.lng;this.setState({lat:e.lat,lng:e.lng}),this.props.handleMarkerPosition({lat:e.lat,lng:e.lng})}},{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(O.jsx)(I.a,{bootstrapURLKeys:{key:"AIzaSyAiWoZMeyUtielp3mdwvhIbbcddZkfUMtU"},defaultCenter:this.props.center,defaultZoom:this.props.zoom,onClick:function(t){return e.handleClick(t)},children:Object(O.jsx)(w,{onClick:this.onClick,lat:this.state.lat,lng:this.state.lng,text:"mi marcador"})})})}}]),n}(s.Component);W.defaultProps={center:{lat:28.092381,lng:-15.464042},zoom:12};var Q=W,T=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleInputChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(G.a)({},s,a))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.props.match.params.id;e.userService.editUser(n,e.state)},e.componentDidMount=function(){e.userService.getById(e.props.match.params.id).then((function(t){return e.setState({name:t.data.name,surname:t.data.surname,email:t.data.email})})).catch((function(e){return console.log(e)}))},e.handleMarkerPosition=function(t){e.setState(Object(A.a)(Object(A.a)({},e.state),{},{position:t}))},e.state={name:"",surname:"",email:"",position:null},e.userService=new m,e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h1",{children:["helloworld",Object(O.jsx)("hr",{})]}),Object(O.jsx)(Q,{handleMarkerPosition:this.handleMarkerPosition}),Object(O.jsxs)(z.a,{onSubmit:this.handleFormSubmit,children:[Object(O.jsxs)(z.a.Group,{className:"mb-3",controlId:"name",children:[Object(O.jsx)(z.a.Label,{children:"Nombre "}),Object(O.jsx)(z.a.Control,{type:"text",value:this.state.name,onChange:this.handleInputChange,name:"name"})]}),Object(O.jsxs)(z.a.Group,{className:"mb-3",controlId:"surname",children:[Object(O.jsx)(z.a.Label,{children:"Apellidos"}),Object(O.jsx)(z.a.Control,{type:"text",value:this.state.surname,onChange:this.handleInputChange,name:"surname"})]}),Object(O.jsxs)(z.a.Group,{className:"mb-3",controlId:"email",children:[Object(O.jsx)(z.a.Label,{children:"Email"}),Object(O.jsx)(z.a.Control,{type:"email",value:this.state.email,onChange:this.handleInputChange,name:"email"})]}),Object(O.jsx)(z.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(O.jsx)(z.a.Check,{type:"checkbox",label:"Check me out"})}),Object(O.jsx)(M.a,{variant:"dark",type:"submit",children:" Registrarme "})]})]})}}]),n}(s.Component),R=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleInputChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(G.a)({},s,a))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,s=n.name,a=n.surname,r=n.pwd,c=n.email,i=n.description;e.userService.signup(s,a,r,c,i).then((function(){return e.props.history.push("/user/login")})).catch((function(e){return console.log(e)}))},e.state={name:"",surname:"",pwd:"",email:"",description:""},e.userService=new m,e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(B.a,{children:Object(O.jsx)(g.a,{children:Object(O.jsxs)(v.a,{md:{span:6,offset:3},children:[Object(O.jsx)("h1",{children:"Registro de usuario"}),Object(O.jsx)("hr",{}),Object(O.jsxs)(z.a,{onSubmit:this.handleFormSubmit,children:[Object(O.jsxs)(z.a.Group,{className:"mb-3",controlId:"name",children:[Object(O.jsx)(z.a.Label,{children:"Nombre de Usuario"}),Object(O.jsx)(z.a.Control,{type:"text",value:this.state.name,onChange:this.handleInputChange,name:"name"})]}),Object(O.jsxs)(z.a.Group,{className:"mb-3",controlId:"surname",children:[Object(O.jsx)(z.a.Label,{children:"Apelidos"}),Object(O.jsx)(z.a.Control,{type:"text",value:this.state.surname,onChange:this.handleInputChange,name:"surname"})]}),Object(O.jsxs)(z.a.Group,{className:"mb-3",controlId:"pwd",children:[Object(O.jsx)(z.a.Label,{children:"Contrase\xf1a"}),Object(O.jsx)(z.a.Control,{type:"password",value:this.state.pwd,onChange:this.handleInputChange,name:"pwd"})]}),Object(O.jsxs)(z.a.Group,{className:"mb-3",controlId:"email",children:[Object(O.jsx)(z.a.Label,{children:"Email"}),Object(O.jsx)(z.a.Control,{type:"email",value:this.state.email,onChange:this.handleInputChange,name:"email"})]}),Object(O.jsxs)(z.a.Group,{className:"mb-3",controlId:"description",children:[Object(O.jsx)(z.a.Label,{children:"descripcion"}),Object(O.jsx)(z.a.Control,{type:"text",value:this.state.description,onChange:this.handleInputChange,name:"description"})]}),Object(O.jsx)(z.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(O.jsx)(z.a.Check,{type:"checkbox",label:"Check me out"})}),Object(O.jsx)(M.a,{variant:"dark",type:"submit",children:" Registrarme "})]})]})})})})}}]),n}(s.Component),q=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleInputChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(G.a)({},s,a))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,s=n.email,a=n.pwd;e.userService.login(s,a).then((function(t){e.props.storeUser(t.data),e.props.history.push("/")})).catch((function(e){return console.log(e)}))},e.state={pwd:"",email:""},e.userService=new m,e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(B.a,{children:Object(O.jsx)(g.a,{children:Object(O.jsxs)(v.a,{md:{span:6,offset:3},children:[Object(O.jsx)("h1",{children:"Inicio de sesi\xf3n"}),Object(O.jsx)("hr",{}),Object(O.jsxs)(z.a,{onSubmit:this.handleFormSubmit,children:[Object(O.jsxs)(z.a.Group,{className:"mb-3",controlId:"email",children:[Object(O.jsx)(z.a.Label,{children:"Email"}),Object(O.jsx)(z.a.Control,{type:"email",value:this.state.email,onChange:this.handleInputChange,name:"email"})]}),Object(O.jsxs)(z.a.Group,{className:"mb-3",controlId:"pwd",children:[Object(O.jsx)(z.a.Label,{children:"Contrase\xf1a"}),Object(O.jsx)(z.a.Control,{type:"password",value:this.state.pwd,onChange:this.handleInputChange,name:"pwd"})]}),Object(O.jsx)(M.a,{variant:"dark",type:"submit",children:" Iniciar sesi\xf3n "})]})]})})})})}}]),n}(s.Component),X=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).componentDidMount=function(){s.userService.getById(s.props.match.params.id).then((function(e){return s.setState({user:e.data})})).catch((function(e){return console.log(e)}))},s.state={user:void 0},s.userService=new m,s}return Object(o.a)(n,[{key:"render",value:function(){return this.state.user&&console.log("response.data",this.state.user),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:[" Nombre: ",this.state.user&&this.state.user.name," "]}),Object(O.jsxs)("p",{children:[" M\xe1quinas: ",this.state.user&&this.state.user.machines," "]}),Object(O.jsxs)("p",{children:[" Descripci\xf3n: ",this.state.user&&this.state.user.description," "]})]}),this.props.loggedUser&&Object(O.jsx)(N,Object(A.a)({sender:this.props.loggedUser&&this.props.loggedUser._id,receiver:this.props.match.params.id},this.props))]})}}]),n}(s.Component),Y=function(e){var t=e.storeUser,n=e.loggedUser;return Object(O.jsxs)(C.d,{children:[Object(O.jsx)(C.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(U,{})}}),Object(O.jsx)(C.b,{path:"/jobs",exact:!0,render:function(){return n?Object(O.jsx)(E,{loggedUser:n}):Object(O.jsx)(C.a,{to:"/"})}}),Object(O.jsx)(C.b,{path:"/detail/:job_id",render:function(e){return n?Object(O.jsx)(J,Object(A.a)(Object(A.a)({},e),{},{loggedUser:n})):Object(O.jsx)(C.a,{to:"/"})}}),Object(O.jsx)(C.b,{path:"/jobs/crear",render:function(e){return n?Object(O.jsx)(N,Object(A.a)({},e)):Object(O.jsx)(C.a,{to:"/"})}}),Object(O.jsx)(C.b,{path:"/user/signup",render:function(e){return Object(O.jsx)(R,Object(A.a)({},e))}}),Object(O.jsx)(C.b,{path:"/user/login",render:function(e){return Object(O.jsx)(q,Object(A.a)(Object(A.a)({},e),{},{storeUser:t}))}}),Object(O.jsx)(C.b,{path:"/mi-perfil/:id",render:function(e){return n?Object(O.jsx)(T,Object(A.a)({loggedUser:n},e)):Object(O.jsx)(C.a,{to:"/"})}}),Object(O.jsx)(C.b,{path:"/perfil-de-usuario/:id",render:function(e){return n?Object(O.jsx)(X,Object(A.a)({loggedUser:n},e)):Object(O.jsx)(C.a,{to:"/"})}})]})},H=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).storeUser=function(t){return e.setState({loggedUser:t})},e.fetchUser=function(){e.userService.isLoggedIn().then((function(t){return e.storeUser(t.data)})).catch((function(){return e.storeUser(void 0)}))},e.componentDidMount=function(){return e.fetchUser()},e.state={loggedUser:!1},e.userService=new m,e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{storeUser:this.storeUser,loggedUser:this.state.loggedUser}),Object(O.jsx)(Y,{storeUser:this.storeUser,loggedUser:this.state.loggedUser}),Object(O.jsx)(f,{})]})}}]),n}(s.Component),V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};c.a.render(Object(O.jsx)(u.a,{children:Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(H,{})})}),document.getElementById("root")),V()}},[[86,1,2]]]);
//# sourceMappingURL=main.ca91c78e.chunk.js.map
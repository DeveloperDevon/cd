(function(e){function t(t){for(var n,o,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4a57da47"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"14932ff7"}[e]+".css",a=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],f.parentNode.removeChild(f),r(i)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/cd/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{staticStyle:{height:"100vh",overflow:"hidden"}},[r("Header"),r("v-content",[r("router-view")],1)],1)},a=[],i=r("5530"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("NavDrawer"),r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"},on:{click:function(t){t.stopPropagation(),e.drawerVisible=!e.drawerVisible}}}),r("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}}),r("v-spacer"),e.loggedIn?e._e():r("v-btn",{attrs:{text:""}},[r("Login")],1),e.loggedIn?r("v-btn",{staticStyle:{"padding-right":"0px !important"},attrs:{text:""},on:{click:function(t){return e.signOut()}}},[e._v(" Logout "),r("v-icon",[e._v("mdi-logout-variant")])],1):e._e()],1)},s=[],u=(r("ac1f"),r("5319"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("div",e._g({},n),[e._v("Login "),r("v-icon",[e._v("mdi-login-variant")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.signIn()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-card",[r("v-container",[r("v-card-title",{staticClass:"headline lighten-2",attrs:{"primary-title":""}},[e._v(" Login ")]),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Email",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{type:"password",label:"Password",rules:e.passwordRules,required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)],1),r("v-card-actions",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-btn",{attrs:{type:"submit"}},[e._v("Login")])],1)],1),e.error?r("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()],1)],1)],1)],1)],1)}),l=[],d=(r("96cf"),r("1da1")),f=r("2f62"),m={data:function(){return{dialog:"",email:"",password:"",error:"",valid:!1,passwordRules:[function(e){return!!e||"Name is required"}],emailRules:[function(e){return!!e||"E-mail is required"}]}},computed:Object(f["c"])(["loggedIn","authError"]),methods:Object(i["a"])({},Object(f["b"])(["login"]),{signIn:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={email:e.email,password:e.password},t.next=3,e.login(r).then((function(){e.loggedIn&&(e.$router.replace({name:"dashboard"}),e.dialog=!1,e.email="",e.password=""),e.authError&&(e.error=e.authError)}));case 3:case"end":return t.stop()}}),t)})))()}})},v=m,p=r("2877"),h=r("6544"),g=r.n(h),b=r("8336"),w=r("b0af"),y=r("99d9"),k=r("62ad"),x=r("a523"),_=r("169a"),V=r("4bd4"),j=r("132d"),O=r("0fd9"),E=r("8654"),I=Object(p["a"])(v,u,l,!1,null,"09211730",null),R=I.exports;g()(I,{VBtn:b["a"],VCard:w["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:k["a"],VContainer:x["a"],VDialog:_["a"],VForm:V["a"],VIcon:j["a"],VRow:O["a"],VTextField:E["a"]});var C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"overflow-hidden",attrs:{height:"400"}},[r("v-navigation-drawer",{staticStyle:{"z-index":"1"},attrs:{color:"primary",app:""},model:{value:e.drawerVisible,callback:function(t){e.drawerVisible=t},expression:"drawerVisible"}},[r("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-avatar",[r("img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg"}})]),r("v-list-item-content",[r("v-list-item-title",[e._v("Application")]),r("v-list-item-subtitle",[e._v("Subtext")])],1)],1),r("v-divider"),e._l(e.navItems,(function(e){return r("NavDrawerItem",{key:e.icon,attrs:{route:e.route,icon:e.icon,title:e.title}})}))],2)],1)],1)},A=[],S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list-item",{attrs:{link:""},on:{click:function(t){return e.routeTo(e.route)}}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(e.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.title))])],1)],1)},L=[],G=(r("b0c0"),{props:["route","icon","title"],methods:{routeTo:function(e){this.$router.currentRoute.name!=e&&this.$router.replace({name:e}),this.$store.commit("setDrawer",!1)}}}),$=G,D=r("da13"),T=r("5d23"),N=r("34c3"),P=Object(p["a"])($,S,L,!1,null,"b4095b40",null),q=P.exports;g()(P,{VIcon:j["a"],VListItem:D["a"],VListItemContent:T["a"],VListItemIcon:N["a"],VListItemTitle:T["c"]});var F={components:{NavDrawerItem:q},computed:{drawerVisible:{get:function(){return this.$store.getters.drawerVisible},set:function(e){return this.$store.commit("setDrawer",e)}}},data:function(){return{navItems:[{route:"dashboard",icon:"mdi-view-dashboard",title:"Dashboard"},{route:"groceries",icon:"mdi-cart",title:"Groceries"},{route:"calendar",icon:"mdi-calendar",title:"Calendar"}]}}},B=F,U=r("ce7e"),z=r("8860"),H=r("8270"),M=r("f774"),W=Object(p["a"])(B,C,A,!1,null,"3e43eee6",null),J=W.exports;g()(W,{VCard:w["a"],VDivider:U["a"],VList:z["a"],VListItem:D["a"],VListItemAvatar:H["a"],VListItemContent:T["a"],VListItemSubtitle:T["b"],VListItemTitle:T["c"],VNavigationDrawer:M["a"]});var K={name:"Header",components:{Login:R,NavDrawer:J},computed:Object(i["a"])({},Object(f["c"])(["loggedIn"]),{drawerVisible:{get:function(){return this.$store.getters.drawerVisible},set:function(e){return this.$store.commit("setDrawer",e)}}}),methods:Object(i["a"])({},Object(f["b"])(["logout"]),{signOut:function(){this.logout().then(this.$router.replace({name:"unauthorized"}))}})},Q=K,Y=r("40dc"),X=r("adda"),Z=r("2fa4"),ee=Object(p["a"])(Q,c,s,!1,null,"1dd41068",null),te=ee.exports;g()(ee,{VAppBar:Y["a"],VBtn:b["a"],VIcon:j["a"],VImg:X["a"],VSpacer:Z["a"]});var re=r("59ca"),ne=(r("e71f"),r("ea7b"),{apiKey:"AIzaSyD0YWJ5m7bxsgf0HcP324wHlWkpcQ8n7ak",authDomain:"devler-1720e.firebaseapp.com",databaseURL:"https://devler-1720e.firebaseio.com",projectId:"devler-1720e",storageBucket:"devler-1720e.appspot.com",messagingSenderId:"789649485811789649485811",appId:"1:789649485811:web:8bbfd25b395ee9fcfa2c86",measurementId:"G-RP6VWTQEL4"}),oe=(re["initializeApp"](ne),re["firestore"]()),ae=re["auth"](),ie={name:"App",components:{Header:te},created:function(){this.fetchGroceries(),this.fetchEvents(),ae.currentUser&&(this.$store.commit("setAuthenticated",!0),this.$store.commit("setUser",ae.currentUser.email))},data:function(){return{}},methods:Object(i["a"])({},Object(f["b"])(["fetchGroceries","fetchEvents"]))},ce=ie,se=r("7496"),ue=r("a75b"),le=Object(p["a"])(ce,o,a,!1,null,null,null),de=le.exports;g()(le,{VApp:se["a"],VContent:ue["a"]});var fe=r("9483");Object(fe["a"])("".concat("/cd/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("45fc"),r("d3b7");var me=r("8c4f"),ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pl-4 mt-4"},[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/groceries"}},[r("v-icon",{staticStyle:{"font-size":"9rem"},attrs:{color:"primary"}},[e._v("mdi-cart")])],1)],1),r("v-col",{staticClass:"pl-7 pt-6",attrs:{cols:"8"}},[r("h4",[e._v("Recently Added")]),r("ol",{staticStyle:{"padding-left":"0px"},attrs:{color:"primary"}},e._l(e.groceries.slice(0,4),(function(t){return r("li",{key:t.id},[e._v(" "+e._s(t.item_name))])})),0)])],1),r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/calendar"}},[r("v-icon",{staticStyle:{"font-size":"9rem"},attrs:{color:"primary"}},[e._v("mdi-calendar-month")])],1)],1),r("v-col",{staticClass:"pl-7 pt-5",attrs:{cols:"8"}},[r("h4",[e._v("Upcoming Events")]),r("ul",{staticStyle:{"padding-left":"0px"},attrs:{color:"primary"}},e._l(e.events.slice(0,4),(function(t){return r("li",{key:t.id},[e._v(e._s(t.start.slice(5))+" - "+e._s(t.end.slice(5))+": "+e._s(t.name))])})),0)])],1)],1)},pe=[],he={name:"Dashboard",components:{},computed:Object(i["a"])({},Object(f["c"])(["events","groceries"]))},ge=he,be=(r("c255"),Object(p["a"])(ge,ve,pe,!1,null,"a92b90ba",null)),we=be.exports;g()(be,{VCol:k["a"],VIcon:j["a"],VRow:O["a"]}),n["a"].use(me["a"]);var ye=[{path:"/",name:"dashboard",component:we,meta:{requiresAuth:!0}},{path:"/groceries",name:"groceries",component:function(){return r.e("about").then(r.bind(null,"b721"))},meta:{requiresAuth:!0}},{path:"/calendar",name:"calendar",component:function(){return r.e("about").then(r.bind(null,"ac0f"))},meta:{requiresAuth:!0}},{path:"/unauthorized",name:"unauthorized",component:function(){return r.e("about").then(r.bind(null,"aece"))}}],ke=new me["a"]({routes:ye});ke.beforeEach((function(e,t,r){var n=e.matched.some((function(e){return e.meta.requiresAuth})),o=re["auth"]().currentUser;n&&!o?r("/unauthorized"):r()}));var xe=ke,_e=r("bc3a"),Ve=r.n(_e),je={drawerVisible:!1},Oe={drawerVisible:function(e){return e.drawerVisible}},Ee={},Ie={setDrawer:function(e,t){e.drawerVisible=t}},Re={state:je,getters:Oe,actions:Ee,mutations:Ie},Ce={user:{},loggedIn:!1,authError:""},Ae={user:function(e){return e.user},loggedIn:function(e){return e.loggedIn},authError:function(e){return e.authError}},Se={login:function(e,t){var r=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ae.signInWithEmailAndPassword(t.email,t.password).then((function(e){console.log("from store"),r("setUser",e.user.email),r("setAuthenticated",!0)})).catch((function(e){return r("setAuthError",e)}));case 2:case"end":return e.stop()}}),e)})))()},logout:function(e){var t=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ae.signOut().then((function(e){t("setAuthenticated",!!e),t("setUser",null)})).catch((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)})))()}},Le={setUser:function(e,t){t?(e.user=t,e.loggedIn=!0):(e.user={},e.loggedIn=!1)},setAuthenticated:function(e,t){e.loggedIn=t},setAuthError:function(e,t){e.authError=t}},Ge={state:Ce,getters:Ae,actions:Se,mutations:Le},$e=(r("4de4"),r("7db0"),r("c740"),r("4160"),r("d81d"),r("a434"),r("159b"),r("6062"),r("3ca3"),r("ddb0"),r("2909"),function(e){return{id:e.id,item_name:e.data().item_name,category:e.data().category,checked:e.data().checked,qty:e.data().qty}}),De=function(e){return{id:e.id,name:e.data().name,start:e.data().start,end:e.data().end,details:e.data().details}},Te=r("8aa50"),Ne={groceries:[]},Pe={groceries:function(e){return e.groceries}},qe={fetchGroceries:function(e){var t=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe.collection("groceries").orderBy("checked","asc").get().then((function(e){return e.docs.map((function(e){return $e(e)}))}));case 2:r=e.sent,t("setGroceries",r);case 4:case"end":return e.stop()}}),e)})))()},addGrocery:function(e,t){var r=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Te["firestore"].FieldValue.serverTimestamp(),e.next=3,oe.collection("groceries").add(Object(i["a"])({timestamp:n},t)).then((function(e){return r("newGrocery",Object(i["a"])({id:e.id},t))}));case 3:case"end":return e.stop()}}),e)})))()},removeGrocery:function(e,t){var r=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe.collection("groceries").doc(t).delete().then(r("deleteGrocery",t));case 2:case"end":return e.stop()}}),e)})))()},removeCheckedGroceries:function(e){var t=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe.collection("groceries").where("checked","==",!0).get().then((function(e){var t=oe.batch();return e.forEach((function(e){return t.delete(e.ref)})),t.commit()})).then((function(){return t("deleteChecked")}));case 2:case"end":return e.stop()}}),e)})))()},modifyGrocery:function(e,t){var r=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe.collection("groceries").doc(t.id).set(t).then(r("modifyGrocery",t));case 2:case"end":return e.stop()}}),e)})))()},toggleChecked:function(e,t){var r=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe.collection("groceries").doc(t.id).update({checked:!t.checked}).then(r("updateChecked",t));case 2:case"end":return e.stop()}}),e)})))()},sortBy:function(e,t){var r=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe.collection("groceries").orderBy(t).get().then((function(e){return e.docs.map((function(e){return $e(e)}))}));case 2:n=e.sent,r("sortGroceries",n);case 4:case"end":return e.stop()}}),e)})))()}},Fe={setGroceries:function(e,t){return e.groceries=t},newGrocery:function(e,t){return e.groceries.push(t)},deleteGrocery:function(e,t){return e.groceries=e.groceries.filter((function(e){return e.id!==t}))},deleteChecked:function(e){return e.groceries=e.groceries.filter((function(e){return!0!==e.checked}))},modifyGrocery:function(e,t){var r=e.groceries.findIndex((function(e){return e.id===t.id}));-1!==r&&e.groceries.splice(r,1,t)},updateChecked:function(e,t){return e.groceries.find((function(e){return e.id===t.id})).checked=!t.checked},sortGroceries:function(e,t){return e.groceries=t}},Be={state:Ne,getters:Pe,actions:qe,mutations:Fe},Ue={events:[]},ze={events:function(e){return e.events}},He={fetchEvents:function(e){var t=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe.collection("calEvent").get().then((function(e){return e.docs.map((function(e){return De(e)}))}));case 2:r=e.sent,t("setEvents",r);case 4:case"end":return e.stop()}}),e)})))()},addEvent:function(e,t){var r=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe.collection("calEvent").add(t).then((function(e){return r("newEvent",Object(i["a"])({id:e.id},t))}));case 2:case"end":return e.stop()}}),e)})))()},updateEvent:function(e,t){var r=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe.collection("calEvent").doc(t.id).set(t).then(r("setEvent",t));case 2:case"end":return e.stop()}}),e)})))()},removeGrocery:function(e,t){var r=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe.collection("calEvent").doc(t).delete().then(r("deleteEvent",t));case 2:case"end":return e.stop()}}),e)})))()}},Me={setEvents:function(e,t){return e.events=t},newEvent:function(e,t){return e.events.push(t)},deleteEvent:function(e,t){return e.events=e.events.filter((function(e){return e.id!==t}))},setEvent:function(e,t){var r=e.events.findIndex((function(e){return e.id===t.id}));-1!==r&&e.events.splice(r,1,t)}},We={state:Ue,getters:ze,actions:He,mutations:Me};n["a"].use(f["a"]);var Je=new f["a"].Store({modules:{ui:Re,auth:Ge,groceries:Be,calendar:We}}),Ke=r("f309");n["a"].use(Ke["a"]);var Qe,Ye=new Ke["a"]({theme:{dark:!0,themes:{dark:{primary:"#21468b",secondary:"#ff5722",accent:"#FFFFFF",error:"#f44336",warning:"#ffeb3b",info:"#ff9800",success:"#4caf50"}}}}),Xe="The .native modifier for v-on is only valid on components but it was used on <div>.";n["a"].config.warnHandler=function(e){e===Xe&&(e=null)},n["a"].prototype.$axios=Ve.a,n["a"].config.productionTip=!1,re["auth"]().onAuthStateChanged((function(){Qe||(Qe=new n["a"]({router:xe,store:Je,vuetify:Ye,render:function(e){return e(de)}}).$mount("#app"))}))},6643:function(e,t,r){},c255:function(e,t,r){"use strict";var n=r("6643"),o=r.n(n);o.a}});
//# sourceMappingURL=app.326f1606.js.map
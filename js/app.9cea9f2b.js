(function(e){function t(t){for(var n,o,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f3f666a9"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"2fce5f32"}[e]+".css",a=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],m.parentNode.removeChild(m),r(i)},m.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/cd/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"14f6":function(e,t,r){},"16c3":function(e,t,r){"use strict";var n=r("2fe2"),o=r.n(n);o.a},1776:function(e,t,r){"use strict";var n=r("55b0"),o=r.n(n);o.a},"17e1":function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r("59ca"),o=(r("e71f"),r("ea7b"),{apiKey:"AIzaSyD0YWJ5m7bxsgf0HcP324wHlWkpcQ8n7ak",authDomain:"devler-1720e.firebaseapp.com",databaseURL:"https://devler-1720e.firebaseio.com",projectId:"devler-1720e",storageBucket:"devler-1720e.appspot.com",messagingSenderId:"789649485811789649485811",appId:"1:789649485811:web:8bbfd25b395ee9fcfa2c86",measurementId:"G-RP6VWTQEL4"}),a=(n["initializeApp"](o),n["firestore"]()),i=n["auth"]()},"2fe2":function(e,t,r){},"55b0":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{staticStyle:{height:"100vh",overflow:"hidden"}},[r("Header"),r("v-content",[r("router-view")],1)],1)},a=[],i=r("5530"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("NavDrawer"),r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"},on:{click:function(t){t.stopPropagation(),e.drawerVisible=!e.drawerVisible}}}),r("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}}),r("v-spacer"),e.loggedIn?e._e():r("v-btn",{attrs:{text:""}},[r("Login")],1),e.loggedIn?r("v-btn",{staticStyle:{"padding-right":"0px !important"},attrs:{text:""},on:{click:function(t){return e.signOut()}}},[e._v(" Logout "),r("v-icon",[e._v("mdi-logout-variant")])],1):e._e()],1)},s=[],u=(r("ac1f"),r("5319"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("div",e._g({},n),[e._v("Login "),r("v-icon",[e._v("mdi-login-variant")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.signIn()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-card",[r("v-container",[r("v-card-title",{staticClass:"headline lighten-2",attrs:{"primary-title":""}},[e._v(" Login ")]),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Email",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{type:"password",label:"Password",rules:e.passwordRules,required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)],1),r("v-card-actions",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-btn",{attrs:{type:"submit"}},[e._v("Login")])],1)],1),e.error?r("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()],1)],1)],1)],1)],1)}),l=[],d=(r("96cf"),r("1da1")),m=r("2f62"),f={data:function(){return{dialog:"",email:"",password:"",error:"",valid:!1,passwordRules:[function(e){return!!e||"Name is required"}],emailRules:[function(e){return!!e||"E-mail is required"}]}},computed:Object(m["c"])(["loggedIn","authError"]),methods:Object(i["a"])({},Object(m["b"])(["login"]),{signIn:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={email:e.email,password:e.password},t.next=3,e.login(r).then((function(){e.loggedIn&&(e.$router.replace({name:"dashboard"}),e.dialog=!1,e.email="",e.password=""),e.authError&&(e.error=e.authError)}));case 3:case"end":return t.stop()}}),t)})))()}})},g=f,v=r("2877"),p=r("6544"),h=r.n(p),b=r("8336"),y=r("b0af"),w=r("99d9"),V=r("62ad"),C=r("a523"),k=r("169a"),_=r("4bd4"),x=r("132d"),I=r("0fd9"),j=r("8654"),O=Object(v["a"])(g,u,l,!1,null,"09211730",null),A=O.exports;h()(O,{VBtn:b["a"],VCard:y["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:V["a"],VContainer:C["a"],VDialog:k["a"],VForm:_["a"],VIcon:x["a"],VRow:I["a"],VTextField:j["a"]});var E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"overflow-hidden",attrs:{height:"400"}},[r("v-navigation-drawer",{staticStyle:{"z-index":"1"},attrs:{color:"primary",app:""},model:{value:e.drawerVisible,callback:function(t){e.drawerVisible=t},expression:"drawerVisible"}},[r("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-avatar",[r("img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg"}})]),r("v-list-item-content",[r("v-list-item-title",[e._v("Application")]),r("v-list-item-subtitle",[e._v("Subtext")])],1)],1),r("v-divider"),e._l(e.navItems,(function(e){return r("NavDrawerItem",{key:e.icon,attrs:{route:e.route,icon:e.icon,title:e.title}})}))],2)],1)],1)},G=[],S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list-item",{attrs:{link:""},on:{click:function(t){return e.routeTo(e.route)}}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(e.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.title))])],1)],1)},R=[],q=(r("b0c0"),{props:["route","icon","title"],methods:{routeTo:function(e){this.$router.currentRoute.name!=e&&this.$router.replace({name:e}),this.$store.commit("setDrawer",!1)}}}),L=q,B=r("da13"),T=r("5d23"),$=r("34c3"),D=Object(v["a"])(L,S,R,!1,null,"b4095b40",null),N=D.exports;h()(D,{VIcon:x["a"],VListItem:B["a"],VListItemContent:T["a"],VListItemIcon:$["a"],VListItemTitle:T["c"]});var P={components:{NavDrawerItem:N},computed:{drawerVisible:{get:function(){return this.$store.getters.drawerVisible},set:function(e){return this.$store.commit("setDrawer",e)}}},data:function(){return{navItems:[{route:"dashboard",icon:"mdi-view-dashboard",title:"Dashboard"},{route:"groceries",icon:"mdi-cart",title:"Groceries"},{route:"calendar",icon:"mdi-calendar",title:"Calendar"}]}}},F=P,U=r("ce7e"),z=r("8860"),H=r("8270"),M=r("f774"),Q=Object(v["a"])(F,E,G,!1,null,"3e43eee6",null),W=Q.exports;h()(Q,{VCard:y["a"],VDivider:U["a"],VList:z["a"],VListItem:B["a"],VListItemAvatar:H["a"],VListItemContent:T["a"],VListItemSubtitle:T["b"],VListItemTitle:T["c"],VNavigationDrawer:M["a"]});var J={name:"Header",components:{Login:A,NavDrawer:W},computed:Object(i["a"])({},Object(m["c"])(["loggedIn"]),{drawerVisible:{get:function(){return this.$store.getters.drawerVisible},set:function(e){return this.$store.commit("setDrawer",e)}}}),methods:Object(i["a"])({},Object(m["b"])(["logout"]),{signOut:function(){this.logout().then(this.$router.replace({name:"unauthorized"}))}})},K=J,Y=r("40dc"),X=r("adda"),Z=r("2fa4"),ee=Object(v["a"])(K,c,s,!1,null,"1dd41068",null),te=ee.exports;h()(ee,{VAppBar:Y["a"],VBtn:b["a"],VIcon:x["a"],VImg:X["a"],VSpacer:Z["a"]});var re=r("17e1"),ne={name:"App",components:{Header:te},created:function(){this.fetchGroceries(),re["a"].currentUser&&(this.$store.commit("setAuthenticated",!0),this.$store.commit("setUser",re["a"].currentUser.email)),console.log(re["a"].currentUser)},data:function(){return{}},methods:Object(i["a"])({},Object(m["b"])(["fetchGroceries"]))},oe=ne,ae=r("7496"),ie=r("a75b"),ce=Object(v["a"])(oe,o,a,!1,null,null,null),se=ce.exports;h()(ce,{VApp:ae["a"],VContent:ie["a"]});var ue=r("9483");Object(ue["a"])("".concat("/cd/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("45fc"),r("d3b7");var le=r("8c4f"),de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("h1",[e._v("Dashboard")]),r("Groceries")],1)],1)],1)},me=[],fe=r("b721"),ge={name:"Dashboard",components:{Groceries:fe["default"]}},ve=ge,pe=Object(v["a"])(ve,de,me,!1,null,null,null),he=pe.exports;h()(pe,{VCol:V["a"],VContainer:C["a"],VRow:I["a"]});var be=r("59ca");r("ea7b");n["a"].use(le["a"]);var ye=[{path:"/",name:"dashboard",component:he,meta:{requiresAuth:!0}},{path:"/groceries",name:"groceries",component:function(){return r.e("about").then(r.bind(null,"b721"))},meta:{requiresAuth:!0}},{path:"/calendar",name:"calendar",component:function(){return r.e("about").then(r.bind(null,"ac0f"))},meta:{requiresAuth:!0}},{path:"/unauthorized",name:"unauthorized",component:function(){return r.e("about").then(r.bind(null,"aece"))}}],we=new le["a"]({routes:ye});we.beforeEach((function(e,t,r){var n=e.matched.some((function(e){return e.meta.requiresAuth})),o=be["auth"]().currentUser;n&&!o?r("/unauthorized"):r()}));var Ve=we,Ce=r("bc3a"),ke=r.n(Ce),_e={drawerVisible:!1},xe={drawerVisible:function(e){return e.drawerVisible}},Ie={},je={setDrawer:function(e,t){e.drawerVisible=t}},Oe={state:_e,getters:xe,actions:Ie,mutations:je},Ae={user:{},loggedIn:!1,authError:""},Ee={user:function(e){return e.user},loggedIn:function(e){return e.loggedIn},authError:function(e){return e.authError}},Ge={login:function(e,t){var r=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,re["a"].signInWithEmailAndPassword(t.email,t.password).then((function(e){console.log("from store"),r("setUser",e.user.email),r("setAuthenticated",!0)})).catch((function(e){return r("setAuthError",e)}));case 2:case"end":return e.stop()}}),e)})))()},logout:function(e){var t=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,re["a"].signOut().then((function(e){t("setAuthenticated",!!e),t("setUser",null)})).catch((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)})))()}},Se={setUser:function(e,t){t?(e.user=t,e.loggedIn=!0):(e.user={},e.loggedIn=!1)},setAuthenticated:function(e,t){e.loggedIn=t},setAuthError:function(e,t){e.authError=t}},Re={state:Ae,getters:Ee,actions:Ge,mutations:Se},qe=(r("4de4"),r("7db0"),r("c740"),r("4160"),r("d81d"),r("a434"),r("159b"),r("6062"),r("3ca3"),r("ddb0"),r("2909"),function(e){return{id:e.id,item_name:e.data().item_name,category:e.data().category,checked:e.data().checked,qty:e.data().qty}}),Le=r("8aa50"),Be={groceries:[]},Te={groceries:function(e){return e.groceries}},$e={fetchGroceries:function(e){var t=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,re["b"].collection("groceries").orderBy("timestamp","asc").get().then((function(e){return e.docs.map((function(e){return qe(e)}))}));case 2:r=e.sent,t("setGroceries",r);case 4:case"end":return e.stop()}}),e)})))()},addGrocery:function(e,t){var r=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Le["firestore"].FieldValue.serverTimestamp(),e.next=3,re["b"].collection("groceries").add(Object(i["a"])({timestamp:n},t)).then((function(e){return r("newGrocery",Object(i["a"])({id:e.id},t))}));case 3:case"end":return e.stop()}}),e)})))()},removeGrocery:function(e,t){var r=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,re["b"].collection("groceries").doc(t).delete().then(r("deleteGrocery",t));case 2:case"end":return e.stop()}}),e)})))()},removeCheckedGroceries:function(e){var t=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,re["b"].collection("groceries").where("checked","==",!0).get().then((function(e){var t=re["b"].batch();return e.forEach((function(e){return t.delete(e.ref)})),t.commit()})).then((function(){return t("deleteChecked")}));case 2:case"end":return e.stop()}}),e)})))()},modifyGrocery:function(e,t){var r=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,re["b"].collection("groceries").doc(t.id).set(t).then(r("modifyGrocery",t));case 2:case"end":return e.stop()}}),e)})))()},toggleChecked:function(e,t){var r=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,re["b"].collection("groceries").doc(t.id).update({checked:!t.checked}).then(r("updateChecked",t));case 2:case"end":return e.stop()}}),e)})))()},sortBy:function(e,t){var r=e.commit;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,re["b"].collection("groceries").orderBy(t).get().then((function(e){return e.docs.map((function(e){return qe(e)}))}));case 2:n=e.sent,r("sortGroceries",n);case 4:case"end":return e.stop()}}),e)})))()}},De={setGroceries:function(e,t){return e.groceries=t},newGrocery:function(e,t){return e.groceries.push(t)},deleteGrocery:function(e,t){return e.groceries=e.groceries.filter((function(e){return e.id!==t}))},deleteChecked:function(e){return e.groceries=e.groceries.filter((function(e){return!0!==e.checked}))},modifyGrocery:function(e,t){var r=e.groceries.findIndex((function(e){return e.id===t.id}));-1!==r&&e.groceries.splice(r,1,t)},updateChecked:function(e,t){return e.groceries.find((function(e){return e.id===t.id})).checked=!t.checked},sortGroceries:function(e,t){return e.groceries=t}},Ne={state:Be,getters:Te,actions:$e,mutations:De};n["a"].use(m["a"]);var Pe=new m["a"].Store({modules:{ui:Oe,auth:Re,groceries:Ne}}),Fe=r("f309");n["a"].use(Fe["a"]);var Ue,ze=new Fe["a"]({}),He="The .native modifier for v-on is only valid on components but it was used on <div>.";n["a"].config.warnHandler=function(e){e===He&&(e=null)},n["a"].prototype.$axios=ke.a,n["a"].config.productionTip=!1,be["auth"]().onAuthStateChanged((function(){Ue||(Ue=new n["a"]({router:Ve,store:Pe,vuetify:ze,render:function(e){return e(se)}}).$mount("#app"))}))},aad5:function(e,t,r){"use strict";var n=r("14f6"),o=r.n(n);o.a},b721:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("List")],1)},o=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"grocery-list text-left"},[r("v-row",[r("v-col",[r("v-row",{staticClass:"px-3"},[r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/groceries"}},[r("h3",{staticClass:"pl-4"},[e._v("Grocery List")])]),r("v-spacer"),e.groceries?r("h3",{staticClass:"pr-4",staticStyle:{color:"#1976d2"}},[e._v(" "+e._s(e.groceries.filter((function(e){return!0===e.checked})).length)+"/"+e._s(e.groceries.length)+" ")]):e._e()],1),"groceries"===this.currentRoute?r("v-simple-table",{attrs:{"fixed-header":"",height:"480"}},[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[e._v("Qty")]),r("th",{staticClass:"text-left"},[e._v("Item")]),r("th",{staticClass:"text-right"},[r("ListMenu")],1)])]),r("tbody",e._l(e.groceries,(function(t){return r("tr",{key:t.id},[r("td",[e._v(e._s(t.qty))]),r("td",{class:{checked:t.checked},on:{click:function(r){return e.toggleChecked(t)}}},[e._v(e._s(t.item_name))]),r("td",{staticClass:"text-right"},[r("EditGroceryButton",{staticStyle:{display:"inline","padding-right":"7px !important"},attrs:{grocery:t}}),r("v-icon",{attrs:{dense:"",color:"red"},on:{click:function(r){return e.removeGrocery(t.id)}}},[e._v("mdi-delete")])],1)])})),0)]):e._e()],1)],1),"groceries"===this.currentRoute?r("AddGroceryButton"):e._e()],1)},i=[],c=(r("b0c0"),r("5530")),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-icon",e._g({attrs:{dense:"",color:"orange"}},n),[e._v("mdi-pencil")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.updateItem()}}},[r("v-card",[r("v-card-title",{staticClass:"headline lighten-2",attrs:{"primary-title":""}},[e._v(" Edit Item ")]),r("v-card-text",[e.newCategoryVisible?e._e():r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-select",{attrs:{items:e.categories,"item-text":"name","item-value":"selectedCategory",label:"Category","append-outer-icon":"+"},on:{"click:append-outer":e.toggleAddCategoryVisible},model:{value:e.selectedCategory,callback:function(t){e.selectedCategory=t},expression:"selectedCategory"}})],1)],1),e.newCategoryVisible?r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Category","append-outer-icon":"x"},on:{"click:append-outer":e.toggleAddCategoryVisible},model:{value:e.newCategory,callback:function(t){e.newCategory=t},expression:"newCategory"}})],1)],1):e._e(),r("v-row",[r("v-col",{attrs:{cols:"9"}},[r("v-text-field",{attrs:{label:"Item Name",required:""},model:{value:e.newItem,callback:function(t){e.newItem=t},expression:"newItem"}})],1),r("v-col",{attrs:{cols:"3"}},[r("v-text-field",{attrs:{type:"number",label:"Qty","append-outer-icon":"+"},on:{"click:append-outer":e.increment},model:{value:e.qty,callback:function(t){e.qty=t},expression:"qty"}})],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",type:"submit"}},[e._v("Edit")])],1)],1)],1)]],2)],1)},u=[],l=(r("d81d"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("2909")),d=r("2f62"),m={name:"EditGroceryButton",props:["grocery"],computed:Object(d["c"])(["groceries"]),created:function(){this.fetchGroceries,this.categories=Object(l["a"])(new Set(this.groceries.map((function(e){return e.category}))))},data:function(){return{dialog:!1,categories:[],selectedCategory:this.grocery.category,newCategory:"",newCategoryVisible:!1,newItem:this.grocery.item_name,qty:this.grocery.qty?this.grocery.qty:1}},methods:Object(c["a"])({},Object(d["b"])(["fetchGroceries","modifyGrocery"]),{updateItem:function(){var e=this.newCategoryVisible?this.newCategory:this.selectedCategory,t={id:this.grocery.id,category:e,checked:this.grocery.checked,qty:this.qty,item_name:this.newItem};this.modifyGrocery(t),this.dialog=!1},toggleAddCategoryVisible:function(){this.newCategoryVisible=!this.newCategoryVisible},increment:function(){this.qty=parseInt(this.qty,10)+1}})},f=m,g=(r("16c3"),r("2877")),v=r("6544"),p=r.n(v),h=r("8336"),b=r("b0af"),y=r("99d9"),w=r("62ad"),V=r("a523"),C=r("169a"),k=r("4bd4"),_=r("132d"),x=r("0fd9"),I=r("b974"),j=r("2fa4"),O=r("8654"),A=Object(g["a"])(f,s,u,!1,null,null,null),E=A.exports;p()(A,{VBtn:h["a"],VCard:b["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:w["a"],VContainer:V["a"],VDialog:C["a"],VForm:k["a"],VIcon:_["a"],VRow:x["a"],VSelect:I["a"],VSpacer:j["a"],VTextField:O["a"]});var G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({staticClass:"mb-10",attrs:{fab:"",absolute:"",bottom:"",right:"",color:"primary",dark:""}},n),[r("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.addItem()}}},[r("v-card",[r("v-card-title",{staticClass:"headline lighten-2",attrs:{"primary-title":""}},[e._v(" Add Item ")]),r("v-card-text",[e.newCategoryVisible?e._e():r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-select",{attrs:{items:e.categories,"item-text":"name","item-value":"selectedCategory",label:"Category","append-outer-icon":"+"},on:{"click:append-outer":e.toggleAddCategoryVisible},model:{value:e.selectedCategory,callback:function(t){e.selectedCategory=t},expression:"selectedCategory"}})],1)],1),e.newCategoryVisible?r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Category","append-outer-icon":"x"},on:{"click:append-outer":e.toggleAddCategoryVisible},model:{value:e.newCategory,callback:function(t){e.newCategory=t},expression:"newCategory"}})],1)],1):e._e(),r("v-row",[r("v-col",{attrs:{cols:"9"}},[r("v-text-field",{attrs:{label:"Item Name",required:""},model:{value:e.newItem,callback:function(t){e.newItem=t},expression:"newItem"}})],1),r("v-col",{attrs:{cols:"3"}},[r("v-text-field",{attrs:{type:"number",label:"Qty","append-outer-icon":"+"},on:{"click:append-outer":e.increment},model:{value:e.qty,callback:function(t){e.qty=t},expression:"qty"}})],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",type:"submit"}},[e._v("Add")])],1)],1)],1)]],2)],1)},S=[],R={name:"AddGroceryButton",computed:Object(d["c"])(["groceries"]),created:function(){var e=this;this.fetchGroceries().then((function(){return e.categories=Object(l["a"])(new Set(e.groceries.map((function(e){return e.category}))))})),console.log("!",this.categories)},data:function(){return{dialog:!1,categories:[],selectedCategory:"food",newCategory:"",newCategoryVisible:!1,newItem:"",qty:1}},methods:Object(c["a"])({},Object(d["b"])(["fetchGroceries","addGrocery"]),{addItem:function(){this.categories=Object(l["a"])(new Set(this.groceries.map((function(e){return e.category}))));var e=this.newCategoryVisible?this.newCategory:this.selectedCategory,t={category:e,checked:!1,qty:this.qty,item_name:this.newItem};this.addGrocery(t),this.dialog=!1},toggleAddCategoryVisible:function(){this.newCategoryVisible=!this.newCategoryVisible},increment:function(){this.qty=parseInt(this.qty,10)+1}})},q=R,L=(r("1776"),Object(g["a"])(q,G,S,!1,null,null,null)),B=L.exports;p()(L,{VBtn:h["a"],VCard:b["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:w["a"],VContainer:V["a"],VDialog:C["a"],VForm:k["a"],VIcon:_["a"],VRow:x["a"],VSelect:I["a"],VSpacer:j["a"],VTextField:O["a"]});var T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-menu",{attrs:{bottom:"",left:"",transition:"slide-y-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({attrs:{icon:""}},n),[r("v-icon",[e._v("mdi-dots-vertical")])],1)]}}])},[e._l(e.menuItems,(function(t){return r("v-list",{key:t.title},[r("v-list-item",{on:{click:function(r){return e.sortBy(t.sortBy)}}},[e._v(e._s(t.title))])],1)})),r("v-list",[r("v-list-item",{staticStyle:{color:"red"},on:{click:function(t){return e.removeCheckedGroceries()}}},[e._v("Remove Checked")])],1)],2)},$=[],D={data:function(){return{menuItems:[{title:"Sort by added date",sortBy:"timestamp",asc:!0},{title:"Sort by checked",sortBy:"checked",asc:!0},{title:"Sort alphabetical",sortBy:"item_name",asc:!0}]}},methods:Object(c["a"])({},Object(d["b"])(["sortBy","removeCheckedGroceries"]))},N=D,P=r("8860"),F=r("da13"),U=r("e449"),z=Object(g["a"])(N,T,$,!1,null,"d4769c88",null),H=z.exports;p()(z,{VBtn:h["a"],VIcon:_["a"],VList:P["a"],VListItem:F["a"],VMenu:U["a"]});var M={name:"List",components:{EditGroceryButton:E,AddGroceryButton:B,ListMenu:H},data:function(){return{currentRoute:""}},created:function(){this.currentRoute=this.$router.currentRoute.name},computed:Object(d["c"])(["groceries"]),methods:Object(c["a"])({},Object(d["b"])(["removeGrocery","toggleChecked"]))},Q=M,W=(r("aad5"),r("1f4f")),J=Object(g["a"])(Q,a,i,!1,null,"7c0f1b39",null),K=J.exports;p()(J,{VCol:w["a"],VContainer:V["a"],VIcon:_["a"],VRow:x["a"],VSimpleTable:W["a"],VSpacer:j["a"]});var Y={name:"Groceries",components:{List:K}},X=Y,Z=Object(g["a"])(X,n,o,!1,null,"592d5928",null);t["default"]=Z.exports;p()(Z,{VContainer:V["a"]})}});
//# sourceMappingURL=app.9cea9f2b.js.map
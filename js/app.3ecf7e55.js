(function(e){function t(t){for(var n,a,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4caa2921"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"ead5795a"}[e]+".css",o=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/cd/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"16c3":function(e,t,r){"use strict";var n=r("2fe2"),a=r.n(n);a.a},1776:function(e,t,r){"use strict";var n=r("55b0"),a=r.n(n);a.a},"17e1":function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r("59ca"),a=(r("e71f"),r("ea7b"),{apiKey:"AIzaSyD0YWJ5m7bxsgf0HcP324wHlWkpcQ8n7ak",authDomain:"devler-1720e.firebaseapp.com",databaseURL:"https://devler-1720e.firebaseio.com",projectId:"devler-1720e",storageBucket:"devler-1720e.appspot.com",messagingSenderId:"789649485811789649485811",appId:"1:789649485811:web:8bbfd25b395ee9fcfa2c86",measurementId:"G-RP6VWTQEL4"}),o=(n["initializeApp"](a),n["firestore"]()),i=n["auth"]()},"2fe2":function(e,t,r){},"55b0":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{staticStyle:{height:"100vh",overflow:"hidden"}},[r("Header"),r("v-content",[r("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("router-link",{attrs:{to:"/"}},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}})],1),r("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),r("v-spacer"),e.isAuthenticated?e._e():r("v-btn",{attrs:{text:""}},[r("Login",{on:{loggedIn:e.loggedIn}})],1),e.isAuthenticated?r("v-btn",{attrs:{text:""},on:{click:e.signOut}},[e._v(" Logout "),r("v-icon",[e._v("mdi-logout-variant")])],1):e._e()],1)},c=[],s=(r("ac1f"),r("5319"),r("96cf"),r("1da1")),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("div",e._g({},n),[e._v("Login "),r("v-icon",[e._v("mdi-login-variant")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.login()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-card",[r("v-container",[r("v-card-title",{staticClass:"headline lighten-2",attrs:{"primary-title":""}},[e._v(" Login ")]),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Email",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{type:"password",label:"Password",rules:e.passwordRules,required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)],1),r("v-card-actions",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-btn",{attrs:{type:"submit"}},[e._v("Login")])],1)],1),e.error?r("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()],1)],1)],1)],1)],1)},u=[],d=r("17e1"),f={data:function(){return{dialog:"",email:"",password:"",error:"",valid:!1,passwordRules:[function(e){return!!e||"Name is required"}],emailRules:[function(e){return!!e||"E-mail is required"}]}},methods:{login:function(){var e=this;d["a"].signInWithEmailAndPassword(this.email,this.password).then((function(t){console.log("+_+_+",t),e.$emit("loggedIn",t),e.$router.replace({name:"dashboard"}),e.dialog=!1,e.email="",e.password=""})).catch((function(t){return e.error=t}))}}},g=f,m=r("2877"),h=r("6544"),v=r.n(h),p=r("8336"),b=r("b0af"),y=r("99d9"),w=r("62ad"),C=r("a523"),V=r("169a"),_=r("4bd4"),k=r("132d"),x=r("0fd9"),I=r("8654"),A=Object(m["a"])(g,l,u,!1,null,"040dae9e",null),q=A.exports;v()(A,{VBtn:p["a"],VCard:b["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:w["a"],VContainer:C["a"],VDialog:V["a"],VForm:_["a"],VIcon:k["a"],VRow:x["a"],VTextField:I["a"]});var E=r("8aa50"),S=(r("ea7b"),{name:"Header",data:function(){return{isAuthenticated:E["auth"]().currentUser}},components:{Login:q},methods:{loggedIn:function(e){this.isAuthenticated=e},signOut:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:E["auth"]().signOut().then((function(t){e.isAuthenticated=!!t,e.$router.replace({name:"unauthorized"})})).catch((function(e){return console.error(e)}));case 1:case"end":return t.stop()}}),t)})))()}}}),j=S,O=r("40dc"),R=r("adda"),$=r("2fa4"),T=Object(m["a"])(j,i,c,!1,null,"22150720",null),L=T.exports;v()(T,{VAppBar:O["a"],VBtn:p["a"],VIcon:k["a"],VImg:R["a"],VSpacer:$["a"]});var B={name:"App",components:{Header:L},data:function(){return{}}},G=B,P=r("7496"),F=r("a75b"),D=Object(m["a"])(G,a,o,!1,null,null,null),N=D.exports;v()(D,{VApp:P["a"],VContent:F["a"]});var z=r("9483");Object(z["a"])("".concat("/cd/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("45fc"),r("d3b7");var H=r("8c4f"),Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("h1",[e._v("Dashboard")]),r("Groceries")],1)],1)],1)},M=[],U=r("b721"),W={name:"Dashboard",components:{Groceries:U["default"]}},J=W,K=Object(m["a"])(J,Q,M,!1,null,null,null),Y=K.exports;v()(K,{VCol:w["a"],VContainer:C["a"],VRow:x["a"]});var X=r("59ca");n["a"].use(H["a"]);var Z=[{path:"/",name:"dashboard",component:Y,meta:{requiresAuth:!0}},{path:"/groceries",name:"groceries",component:function(){return r.e("about").then(r.bind(null,"b721"))},meta:{requiresAuth:!0}},{path:"/calendar",name:"calendar",component:function(){return r.e("about").then(r.bind(null,"ac0f"))},meta:{requiresAuth:!0}},{path:"/unauthorized",name:"unauthorized",component:function(){return r.e("about").then(r.bind(null,"aece"))}}],ee=new H["a"]({routes:Z});ee.beforeEach((function(e,t,r){var n=e.matched.some((function(e){return e.meta.requiresAuth})),a=X["auth"]().currentUser;n&&!a?r("/unauthorized"):r()}));var te=ee,re=r("bc3a"),ne=r.n(re),ae=r("f309");n["a"].use(ae["a"]);var oe,ie=new ae["a"]({});n["a"].prototype.$axios=ne.a,n["a"].config.productionTip=!1,X["auth"]().onAuthStateChanged((function(){oe||(oe=new n["a"]({router:te,vuetify:ie,render:function(e){return e(N)}}).$mount("#app"))}))},"791b":function(e,t,r){},8797:function(e,t,r){"use strict";var n=r("791b"),a=r.n(n);a.a},b721:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("List",{attrs:{groceries:e.groceries},on:{deleteItem:e.deleteItem,toggleChecked:e.toggleChecked}}),"groceries"===this.currentRoute?r("AddGroceryButton",{on:{addItem:e.addItem}}):e._e()],1)},a=[],o=(r("4160"),r("d81d"),r("b0c0"),r("159b"),r("17e1")),i=function(e){return{id:e.id,name:e.data().item_name,category:e.data().category,checked:e.data().checked,qty:e.data().qty}},c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({staticClass:"mb-10",attrs:{fab:"",absolute:"",bottom:"",right:"",color:"primary",dark:""}},n),[r("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("AddGroceryForm",{on:{addItem:e.addItem}})],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{on:{submit:function(t){return t.preventDefault(),e.addItem()}}},[r("v-card",[r("v-card-title",{staticClass:"headline lighten-2",attrs:{"primary-title":""}},[e._v(" Add Item ")]),r("v-card-text",[e.newCategoryVisible?e._e():r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-select",{attrs:{items:e.categories,"item-text":"name","item-value":"selectedCategory",label:"Category","append-outer-icon":"+"},on:{"click:append-outer":e.toggleAddCategoryVisible},model:{value:e.selectedCategory,callback:function(t){e.selectedCategory=t},expression:"selectedCategory"}})],1)],1),e.newCategoryVisible?r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Category","append-outer-icon":"x"},on:{"click:append-outer":e.toggleAddCategoryVisible},model:{value:e.newCategory,callback:function(t){e.newCategory=t},expression:"newCategory"}})],1)],1):e._e(),r("v-row",[r("v-col",{attrs:{cols:"9"}},[r("v-text-field",{attrs:{label:"Item Name",required:""},model:{value:e.newItem,callback:function(t){e.newItem=t},expression:"newItem"}})],1),r("v-col",{attrs:{cols:"3"}},[r("v-text-field",{attrs:{type:"number",label:"Qty","append-outer-icon":"+"},on:{"click:append-outer":e.increment},model:{value:e.qty,callback:function(t){e.qty=t},expression:"qty"}})],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",type:"submit"}},[e._v("Add")])],1)],1)],1)},u=[],d={data:function(){var e=this;return{categories:[],selectedCategory:"food",getCategories:function(){o["b"].collection("categories").get().then((function(t){t.docs.map((function(t){e.categories.push({id:t.id,name:t.data().name})}))}))}}},created:function(){this.getCategories()}},f={methods:{watcher:function(){var e=this;o["b"].collection("groceries").onSnapshot((function(t){e.groceries=[],t.forEach((function(t){return e.groceries.push(i(t))}))}))}}},g={name:"AddGroceryForm",mixins:[d,f],data:function(){return{selectedCategory:"food",newCategory:"",newCategoryVisible:!1,newItem:"",qty:1}},methods:{addItem:function(){var e=this.newCategoryVisible?this.newCategory:this.selectedCategory,t={category:e,checked:!1,qty:this.qty,item_name:this.newItem};this.$emit("addItem",{item:t,dialog:!1}),this.newItem=""},toggleAddCategoryVisible:function(){this.newCategoryVisible=!this.newCategoryVisible,console.log(this.newCategory)},increment:function(){this.qty=parseInt(this.qty,10)+1}}},m=g,h=r("2877"),v=r("6544"),p=r.n(v),b=r("8336"),y=r("b0af"),w=r("99d9"),C=r("62ad"),V=r("4bd4"),_=r("0fd9"),k=r("b974"),x=r("2fa4"),I=r("8654"),A=Object(h["a"])(m,l,u,!1,null,"361d344a",null),q=A.exports;p()(A,{VBtn:b["a"],VCard:y["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:C["a"],VForm:V["a"],VRow:_["a"],VSelect:k["a"],VSpacer:x["a"],VTextField:I["a"]});var E={name:"AddGroceryButton",components:{AddGroceryForm:q},data:function(){return{dialog:!1,clearFields:!1}},methods:{addItem:function(e){var t=e.item,r=e.dialog;this.dialog=r,this.$emit("addItem",t)}}},S=E,j=(r("1776"),r("a523")),O=r("169a"),R=r("132d"),$=Object(h["a"])(S,c,s,!1,null,null,null),T=$.exports;p()($,{VBtn:b["a"],VContainer:j["a"],VDialog:O["a"],VIcon:R["a"]});var L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"grocery-list text-left"},[r("v-row",[r("v-col",[r("v-row",{staticClass:"px-3"},[r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/groceries"}},[r("h3",{staticClass:"pl-4"},[e._v("Grocery List")])]),r("v-spacer"),e.groceries?r("h3",{staticClass:"pr-4",staticStyle:{color:"#1976d2"}},[e._v(e._s(e.groceries.filter((function(e){return!0===e.checked})).length)+"/"+e._s(e.groceries.length))]):e._e()],1),"groceries"===this.currentRoute?r("v-simple-table",{attrs:{"fixed-header":"",height:"480"}},[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[e._v("Qty")]),r("th",{staticClass:"text-left"},[e._v("Item")]),r("th",{staticClass:"text-right"})])]),r("tbody",e._l(e.groceries,(function(t){return r("tr",{key:t.id},[r("td",[e._v(e._s(t.qty))]),r("td",{class:{checked:t.checked},on:{click:function(r){return e.toggleChecked(t.id,t.checked)}}},[e._v(e._s(t.name))]),r("td",{staticClass:"text-right"},[r("v-row",[r("v-col",{attrs:{cols:"3"}},[r("EditGroceryButton",{attrs:{grocery:t}})],1),r("v-col",{attrs:{cols:"3"}},[r("v-icon",{attrs:{dense:"",color:"red"},on:{click:function(r){return e.deleteItem(t.id)}}},[e._v("mdi-delete")])],1)],1)],1)])})),0)]):e._e()],1)],1)],1)},B=[],G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-icon",e._g({attrs:{dense:"",color:"orange"}},n),[e._v("mdi-pencil")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.updateItem()}}},[r("v-card",[r("v-card-title",{staticClass:"headline lighten-2",attrs:{"primary-title":""}},[e._v(" Edit Item ")]),r("v-card-text",[e.newCategoryVisible?e._e():r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-select",{attrs:{items:e.categories,"item-text":"name","item-value":"selectedCategory",label:"Category","append-outer-icon":"+"},on:{"click:append-outer":e.toggleAddCategoryVisible},model:{value:e.selectedCategory,callback:function(t){e.selectedCategory=t},expression:"selectedCategory"}})],1)],1),e.newCategoryVisible?r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Category","append-outer-icon":"x"},on:{"click:append-outer":e.toggleAddCategoryVisible},model:{value:e.newCategory,callback:function(t){e.newCategory=t},expression:"newCategory"}})],1)],1):e._e(),r("v-row",[r("v-col",{attrs:{cols:"9"}},[r("v-text-field",{attrs:{label:"Item Name",required:""},model:{value:e.newItem,callback:function(t){e.newItem=t},expression:"newItem"}})],1),r("v-col",{attrs:{cols:"3"}},[r("v-text-field",{attrs:{type:"number",label:"Qty","append-outer-icon":"+"},on:{"click:append-outer":e.increment},model:{value:e.qty,callback:function(t){e.qty=t},expression:"qty"}})],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",type:"submit"}},[e._v("Edit")])],1)],1)],1)]],2)],1)},P=[],F={name:"EditGroceryButton",mixins:[d,f],props:["grocery"],data:function(){return{dialog:!1,selectedCategory:this.grocery.category,newCategory:"",newCategoryVisible:!1,newItem:this.grocery.name,qty:this.grocery.qty?this.grocery.qty:1}},methods:{updateItem:function(){var e=this,t=this.newCategoryVisible?this.newCategory:this.selectedCategory,r={category:t,checked:this.grocery.checked,qty:this.qty,item_name:this.newItem};o["b"].collection("groceries").doc(this.grocery.id).set(r).then((function(){e.watcher()})),this.dialog=!1},toggleAddCategoryVisible:function(){this.newCategoryVisible=!this.newCategoryVisible,console.log(this.newCategory)},increment:function(){this.qty=parseInt(this.qty,10)+1}}},D=F,N=(r("16c3"),Object(h["a"])(D,G,P,!1,null,null,null)),z=N.exports;p()(N,{VBtn:b["a"],VCard:y["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:C["a"],VContainer:j["a"],VDialog:O["a"],VForm:V["a"],VIcon:R["a"],VRow:_["a"],VSelect:k["a"],VSpacer:x["a"],VTextField:I["a"]});var H={name:"List",props:["groceries"],components:{EditGroceryButton:z},data:function(){return{currentRoute:""}},created:function(){this.currentRoute=this.$router.currentRoute.name},methods:{toggleChecked:function(e,t){this.$emit("toggleChecked",{id:e,checked:t})},editItem:function(e){console.log("editItem",e)},deleteItem:function(e){this.$emit("deleteItem",e)}}},Q=H,M=(r("8797"),r("1f4f")),U=Object(h["a"])(Q,L,B,!1,null,"311cfd3f",null),W=U.exports;p()(U,{VCol:C["a"],VContainer:j["a"],VIcon:R["a"],VRow:_["a"],VSimpleTable:M["a"],VSpacer:x["a"]});var J={name:"Groceries",components:{AddGroceryButton:T,List:W},data:function(){var e=this;return{groceries:[],currentRoute:"",getGroceries:function(){o["b"].collection("groceries").get().then((function(t){return t.docs.map((function(t){e.groceries.push(e.transform(t))}))}))}}},created:function(){this.currentRoute=this.$router.currentRoute.name,this.getGroceries()},methods:{addItem:function(e){var t=this,r=e;o["b"].collection("groceries").add(r).then((function(){t.watcher()}))},toggleChecked:function(e){var t=e.id,r=e.checked;o["b"].collection("groceries").doc(t).update({checked:!r}).then(this.watcher())},deleteItem:function(e){o["b"].collection("groceries").doc(e).delete().then(this.watcher())},watcher:function(){var e=this;o["b"].collection("groceries").onSnapshot((function(t){e.groceries=[],t.forEach((function(t){return e.groceries.push(i(t))}))}))},transform:i}},K=J,Y=Object(h["a"])(K,n,a,!1,null,"4955af6e",null);t["default"]=Y.exports;p()(Y,{VContainer:j["a"]})}});
//# sourceMappingURL=app.3ecf7e55.js.map
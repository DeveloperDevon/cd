(function(e){function t(t){for(var n,c,i=t[0],s=t[1],l=t[2],u=0,f=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/cd/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1776:function(e,t,r){"use strict";var n=r("55b0"),o=r.n(n);o.a},"17e1":function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return c}));var n=r("59ca"),o=(r("e71f"),{apiKey:"AIzaSyD0YWJ5m7bxsgf0HcP324wHlWkpcQ8n7ak",authDomain:"devler-1720e.firebaseapp.com",databaseURL:"https://devler-1720e.firebaseio.com",projectId:"devler-1720e",storageBucket:"devler-1720e.appspot.com",messagingSenderId:"789649485811789649485811",appId:"1:789649485811:web:8bbfd25b395ee9fcfa2c86",measurementId:"G-RP6VWTQEL4"}),a=n["initializeApp"](o),c=n["firestore"]()},"55b0":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("Header"),r("v-content",[r("router-view")],1)],1)},a=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("router-link",{attrs:{to:"/"}},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}})],1),r("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),r("v-spacer"),r("v-btn",{attrs:{text:""}},[r("span",{staticClass:"mr-2"},[e._v("Logout")]),r("v-icon",[e._v("mdi-login-variant")])],1)],1)},i=[],s={},l=s,d=r("2877"),u=r("6544"),f=r.n(u),m=r("40dc"),h=r("8336"),p=r("132d"),g=r("adda"),v=r("2fa4"),b=Object(d["a"])(l,c,i,!1,null,"d073552e",null),y=b.exports;f()(b,{VAppBar:m["a"],VBtn:h["a"],VIcon:p["a"],VImg:g["a"],VSpacer:v["a"]});var w={name:"App",components:{Header:y},data:function(){return{}}},C=w,_=r("7496"),k=r("a75b"),V=Object(d["a"])(C,o,a,!1,null,null,null),x=V.exports;f()(V,{VApp:_["a"],VContent:k["a"]});var I=r("9483");Object(I["a"])("".concat("/cd/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("45fc"),r("d3b7");var j=r("8c4f"),A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("h1",[e._v("Dashboard")]),r("Groceries")],1)],1)],1)},O=[],S=r("b721"),$={name:"Dashboard",components:{Groceries:S["default"]}},G=$,E=r("62ad"),P=r("a523"),R=r("0fd9"),B=Object(d["a"])(G,A,O,!1,null,null,null),L=B.exports;f()(B,{VCol:E["a"],VContainer:P["a"],VRow:R["a"]});var T=r("59ca");r("ea7b");n["a"].use(j["a"]);var D=[{path:"/",name:"dashboard",component:L},{path:"/groceries",name:"groceries",component:function(){return Promise.resolve().then(r.bind(null,"b721"))}}],F=new j["a"]({routes:D});F.beforeEach((function(e,t,r){var n=e.matched.some((function(e){return e.meta.requiresAuth})),o=T["auth"]().currentUser;n&&!o?r("/login"):r()}));var N=F,H=r("bc3a"),M=r.n(H),q=r("0ff2"),J=r("17e1"),Q=r("f309");n["a"].use(Q["a"]);var W,z=new Q["a"]({});n["a"].prototype.$axios=M.a,n["a"].use(q["a"]),n["a"].config.productionTip=!1,J["b"],T["auth"]().onAuthStateChanged((function(e){console.log(e),W||(W=new n["a"]({router:N,vuetify:z,render:function(e){return e(x)}}).$mount("#app"))}))},"9b5d":function(e,t,r){"use strict";var n=r("ebcc"),o=r.n(n);o.a},b721:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("List",{attrs:{groceries:e.groceries},on:{deleteItem:e.deleteItem,toggleChecked:e.toggleChecked}}),"groceries"===this.currentRoute?r("AddGroceryButton",{on:{addItem:e.addItem}}):e._e()],1)},o=[],a=(r("4160"),r("d81d"),r("b0c0"),r("159b"),r("17e1")),c=function(e){return{id:e.id,name:e.data().item_name,category:e.data().category,checked:e.data().checked}},i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({staticClass:"mb-10",attrs:{fab:"",absolute:"",bottom:"",right:"",color:"primary",dark:""}},n),[r("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("AddGroceryForm",{on:{addItem:e.addItem}})],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{on:{submit:function(t){return t.preventDefault(),e.addItem()}}},[r("v-card",[r("v-card-title",{staticClass:"headline lighten-2",attrs:{"primary-title":""}},[e._v(" Add Item ")]),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-select",{attrs:{items:e.categories,"item-text":"name","item-value":"selectedCategory",label:"Category"},model:{value:e.selectedCategory,callback:function(t){e.selectedCategory=t},expression:"selectedCategory"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Item Name",required:""},model:{value:e.newItem,callback:function(t){e.newItem=t},expression:"newItem"}})],1)],1)],1),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",type:"submit"}},[e._v("Add")])],1)],1)],1)},d=[],u={data:function(){var e=this;return{categories:[],selectedCategory:"food",getCategories:function(){a["a"].collection("categories").get().then((function(t){t.docs.map((function(t){console.log(t.data().name),e.categories.push({id:t.id,name:t.data().name})}))}))}}},created:function(){this.getCategories()}},f={methods:{watcher:function(){var e=this;a["a"].collection("groceries").onSnapshot((function(t){e.groceries=[],t.forEach((function(t){return e.groceries.push(c(t))}))}))}}},m={name:"AddGroceryForm",mixins:[u,f],data:function(){return{selectedCategory:"food",newItem:""}},methods:{addItem:function(){var e={category:this.selectedCategory,checked:!1,item_name:this.newItem};this.$emit("addItem",{item:e,dialog:!1}),this.newItem=""}}},h=m,p=r("2877"),g=r("6544"),v=r.n(g),b=r("8336"),y=r("b0af"),w=r("99d9"),C=r("62ad"),_=r("ce7e"),k=r("4bd4"),V=r("0fd9"),x=r("b974"),I=r("2fa4"),j=r("8654"),A=Object(p["a"])(h,l,d,!1,null,"8bac1fb2",null),O=A.exports;v()(A,{VBtn:b["a"],VCard:y["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:C["a"],VDivider:_["a"],VForm:k["a"],VRow:V["a"],VSelect:x["a"],VSpacer:I["a"],VTextField:j["a"]});var S={name:"AddGroceryButton",components:{AddGroceryForm:O},data:function(){return{dialog:!1}},methods:{addItem:function(e){var t=e.item,r=e.dialog;this.dialog=r,this.$emit("addItem",t)}}},$=S,G=(r("1776"),r("a523")),E=r("169a"),P=r("132d"),R=Object(p["a"])($,i,s,!1,null,null,null),B=R.exports;v()(R,{VBtn:b["a"],VContainer:G["a"],VDialog:E["a"],VIcon:P["a"]});var L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"grocery-list text-left"},[r("v-row",[r("v-col",[r("v-row",[r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/groceries"}},[r("h3",{staticClass:"pl-4"},[e._v("Grocery List")])]),r("v-spacer"),e.groceries?r("h3",{staticClass:"pr-4",staticStyle:{color:"#1976d2"}},[e._v(e._s(e.groceries.filter((function(e){return!0===e.checked})).length)+"/"+e._s(e.groceries.length))]):e._e()],1),r("v-simple-table",[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[e._v("Qty")]),r("th",{staticClass:"text-left"},[e._v("Item")]),r("th",{staticClass:"text-right"})])]),r("tbody",e._l(e.groceries,(function(t){return r("tr",{key:t.id},[r("td",[e._v("1")]),r("td",{class:{checked:t.checked},on:{click:function(r){return e.toggleChecked(t.id,t.checked)}}},[e._v(e._s(t.name))]),r("td",{staticClass:"text-right",on:{click:function(r){return e.deleteItem(t.id)}}},[e._v("x")])])})),0)])],1)],1)],1)},T=[],D={name:"List",props:["groceries"],methods:{toggleChecked:function(e,t){this.$emit("toggleChecked",{id:e,checked:t})},deleteItem:function(e){this.$emit("deleteItem",e)}}},F=D,N=(r("9b5d"),r("1f4f")),H=Object(p["a"])(F,L,T,!1,null,"bd96eb5a",null),M=H.exports;v()(H,{VCol:C["a"],VContainer:G["a"],VRow:V["a"],VSimpleTable:N["a"],VSpacer:I["a"]});var q={name:"Groceries",components:{AddGroceryButton:B,List:M},data:function(){var e=this;return{groceries:[],currentRoute:"",getGroceries:function(){a["a"].collection("groceries").get().then((function(t){return t.docs.map((function(t){e.groceries.push(e.transform(t))}))}))}}},created:function(){this.currentRoute=this.$router.currentRoute.name,console.log(this.currentRoute),this.getGroceries()},methods:{addItem:function(e){var t=this,r=e;a["a"].collection("groceries").add(r).then((function(){t.watcher()}))},toggleChecked:function(e){var t=e.id,r=e.checked;a["a"].collection("groceries").doc(t).update({checked:!r}).then(this.watcher())},deleteItem:function(e){a["a"].collection("groceries").doc(e).delete().then(this.watcher())},watcher:function(){var e=this;a["a"].collection("groceries").onSnapshot((function(t){e.groceries=[],t.forEach((function(t){return e.groceries.push(c(t))}))}))},transform:c}},J=q,Q=Object(p["a"])(J,n,o,!1,null,"6410619b",null);t["default"]=Q.exports;v()(Q,{VContainer:G["a"]})},ebcc:function(e,t,r){}});
//# sourceMappingURL=app.b78f9da1.js.map
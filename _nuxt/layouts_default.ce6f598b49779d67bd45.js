webpackJsonp([12],{"0nEF":function(t,a,e){var o=e("42aY");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("ad24b96e",o,!1,{sourceMap:!1})},"42aY":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'#header[data-v-b43239d4]{width:100%;min-height:15vh;position:absolute;z-index:9999}.transparent[data-v-b43239d4]{background-color:var(--color1);background-color:transparent}.navbar-item img[data-v-b43239d4]{max-height:60px;margin:10px}.itm[data-v-b43239d4]{-webkit-transition:all .2s;transition:all .2s;outline:0;color:#000;display:inline-block}.itm[data-v-b43239d4]:after{display:block;content:"";border-bottom:solid 3px var(--color3);-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .15s ease-in-out;transition:-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out;transition:transform .15s ease-in-out,-webkit-transform .15s ease-in-out}.itm[data-v-b43239d4]:hover:after{-webkit-transform:scaleX(1);transform:scaleX(1)}.itm[data-v-b43239d4]:hover{color:#000;background-color:transparent}.navbar-burger span[data-v-b43239d4]{background-color:#fff}.navbar-burger[data-v-b43239d4]:hover{background-color:var(--color3)}.navbar-burger.right[data-v-b43239d4]{margin-right:0}.navbar[data-v-b43239d4]{margin-left:12vw;margin-right:12vw}.dropdown-menu[data-v-b43239d4]{min-width:120px}.dropdown-content[data-v-b43239d4]{border-radius:1%}.dropdown-item[data-v-b43239d4]{-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;background-color:#fff}.dropdown-item[data-v-b43239d4]:hover{background-color:#c8c8c8}a[data-v-b43239d4]{color:#000}.nowrap[data-v-b43239d4]{white-space:nowrap}.white[data-v-b43239d4]{background-color:#fff}',""])},"7jvO":function(t,a,e){"use strict";var o=e("piNE"),i=e.n(o);a.a={data:function(){return{paths:i.a,isActive:!1,isHiddenTablet:!0,activeDropdowns:[]}},methods:{activate:function(){!0===this.isActive?this.deactivate():this.isActive=!0,console.log(i.a)},deactivate:function(){console.log("ceva");for(var t=0;t<this.activeDropdowns.length;t++)this.deactivateDropdown(t);this.isActive=!1},activateTablet:function(){this.isHiddenTablet=!this.isHiddenTablet,console.log(this.isHiddenTablet)},path:function(t){return this.$i18n.locale,t.path.ro},activateDropdown:function(t){this.$set(this.activeDropdowns,t,!0)},deactivateDropdown:function(t){this.$set(this.activeDropdowns,t,!1)},toggleDropdown:function(t){for(var a=0;a<this.activeDropdowns.length;a++)!1===this.activeDropdowns[a]&&a===t?this.activateDropdown(a):this.deactivateDropdown(a)}},mounted:function(){for(var t in i.a)this.activeDropdowns.push(!1)}}},Cmbe:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"#eofooter[data-v-f69701b8]{background-color:var(--color1);color:var(--text-color);height:100%}.wrapper[data-v-f69701b8]{width:80%;margin:auto;background-color:var(--color1)}h1[data-v-f69701b8]{font-size:20px;margin-bottom:10px}.address-text[data-v-f69701b8],.inline[data-v-f69701b8]{display:inline-block}.up[data-v-f69701b8]{vertical-align:top}.copyright[data-v-f69701b8]{font-size:15px}.mrg[data-v-f69701b8]{margin-top:40%}.pad[data-v-f69701b8]{padding-left:100px}.box[data-v-f69701b8]{display:block;background-color:var(--color1);-webkit-box-shadow:0 0 0 0;box-shadow:0 0 0 0;outline:0;text-align:center}.level-item.box[data-v-f69701b8]{margin:10px}.green[data-v-f69701b8]{background-color:green}a[data-v-f69701b8],a[data-v-f69701b8]:visited{color:#fff}a[data-v-f69701b8]:hover{color:#ddd}a[data-v-f69701b8]:active{color:#fff}.allign[data-v-f69701b8]{text-align:left}.left-center[data-v-f69701b8]{width:260px;margin-left:auto;margin-right:auto}.right-center[data-v-f69701b8]{width:200px;margin-left:auto;margin-right:auto}",""])},DA5T:function(t,a,e){"use strict";var o=e("KDDK"),i=e("XgR2"),n=!1;var s=function(t){n||e("pe2v")},r=e("VU/8")(o.a,i.a,!1,s,"data-v-f69701b8",null);r.options.__file="components\\SSAFooter.vue",a.a=r.exports},KDDK:function(t,a,e){"use strict";a.a={data:function(){return{links:{telefon:"tel:0723391992",locatie:"https://goo.gl/maps/bDYp14rVU3q",facebookdecode:"https://www.facebook.com/EESTECdecodeIT/",facebookEestec:"https://www.facebook.com/EESTEC.Bucuresti/",linkedinEestec:"https://www.linkedin.com/company/450726/",youtubeEestec:"https://www.youtube.com/user/eeStecBucuresti",instagramEestec:"https://www.instagram.com/eestec_lc_bucharest/"}}}}},Ma2J:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e("Y8VK"),i=e("STrE"),n=!1;var s=function(t){n||e("xW6w")},r=e("VU/8")(o.a,i.a,!1,s,null,null);r.options.__file="layouts\\default.vue",a.default=r.exports},PDz6:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"header"}},[e("nav",{staticClass:"navbar transparent",attrs:{role:"navigation","aria-label":"main navigation"}},[e("div",{staticClass:"navbar-brand"},[e("div",{staticClass:"navbar-item",on:{click:function(a){t.deactivate()}}},[e("nuxt-link",{attrs:{to:t.path(t.paths[0])}},[e("img",{staticClass:"logo",attrs:{src:"/decode/logo.png",alt:"logo eveniment"}})])],1),e("div",{staticClass:"navbar-burger right",class:{"is-active":t.isActive},attrs:{"data-target":"navMenu"},on:{click:t.activate}},[e("span"),e("span"),e("span")])]),e("div",{staticClass:"navbar-menu is-hidden-desktop transparent",class:{"is-active":t.isActive},attrs:{id:"navMenu"}},[e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item white"},[e("aside",{staticClass:"menu"},[e("ul",{staticClass:"menu-list"},t._l(t.paths,function(a,o){return e("li",{key:a.index},[0!==a.subpages.length?e("span",{staticClass:"icon is-small",on:{click:function(a){t.toggleDropdown(o)}}},[e("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})]):t._e(),e("span",{on:{click:function(a){t.deactivate()}}},[e("nuxt-link",{staticStyle:{display:"inline-block"},attrs:{to:t.path(a)}},[t._v(" \n                    "+t._s(t.$t(a.name))+"\n                  ")])],1),t.activeDropdowns[o]?e("ul",t._l(a.subpages,function(a){return e("li",{key:a.index},[e("span",{on:{click:function(a){t.deactivate()}}},[e("nuxt-link",{attrs:{to:t.path(a)}},[t._v(" \n                        "+t._s(t.$t(a.name))+"\n                      ")])],1)])})):t._e()])}))])])])]),e("div",{staticClass:"navbar-menu"},[e("div",{staticClass:"navbar-end",on:{click:t.deactivate}},t._l(t.paths,function(a,o){return e("div",{key:a.index,staticClass:"navbar-item"},[e("nuxt-link",{staticClass:"itm",attrs:{to:t.path(a)}},[0===a.subpages.length?e("div",[t._v("\n              "+t._s(t.$t(a.name))+" \n            ")]):e("div",[e("div",{staticClass:"dropdown is-hoverable",class:{"is-active":t.activeDropdowns[o]}},[e("div",{staticClass:"dropdown-trigger"},[e("div",{attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu"},on:{mouseover:function(a){t.activateDropdown(o)},mouseout:function(a){t.deactivateDropdown(o)}}},[e("span",[t._v(t._s(t.$t(a.name)))]),e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})])])]),e("div",{staticClass:"dropdown-menu",attrs:{id:"dropdown-menu",role:"menu"}},[e("div",{staticClass:"dropdown-content"},t._l(a.subpages,function(a){return e("div",{key:a.index,staticClass:"dropdown-item"},[e("nuxt-link",{staticClass:"nowrap",attrs:{to:t.path(a)}},[t._v("\n                        "+t._s(t.$t(a.name))+"\n                      ")])],1)}))])])])])],1)}))])])])};o._withStripped=!0;var i={render:o,staticRenderFns:[]};a.a=i},STrE:function(t,a,e){"use strict";var o=function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("SSAHeader"),a("no-ssr",[a("v-waypoint",{staticClass:"markerr",on:{waypoint:this.enableNavArrow}})],1),a("div",{staticClass:"nav-up-arrow hiddenbutton",on:{click:this.scrollUp}},[this._m(0)]),a("section",{staticClass:"section pad"},[a("div",{staticClass:"content main-content"},[a("nuxt")],1)]),a("footer",{staticClass:"footer foot"},[a("SSAFooter")],1)],1)};o._withStripped=!0;var i={render:o,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"icon button-icon-size"},[a("i",{staticClass:"fa fa-angle-up"})])}]};a.a=i},W8RT:function(t,a,e){"use strict";var o=e("7jvO"),i=e("PDz6"),n=!1;var s=function(t){n||e("0nEF")},r=e("VU/8")(o.a,i.a,!1,s,"data-v-b43239d4",null);r.options.__file="components\\SSAHeader.vue",a.a=r.exports},XgR2:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"eofooter"}},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-one-third blue"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-item box"},[e("div",{staticClass:"left-center allign"},[e("h1",[t._v(" "+t._s(t.$t("footer.contact-data"))+" ")]),e("a",{attrs:{href:t.links.telefon}},[e("p",[e("span",[e("b-icon",{attrs:{pack:"fa",icon:"phone-square"}})],1),t._v(" 0723391992")])]),e("a",{attrs:{href:"mailto:office@eestec.ro",target:"_top"}},[e("p",[e("span",[e("b-icon",{attrs:{pack:"fa",icon:"envelope"}})],1),t._v(" office@eestec.ro ")])]),e("a",{attrs:{href:t.links.locatie,target:"_blank"}},[e("p",[e("b-icon",{staticClass:"up",attrs:{pack:"fa",icon:"map-marker"}}),t._m(0)],1)])])])])]),e("div",{staticClass:"column is-one-third"}),e("div",{staticClass:"column is-one-third"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-item box"},[e("div",{staticClass:"right-center allign"},[e("h1",[t._v(" "+t._s(t.$t("footer.social"))+" ")]),e("a",{attrs:{href:t.links.facebookdecode,target:"_blank"}},[e("p",[e("span",[e("b-icon",{attrs:{pack:"fa",icon:"facebook-official"}})],1),t._v(" deCode IT")])]),e("a",{attrs:{href:t.links.facebookEestec,target:"_blank"}},[e("p",[e("span",[e("b-icon",{attrs:{pack:"fa",icon:"facebook-official"}})],1),t._v(" EESTEC Bucuresti ")])]),e("a",{attrs:{href:t.links.linkedinEestec,target:"_blank"}},[e("p",[e("span",[e("b-icon",{attrs:{pack:"fa",icon:"linkedin-square"}})],1),t._v(" LinkedIn EESTEC ")])]),e("a",{attrs:{href:t.links.instagramEestec,target:"_blank"}},[e("p",[e("span",[e("b-icon",{attrs:{pack:"fa",icon:"instagram"}})],1),t._v(" Instagram EESTEC ")])]),e("a",{attrs:{href:t.links.youtubeEestec,target:"_blank"}},[e("p",[e("span",[e("b-icon",{attrs:{pack:"fa",icon:"youtube-play"}})],1),t._v(" YouTube EESTEC ")])])])])])])]),t._m(1)])])};o._withStripped=!0;var i={render:o,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"address-text"},[this._v(" 313 Splaiul Independentei "),a("br"),this._v(" Room AN204bis, PUB ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"columns"},[a("div",{staticClass:"column is one-third"},[a("div",{staticClass:"level"},[a("p",{staticClass:"copyright level-item"},[this._v(" © EESTEC Bucharest ")])])])])}]};a.a=i},Y8VK:function(t,a,e){"use strict";var o=e("W8RT"),i=e("DA5T");a.a={components:{SSAHeader:o.a,SSAFooter:i.a},data:function(){return{markerPosition:0}},head:function(){return{title:"EESTEC de<code>IT 2"}},methods:{updateButton:function(){var t=document.querySelector(".nav-up-arrow");0===this.markerPosition?t.classList.add("hiddenbutton"):t.classList.remove("hiddenbutton")},enableNavArrow:function(t,a){"in"===a?this.markerPosition=1:"up"===t.y?this.markerPosition=0:this.markerPosition=2,this.updateButton()},scrollUp:function(){var t=this;if(1===this.markerPosition||2===this.markerPosition)var a=setInterval(function(){var e=window.pageYOffset||document.documentElement.scrollTop;e>0?scrollTo(0,e-(e/40+100)):(t.markerPosition=0,t.updateButton(),clearInterval(a))},20)}}}},kpBn:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'html{height:100%}body{margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:100vh;color:#000}a::-moz-focus-inner,button::-moz-focus-inner{border:0}.main-content{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;min-height:85vh;z-index:-1;max-width:100vw;overflow:hidden}*{-webkit-box-sizing:border-box;box-sizing:border-box}.foot,.pad{padding:0}.foot{background-color:#0d9599;min-height:15vh;overflow:hidden}@font-face{font-family:Fledgling;src:url("/ssa/fonts/fledgling-sb.ttf") format("opentype")}@font-face{font-family:Roboto;src:url("/decode/Roboto/Roboto-Regular.ttf") format("truetype")}@font-face{font-family:Roboto;font-weight:700;src:url("/olympics/fonts/Aller_Std_Bd.ttf") format("truetype")}p{font-family:Verdana,Geneva,Tahoma,sans-serif;color:#343434;font-size:14.4px;font-size:.9rem}h1,h2,h3,h4,h5,h6{font-family:Helvetica;color:#1a7d57;font-size:30px!important}*{--color1:#f4f0bc;--color2:#1a7d57;--color3:#008c8c;--color4:#0d7877;--color5:#008c8c;--text-color:#343434}.nav-up-arrow{text-align:center;width:8vh;height:8vh;position:fixed;right:30px;bottom:30px;z-index:9999999;background-color:var(--color4);opacity:.8;filter:alpha(opacity=80);border:0 solid;border-radius:1vh}.nav-up-arrow:hover{opacity:1;filter:alpha(opacity=100)}.hiddenbutton{display:none}.markerr{position:absolute;top:160vh}.fa.fa-angle-up{font-size:7vh;color:#fff}.nav-up-arrow span.icon{margin-top:2.2vh}',""])},pe2v:function(t,a,e){var o=e("Cmbe");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("86da8032",o,!1,{sourceMap:!1})},piNE:function(t,a){t.exports=[{path:{ro:"/decode/",en:"/decode/en"},name:"header.home",subpages:[]},{path:{ro:"/decode/about",en:"/decode/en/about"},name:"header.about",subpages:[{path:{ro:"/decode/about",en:"/decode/en"},name:"header.about1"},{path:{ro:"/decode/about-last",en:"/decode/en"},name:"header.about2"}]},{path:{ro:"/decode/registration",en:"/decode/en/registration"},name:"header.registration",subpages:[]},{path:{ro:"/decode/contact",en:"/decode/en/contact"},name:"header.contact",subpages:[]}]},xW6w:function(t,a,e){var o=e("kpBn");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("22cd58c2",o,!1,{sourceMap:!1})}});
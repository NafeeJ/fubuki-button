(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{138:function(t,e,o){"use strict";var n=o(1),r=o(139);n.a.use(r.a),e.a=function(t){var e=t.app,n=t.store;e.i18n=new r.a({locale:n.state.locale,fallbackLocale:"zh",messages:{en:o(364),ja:o(365),zh:o(366)}})}},140:function(t,e,o){"use strict";var n={install:function(t){t.prototype.$bus=new t}};o(1).a.use(n)},141:function(t,e,o){"use strict";var i,s,n,r,a,l;i=window,s=document,n="script",r="ga",i.GoogleAnalyticsObject=r,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,a=s.createElement(n),l=s.getElementsByTagName(n)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",l.parentNode.insertBefore(a,l),ga("create","UA-103626808-5","auto"),e.a=function(t){var e=t.app.router;t.store;e.afterEach((function(t,e){ga("set","page",t.fullPath),ga("send","pageview")}))}},142:function(t,e,o){"use strict";o(26),o(27),o(43),o(39);e.a=function(t){var e=t.app,o=t.store;e.router.beforeEach((function(t,n,r){var l=null,c=localStorage.getItem("locale");if(c)l=c;else{var v=navigator.language.replace("-","_").toLowerCase().split("_")[0];l=e.i18n.availableLocales.includes(v)?v:e.i18n.fallbackLocale,localStorage.setItem("locale",l)}o.commit("SET_LANG",l),e.i18n.locale=o.state.locale;var _=!1,d=localStorage.getItem("dark");d?_=d:localStorage.setItem("dark",_),o.commit("SET_DARK",_),r()}))}},173:function(t,e,o){},175:function(t,e,o){},210:function(t,e,o){"use strict";var n={mounted:function(){var t=o(218),e=t("20200107","YYYYMMDD"),n="color: #FF5A79; font-size: 105px;";console.log("%c❤%c白上フブキ%c❤",n,"color: #0EBCF8; font-size: 105px; font-weight: bold;",n),console.log("%c"+this.$t("site.title")+"(^・ω・^§)ﾉ","color: #6CB9F6","https://github.com/voosc/fubuki-button"),console.log("The project has lived for "+t().diff(e,"day")+" days.")}},r=o(46),l=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{display:"none"}})}),[],!1,null,null,null).exports,c=o(42),v={components:{ConsoleMessage:l},data:function(){return{icons:{apps:c.b,code_tags:c.f,brightness:c.c,translate:c.p,github:c.h,newspaper:c.i,alpha_b_box:c.a,play_list_star:c.k,account:c.g},drawer:!1,fixed:!1,nav_items:[{icon:"/img/youtube-fill.svg",title:"Youtube",to:"https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg?sub_confirmation=1"},{icon:"/img/twitter-fill.svg",title:"Twitter",to:"https://twitter.com/shirakamifubuki"},{icon:"/img/bilibili-fill.svg",title:"Bilibili",to:"https://space.bilibili.com/332704117"}],external_cn:[{icon:"alpha_b_box",title:"御宅白狐的狐笋之林",to:"https://space.bilibili.com/314977548"}]}},computed:{current_locale:function(){return this.$i18n.locale},vercel_logo:function(){return"/img/vercel/"+(this.$vuetify.theme.dark?"dark":"light")+".svg"}},mounted:function(){this.$vuetify.theme.dark="true"===this.$store.state.dark,window.innerWidth>=1024&&(this.drawer=!0)},methods:{switch_dark:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,this.$store.commit("SET_DARK",this.$vuetify.theme.dark)},switch_lang:function(t){console.log("switching to "+t),this.$store.commit("SET_LANG",t),this.$i18n.locale=t}},head:function(){return{htmlAttrs:{lang:this.current_locale}}}},_=(o(250),o(94)),d=o.n(_),f=o(382),h=o(391),m=o(383),k=o(211),w=o(384),y=o(385),x=o(386),S=o(132),$=o(117),V=o(133),F=o(87),A=o(134),C=o(64),E=o(387),L=o(388),T=o(392),N=o(389),I=o(204),O=o(390),j=Object(r.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-navigation-drawer",{staticClass:"elevation-3",attrs:{"mobile-breakpoint":1024,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{staticStyle:{"padding-top":"0"}},[o("v-list-item",{attrs:{to:"/",router:"",exact:"",dense:""}},[o("v-list-item-action",[o("v-icon",[t._v(t._s(t.icons.apps))])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.$t("site.index")))])],1)],1),t._v(" "),t._l(t.nav_items,(function(e,i){return o("v-list-item",{key:i,attrs:{href:e.to,target:"_blank",rel:"noreferrer",router:"",exact:"",dense:""}},[o("v-list-item-action",[o("v-img",{staticStyle:{width:"24px"},attrs:{src:e.icon}})],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],2),t._v(" "),"zh"===t.current_locale?o("div",[o("v-divider"),t._v(" "),o("v-list",t._l(t.external_cn,(function(e){return o("v-list-item",{key:e.to,attrs:{dense:"",href:e.to,target:"_blank",rel:"noreferrer"}},[o("v-list-item-action",[o("v-icon",[t._v(t._s(t.icons[e.icon]))])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1):t._e(),t._v(" "),o("v-divider"),t._v(" "),o("v-list",[o("v-list-item",{attrs:{dense:"",to:"/links",router:"",exact:""}},[o("v-list-item-action",[o("v-icon",[t._v(t._s(t.icons.play_list_star))])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.$t("site.links")))])],1)],1),t._v(" "),o("v-list-item",{attrs:{dense:"",to:"/about",router:"",exact:""}},[o("v-list-item-action",[o("v-icon",[t._v(t._s(t.icons.code_tags))])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.$t("site.about")))])],1)],1)],1)],1),t._v(" "),o("v-app-bar",{staticClass:"primary white--text",class:[this.$vuetify.theme.dark?"gradient-header-dark":"gradient-header-light"],attrs:{dense:"",app:""}},[o("v-app-bar-nav-icon",{staticClass:"white--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),o("v-toolbar-title",{domProps:{textContent:t._s(t.$t("site.title")+"(^・ω・^§)ﾉ")}}),t._v(" "),o("v-img",{staticStyle:{"max-width":"24px","margin-left":"6px"},attrs:{src:"/img/oruyanke_transparent.png"}}),t._v(" "),o("v-spacer"),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({staticClass:"white--text",attrs:{icon:""},on:{click:function(e){return t.switch_dark()}}},n),[o("v-icon",[t._v(t._s(t.icons.brightness))])],1)]}}])},[t._v(" "),o("span",[t._v(t._s(t.$t("site.switch_dark_mode")))])]),t._v(" "),o("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var menu=e.on;return[o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({staticClass:"white--text",attrs:{icon:""}},Object.assign({},n,menu)),[o("v-icon",[t._v(t._s(t.icons.translate))])],1)]}}],null,!0)},[t._v(" "),o("span",[t._v(t._s(t.$t("site.switch_language")))])])]}}])},[t._v(" "),o("v-list",[o("v-list-item",{attrs:{id:"lang-switch-zh"},on:{click:function(e){return t.switch_lang("zh")}}},[o("v-list-item-title",[t._v("简体中文")])],1),t._v(" "),o("v-list-item",{attrs:{id:"lang-switch-ja"},on:{click:function(e){return t.switch_lang("ja")}}},[o("v-list-item-title",[t._v("日本語")])],1),t._v(" "),o("v-list-item",{attrs:{id:"lang-switch-en"},on:{click:function(e){return t.switch_lang("en")}}},[o("v-list-item-title",[t._v("English")])],1)],1)],1)],1),t._v(" "),o("v-main",[o("v-container",{staticClass:"page"},[o("nuxt")],1),t._v(" "),o("v-footer",{staticClass:"footer",attrs:{fixed:!1}},[o("div",[o("div",{staticStyle:{"vertical-align":"middle"}},[o("span",[t._v("© "+t._s((new Date).getFullYear())+" ")]),t._v(" "),o("span",[o("a",{attrs:{href:"https://github.com/lonelyion",target:"_blank",rel:"noreferrer"}},[t._v("\n              "+t._s(t.$t("site.footer.lonely_ion"))+"\n            ")])]),t._v(" "),o("span",[t._v("\n            &\n            "),o("a",{attrs:{href:"https://space.bilibili.com/314977548",target:"_blank",rel:"noreferrer"}},[t._v("\n              "+t._s(t.$t("site.footer.oruyanke"))+"\n            ")])]),t._v(" "),o("v-btn",{staticStyle:{"vertical-align":"middle"},attrs:{icon:"",href:"https://github.com/voosc/fubuki-button",target:"_blank",rel:"noreferrer"}},[o("v-icon",[t._v(t._s(t.icons.github))])],1)],1),t._v(" "),o("div",[o("span",[t._v("Powered by")]),t._v(" "),o("a",{attrs:{href:"https://www.vercel.com/?utm_source=oruyanke",target:"_blank",rel:"noreferrer"}},[o("img",{attrs:{src:t.vercel_logo,alt:"vercel",height:"16px"}})])]),t._v(" "),o("div",[o("p",[t._v(t._s(t.$t("site.footer.content")))]),t._v(" "),"zh"===t.$i18n.locale?o("p",{staticStyle:{"font-size":"12px"}},[o("a",{attrs:{href:"https://icp.gov.moe",target:"_blank",rel:"noreferrer"}},[t._v("萌ICP备 ")]),t._v(" "),o("a",{attrs:{href:"https://icp.gov.moe/?keyword=20201005",target:"_blank",rel:"noreferrer"}},[t._v(" 20201005号")])]):t._e()])])])],1),t._v(" "),o("console-message")],1)}),[],!1,null,null,null);e.a=j.exports;d()(j,{VApp:f.a,VAppBar:h.a,VAppBarNavIcon:m.a,VBtn:k.a,VContainer:w.a,VDivider:y.a,VFooter:x.a,VIcon:S.a,VImg:$.a,VList:V.a,VListItem:F.a,VListItemAction:A.a,VListItemContent:C.a,VListItemTitle:C.b,VMain:E.a,VMenu:L.a,VNavigationDrawer:T.a,VSpacer:N.a,VToolbarTitle:I.a,VTooltip:O.a})},221:function(t,e,o){t.exports=o(222)},247:function(t,e,o){"use strict";o(173)},250:function(t,e,o){"use strict";o(175)},286:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return n})),o.d(e,"mutations",(function(){return r}));o(26),o(27);var n=function(){return{locales:["en","ja","zh"],locale:"zh",dark:!1}},r={SET_LANG:function(t,e){t.locales.includes(e)&&(t.locale=e,localStorage.setItem("locale",t.locale))},SET_DARK:function(t,e){t.dark=e,localStorage.setItem("dark",t.dark)}}},364:function(t){t.exports=JSON.parse('{"site":{"title":"Fubuki Button","description":"Brand-new voice buttons for Shirakami Fubuki, we are aimming at building a comprehensive project related to Shirakami Fubuki.\\n","index":"Home","links":"Links","about":"About","switch_dark_mode":"Switch Dark Mode","switch_language":"Switch Language","footer":{"lonely_ion":"Lonely_ion","oruyanke":"Oruyanke Team","content":"This site is a fan work and is not associated with the Hololive official. For staff and more information, please see \\"About\\" page."}},"live":{"activity":"Live Board","schedule":"Scheduled at ","on_air":"LIVE NOW","loading":"Fetching live data...","no_schedule":"No scheduled live is found.","notification":"Fubuki Button\'s website URL has changed to fubuki.moe"},"control":{"self":"Player Control","pick_one":"Randomly Pick One","stop":"Stop Playing","enabled":"Enabled","disabled":"Disabled","overlap":"Overlap Mode","random":"Random Mode","repeat":"Repeat Mode","full_name":"Shirakami Fubuki","overlap_title":"Multiple Fubuki Voices"},"dev":{"title":"Development Mode","desc":"Dev mode may contains errors or vulnerability. We absolutely DO NOT guarantee any support and warranty. The actual new features are subject to the official version being launched.","to_stable":"Return to Official version"}}')},365:function(t){t.exports=JSON.parse('{"site":{"title":"フブキボタン","description":"新しい白上フブキのボイスボタン。私たちの目標は白上フブキの総合的なファンサイトを作ることです。","index":"ホームページ","links":"友情リンク","about":"について","switch_dark_mode":"ナイトモードスイッチ","switch_language":"言語を切り替える","footer":{"lonely_ion":"孤独のイオン","oruyanke":"おるやんけ組","content":"このサイトはファン作品であり、公式とは関係ありません。STAFFリストとプロジェクト参加方式は「について」ページをご覧ください。"}},"live":{"activity":"ライブ ストリーム","schedule":"予定","on_air":"ライブ配信中","loading":"生放送で取得中···","no_schedule":"まだ計画中の生放送は発見されていません。","notification":"日本語から中国語へのビデオ翻訳と校正を募集しています。詳細は[team@fubuki.moe](mailto:team@fubuki.moe)までお問い合わせください。"},"control":{"self":"コントロール","pick_one":"ランダム再生","stop":"再生停止","enabled":"有効","disabled":"無効","overlap":"音声を重ねる","random":"自動ランダム再生","repeat":"ループ","full_name":"白上フブキ","overlap_title":"多くのフブキの音声"},"dev":{"title":"開発モードのWebサイトにアクセスしています","desc":"開発モードでは、フブキボタンのベータ版に脆弱性、エラー、またはその他の問題が含まれる場合があります。 私たちはサポートを提供しておらず、問題または誤動作に対する明示的または黙示的な保証または補償を提供していません。实际新功能以正式版上线为准。","to_stable":"公式ページへ"}}')},366:function(t){t.exports=JSON.parse('{"site":{"title":"狐按钮","description":"全新的白上吹雪语音按钮，目标是打造一个整合白上吹雪各个方面的应援项目","index":"主页","links":"友情链接","about":"关于","switch_dark_mode":"夜间模式开关","switch_language":"切换语言","footer":{"lonely_ion":"孤单离子","oruyanke":"御宅白狐的狐笋之林","content":"本站为爱好者作品，和Hololive官方没有关联，STAFF名单以及项目参与方式请查看\\"关于\\"页面"}},"live":{"activity":"直播动态","schedule":"计划","on_air":"正在直播","loading":"直播动态获取中...","no_schedule":"还没有发现正在或计划中的直播","notification":"御宅白狐的狐笋之林正在寻找有能man加入，急需**校对**、翻译、剪辑、后期、美工、开发、画师等，[点击此处查看详情](https://t.bilibili.com/420430796673715019 \\"救救草bot 救救狐协\\")"},"control":{"self":"播放控制","pick_one":"帮我选一个","stop":"停止","enabled":"开启","disabled":"关闭","overlap":"重叠播放","random":"随机播放","repeat":"洗脑循环","full_name":"白上吹雪","overlap_title":"多重狐狸"},"dev":{"title":"您正在访问开发模式的站点","desc":"开发模式下，狐按钮的测试版可能包含漏洞、错误或其他问题。开发模式由GitHub仓库的dev分支提供，我们不提供任何支持，对任何问题或故障也不提供任何明示或暗示保证或赔偿。实际新功能以正式版上线为准。","to_stable":"点此转到正式版页面"}}')},55:function(t,e,o){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(o(247),o(46)),l=o(94),c=o.n(l),v=o(382),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"39ae9f7d",null);e.a=component.exports;c()(component,{VApp:v.a})}},[[221,6,2,7]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{255:function(t,e,n){var content=n(257);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("31741a87",content,!0,{sourceMap:!1})},256:function(t,e,n){"use strict";var r=n(255);n.n(r).a},257:function(t,e,n){(e=n(41)(!1)).push([t.i,"h2[data-v-0bc2659b],p[data-v-0bc2659b]{color:red}.youtube-frame[data-v-0bc2659b]{display:flex;justify-content:center;align-items:center;text-align:center;margin:0 auto;padding:0}iframe[data-v-0bc2659b]{width:960px;height:540px}",""]),t.exports=e},258:function(t,e,n){"use strict";n(19);var r=n(3),l=n(2),o=n(260),c=n.n(o);l.a.use(c.a);var d={data:function(){return{isImageModalActive:!1,isCardModalActive:!1}},props:{vId:String,aPlay:String},computed:{player:function(){return this.$refs.youtube.player}},methods:{playVideo:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.player.playVideo();case 2:case"end":return e.stop()}}),e)})))()},playing:function(){}}},v=(n(256),n(4)),component=Object(v.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"youtube-frame"},[e("youtube",{ref:"youtube",attrs:{"video-id":this.vId,"player-vars":this.aPlay},on:{playing:this.playing}})],1)}),[],!1,null,"0bc2659b",null);e.a=component.exports},259:function(t,e,n){var content=n(263);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("338d0ac2",content,!0,{sourceMap:!1})},262:function(t,e,n){"use strict";var r=n(259);n.n(r).a},263:function(t,e,n){(e=n(41)(!1)).push([t.i,"h1.title[data-v-4ea1ed2d]{color:#fff!important;font-weight:300;font-family:sans-serif}@media screen and (max-width:1080px){h1.title.ja[data-v-4ea1ed2d]{letter-spacing:0;margin-right:0}}div.columns+div.columns[data-v-4ea1ed2d]{margin-top:2vh}div.speaker-name-overlap[data-v-4ea1ed2d]{position:absolute;background-color:#fff;right:0;padding:20px}",""]),t.exports=e},264:function(t,e,n){"use strict";var r={methods:{getShareUrl:function(t){return"http://twitter.com/share?url=https://tedxutsukuba.com&related=tedxutsukuba&hashtags=jijimuge,".concat(t)}},props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},description:{type:String,required:!1},image_url:{type:String,required:!0},youtubeId:{type:String,required:!1}}},l=(n(262),n(4)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns is-multiline is-variable is-centered is-vcentered font-awesome"},[n("div",{staticClass:"card-image column is-12-mobile is-3-tablet is-4-desktop is-3-widescreen is-3-fullhd"},[n("div",{staticClass:"image-box"},[n("figure",{ref:"imageref",staticClass:"image is-1by1"},[n("img",{staticClass:"nmp-card-image",staticStyle:{"object-fit":"cover"},attrs:{src:t.image_url,alt:t.title}})])])]),t._v(" "),n("div",{staticClass:"column has-text-centered-mobile"},[n("h1",{staticClass:"title is-1 ja"},[t._v(t._s(t.title))]),t._v(" "),n("h1",{staticClass:"subtitle is-size-6 has-text-primary"},[t._v(t._s(t.subtitle))]),t._v(" "),n("p",{staticClass:"has-text-left",staticStyle:{"text-align":"justify"}},[t._v("\n        "+t._s(t.description)+"\n      ")]),t._v(" "),n("br"),t._v(" "),n("a",{staticClass:"button is-gradient is-rounded",attrs:{href:t.youtubeId}},[n("i",{staticClass:"mdi mdi-youtube is-size-4"}),t._v(" "),n("span",{staticStyle:{"padding-left":"0.25rem"}},[t._v(t._s(t.$t("about.ted.watch")))])])])])}),[],!1,null,"4ea1ed2d",null);e.a=component.exports},265:function(t,e,n){var content=n(285);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("696f93c2",content,!0,{sourceMap:!1})},266:function(t,e,n){var content=n(299);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("27e885de",content,!0,{sourceMap:!1})},267:function(t,e,n){var content=n(301);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("7e70c726",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";var r={name:"Flip",props:["title","description","detail","link","date","imageUrl"]},l=n(4),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nmp-card-dark"},[n("h1",{staticClass:"title is-size-6-mobile is-size-5"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"subtitle is-size-6 has-text-primary"},[t._v(t._s(t.description))]),t._v(" "),n("article",{staticClass:"is-size-7",domProps:{innerHTML:t._s(t.detail)}}),t._v(" "),n("br"),t._v(" "),t.link?n("a",{staticClass:"button is-gradient is-rounded is-small",attrs:{href:t.link}},[t._v(t._s(t.$t("button.discover")))]):t._e()])}),[],!1,null,null,null);e.a=component.exports},282:function(t,e,n){t.exports=n.p+"img/a89f056.png"},283:function(t,e,n){t.exports=n.p+"img/7ed8cf6.png"},284:function(t,e,n){"use strict";var r=n(265);n.n(r).a},285:function(t,e,n){(e=n(41)(!1)).push([t.i,".indicator-item figure img{border:2px solid grey}.indicator-item.is-active figure img{border:2px solid #fff}@media screen and (min-width:961px){.carousel .carousel-indicator{padding:.5rem 0!important}}",""]),t.exports=e},298:function(t,e,n){"use strict";var r=n(266);n.n(r).a},299:function(t,e,n){(e=n(41)(!1)).push([t.i,".slideshow-item{display:inline-block;word-break:break-all;width:23.5vw;margin-right:1vw}.slideshow-item:first-child{margin-left:1.5vw}@media screen and (max-width:768px){.slideshow-item{width:80vw;padding:0}}",""]),t.exports=e},300:function(t,e,n){"use strict";var r=n(267);n.n(r).a},301:function(t,e,n){(e=n(41)(!1)).push([t.i,".same-height[data-v-6512ddc3]{display:flex;flex-wrap:wrap}.textoverflow[data-v-6512ddc3]{color:#fff;font-size:6rem;font-family:Helvetica Neue,Arial,sans-serif;left:10vw;position:absolute;top:130vh}h1.thin[data-v-6512ddc3]{font-weight:100!important}.bounce_box[data-v-6512ddc3]{background-color:#fff;border-radius:25px;padding:3rem 6rem}.text-divider[data-v-6512ddc3]{background-color:#5b08b9;margin:0 auto;width:80%;height:2px}#rocket[data-v-6512ddc3]{opacity:1}#intro[data-v-6512ddc3],#notice[data-v-6512ddc3]{opacity:0;transition:all .5s}#top-carousel[data-v-6512ddc3]{opacity:0;transition:fadeIn 2s;max-width:960px!important;margin:auto}@-webkit-keyframes fadeIn-data-v-6512ddc3{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-6512ddc3{0%{opacity:0}to{opacity:1}}@-webkit-keyframes SlideIn-data-v-6512ddc3{0%{opacity:0}to{opacity:1;transform:translateZ(0)}}@keyframes SlideIn-data-v-6512ddc3{0%{opacity:0}to{opacity:1;transform:translateZ(0)}}.motto[data-v-6512ddc3]{width:100%;max-width:480px}",""]),t.exports=e},388:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-5-widescreen is-4-desktop is-6-tablet is-6-mobile"},[e("img",{staticClass:"motto",staticStyle:{"padding-right":"50px"},attrs:{src:n(283)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section"},[e("h1",{staticClass:"title is-2 has-text-centered"},[e("span",{},[this._v("TEDxUTsukuba This Week")])])])}],l=n(264),o=n(280),c={data:function(){return{gallery:!1,interval:5e3,indicator:!0,indicatorStyle:"is-lines",iconPack:"mdi",iconPrev:"chevron-left",iconNext:"chevron-right",iconSize:"is-medium",pauseInfoType:"is-dark",items:[{title:"Staff Wanted",image:"https://www.tedxutsukuba.com/carousel/staffwanted.jpg",thumbnail:"https://www.tedxutsukuba.com/carousel/thumbnail/staffwanted.jpg",link:"./about/utsukuba"},{title:"2020 JIJIMUGE",image:"https://www.tedxutsukuba.com/carousel/2020jijimuge.png",thumbnail:"https://www.tedxutsukuba.com/carousel/thumbnail/2020jijimuge.png",link:"./events/2020"},{title:"2019 CoPhilAction",image:"https://www.tedxutsukuba.com/carousel/2019cophilaction.png",thumbnail:"https://www.tedxutsukuba.com/carousel/thumbnail/2019cophilaction.jpg",link:"./events/2019"},{title:"TEDxUTsukubaLive",image:"https://www.tedxutsukuba.com/carousel/2019utsukubalive.png",thumbnail:"https://www.tedxutsukuba.com/carousel/thumbnail/2019utsukubalive.png",link:""}]}}},d=(n(284),n(4)),v=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"carousel-wrapper"}},[n("b-carousel",{attrs:{"with-carousel-list":"",autoplay:!0,indicator:t.indicator,"indicator-inside":!1,"indicator-style":t.indicatorStyle,interval:t.interval,overlay:t.gallery,"icon-pack":t.iconPack,"icon-prev":t.iconPrev,"icon-next":t.iconNext,"icon-size":t.iconSize,repeat:!0,"pause-info-type":t.pauseInfoType},on:{click:function(e){return t.switchGallery(!0)}},scopedSlots:t._u([{key:"indicators",fn:function(e){return[n("figure",{staticClass:"image"},[n("img",{attrs:{src:t.items[e.i].thumbnail}})])]}}])},t._l(t.items,(function(t,i){return n("b-carousel-item",{key:i},[n("nuxt-link",{attrs:{to:t.link}},[n("figure",{staticClass:"image"},[n("img",{attrs:{src:t.image,alt:t.title}})])])],1)})),1)],1)}),[],!1,null,null,null).exports,m={components:{Movie:n(258).a},data:function(){return{}},methods:{getJsonImgUrl:function(t){return n(154)}},computed:{talkList:function(){return this.$store.getters["talk/getRandomTalks"]()}}},h=(n(298),Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("ul",{staticClass:"slideshow",attrs:{id:"slides-before"}},t._l(t.talkList,(function(e,r){return n("li",{key:r,staticClass:"slideshow-item"},[n("div",{staticClass:"card has-background-dark"},[n("div",{staticClass:"card-image"},[n("Movie",{attrs:{vId:e.youtube_id}})],1),t._v(" "),n("div",{staticClass:"card-content"},[n("h1",{staticClass:"title is-4"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),"ja"==t.$i18n.locale?n("h1",{staticClass:"subtitle is-5"},[t._v("\n            "+t._s(e.speaker_name)+"\n          ")]):t._e(),t._v(" "),"en"==t.$i18n.locale?n("h1",{staticClass:"subtitle is-5"},[t._v("\n            "+t._s(e.speaker_name_alt)+"\n          ")]):t._e()])])])})),0),t._v(" "),n("ul",{staticClass:"slideshow",attrs:{id:"slides-after"}},t._l(t.talkList,(function(e,r){return n("li",{key:r,staticClass:"slideshow-item"},[n("div",{staticClass:"card has-background-dark"},[n("div",{staticClass:"card-image"},[n("Movie",{attrs:{vId:e.youtube_id}})],1),t._v(" "),n("div",{staticClass:"card-content"},[n("h1",{staticClass:"title is-4"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),"ja"==t.$i18n.locale?n("h1",{staticClass:"subtitle is-5"},[t._v("\n            "+t._s(e.speaker_name)+"\n          ")]):t._e(),t._v(" "),"en"==t.$i18n.locale?n("h1",{staticClass:"subtitle is-5"},[t._v("\n            "+t._s(e.speaker_name_alt)+"\n          ")]):t._e()])])])})),0)])}),[],!1,null,null,null).exports),f={name:"HomePage",components:{Card:l.a,Flip:o.a,Carousel:v,PopularTalks:h},data:function(){return{videoId1:"yJpcvqCC0ww",videoId2:"q_Es52kl6FQ",videoId3:"ZbIEuwjpxp0",todayDate:Date.now(),eventDate:Date(2020,11,29,0,0,0),isAlertActive:!0}},head:function(){return{meta:[{hid:"description",name:"description",content:"TEDxUTsukuba is an independently organised TEDx community managed by passionate students and alumni at the University of Tsukuba. Join us for conversations on local stories to global issues. "}]}},mounted:function(){var t=this.$scrollmagic.scene({triggerElement:"#wrapper-dark",triggerHook:1,offset:10,duration:300,reverse:!1}).setTween("#top-carousel",{css:{opacity:1}}),e=this.$scrollmagic.scene({triggerElement:"#top-title",triggerHook:1,offset:0,reverse:!1}).setTween("#intro",{css:{opacity:1}}),n=this.$scrollmagic.scene({triggerElement:"#notice-title",triggerHook:1,offset:0,reverse:!1}).setTween("#notice",{css:{opacity:1}});this.$scrollmagic.addScene(t),this.$scrollmagic.addScene(e),this.$scrollmagic.addScene(n)}},_=(n(300),Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticStyle:{margin:"0",padding:"0"},attrs:{id:"wrapper-dark"}},[r("div",{staticStyle:{"margin-bottom":"3rem"}},[r("Carousel",{attrs:{id:"top-carousel"}})],1),t._v(" "),r("section",{staticClass:"hero bg-red"},[r("div",{staticClass:"has-text-left",staticStyle:{margin:"1vh 0 0vh 0"}}),t._v(" "),r("div",{staticClass:"hero-body"},[r("section",{staticClass:"section",attrs:{id:"intro"}},[r("div",{staticClass:"columns is-mobile is-multiline is-centered is-variable is-0"},[t._m(0),t._v(" "),r("div",{staticClass:"column is-0-fullhd is-0-widescreen is-0-desktop is-6-tablet is-6-mobile"}),t._v(" "),r("div",{staticClass:"column is-7-widescreen is-8-desktop is-full-tablet is-full-mobile"},["ja"==t.$i18n.locale?r("h1",{staticClass:"title is-2 is-size-4-mobile has-text-weight-light"},[t._v("\n                    "+t._s(t.$t("intro.headline1"))+"\n                    "),r("br"),t._v("\n                    "+t._s(t.$t("intro.headline2"))+"\n                  ")]):t._e(),t._v(" "),"en"==t.$i18n.locale?r("h1",{staticClass:"title is-2 is-size-4-mobile has-text-weight-light"},[t._v("\n                    "+t._s(t.$t("intro.headline1"))+"\n                    "),r("br"),t._v("\n                    "+t._s(t.$t("intro.headline2"))+"\n                  ")]):t._e(),t._v(" "),r("img",{staticStyle:{"z-index":"0"},attrs:{id:"rocket",src:n(282),width:"100%"}}),t._v(" "),r("article",{staticClass:"is-size-6 has-text-light"},[t._v("\n                    "+t._s(t.$t("intro.description"))+"\n                  ")]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"has-text-right"},[r("nuxt-link",{attrs:{to:t.localePath("/about/utsukuba")}},[r("button",{staticClass:"button is-white is-rounded is-outlined"},[t._v(t._s(t.$t("intro.button")))])])],1)])])])])]),t._v(" "),r("section",{staticClass:"hero"},[r("Movie",{attrs:{id:"teaser",vId:t.videoId3,classname:"large"}})],1),t._v(" "),r("section",{staticClass:"section",attrs:{id:"notice-title"}},[r("h1",{staticClass:"title is-2 has-text-centered"},[r("span",{},[t._v(t._s(t.$t("news.title")))])]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"columns is-multiline reverse-row-order",attrs:{id:"notice"}},[r("div",{staticClass:"column is-5-tablet"},[r("Flip",{attrs:{title:t.$t("notice.left-top.title"),description:t.$t("notice.left-top.description"),detail:t.$t("notice.left-top.detail"),link:t.$t("notice.left-top.link"),imageUrl:"/_nuxt/assets/speakers/2019/sp_2019_1.jpg"}})],1),t._v(" "),r("div",{staticClass:"column is-7-tablet"},[r("Flip",{attrs:{title:t.$t("notice.left-bottom.title"),description:t.$t("notice.left-bottom.description"),detail:t.$t("notice.left-bottom.detail"),link:t.$t("notice.left-bottom.link"),imageUrl:""}})],1),t._v(" "),r("div",{staticClass:"column is-7-tablet"},[r("Flip",{attrs:{title:t.$t("notice.right-top.title"),description:t.$t("notice.right-top.description"),detail:t.$t("notice.right-top.detail"),link:t.$t("notice.right-top.link"),imageUrl:""}})],1),t._v(" "),r("div",{staticClass:"column is-5-tablet"},[r("Flip",{attrs:{title:t.$t("notice.right-bottom.title"),description:t.$t("notice.right-bottom.description"),detail:t.$t("notice.right-bottom.detail"),link:t.$t("notice.right-bottom.link"),imageUrl:""}})],1)]),t._v(" "),r("p",{staticClass:"has-text-grey-light has-text-right mb-6"},[t._v(t._s(t.$t("notice.last-modified"))),r("time",{attrs:{datetime:"2020-12-22"}},[t._v("2020/1/26")])]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"has-text-centered"},[r("nuxt-link",{staticClass:"button is-gradient is-rounded",attrs:{to:t.localePath("/notice")}},[t._v(t._s(t.$t("button.archive")))])],1)]),t._v(" "),t._m(1),t._v(" "),r("PopularTalks"),t._v(" "),r("br"),r("br"),t._v(" "),r("div",{staticClass:"has-text-centered"},[r("nuxt-link",{staticClass:"button is-gradient is-rounded",attrs:{to:t.localePath("/talks")}},[t._v(t._s(t.$t("talks.seeAll")))])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("div",{staticClass:"text-divider"})],1)}),r,!1,null,"6512ddc3",null));e.default=_.exports}}]);
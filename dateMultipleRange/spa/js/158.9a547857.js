(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[158],{e844:function(e,n,t){"use strict";t.r(n);var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"q-layout-padding"},[e._m(0),t("div",[e._v("Is fullscreen: "+e._s(e.$q.fullscreen.isActive))]),t("p",[t("q-btn",{attrs:{color:"secondary",icon:"zoom_out_map",label:"Toggle Fullscreen ($q)"},on:{click:function(n){return e.$q.fullscreen.toggle()}}})],1),t("p",[t("q-btn",{attrs:{color:"secondary",icon:"zoom_out_map",label:"Toggle Fullscreen (import)"},on:{click:function(n){return e.toggleFullscreen()}}})],1),t("p",{staticClass:"caption"},[e._v("\n      On some phones this will have little effect:\n    ")]),e._m(1)])])},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"caption"},[t("span",{staticClass:"desktop-only"},[e._v("Click")]),t("span",{staticClass:"mobile-only"},[e._v("Tap")]),e._v("\n      to switch between fullscreen mode and default mode.\n    ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",{staticClass:"light-paragraph"},[t("li",[e._v("\n        For example, on Samsung S4, when App goes into fullscreen, the top bar\n        will slide up but still remain on screen.\n      ")]),t("li",[e._v("\n        On Nexus phones, on the other hand, like Nexus 5, Android navigation\n        buttons and top bar dissapear completely.\n      ")])])}],s=t("4115"),c={watch:{"$q.fullscreen.activeEl":function(e){console.log(e)}},methods:{toggleFullscreen:function(){s["a"].toggle().then((function(){setTimeout((function(){console.log(s["a"].isActive)}),1e3)})).catch((function(e){console.error(e)}))}}},a=c,i=t("a6c2"),r=Object(i["a"])(a,l,o,!1,null,null,null);n["default"]=r.exports}}]);
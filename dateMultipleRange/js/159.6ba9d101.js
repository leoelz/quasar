(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[159],{af2d:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"q-layout-padding"},[t._m(0),t.eventList.length>0?n("table",{staticClass:"q-table striped"},[n("tbody",t._l(t.eventList,(function(e){return n("tr",{key:e.timestamp},[n("td",[t._v(t._s(e.timestamp))]),n("td",[t._v(t._s(e.label))])])})),0)]):t._e()])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"caption"},[t._v("\n      Switch to another\n      "),n("span",{staticClass:"cordova-hide"},[t._v("\n        tab in your browser\n      ")]),n("span",{staticClass:"cordova-only"},[t._v("\n        App\n      ")]),t._v("\n      then come back here to see Visibility in action.\n    ")])}];function i(t){return(t<10?"0":"")+t}var c={data:function(){return{eventList:[]}},watch:{"$q.appVisible":function(t){var e=new Date;this.eventList.unshift({timestamp:i(e.getHours())+":"+i(e.getMinutes())+":"+i(e.getSeconds())+"."+e.getMilliseconds(),label:" App became ".concat(t?"visible":"hidden")})}}},l=c,o=n("a6c2"),r=Object(o["a"])(l,s,a,!1,null,null,null);e["default"]=r.exports}}]);
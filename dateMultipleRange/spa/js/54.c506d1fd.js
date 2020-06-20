(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[54],{c1e3:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"q-layout-padding",staticStyle:{"max-width":"600px"}},[s("p",{staticClass:"caption"},[t._v("\n      Ajax Bar component captures Ajax calls automatically. This page here triggers events manually for demonstrating purposes only.\n    ")]),s("q-card",{staticStyle:{"margin-top":"25px"}},[s("q-card-section",{staticClass:"bg-primary text-center"},[s("q-btn",{staticClass:"full-width q-mb-md",attrs:{push:"",color:"orange"},on:{click:function(e){return t.trigger()}}},[t._v("\n          Trigger Event\n        ")]),s("div",{staticClass:"q-gutter-sm"},[s("q-btn",{attrs:{push:"",color:"green"},on:{click:function(e){return t.start(0)}}},[t._v("\n            Start (speed 0)\n          ")]),s("q-btn",{attrs:{push:"",color:"blue"},on:{click:function(e){return t.increment()}}},[t._v("\n            Random increment\n          ")]),s("q-btn",{attrs:{push:"",color:"red"},on:{click:function(e){return t.stop()}}},[t._v("\n            Stop\n          ")])],1)],1),s("p",{staticClass:"caption text-center"},[t._v("\n        Try out some combinations for Ajax Bar.\n      ")]),s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("\n          Position\n        ")]),s("div",{staticClass:"flex",staticStyle:{margin:"-5px"}},[s("div",{staticClass:"column"},[s("q-radio",{attrs:{val:"top",label:"Top"},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}}),s("q-radio",{attrs:{val:"bottom",label:"Bottom"},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}})],1),s("div",{staticClass:"column"},[s("q-radio",{attrs:{val:"right",label:"Right"},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}}),s("q-radio",{attrs:{val:"left",label:"Left"},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}})],1)]),s("div",{staticClass:"text-h6 q-mt-md"},[t._v("\n          Reverse?\n        ")]),s("q-checkbox",{attrs:{label:"Reverse Direction"},model:{value:t.reverse,callback:function(e){t.reverse=e},expression:"reverse"}}),s("div",{staticClass:"text-h6 q-mt-md"},[t._v("\n          Size\n        ")]),s("q-slider",{attrs:{min:2,max:20,"label-always":"","label-value":t.size+"px"},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})],1)],1)],1),s("q-ajax-bar",{ref:"bar",attrs:{position:t.position,reverse:t.reverse,size:t.computedSize}})],1)},n=[],a={data:function(){return{position:"top",reverse:!1,size:20,timeouts:[]}},computed:{computedSize:function(){return this.size+"px"}},methods:{trigger:function(){var t=this;this.$refs.bar.start(),setTimeout((function(){t.$refs.bar&&t.$refs.bar.stop()}),3e3*Math.random()+1e3)},start:function(t){this.$refs.bar.start(t)},increment:function(){this.$refs.bar.increment(20*Math.random())},stop:function(){this.$refs.bar.stop()}}},o=a,r=s("a6c2"),c=Object(r["a"])(o,i,n,!1,null,null,null);e["default"]=c.exports}}]);
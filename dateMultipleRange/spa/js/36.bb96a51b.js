(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{"3e9b":function(e,t,n){},6758:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-layout-padding",class:e.classes},[n("div",{staticClass:"q-gutter-y-md",staticStyle:{"max-width":"600px","margin-bottom":"100vh"}},[n("div",{staticClass:"q-gutter-x-md"},[n("q-toggle",{attrs:{dark:e.dark,label:"Dark","false-value":null},model:{value:e.dark,callback:function(t){e.dark=t},expression:"dark"}}),n("q-toggle",{attrs:{dark:e.dark,label:"Dense"},model:{value:e.dense,callback:function(t){e.dense=t},expression:"dense"}}),n("q-toggle",{attrs:{dark:e.dark,label:"Border"},model:{value:e.border,callback:function(t){e.border=t},expression:"border"}}),n("q-toggle",{attrs:{dark:e.dark,label:"Individual Border"},model:{value:e.individualBorder,callback:function(t){e.individualBorder=t},expression:"individualBorder"}})],1),n("h1",[e._v("Field wrapper tests")]),n("q-field",{attrs:{value:"We count this",dark:e.dark,dense:e.dense,label:"Field label","stack-label":"","bottom-slots":"",counter:"",tabindex:"0"},scopedSlots:e._u([{key:"control",fn:function(){return[n("div",[e._v("\n          Field content\n        ")])]},proxy:!0}])},[n("q-icon",{attrs:{slot:"before",name:"event"},slot:"before"}),n("div",{attrs:{slot:"hint"},slot:"hint"},[e._v("\n        Field message\n      ")]),n("q-icon",{attrs:{slot:"after",name:"search"},slot:"after"})],1),n("q-field",{attrs:{dark:e.dark,dense:e.dense,label:"Field label","stack-label":"","bottom-slots":"",tabindex:"0"},scopedSlots:e._u([{key:"control",fn:function(){return[n("div",[e._v("\n          Field content\n        ")])]},proxy:!0},{key:"after",fn:function(){return[n("q-icon",{attrs:{name:"search"}}),n("q-icon",{attrs:{name:"delete"}})]},proxy:!0}])},[n("q-icon",{attrs:{slot:"before",name:"event"},slot:"before"}),n("div",{attrs:{slot:"hint"},slot:"hint"},[e._v("\n        Field message\n      ")]),n("div",{attrs:{slot:"counter"},slot:"counter"},[e._v("\n        3/12\n      ")])],1),n("q-field",{attrs:{dark:e.dark,dense:e.dense,label:"Field label","stack-label":"",tabindex:"0"},scopedSlots:e._u([{key:"control",fn:function(){return[n("div",[e._v("\n          Field content\n        ")])]},proxy:!0},{key:"after",fn:function(){return[n("q-icon",{attrs:{name:"search",color:"primary"}}),n("q-icon",{attrs:{name:"delete",color:"red"}})]},proxy:!0}])},[n("q-icon",{attrs:{slot:"before",name:"event",color:"orange"},slot:"before"})],1),n("q-field",{attrs:{dark:e.dark,dense:e.dense,label:"Field label","stack-label":"","bottom-slots":"",tabindex:"0"},scopedSlots:e._u([{key:"control",fn:function(){return[n("div",[e._v("\n          Field content\n        ")])]},proxy:!0}])},[n("q-icon",{attrs:{slot:"before",name:"event"},slot:"before"}),n("div",{attrs:{slot:"hint"},slot:"hint"},[e._v("\n        Field message\n      ")]),n("div",{attrs:{slot:"counter"},slot:"counter"},[e._v("\n        3/12\n      ")]),n("q-spinner",{attrs:{slot:"after"},slot:"after"})],1),n("q-field",{attrs:{dark:e.dark,dense:e.dense,label:"Field label","stack-label":"","bottom-slots":"",tabindex:"0"},scopedSlots:e._u([{key:"control",fn:function(){return[n("div",[e._v("\n          Field content\n        ")])]},proxy:!0}])},[n("div",{attrs:{slot:"hint"},slot:"hint"},[e._v("\n        Field message\n      ")]),n("div",{attrs:{slot:"counter"},slot:"counter"},[e._v("\n        3/12\n      ")])]),n("q-field",{attrs:{dark:e.dark,dense:e.dense,label:"Field label","stack-label":"","bottom-slots":"",tabindex:"0"},scopedSlots:e._u([{key:"control",fn:function(){return[n("div",[e._v("\n          Field content\n        ")])]},proxy:!0}])},[n("div",{attrs:{slot:"counter"},slot:"counter"},[e._v("\n        3/12\n      ")])]),n("q-field",{attrs:{dark:e.dark,dense:e.dense,label:"Field label","stack-label":"",tabindex:"0"},scopedSlots:e._u([{key:"control",fn:function(){return[n("div",[e._v("\n          Field content\n        ")])]},proxy:!0}])}),n("q-field",{attrs:{dark:e.dark,dense:e.dense,label:"Field label","stack-label":"","bottom-slots":"",tabindex:"0"},scopedSlots:e._u([{key:"control",fn:function(){return[n("div",[e._v("\n          Field content\n        ")])]},proxy:!0}])},[n("q-btn",{attrs:{slot:"before",flat:"",round:"",dense:"",icon:"event"},slot:"before"}),n("div",{attrs:{slot:"hint"},slot:"hint"},[e._v("\n        Field message\n      ")]),n("div",{attrs:{slot:"counter"},slot:"counter"},[e._v("\n        3/12\n      ")]),n("q-btn",{attrs:{slot:"after",flat:"",round:"",dense:"",icon:"delete"},slot:"after"})],1),n("p",{staticClass:"caption"},[e._v("\n      Item aligned test\n    ")]),n("q-field",{attrs:{dark:e.dark,dense:e.dense,"item-aligned":"",label:"Field label","stack-label":"","bottom-slots":"",tabindex:"0"},scopedSlots:e._u([{key:"control",fn:function(){return[n("div",[e._v("\n          Field content\n        ")])]},proxy:!0}])},[n("q-icon",{attrs:{slot:"before",name:"event"},slot:"before"}),n("div",{attrs:{slot:"hint"},slot:"hint"},[e._v("\n        Field message\n      ")]),n("div",{attrs:{slot:"counter"},slot:"counter"},[e._v("\n        3/12\n      ")]),n("q-icon",{attrs:{slot:"after",name:"search"},slot:"after"})],1),n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{color:"primary",name:"bluetooth"}})],1),n("q-item-section",[e._v("List item")])],1),n("p",{staticClass:"caption"},[e._v("\n      Control slot: "+e._s(e.testValue)+"\n    ")]),n("q-field",{attrs:{filled:"",label:"Tree Select - Single",tabindex:"0"},scopedSlots:e._u([{key:"control",fn:function(e){var t=e.id,l=e.floatingLabel,o=e.value,a=e.emitValue;return[n("input",{directives:[{name:"show",rawName:"v-show",value:l,expression:"floatingLabel"}],attrs:{id:t},domProps:{value:o},on:{input:function(e){return a(e.target.value)}}})]}}]),model:{value:e.testValue,callback:function(t){e.testValue=t},expression:"testValue"}}),n("p",{staticClass:"caption"},[e._v("\n      Tree select\n    ")]),n("q-field",{attrs:{filled:"",value:e.selected,label:"Tree Select - Single",tabindex:"0"},scopedSlots:e._u([{key:"control",fn:function(){return[n("div",{staticClass:"no-outline full-width"},[e._v("\n          "+e._s(e.selected)+"\n        ")])]},proxy:!0},{key:"append",fn:function(){return[n("q-icon",{staticClass:"q-expansion-item__toggle-icon",class:{"rotate-180":void 0!==e.$refs.menu1&&!0===e.$refs.menu1.showing},attrs:{name:"expand_more"}})]},proxy:!0}])},[n("q-popup-proxy",{ref:"menu1",attrs:{fit:"","auto-close":""}},[n("q-tree",{staticClass:"bg-white",attrs:{nodes:e.props,"default-expand-all":"",selected:e.selected,"node-key":"label"},on:{"update:selected":function(t){e.selected=t}}})],1)],1),n("q-field",{attrs:{filled:"",value:e.tickedValue,label:"Tree Select - Multiple",tabindex:"2"},scopedSlots:e._u([{key:"control",fn:function(){return[n("div",{staticClass:"no-outline full-width"},[e._v("\n          "+e._s(e.tickedValue)+"\n        ")])]},proxy:!0},{key:"append",fn:function(){return[n("q-icon",{staticClass:"q-expansion-item__toggle-icon",class:{"rotate-180":void 0!==e.$refs.menu2&&!0===e.$refs.menu2.showing},attrs:{name:"expand_more"}})]},proxy:!0}])},[n("q-popup-proxy",{ref:"menu2",attrs:{fit:""}},[n("q-tree",{staticClass:"bg-white",attrs:{nodes:e.props,"default-expand-all":"","tick-strategy":"leaf",ticked:e.ticked,"node-key":"label"},on:{"update:ticked":function(t){e.ticked=t}}})],1)],1)],1)])},o=[],a={data:function(){return{dark:null,border:!1,dense:!1,individualBorder:!1,selected:null,ticked:[],props:[{label:"Satisfied customers",avatar:"https://cdn.quasar.dev/img/boy-avatar.png",children:[{label:"Good food",icon:"restaurant_menu",children:[{label:"Quality ingredients"},{label:"Good recipe"}]},{label:"Good service",icon:"room_service",children:[{label:"Prompt attention"},{label:"Professional waiter"}]},{label:"Pleasant surroundings",icon:"photo",children:[{label:"Happy atmosphere"},{label:"Good table presentation"},{label:"Pleasing decor"}]}]}],testValue:"Initial value"}},watch:{border:function(e){e&&(this.individualBorder=!1)},individualBorder:function(e){e&&(this.border=!1)}},computed:{classes:function(){return{"bg-black text-white":this.dark,"fields-border":this.border,"fields-individual-border":this.individualBorder}},tickedValue:function(){return this.ticked.join(", ")}}},s=a,r=(n("d798"),n("a6c2")),i=Object(r["a"])(s,l,o,!1,null,null,null);t["default"]=i.exports},d798:function(e,t,n){"use strict";var l=n("3e9b"),o=n.n(l);o.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[107],{cabe:function(e,o,l){"use strict";l.r(o);var a=function(){var e=this,o=e.$createElement,l=e._self._c||o;return l("div",[l("div",{staticClass:"q-layout-padding",class:e.dark?"bg-black text-white":""},[l("div",{staticClass:"label bg-secondary text-white"},[e._v("\n      Model "),l("span",{staticClass:"right-detail"},[l("em",[e._v(e._s(e.checked))])])]),l("q-toggle",{attrs:{dark:e.dark,dense:e.dense,label:"Dark","false-value":null},model:{value:e.dark,callback:function(o){e.dark=o},expression:"dark"}}),l("q-toggle",{attrs:{dark:e.dark,dense:e.dense,label:"Keep Color"},model:{value:e.keepColor,callback:function(o){e.keepColor=o},expression:"keepColor"}}),l("q-toggle",{attrs:{dark:e.dark,dense:e.dense,label:"Dense"},model:{value:e.dense,callback:function(o){e.dense=o},expression:"dense"}}),l("p",{staticClass:"caption"},[e._v("\n      Standalone\n    ")]),l("q-checkbox",{attrs:{dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}}),l("q-checkbox",{staticStyle:{"margin-left":"50px"},attrs:{dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}}),l("p",{staticClass:"caption"},[e._v("\n      Sizes\n    ")]),e._l(["xs","sm","md","lg","xl","150px"],(function(o){return l("q-checkbox",{key:o,attrs:{size:o,label:o,"toggle-indeterminate":"",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.indModel,callback:function(o){e.indModel=o},expression:"indModel"}})})),l("p",{staticClass:"caption"},[e._v("\n      Indeterminate\n    ")]),l("q-checkbox",{attrs:{"toggle-indeterminate":"",dark:e.dark,dense:e.dense,"keep-color":e.keepColor,label:"Three states"},model:{value:e.indModel,callback:function(o){e.indModel=o},expression:"indModel"}}),l("q-checkbox",{attrs:{"toggle-indeterminate":"",dark:e.dark,dense:e.dense,"keep-color":"",label:"Three states"},model:{value:e.indModel,callback:function(o){e.indModel=o},expression:"indModel"}}),l("q-checkbox",{attrs:{"toggle-indeterminate":"",dark:e.dark,dense:e.dense,"keep-color":e.keepColor,color:"orange",label:"Three states"},model:{value:e.indModel,callback:function(o){e.indModel=o},expression:"indModel"}}),l("q-checkbox",{attrs:{"toggle-indeterminate":"",dark:e.dark,dense:e.dense,"keep-color":"",color:"orange",label:"Three states",size:"100px"},model:{value:e.indModel,callback:function(o){e.indModel=o},expression:"indModel"}}),l("p",{staticClass:"caption"},[e._v("\n      Order ("+e._s(JSON.stringify(e.orderModel))+")\n    ")]),l("div",{staticClass:"q-gutter-sm row items-center q-mb-sm"},[l("q-btn",{attrs:{size:"sm",label:"Set true"},on:{click:function(o){e.orderModel=!0}}}),l("q-btn",{attrs:{size:"sm",label:"Set false"},on:{click:function(o){e.orderModel=!1}}}),l("q-btn",{attrs:{size:"sm",label:"Set indeterminate"},on:{click:function(o){e.orderModel=null}}})],1),l("div",{staticClass:"inline-block q-pa-sm",staticStyle:{border:"1px solid"}},[l("q-checkbox",{attrs:{"toggle-order":"tf",label:"tf",dark:e.dark},model:{value:e.orderModel,callback:function(o){e.orderModel=o},expression:"orderModel"}}),l("q-checkbox",{attrs:{"toggle-order":"ft",label:"ft",dark:e.dark},model:{value:e.orderModel,callback:function(o){e.orderModel=o},expression:"orderModel"}})],1),l("div",{staticClass:"inline-block q-pa-sm",staticStyle:{border:"1px solid"}},[l("q-checkbox",{attrs:{"toggle-order":"tf",label:"tf + toggle indet","toggle-indeterminate":"",dark:e.dark},model:{value:e.orderModel,callback:function(o){e.orderModel=o},expression:"orderModel"}}),l("q-checkbox",{attrs:{"toggle-order":"ft",label:"ft + toggle indet","toggle-indeterminate":"",dark:e.dark},model:{value:e.orderModel,callback:function(o){e.orderModel=o},expression:"orderModel"}})],1),l("p",{staticClass:"caption"},[e._v("\n      Tests\n    ")]),l("q-checkbox",{attrs:{dark:e.dark,dense:e.dense,"keep-color":e.keepColor},on:{change:e.onChange,input:e.onInput},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}}),l("q-checkbox",{attrs:{label:"Label",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}}),l("q-checkbox",{attrs:{label:"Checkbox Label",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}}),l("q-checkbox",{attrs:{color:"orange",label:"Checkbox Label",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}}),l("p",{staticClass:"caption"},[e._v("\n      Label on the left side\n    ")]),l("q-checkbox",{attrs:{color:"teal","left-label":"",label:"Checkbox Label",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}}),l("q-checkbox",{attrs:{color:"orange","left-label":"",label:"Checkbox Label",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}}),l("q-checkbox",{attrs:{color:"dark","left-label":"",label:"Checkbox Label",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}}),l("p",{staticClass:"caption"},[e._v("\n      Array Model\n    ")]),l("div",{staticClass:"label bg-secondary text-white"},[e._v("\n      Model "),l("span",{staticClass:"right-detail"},[l("em",[e._v(e._s(e.selection))])])]),l("q-checkbox",{attrs:{val:"one",label:"One",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},on:{change:e.onChange},model:{value:e.selection,callback:function(o){e.selection=o},expression:"selection"}}),l("q-checkbox",{attrs:{val:"two",label:"Two",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},on:{change:e.onChange},model:{value:e.selection,callback:function(o){e.selection=o},expression:"selection"}}),l("q-checkbox",{attrs:{val:"three",label:"Three",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},on:{change:e.onChange},model:{value:e.selection,callback:function(o){e.selection=o},expression:"selection"}}),l("div",{staticClass:"label bg-secondary text-white"},[e._v("\n      Custom true/false model value: "),l("span",{staticClass:"right-detail"},[l("em",[e._v(e._s(e.customChecked))])])]),l("q-checkbox",{attrs:{"true-value":"Custom Active","false-value":"Custom Not Active",dark:e.dark,dense:e.dense,"keep-color":e.keepColor,label:"Tap me"},model:{value:e.customChecked,callback:function(o){e.customChecked=o},expression:"customChecked"}}),l("p",{staticClass:"caption"},[e._v("\n      Disabled State\n    ")]),l("q-checkbox",{attrs:{disable:"",color:"primary",label:"Disabled Checkbox",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}}),l("q-checkbox",{attrs:{disable:"",color:"accent",label:"Disabled Checkbox",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}}),l("q-checkbox",{attrs:{disable:"",color:"teal",label:"Disabled Checkbox",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}}),l("p",{staticClass:"caption"},[e._v("\n      Array true/false val\n    ")]),l("q-checkbox",{attrs:{"true-value":e.trueVal,"false-value":e.falseVal,color:"primary",label:"Array model",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.modelArr,callback:function(o){e.modelArr=o},expression:"modelArr"}}),l("div",{staticClass:"label bg-secondary text-white"},[e._v("\n      Model is: "+e._s(e.modelArr)+"\n    ")]),l("q-checkbox",{attrs:{val:e.trueVal,color:"primary",label:"Array model 1 - [true]",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.modelArrComplex,callback:function(o){e.modelArrComplex=o},expression:"modelArrComplex"}}),l("q-checkbox",{attrs:{val:e.falseVal,color:"primary",label:"Array model 1 - [false]",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.modelArrComplex,callback:function(o){e.modelArrComplex=o},expression:"modelArrComplex"}}),l("div",{staticClass:"label bg-secondary text-white"},[e._v("\n      Model is: "+e._s(e.modelArrComplex)+"\n    ")]),l("p",{staticClass:"caption"},[e._v("\n      Option Group\n    ")]),l("q-option-group",{attrs:{inline:"",type:"checkbox",color:"secondary",dark:e.dark,dense:e.dense,"keep-color":e.keepColor,options:[{label:"Option 2 Option 2 Option 2 Option 2 Option 2 Option 2 Option 2 ",value:"op2"},{label:"Option 3",value:"op3"},{label:"Option 4",value:"op4"}]},on:{input:e.onInput},model:{value:e.group,callback:function(o){e.group=o},expression:"group"}}),l("p",{staticClass:"caption"},[e._v("\n      Another Option Group\n    ")]),l("q-option-group",{attrs:{type:"checkbox",dark:e.dark,dense:e.dense,"keep-color":e.keepColor,options:[{label:"Option 2 Option 2 Option 2 Option 2 Option 2 Option 2 Option 2 ",value:"op2",dark:e.dark,keepColor:e.keepColor},{label:"Option 3",value:"op3",dark:e.dark,keepColor:e.keepColor},{label:"Option 4",value:"op4",dark:e.dark,keepColor:e.keepColor}]},on:{focus:e.onFocus,blur:e.onBlur},model:{value:e.group,callback:function(o){e.group=o},expression:"group"}}),l("p",{staticClass:"caption"},[e._v("\n      Inside a Label\n    ")]),l("div",{staticClass:"column q-gutter-y-sm"},[l("label",[l("q-checkbox",{attrs:{color:"orange",label:"Checkbox - own label",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}})],1),l("label",{attrs:{tabindex:"0"}},[l("q-checkbox",{attrs:{color:"orange",label:"Checkbox - own label (tabindex)",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}})],1),l("label",[l("q-checkbox",{attrs:{color:"orange",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}}),e._v("\n        Checkbox - external label\n      ")],1),l("label",{attrs:{tabindex:"0"}},[l("q-checkbox",{attrs:{color:"orange",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}}),e._v("\n        Checkbox - external label (tabindex)\n      ")],1),l("q-field",{attrs:{label:"Checkbox field","stack-label":"",dark:e.dark,dense:e.dense},scopedSlots:e._u([{key:"control",fn:function(o){var a=o.value,c=o.emitValue;return[l("q-checkbox",{attrs:{value:a,color:"orange",dark:e.dark,dense:e.dense,"keep-color":e.keepColor},on:{input:c}})]}}]),model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}})],1),l("p",{staticClass:"caption"},[e._v("\n      Inside a List\n    ")]),l("q-list",{attrs:{dark:e.dark,dense:e.dense}},[l("q-item",{attrs:{tag:"label"}},[l("q-item-section",{attrs:{avatar:""}},[l("q-checkbox",{attrs:{dark:e.dark,dense:e.dense,"keep-color":e.keepColor},on:{change:e.onChange},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}})],1),l("q-item-section",[l("q-item-label",[e._v("Notification")])],1)],1),l("q-item",{attrs:{tag:"label"}},[l("q-item-section",{attrs:{avatar:""}},[l("q-checkbox",{attrs:{dark:e.dark,dense:e.dense,"keep-color":e.keepColor},on:{change:e.onChange},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}})],1),l("q-item-section",[l("q-item-label",[e._v("Notification")]),l("q-item-label",{attrs:{caption:""}},[e._v("\n            Allow notification\n          ")])],1)],1),l("q-item",{attrs:{tag:"label"}},[l("q-item-section",{attrs:{avatar:""}},[l("q-checkbox",{attrs:{dark:e.dark,dense:e.dense,"keep-color":e.keepColor},on:{change:e.onChange},model:{value:e.checked,callback:function(o){e.checked=o},expression:"checked"}})],1),l("q-item-section",[l("q-item-label",{attrs:{label:""}},[e._v("\n            Notification\n          ")]),l("q-item-label",{attrs:{caption:""}},[e._v("\n            Allow notifications Allow notifications Allow notifications Allow notifications Allow notifications\n          ")])],1)],1)],1)],2)])},c=[],n={data:function(){var e=[!0],o=[!1];return{val:!0,ind:!1,checked:!0,orderModel:"bogus",group:["op2"],selection:["one","two","three"],dark:null,dense:!1,keepColor:!1,indModel:null,customChecked:"Custom Not Active",trueVal:e,falseVal:o,modelArr:o,modelArrComplex:[o,e]}},watch:{group:function(e,o){console.log("Changed from ".concat(JSON.stringify(o)," to ").concat(JSON.stringify(e)))}},methods:{onChange:function(e){console.log("@change",JSON.stringify(e))},onInput:function(e){console.log("@input",JSON.stringify(e))},onFocus:function(){console.log("focused")},onBlur:function(){console.log("blur")}}},t=n,r=l("a6c2"),d=Object(r["a"])(t,a,c,!1,null,null,null);o["default"]=d.exports}}]);
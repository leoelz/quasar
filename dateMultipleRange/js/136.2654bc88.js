(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[136],{cf22:function(a,e,l){"use strict";l.r(e);var t=function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("div",{staticClass:"column no-wrap",class:a.dark?"bg-black text-white":"",staticStyle:{height:"100vh"}},[l("div",{staticClass:"row q-col-gutter-md q-pl-md q-pr-xl shadow-2",class:a.dark?"bg-grey-9":"bg-grey-3",staticStyle:{"z-index":"1"}},[l("q-toggle",{attrs:{dark:a.dark,label:"Dark","false-value":null},model:{value:a.dark,callback:function(e){a.dark=e},expression:"dark"}}),l("q-toggle",{attrs:{dark:a.dark,label:"Dense"},model:{value:a.dense,callback:function(e){a.dense=e},expression:"dense"}}),l("q-toggle",{attrs:{dark:a.dark,label:"Vertical"},model:{value:a.vertical,callback:function(e){a.vertical=e},expression:"vertical"}}),l("q-toggle",{attrs:{dark:a.dark,label:"Default labels"},model:{value:a.defaultLabels,callback:function(e){a.defaultLabels=e},expression:"defaultLabels"}}),l("q-input",{staticClass:"col",attrs:{borderless:"",square:"",dark:a.dark,label:"Label template - use {model}"},model:{value:a.labelTemplate,callback:function(e){a.labelTemplate=e},expression:"labelTemplate"}})],1),l("div",{staticClass:"col scroll q-pl-md q-pr-xl q-gutter-y-lg"},[l("p",{staticClass:"caption"},[a._v("\n      Standalone\n      "),l("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),l("span",{staticClass:"right-detail"},[l("em",[a._v(a._s(a.standalone))]),a._v("   (0 to 50)")])])]),l("div",{staticClass:"row justify-around"},[l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,min:0,max:50},on:{change:a.onChange,input:a.onInput},model:{value:a.standalone,callback:function(e){a.standalone=e},expression:"standalone"}}),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,value:a.standalone,min:0,max:50,label:"","label-value":a.labelValue(a.standalone)},on:{change:function(e){a.standalone=e,a.onChange(e)},input:a.onInput}}),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,min:0,max:50},model:{value:a.standalone,callback:function(e){a.standalone=e},expression:"standalone"}}),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,"label-color":"orange","label-text-color":"black",min:0,max:50,label:"","label-value":a.labelValue(a.standalone)},model:{value:a.standalone,callback:function(e){a.standalone=e},expression:"standalone"}})],1),l("p",{staticClass:"caption"},[a._v("\n      Reverse\n      "),l("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),l("span",{staticClass:"right-detail"},[l("em",[a._v(a._s(a.stepZero))]),a._v("   (0 to 100)")])])]),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,reverse:"",label:"","label-value":a.labelValue(a.stepZero)},model:{value:a.stepZero,callback:function(e){a.stepZero=e},expression:"stepZero"}}),l("p",{staticClass:"caption"},[a._v("\n      Step 0\n      "),l("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),l("span",{staticClass:"right-detail"},[l("em",[a._v(a._s(a.stepZero))]),a._v("   (0 to 100)")])])]),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,step:0},model:{value:a.stepZero,callback:function(e){a.stepZero=e},expression:"stepZero"}}),l("p",{staticClass:"caption"},[a._v("\n      With Floating Point Precision\n      "),l("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),l("span",{staticClass:"right-detail"},[l("em",[a._v(a._s(a.precision))]),a._v("   (0.1 to 2.0, step 0.01)")])])]),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,min:.1,max:2,step:.01},model:{value:a.precision,callback:function(e){a.precision=e},expression:"precision"}}),l("p",{staticClass:"caption"},[a._v("\n      With Step\n      "),l("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),l("span",{staticClass:"right-detail"},[l("em",[a._v(a._s(a.step))]),a._v("   (0 to 45, step 5)")])])]),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,min:0,max:45,step:5},model:{value:a.step,callback:function(e){a.step=e},expression:"step"}}),l("p",{staticClass:"caption"},[a._v("\n      With Label\n      "),l("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),l("span",{staticClass:"right-detail"},[l("em",[a._v(a._s(a.label))]),a._v("   (-10 to 10, step 4)")])])]),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,min:-10,max:10,step:4,label:"","label-value":a.labelValue(a.label)},model:{value:a.label,callback:function(e){a.label=e},expression:"label"}}),l("p",{staticClass:"caption"},[a._v("\n      Snaps to Steps\n      "),l("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),l("span",{staticClass:"right-detail"},[l("em",[a._v(a._s(a.snap))]),a._v("   (0 to 10, step 2)")])])]),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,min:0,max:10,step:2,label:"","label-value":a.labelValue(a.snap),snap:""},model:{value:a.snap,callback:function(e){a.snap=e},expression:"snap"}}),l("p",{staticClass:"caption"},[a._v("\n      With Markers. Snaps to Steps\n      "),l("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),l("span",{staticClass:"right-detail"},[l("em",[a._v(a._s(a.marker))]),a._v("   (0 to 10, step 2)")])])]),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,color:"orange",min:0,max:10,step:2,label:"","label-value":a.labelValue(a.marker),snap:"",markers:""},model:{value:a.marker,callback:function(e){a.marker=e},expression:"marker"}}),l("p",{staticClass:"caption"},[a._v("\n      Display Label Always\n      "),l("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),l("span",{staticClass:"right-detail"},[l("em",[a._v(a._s(a.label))]),a._v("   (-20000 to 20000, step 400)")])])]),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,min:-2e4,max:2e4,step:400,"label-always":"","label-value":a.labelValue(a.label)},model:{value:a.label,callback:function(e){a.label=e},expression:"label"}}),l("p",{staticClass:"caption"},[a._v("\n      With custom value for Label\n      "),l("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),l("span",{staticClass:"right-detail"},[l("em",[a._v(a._s(a.label))]),a._v("   (-20 to 20, step 4)")])])]),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,markers:"",min:-20,max:20,step:4,label:"","label-value":a.label+"px","label-always":""},model:{value:a.label,callback:function(e){a.label=e},expression:"label"}}),l("p",{staticClass:"caption"},[a._v("\n      Readonly State\n    ")]),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,min:0,max:50,readonly:""},model:{value:a.standalone,callback:function(e){a.standalone=e},expression:"standalone"}}),l("p",{staticClass:"caption"},[a._v("\n      Disabled State\n    ")]),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,min:0,max:50,disable:""},model:{value:a.standalone,callback:function(e){a.standalone=e},expression:"standalone"}}),l("p",{staticClass:"caption"},[a._v("\n      Null Value\n      "),l("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),l("span",{staticClass:"right-detail"},[l("em",[a._v(a._s(null===a.nullValue?"null":a.nullValue))]),a._v("   (0 to 50)")])])]),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,min:0,max:50},model:{value:a.nullValue,callback:function(e){a.nullValue=e},expression:"nullValue"}}),l("p",{staticClass:"caption"},[a._v("\n      Null Value with min\n      "),l("span",{staticClass:"label inline bg-secondary text-white"},[a._v("\n        Model "),l("span",{staticClass:"right-detail"},[l("em",[a._v(a._s(null===a.nullValueMin?"null":a.nullValueMin))]),a._v("   (20 to 50)")])])]),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,min:20,max:50},model:{value:a.nullValueMin,callback:function(e){a.nullValueMin=e},expression:"nullValueMin"}}),l("p",{staticClass:"caption"},[a._v("\n      Coloring\n    ")]),l("div",{staticClass:"row justify-around"},[l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,color:"secondary",min:0,max:50,label:"","label-value":a.labelValue(a.standalone)},model:{value:a.standalone,callback:function(e){a.standalone=e},expression:"standalone"}}),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,color:"orange","label-text-color":"black",min:0,max:50,label:"","label-value":a.labelValue(a.standalone)},model:{value:a.standalone,callback:function(e){a.standalone=e},expression:"standalone"}}),l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,color:"dark",min:0,max:50,label:"","label-value":a.labelValue(a.standalone)},model:{value:a.standalone,callback:function(e){a.standalone=e},expression:"standalone"}}),l("q-slider",{staticClass:"q-mt-md",attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,color:"teal","label-color":"black",min:0,max:50,"label-always":"","label-value":a.labelValue(a.standalone)},model:{value:a.standalone,callback:function(e){a.standalone=e},expression:"standalone"}})],1),l("p",{staticClass:"caption"},[a._v("\n      Inside of a List\n    ")]),l("q-list",[l("q-item",[l("q-item-section",{attrs:{avatar:""}},[l("q-icon",{attrs:{name:"volume_up"}})],1),l("q-item-section",[l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,min:0,max:50,label:"","label-value":a.labelValue(a.standalone)},model:{value:a.standalone,callback:function(e){a.standalone=e},expression:"standalone"}})],1)],1),l("q-item",[l("q-item-section",{attrs:{avatar:""}},[l("q-icon",{attrs:{name:"brightness_medium"}})],1),l("q-item-section",[l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,min:0,max:50,label:"","label-value":a.labelValue(a.standalone)},model:{value:a.standalone,callback:function(e){a.standalone=e},expression:"standalone"}})],1)],1),l("q-item",[l("q-item-section",{attrs:{avatar:""}},[l("q-icon",{attrs:{name:"mic"}})],1),l("q-item-section",[l("q-slider",{attrs:{vertical:a.vertical,dark:a.dark,dense:a.dense,min:0,max:50,label:"","label-value":a.labelValue(a.standalone)},model:{value:a.standalone,callback:function(e){a.standalone=e},expression:"standalone"}})],1)],1)],1)],1)])},n=[],s=(l("6ac6"),{data:function(){return{dark:null,dense:!1,vertical:!1,defaultLabels:!0,labelTemplate:"Current value: {model}",nullValue:null,nullValueMin:null,standalone:20,stepZero:30.05,precision:.4,step:30,label:5,snap:2,marker:6}},computed:{labelValue:function(){var a=this;return!0===this.defaultLabels?function(){}:function(e){return a.labelTemplate.split("{model}").join(e)}}},watch:{standalone:function(a,e){console.log("Changed from ".concat(JSON.stringify(e)," to ").concat(JSON.stringify(a)))},step:function(a,e){console.log("Changed from ".concat(JSON.stringify(e)," to ").concat(JSON.stringify(a)))}},methods:{onChange:function(a){console.log("@change",JSON.stringify(a))},onInput:function(a){console.log("@input",JSON.stringify(a))}}}),i=s,r=l("a6c2"),o=Object(r["a"])(i,t,n,!1,null,null,null);e["default"]=o.exports}}]);
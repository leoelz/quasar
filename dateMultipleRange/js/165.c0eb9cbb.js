(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[165],{"0bd2":function(e,n,o){"use strict";o.r(n);var t=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"q-layout-padding q-mx-auto",staticStyle:{"max-width":"600px"}},[o("q-list",{staticClass:"q-mt-lg",attrs:{bordered:"",separator:""}},[o("q-item-label",{attrs:{header:""}},[e._v("\n      Expansion Item - no model\n    ")]),o("q-separator"),o("q-expansion-item",{attrs:{"default-opened":"",label:"Expansion Item - defaultOpened"}},[o("q-card",[o("q-card-section",[e._v(e._s(e.lorem))])],1)],1),o("q-expansion-item",{attrs:{label:"Expansion Item"}},[o("q-card",[o("q-card-section",[e._v(e._s(e.lorem))])],1)],1),o("q-expansion-item",{attrs:{"default-opened":"",label:"Expansion Item - defaultOpened"}},[o("q-card",[o("q-card-section",[e._v(e._s(e.lorem))])],1)],1)],1),o("q-list",{staticClass:"q-mt-lg",attrs:{bordered:"",separator:""}},[o("q-item-label",{attrs:{header:""}},[e._v("\n      Expansion Item - model\n    ")]),o("q-separator"),o("q-expansion-item",{attrs:{"default-opened":"",label:"Expansion Item - model ["+e.expModelOpen1+"] (started as true) - defaultOpened"},model:{value:e.expModelOpen1,callback:function(n){e.expModelOpen1=n},expression:"expModelOpen1"}},[o("q-card",[o("q-card-section",[e._v(e._s(e.lorem))])],1)],1),o("q-expansion-item",{attrs:{"default-opened":"",label:"Expansion Item - model ["+e.expModelClosed1+"] (started as false) - defaultOpened"},model:{value:e.expModelClosed1,callback:function(n){e.expModelClosed1=n},expression:"expModelClosed1"}},[o("q-card",[o("q-card-section",[e._v(e._s(e.lorem))])],1)],1),o("q-expansion-item",{attrs:{label:"Expansion Item - model ["+e.expModelOpen2+"] (started as true)"},model:{value:e.expModelOpen2,callback:function(n){e.expModelOpen2=n},expression:"expModelOpen2"}},[o("q-card",[o("q-card-section",[e._v(e._s(e.lorem))])],1)],1),o("q-expansion-item",{attrs:{label:"Expansion Item - model ["+e.expModelClosed2+"] (started as false)"},model:{value:e.expModelClosed2,callback:function(n){e.expModelClosed2=n},expression:"expModelClosed2"}},[o("q-card",[o("q-card-section",[e._v(e._s(e.lorem))])],1)],1)],1),o("q-list",{staticClass:"q-mt-lg",attrs:{bordered:"",separator:""}},[o("q-item-label",{attrs:{header:""}},[e._v("\n      Expansion Item - Accordion - no model\n    ")]),o("q-separator"),o("q-expansion-item",{attrs:{group:"group1","default-opened":"",label:"Expansion Item - Accordion (group1) - defaultOpened - should start open even if next defaultOpened"}},[o("q-card",[o("q-card-section",[e._v(e._s(e.lorem))])],1)],1),o("q-expansion-item",{attrs:{group:"group1",label:"Expansion Item - Accordion (group1)"}},[o("q-card",[o("q-card-section",[e._v(e._s(e.lorem))])],1)],1),o("q-expansion-item",{attrs:{group:e.changingGroup,"default-opened":"",label:"Expansion Item - Accordion ("+e.changingGroup+") - defaultOpened - should start opened"}},[o("q-card",[o("q-card-section",[o("q-radio",{attrs:{val:"group1",label:"group1"},model:{value:e.changingGroup,callback:function(n){e.changingGroup=n},expression:"changingGroup"}}),o("q-radio",{attrs:{val:"group2",label:"group2"},model:{value:e.changingGroup,callback:function(n){e.changingGroup=n},expression:"changingGroup"}})],1),o("q-card-section",[e._v(e._s(e.lorem))])],1)],1),o("q-expansion-item",{attrs:{group:"group2","default-opened":"",label:"Expansion Item - Accordion (group2) - defaultOpened - should start opened"}},[o("q-card",[o("q-card-section",[e._v(e._s(e.lorem))])],1)],1)],1),o("q-card",{staticClass:"q-mt-lg"},[o("q-card-section",[o("q-input",{attrs:{label:"Sequence of show/hide/$nextTick (s/h/t)"},model:{value:e.showHideSequence,callback:function(n){e.showHideSequence=n},expression:"showHideSequence"}})],1),o("q-card-actions",{attrs:{vertical:""}},[o("q-btn",{attrs:{label:"Run on ExpansionItem - should end up "+e.showHideSequenceEndStatus},on:{click:function(n){return e.runSequence(e.$refs.refExpansionItem)}}}),o("q-btn",{attrs:{label:"Run on ExpansionItem - model ["+e.seqModelExpansionItem+"] - should end up "+e.showHideSequenceEndStatus},on:{click:function(n){return e.runSequence(e.$refs.refExpansionItemModel)}}}),o("q-btn",{attrs:{label:"Run on Dialog - should end up "+e.showHideSequenceEndStatus},on:{click:function(n){return e.runSequence(e.$refs.refDialog)}}}),o("q-btn",{attrs:{label:"Run on Dialog - model ["+e.seqModelDialog+"] - should end up "+e.showHideSequenceEndStatus},on:{click:function(n){return e.runSequence(e.$refs.refDialogModel)}}})],1),o("q-list",{attrs:{separator:""}},[o("q-expansion-item",{ref:"refExpansionItem",attrs:{label:"Expansion Item - no model"}},[o("q-card",[o("q-card-section",[e._v(e._s(e.lorem))])],1)],1),o("q-expansion-item",{ref:"refExpansionItemModel",attrs:{label:"Expansion Item - model ["+e.seqModelExpansionItem+"]"},model:{value:e.seqModelExpansionItem,callback:function(n){e.seqModelExpansionItem=n},expression:"seqModelExpansionItem"}},[o("q-card",[o("q-card-section",[e._v(e._s(e.lorem))])],1)],1)],1),o("q-dialog",{ref:"refDialog"},[o("q-card",{staticClass:"q-pa-lg"},[e._v("\n        Dialog\n      ")])],1),o("q-dialog",{ref:"refDialogModel",model:{value:e.seqModelDialog,callback:function(n){e.seqModelDialog=n},expression:"seqModelDialog"}},[o("q-card",[o("q-card-section",[o("q-input",{attrs:{label:"Sequence of show/hide/$nextTick (s/h/t)",autofocus:""},model:{value:e.showHideSequence,callback:function(n){e.showHideSequence=n},expression:"showHideSequence"}})],1),o("q-card-actions",{attrs:{vertical:""}},[o("q-btn",{attrs:{label:"Run on Dialog - model ["+e.seqModelDialog+"] - should end up "+e.showHideSequenceEndStatus},on:{click:function(n){return e.runSequence(e.$refs.refDialogModel)}}})],1)],1)],1)],1)],1)},a=[],s=o("7be1"),l=o.n(s),r=(o("6ac6"),{data:function(){return{expModelOpen1:!0,expModelClosed1:!1,expModelOpen2:!0,expModelClosed2:!1,changingGroup:"group1",showHideSequence:"htshs",seqModelExpansionItem:!0,seqModelDialog:!0,lorem:"Lorem ipsum dolor sit amet..."}},computed:{showHideSequenceArr:function(){return this.showHideSequence.toLowerCase().split("").filter((function(e){return["s","h","t"].indexOf(e)>-1}))},showHideSequenceEndStatus:function(){var e=this.showHideSequenceArr.filter((function(e){return"t"!==e})),n=e.length;return 0===n?"N/A":"s"===e[n-1]?"opened":"closed"}},methods:{runSequence:function(e){for(var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.showHideSequenceArr,t=o.length,a=function(t){if("t"===o[t])return n.$nextTick((function(){n.runSequence(e,o.slice(t+1))})),{v:void 0};e["s"===o[t]?"show":"hide"]()},s=0;s<t;s++){var r=a(s);if("object"===l()(r))return r.v}}}}),d=r,i=o("a6c2"),c=Object(i["a"])(d,t,a,!1,null,null,null);n["default"]=c.exports}}]);
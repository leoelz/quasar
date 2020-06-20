(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"3d34":function(s,t,l){"use strict";var o=l("ab4a"),i=l.n(o);i.a},ab4a:function(s,t,l){},b309:function(s,t,l){"use strict";l.r(t);var o=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},i=[function(){var s=this,t=s.$createElement,l=s._self._c||t;return l("div",{staticClass:"q-layout-padding grid-rows"},[l("h1",[s._v("Grid: Rows")]),s._v("\n  Utilize breakpoint-specific column classes for equal-width columns. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.\n\n  "),l("h3",[s._v("Equal-width")]),s._v("\n  For example, here are two grid layouts that apply to every device and viewport, from xs to xl.\n\n  "),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[s._v("\n        1 of 2\n      ")]),l("div",{staticClass:"col"},[s._v("\n        1 of 2\n      ")])]),l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[s._v("\n        1 of 3\n      ")]),l("div",{staticClass:"col"},[s._v("\n        1 of 3\n      ")]),l("div",{staticClass:"col"},[s._v("\n        1 of 3\n      ")])])]),l("h3",[s._v("Setting one column width")]),s._v("\n  Auto-layout for flexbox grid columns also means you can set the width of one column and the others will automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.\n\n  "),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[s._v("\n        1 of 3\n      ")]),l("div",{staticClass:"col-6"},[s._v("\n        2 of 3 (wider)\n      ")]),l("div",{staticClass:"col"},[s._v("\n        3 of 3\n      ")])]),l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[s._v("\n        1 of 3\n      ")]),l("div",{staticClass:"col-5"},[s._v("\n        2 of 3 (wider)\n      ")]),l("div",{staticClass:"col"},[s._v("\n        3 of 3\n      ")])])]),l("h3",[s._v("Variable width content")]),s._v("\n  Using the col-{breakpoint}-auto classes, columns can size itself based on the natural width of its content. This is super handy with single line content like inputs, numbers, etc. This, in conjunction with horizontal alignment classes, is very useful for centering layouts with uneven column sizes as viewport width changes.\n\n  "),l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-md-center"},[l("div",{staticClass:"col col-lg-2"},[s._v("\n        1 of 3\n      ")]),l("div",{staticClass:"col-12 col-md-auto"},[s._v("\n        Variable width content\n      ")]),l("div",{staticClass:"col col-lg-2"},[s._v("\n        3 of 3\n      ")])]),l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[s._v("\n        1 of 3\n      ")]),l("div",{staticClass:"col-12 col-md-auto"},[s._v("\n        Variable width content\n      ")]),l("div",{staticClass:"col col-lg-2"},[s._v("\n        3 of 3\n      ")])])]),l("h1",[s._v("Responsive classes")]),s._v("\n  The grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.\n\n  "),l("h3",[s._v("All breakpoints")]),s._v("\n  For grids that are the same from the smallest of devices to the largest, use the .col and .col-* classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to .col.\n\n  "),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[s._v("\n        col\n      ")]),l("div",{staticClass:"col"},[s._v("\n        col\n      ")]),l("div",{staticClass:"col"},[s._v("\n        col\n      ")]),l("div",{staticClass:"col"},[s._v("\n        col\n      ")])]),l("div",{staticClass:"row"},[l("div",{staticClass:"col-8"},[s._v("\n        col-8\n      ")]),l("div",{staticClass:"col-4"},[s._v("\n        col-4\n      ")])])]),l("h3",[s._v("Stacked to horizontal")]),s._v("\n  Using a single set of .col-sm-* classes, you can create a basic grid system that starts out stacked on extra small devices before becoming horizontal on desktop (medium) devices.\n\n  "),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-xs-12 col-sm-8"},[s._v("\n        col-sm-8\n      ")]),l("div",{staticClass:"col-xs-12 col-sm-4"},[s._v("\n        col-sm-4\n      ")])]),l("div",{staticClass:"row"},[l("div",{staticClass:"col-xs-12 col-sm"},[s._v("\n        col-sm\n      ")]),l("div",{staticClass:"col-xs-12 col-sm"},[s._v("\n        col-sm\n      ")]),l("div",{staticClass:"col-xs-12 col-sm"},[s._v("\n        col-sm\n      ")])])]),l("h3",[s._v("Mix and match")]),s._v("\n  Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.\n  "),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col col-md-8"},[s._v("\n        .col .col-md-8\n      ")]),l("div",{staticClass:"col-6 col-md-4"},[s._v("\n        .col-6 .col-md-4\n      ")])]),l("div",{staticClass:"row"},[l("div",{staticClass:"col-6 col-md-4"},[s._v("\n        .col-6 .col-md-4\n      ")]),l("div",{staticClass:"col-6 col-md-4"},[s._v("\n        .col-6 .col-md-4\n      ")]),l("div",{staticClass:"col-6 col-md-4"},[s._v("\n        .col-6 .col-md-4\n      ")])]),l("div",{staticClass:"row"},[l("div",{staticClass:"col-6"},[s._v("\n        .col-6\n      ")]),l("div",{staticClass:"col-6"},[s._v("\n        .col-6\n      ")])]),l("div",{staticClass:"row"},[l("div",{staticClass:"col-xs-8 col-md-auto col-lg-6"},[s._v("\n        .col-xs-8 .col-md-auto .col-lg-6\n      ")]),l("div",{staticClass:"col-xs-4 col-md col-lg-6"},[s._v("\n        .col-xs-4 .col-md .col-lg-6\n      ")])])]),l("h1",[s._v("Alignment")]),s._v("\n  Use flexbox alignment utilities to vertically and horizontally align columns.\n\n  "),l("h3",[s._v("Vertical alignment")]),l("div",{staticClass:"container example-minheight"},[l("div",{staticClass:"row items-start"},[l("div",{staticClass:"col"},[s._v("\n        One of three columns\n      ")]),l("div",{staticClass:"col"},[s._v("\n        One of three columns\n      ")]),l("div",{staticClass:"col"},[s._v("\n        One of three columns\n      ")])]),l("div",{staticClass:"row items-center"},[l("div",{staticClass:"col"},[s._v("\n        One of three columns\n      ")]),l("div",{staticClass:"col"},[s._v("\n        One of three columns\n      ")]),l("div",{staticClass:"col"},[s._v("\n        One of three columns\n      ")])]),l("div",{staticClass:"row items-end"},[l("div",{staticClass:"col"},[s._v("\n        One of three columns\n      ")]),l("div",{staticClass:"col"},[s._v("\n        One of three columns\n      ")]),l("div",{staticClass:"col"},[s._v("\n        One of three columns\n      ")])])]),l("div",{staticClass:"container example-minheight"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col self-start"},[s._v("\n        One of three columns\n      ")]),l("div",{staticClass:"col self-center"},[s._v("\n        One of three columns\n      ")]),l("div",{staticClass:"col self-end"},[s._v("\n        One of three columns\n      ")])])]),l("h3",[s._v("Horizontal alignment")]),l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-start"},[l("div",{staticClass:"col-4"},[s._v("\n        One of two columns\n      ")]),l("div",{staticClass:"col-4"},[s._v("\n        One of two columns\n      ")])]),l("div",{staticClass:"row justify-center"},[l("div",{staticClass:"col-4"},[s._v("\n        One of two columns\n      ")]),l("div",{staticClass:"col-4"},[s._v("\n        One of two columns\n      ")])]),l("div",{staticClass:"row justify-end"},[l("div",{staticClass:"col-4"},[s._v("\n        One of two columns\n      ")]),l("div",{staticClass:"col-4"},[s._v("\n        One of two columns\n      ")])]),l("div",{staticClass:"row justify-around"},[l("div",{staticClass:"col-4"},[s._v("\n        One of two columns\n      ")]),l("div",{staticClass:"col-4"},[s._v("\n        One of two columns\n      ")])]),l("div",{staticClass:"row justify-between"},[l("div",{staticClass:"col-4"},[s._v("\n        One of two columns\n      ")]),l("div",{staticClass:"col-4"},[s._v("\n        One of two columns\n      ")])])]),l("h3",[s._v("Column wrapping")]),s._v("\n  If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.\n\n  "),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-9"},[s._v("\n        .col-9\n      ")]),l("div",{staticClass:"col-4"},[s._v("\n        .col-4"),l("br"),s._v("Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.\n      ")]),l("div",{staticClass:"col-6"},[s._v("\n        .col-6"),l("br"),s._v("Subsequent columns continue along the new line.\n      ")])])]),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-6 col-sm-3"},[s._v("\n        .col-6 .col-sm-3\n      ")]),l("div",{staticClass:"col-6 col-sm-3"},[s._v("\n        .col-6 .col-sm-3\n      ")]),l("div",{staticClass:"col-6 col-sm-3"},[s._v("\n        .col-6 .col-sm-3\n      ")]),l("div",{staticClass:"col-6 col-sm-3"},[s._v("\n        .col-6 .col-sm-3\n      ")])])]),l("h1",[s._v("Reordering")]),l("h3",[s._v("Reverse")]),l("div",{staticClass:"container"},[l("div",{staticClass:"row reverse"},[l("div",{staticClass:"col"},[s._v("\n        First, but last\n      ")]),l("div",{staticClass:"col"},[s._v("\n        Second, unchanged\n      ")]),l("div",{staticClass:"col"},[s._v("\n        Third, but first\n      ")])])]),l("h3",[s._v("Flex order")]),s._v("\n  Use flexbox utilities for controlling the visual order of your content.\n\n  "),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col order-none"},[s._v("\n        First, but unordered\n      ")]),l("div",{staticClass:"col order-last"},[s._v("\n        Second, but last\n      ")]),l("div",{staticClass:"col order-first"},[s._v("\n        Third, but first\n      ")])])]),l("h3",[s._v("Offsetting columns")]),s._v("\n  Move columns to the right using .offset-md-* classes. These classes increase the left margin of a column by * columns. For example, .offset-md-4 moves .col-md-4 over four columns.\n\n  "),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-4"},[s._v("\n        .col-md-4\n      ")]),l("div",{staticClass:"col-md-4 offset-md-4"},[s._v("\n        .col-md-4 .offset-md-4\n      ")])]),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-3 offset-md-3"},[s._v("\n        .col-md-3 .offset-md-3\n      ")]),l("div",{staticClass:"col-md-3 offset-md-3"},[s._v("\n        .col-md-3 .offset-md-3\n      ")])]),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6 offset-md-3"},[s._v("\n        .col-md-6 .offset-md-3\n      ")])])]),l("h1",[s._v("Nesting")]),s._v("\n  To nest your content with the default grid, add a new .row and set of .col-sm-* columns within an existing .col-sm-* column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).\n\n  "),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-9"},[s._v("\n        Level 1: .col-sm-9\n        "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-8 col-sm-6"},[s._v("\n            Level 2: .col-8 .col-sm-6\n          ")]),l("div",{staticClass:"col-4 col-sm-6"},[s._v("\n            Level 2: .col-4 .col-sm-6\n          ")])])])])]),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-7"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-9"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-4"}),l("div",{staticClass:"col-8"})])]),l("div",{staticClass:"col-3"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col"})])])])]),l("div",{staticClass:"col-5"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-6"}),l("div",{staticClass:"col-4"})])])])])])])])}],a=(l("3d34"),l("a6c2")),n={},c=Object(a["a"])(n,o,i,!1,null,null,null);t["default"]=c.exports}}]);
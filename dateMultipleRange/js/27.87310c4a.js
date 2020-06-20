(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{"36ff":function(s,t,n){"use strict";var i=n("a94a"),o=n.n(i);o.a},a94a:function(s,t,n){},c517:function(s,t,n){"use strict";n.r(t);var i=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},o=[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"q-layout-padding grid-columns"},[n("h1",[s._v("Grid: Columns")]),s._v("\n  Utilize breakpoint-specific row classes for equal-width rows. Add any number of unit-less classes for each breakpoint you need and every row will be the same height.\n\n  "),n("h3",[s._v("Equal-width")]),s._v("\n  For example, here are two grid layouts that apply to every device and viewport, from xs to xl.\n\n  "),n("div",{staticClass:"container"},[n("div",{staticClass:"column"},[n("div",{staticClass:"col"},[s._v("\n        1 of 2\n      ")]),n("div",{staticClass:"col"},[s._v("\n        1 of 2\n      ")])]),n("div",{staticClass:"column"},[n("div",{staticClass:"col"},[s._v("\n        1 of 3\n      ")]),n("div",{staticClass:"col"},[s._v("\n        1 of 3\n      ")]),n("div",{staticClass:"col"},[s._v("\n        1 of 3\n      ")])])]),n("h3",[s._v("Setting one row height")]),s._v("\n  Auto-layout for flexbox grid rows also means you can set the height of one row and the others will automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline heights. Note that the other rows will resize no matter the height of the center row.\n\n  "),n("div",{staticClass:"container"},[n("div",{staticClass:"column"},[n("div",{staticClass:"col"},[s._v("\n        1 of 3\n      ")]),n("div",{staticClass:"col-6"},[s._v("\n        2 of 3 (wider)\n      ")]),n("div",{staticClass:"col"},[s._v("\n        3 of 3\n      ")])]),n("div",{staticClass:"column"},[n("div",{staticClass:"col"},[s._v("\n        1 of 3\n      ")]),n("div",{staticClass:"col-5"},[s._v("\n        2 of 3 (wider)\n      ")]),n("div",{staticClass:"col"},[s._v("\n        3 of 3\n      ")])])]),n("h3",[s._v("Variable height content")]),s._v("\n  Using the col-{breakpoint}-auto classes, rows can size itself based on the natural height of its content. This is super handy with single line content like inputs, numbers, etc. This, in conjunction with horizontal alignment classes, is very useful for centering layouts with uneven row sizes as viewport height changes.\n\n  "),n("div",{staticClass:"container"},[n("div",{staticClass:"column justify-md-center"},[n("div",{staticClass:"col col-lg-2"},[s._v("\n        1 of 3\n      ")]),n("div",{staticClass:"col-12 col-md-auto"},[s._v("\n        Variable width content\n      ")]),n("div",{staticClass:"col col-lg-2"},[s._v("\n        3 of 3\n      ")])]),n("div",{staticClass:"column"},[n("div",{staticClass:"col"},[s._v("\n        1 of 3\n      ")]),n("div",{staticClass:"col-12 col-md-auto"},[s._v("\n        Variable width content\n      ")]),n("div",{staticClass:"col col-lg-2"},[s._v("\n        3 of 3\n      ")])])]),n("h1",[s._v("Responsive classes")]),s._v("\n  The grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your rows on extra small, small, medium, large, or extra large devices however you see fit.\n\n  "),n("h3",[s._v("All breakpoints")]),s._v("\n  For grids that are the same from the smallest of devices to the largest, use the .col and .col-* classes. Specify a numbered class when you need a particularly sized row; otherwise, feel free to stick to .col.\n\n  "),n("div",{staticClass:"container"},[n("div",{staticClass:"column"},[n("div",{staticClass:"col"},[s._v("\n        col\n      ")]),n("div",{staticClass:"col"},[s._v("\n        col\n      ")]),n("div",{staticClass:"col"},[s._v("\n        col\n      ")]),n("div",{staticClass:"col"},[s._v("\n        col\n      ")])]),n("div",{staticClass:"column"},[n("div",{staticClass:"col-8"},[s._v("\n        col-8\n      ")]),n("div",{staticClass:"col-4"},[s._v("\n        col-4\n      ")])])]),n("h3",[s._v("Mix and match")]),s._v("\n  Don’t want your rows to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.\n  "),n("div",{staticClass:"container"},[n("div",{staticClass:"column"},[n("div",{staticClass:"col col-md-8"},[s._v("\n        .col .col-md-8\n      ")]),n("div",{staticClass:"col-6 col-md-4"},[s._v("\n        .col-6 .col-md-4\n      ")])]),n("div",{staticClass:"column"},[n("div",{staticClass:"col-6 col-md-4"},[s._v("\n        .col-6 .col-md-4\n      ")]),n("div",{staticClass:"col-6 col-md-4"},[s._v("\n        .col-6 .col-md-4\n      ")]),n("div",{staticClass:"col-6 col-md-4"},[s._v("\n        .col-6 .col-md-4\n      ")])]),n("div",{staticClass:"column"},[n("div",{staticClass:"col-6"},[s._v("\n        .col-6\n      ")]),n("div",{staticClass:"col-6"},[s._v("\n        .col-6\n      ")])])]),n("h1",[s._v("Alignment")]),s._v("\n  Use flexbox alignment utilities to vertically and horizontally align columns.\n\n  "),n("h3",[s._v("Horizontal alignment")]),n("div",{staticClass:"container example-minheight"},[n("div",{staticClass:"column items-start"},[n("div",{staticClass:"col"},[s._v("\n        One of three rows\n      ")]),n("div",{staticClass:"col"},[s._v("\n        One of three rows\n      ")]),n("div",{staticClass:"col"},[s._v("\n        One of three rows\n      ")])]),n("div",{staticClass:"column items-center"},[n("div",{staticClass:"col"},[s._v("\n        One of three rows\n      ")]),n("div",{staticClass:"col"},[s._v("\n        One of three rows\n      ")]),n("div",{staticClass:"col"},[s._v("\n        One of three rows\n      ")])]),n("div",{staticClass:"column items-end"},[n("div",{staticClass:"col"},[s._v("\n        One of three rows\n      ")]),n("div",{staticClass:"col"},[s._v("\n        One of three rows\n      ")]),n("div",{staticClass:"col"},[s._v("\n        One of three rows\n      ")])])]),n("div",{staticClass:"container example-minheight"},[n("div",{staticClass:"column"},[n("div",{staticClass:"col self-start"},[s._v("\n        One of three rows\n      ")]),n("div",{staticClass:"col self-center"},[s._v("\n        One of three rows\n      ")]),n("div",{staticClass:"col self-end"},[s._v("\n        One of three rows\n      ")])])]),n("h3",[s._v("Vertical alignment")]),n("div",{staticClass:"container"},[n("div",{staticClass:"column justify-start"},[n("div",{staticClass:"col-4"},[s._v("\n        One of two rows\n      ")]),n("div",{staticClass:"col-4"},[s._v("\n        One of two rows\n      ")])]),n("div",{staticClass:"column justify-center"},[n("div",{staticClass:"col-4"},[s._v("\n        One of two rows\n      ")]),n("div",{staticClass:"col-4"},[s._v("\n        One of two rows\n      ")])]),n("div",{staticClass:"column justify-end"},[n("div",{staticClass:"col-4"},[s._v("\n        One of two rows\n      ")]),n("div",{staticClass:"col-4"},[s._v("\n        One of two columns\n      ")])]),n("div",{staticClass:"column justify-around"},[n("div",{staticClass:"col-4"},[s._v("\n        One of two rows\n      ")]),n("div",{staticClass:"col-4"},[s._v("\n        One of two rows\n      ")])]),n("div",{staticClass:"column justify-between"},[n("div",{staticClass:"col-4"},[s._v("\n        One of two rows\n      ")]),n("div",{staticClass:"col-4"},[s._v("\n        One of two rows\n      ")])])]),n("h3",[s._v("Row wrapping")]),s._v("\n  If more than 12 rows are placed within a single row, each group of extra rows will, as one unit, wrap onto a new column.\n\n  "),n("div",{staticClass:"container"},[n("div",{staticClass:"column"},[n("div",{staticClass:"col-9"},[s._v("\n        .col-9\n      ")]),n("div",{staticClass:"col-4"},[s._v("\n        .col-4"),n("br"),s._v("Since 9 + 4 = 13 > 12,"),n("br"),s._v("this 4-row-wide div gets wrapped"),n("br"),s._v("onto a new line as"),n("br"),s._v("one contiguous unit.\n      ")]),n("div",{staticClass:"col-6"},[s._v("\n        .col-6"),n("br"),s._v("Subsequent rows continue along the new line.\n      ")])])]),n("div",{staticClass:"container"},[n("div",{staticClass:"column"},[n("div",{staticClass:"col-6 col-sm-3"},[s._v("\n        .col-6 .col-sm-3\n      ")]),n("div",{staticClass:"col-6 col-sm-3"},[s._v("\n        .col-6 .col-sm-3\n      ")]),n("div",{staticClass:"col-6 col-sm-3"},[s._v("\n        .col-6 .col-sm-3\n      ")]),n("div",{staticClass:"col-6 col-sm-3"},[s._v("\n        .col-6 .col-sm-3\n      ")])])]),n("h1",[s._v("Reordering")]),n("h3",[s._v("Reverse")]),n("div",{staticClass:"container"},[n("div",{staticClass:"column reverse"},[n("div",{staticClass:"col"},[s._v("\n        First, but last\n      ")]),n("div",{staticClass:"col"},[s._v("\n        Second, unchanged\n      ")]),n("div",{staticClass:"col"},[s._v("\n        Third, but first\n      ")])])]),n("h3",[s._v("Flex order")]),s._v("\n  Use flexbox utilities for controlling the visual order of your content.\n\n  "),n("div",{staticClass:"container"},[n("div",{staticClass:"column"},[n("div",{staticClass:"col order-none"},[s._v("\n        First, but unordered\n      ")]),n("div",{staticClass:"col order-last"},[s._v("\n        Second, but last\n      ")]),n("div",{staticClass:"col order-first"},[s._v("\n        Third, but first\n      ")])])]),n("h1",[s._v("Nesting")]),s._v("\n  To nest your content with the default grid, add a new .column and set of .col-sm-* rows within an existing .col-sm-* row. Nested columns should include a set of rows that add up to 12 or fewer (it is not required that you use all 12 available columns).\n\n  "),n("div",{staticClass:"container"},[n("div",{staticClass:"column"},[n("div",{staticClass:"col-sm-9"},[s._v("\n        Level 1: .col-sm-9\n        "),n("div",{staticClass:"column",staticStyle:{height:"150px"}},[n("div",{staticClass:"col-8 col-sm-6"},[s._v("\n            Level 2: .col-8 .col-sm-6\n          ")]),n("div",{staticClass:"col-4 col-sm-6"},[s._v("\n            Level 2: .col-4 .col-sm-6\n          ")])])])])])])}],l=(n("36ff"),n("a6c2")),a={},e=Object(l["a"])(a,i,o,!1,null,null,null);t["default"]=e.exports}}]);
webpackJsonp([7],{

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(456)

var Component = __webpack_require__(147)(
  /* script */
  __webpack_require__(419),
  /* template */
  __webpack_require__(446),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\zyhTIMES\\mySvn\\vue4\\src\\components\\pages\\screen\\review\\review.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] review.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46620352", Component.options)
  } else {
    hotAPI.reload("data-v-46620352", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//	 import common_tools from'../../../../public_resource/vendor/conmon_tools.js';


exports.default = {
	data: function data() {
		return {};
	},


	methods: {},

	mounted: function mounted() {}
};

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, "\n.fl{float: left;\n}\n.fr{float: right;\n}\n.wj-container{\n\twidth: 100%;\n\theight: auto;\n\toverflow: hidden;\n\tbackground: #EFFAFA;\n}\n.wj-container .news-cont{\n\twidth: 1000px;\n\tmargin: 0 auto;\n\t/*min-height: 500px;*/\n\tmargin-top: 10px;\n\tborder: 1px solid #ccc;\n\tbackground-color: #fff;\n\tpadding-bottom: 20px;\n}\n.wj-container .news-header{\n\tborder-bottom: 1px solid #ccc;\n\theight: 28px;\n\twidth: 100%;\n\tposition: relative;\n}\n.wj-container .l-icon{\n\tposition: absolute;\n\ttop: 0;\n\tleft: -12px;\n\twidth:134px;\n\theight: 39px;\n}\n.wj-container .breads{\n\twidth: 1000px;\n\theight: 100%;\n\tmargin: 0 auto;\n\tmargin-top: 10px;\n\tcolor: #000;\n\ttext-align: left;\n\tline-height: 28px;\n}\n.wj-container .news-body{\n\twidth: 100%;\n\theight: auto;\n\toverflow: hidden;\n}\n.wj-container .news-item{\n\twidth: 90%;\n\tmargin: 0 auto;\n\tmargin-top: 12px;\n\tborder-bottom: 1px dotted;\n\tmargin-bottom: 10px;\n\tpadding-bottom: 12px;\n\toverflow: hidden;\n}\n.wj-container .item-left{\n\twidth: 200px;\n\theight: 135px;\n\toverflow: hidden;\n}\n.wj-container .item-left img{\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: block;\n}\n.wj-container .item-right{\n\twidth: 680px;\n\theight: auto;\n\ttext-align: left;\n}\n.wj-container .item-right-title{\n\tfont-weight: bold;\n\tcolor: #476399;\n\tline-height: 30px;\n\tmargin-bottom: 4px;\n}\n.wj-container .item-right-cont{\n\tline-height: 25px;\n\tmargin-bottom: 5px;\n}\n.wj-container .item-right-date{\n\tcolor: #999;\n}\n", "", {"version":3,"sources":["D:/zyhTIMES/mySvn/vue4/src/components/pages/screen/review/review.vue?483d54d4"],"names":[],"mappings":";AAyEA,IAAA,YAAA;CAAA;AACA,IAAA,aAAA;CAAA;AACA;CACA,YAAA;CACA,aAAA;CACA,iBAAA;CACA,oBAAA;CACA;AACA;CACA,cAAA;CACA,eAAA;CACA,sBAAA;CACA,iBAAA;CACA,uBAAA;CACA,uBAAA;CACA,qBAAA;CACA;AACA;CACA,8BAAA;CACA,aAAA;CACA,YAAA;CACA,mBAAA;CACA;AACA;CACA,mBAAA;CACA,OAAA;CACA,YAAA;CACA,YAAA;CACA,aAAA;CACA;AACA;CACA,cAAA;CACA,aAAA;CACA,eAAA;CACA,iBAAA;CACA,YAAA;CACA,iBAAA;CACA,kBAAA;CACA;AACA;CACA,YAAA;CACA,aAAA;CACA,iBAAA;CACA;AACA;CACA,WAAA;CACA,eAAA;CACA,iBAAA;CACA,0BAAA;CACA,oBAAA;CACA,qBAAA;CACA,iBAAA;CACA;AACA;CACA,aAAA;CACA,cAAA;CACA,iBAAA;CACA;AACA;CACA,YAAA;CACA,aAAA;CACA,eAAA;CACA;AAEA;CACA,aAAA;CACA,aAAA;CACA,iBAAA;CACA;AACA;CACA,kBAAA;CACA,eAAA;CACA,kBAAA;CACA,mBAAA;CACA;AACA;CACA,kBAAA;CACA,mBAAA;CACA;AACA;CACA,YAAA;CACA","file":"review.vue","sourcesContent":["<template>\r\n\t<div class=\"wj-container\">\r\n\t\t<!--大赛动态-->\r\n\t\t<div class=\"breads\">当前位置：往届回顾</div>\r\n\t\t<div class=\"news-cont\">\r\n\t\t\t<div class=\"news-header\">\r\n\t\t\t\t<!--<img src=\"./l_title.png\" alt=\"\" class=\"l-icon\"/>-->\r\n\r\n\t\t\t</div>\r\n\t\t\t<div class=\"news-body\">\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li class=\"news-item\">\r\n\t\t\t\t\t\t<div class=\"item-right\">\r\n\t\t\t\t\t\t\t<p class=\"item-right-title\">文章标题</p>\r\n\t\t\t\t\t\t\t<div class=\"item-right-cont\">文章文章文章文章内容文章内容文章内容文章内容文章内容文章内容内容内容文章内容文章内容文章内容文章内容文章内容内容</div>\r\n\t\t\t\t\t\t\t<p class=\"item-right-date\">2019-23-34</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"news-item\">\r\n\r\n\t\t\t\t\t\t<div class=\"item-right\">\r\n\t\t\t\t\t\t\t<p class=\"item-right-title\">文章标题</p>\r\n\t\t\t\t\t\t\t<div class=\"item-right-cont\">文章文章文章文章内容文章内容文章内容文章内容文章内容文章内容内容内容文章内容文章内容文章内容文章内容文章内容内容</div>\r\n\t\t\t\t\t\t\t<p class=\"item-right-date\">2019-23-34</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"news-item\">\r\n\r\n\t\t\t\t\t\t<div class=\"item-right\">\r\n\t\t\t\t\t\t\t<p class=\"item-right-title\">文章标题</p>\r\n\t\t\t\t\t\t\t<div class=\"item-right-cont\">文章文章文章文章内容文章内容文章内容文章内容文章内容文章内容内容内容文章内容文章内容文章内容文章内容文章内容内容</div>\r\n\t\t\t\t\t\t\t<p class=\"item-right-date\">2019-23-34</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"news-item\">\r\n\r\n\t\t\t\t\t\t<div class=\"item-right\">\r\n\t\t\t\t\t\t\t<p class=\"item-right-title\">文章标题</p>\r\n\t\t\t\t\t\t\t<div class=\"item-right-cont\">文章文章文章文章内容文章内容文章内容文章内容文章内容文章内容内容内容文章内容文章内容文章内容文章内容文章内容内容</div>\r\n\t\t\t\t\t\t\t<p class=\"item-right-date\">2019-23-34</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n</template>\r\n\r\n<script>\r\n\t//\t import common_tools from'../../../../public_resource/vendor/conmon_tools.js';\r\n\t\r\n\r\n\texport default {\r\n\t\tdata() {\r\n\t\t\treturn {\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t},\r\n\r\n\t\tmethods: {\r\n\t\t\t\r\n\t\t},\r\n\r\n\t\tmounted: function() {\r\n\t\t\r\n\r\n\t\t}\r\n\t}\r\n</script>\r\n<style>\r\n\t.fl{float: left;}\r\n\t.fr{float: right;}\r\n\t.wj-container{\r\n\t\twidth: 100%;\r\n\t\theight: auto;\r\n\t\toverflow: hidden;\r\n\t\tbackground: #EFFAFA;\r\n\t}\r\n\t.wj-container .news-cont{\r\n\t\twidth: 1000px;\r\n\t\tmargin: 0 auto;\r\n\t\t/*min-height: 500px;*/\r\n\t\tmargin-top: 10px;\r\n\t\tborder: 1px solid #ccc;\r\n\t\tbackground-color: #fff;\r\n\t\tpadding-bottom: 20px;\r\n\t}\r\n\t.wj-container .news-header{\r\n\t\tborder-bottom: 1px solid #ccc;\r\n\t\theight: 28px;\r\n\t\twidth: 100%;\r\n\t\tposition: relative;\r\n\t}\r\n\t.wj-container .l-icon{\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: -12px;\r\n\t\twidth:134px;\r\n\t\theight: 39px;\r\n\t}\r\n\t.wj-container .breads{\r\n\t\twidth: 1000px;\r\n\t\theight: 100%;\r\n\t\tmargin: 0 auto;\r\n\t\tmargin-top: 10px;\r\n\t\tcolor: #000;\r\n\t\ttext-align: left;\r\n\t\tline-height: 28px;\r\n\t}\r\n\t.wj-container .news-body{\r\n\t\twidth: 100%;\r\n\t\theight: auto;\r\n\t\toverflow: hidden;\r\n\t}\r\n\t.wj-container .news-item{\r\n\t\twidth: 90%;\r\n\t\tmargin: 0 auto;\r\n\t\tmargin-top: 12px;\r\n\t\tborder-bottom: 1px dotted;\r\n\t\tmargin-bottom: 10px;\r\n\t\tpadding-bottom: 12px;\r\n\t\toverflow: hidden;\r\n\t}\r\n\t.wj-container .item-left{\r\n\t\twidth: 200px;\r\n\t\theight: 135px;\r\n\t\toverflow: hidden;\r\n\t}\r\n\t.wj-container .item-left img{\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t.wj-container .item-right{\r\n\t\twidth: 680px;\r\n\t\theight: auto;\r\n\t\ttext-align: left;\r\n\t}\r\n\t.wj-container .item-right-title{\r\n\t\tfont-weight: bold;\r\n\t\tcolor: #476399;\r\n\t\tline-height: 30px;\r\n\t\tmargin-bottom: 4px;\r\n\t}\r\n\t.wj-container .item-right-cont{\r\n\t\tline-height: 25px;\r\n\t\tmargin-bottom: 5px;\r\n\t}\r\n\t.wj-container .item-right-date{\r\n\t\tcolor: #999;\r\n\t}\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wj-container"
  }, [_c('div', {
    staticClass: "breads"
  }, [_vm._v("当前位置：往届回顾")]), _vm._v(" "), _c('div', {
    staticClass: "news-cont"
  }, [_c('div', {
    staticClass: "news-header"
  }), _vm._v(" "), _c('div', {
    staticClass: "news-body"
  }, [_c('ul', [_c('li', {
    staticClass: "news-item"
  }, [_c('div', {
    staticClass: "item-right"
  }, [_c('p', {
    staticClass: "item-right-title"
  }, [_vm._v("文章标题")]), _vm._v(" "), _c('div', {
    staticClass: "item-right-cont"
  }, [_vm._v("文章文章文章文章内容文章内容文章内容文章内容文章内容文章内容内容内容文章内容文章内容文章内容文章内容文章内容内容")]), _vm._v(" "), _c('p', {
    staticClass: "item-right-date"
  }, [_vm._v("2019-23-34")])])]), _vm._v(" "), _c('li', {
    staticClass: "news-item"
  }, [_c('div', {
    staticClass: "item-right"
  }, [_c('p', {
    staticClass: "item-right-title"
  }, [_vm._v("文章标题")]), _vm._v(" "), _c('div', {
    staticClass: "item-right-cont"
  }, [_vm._v("文章文章文章文章内容文章内容文章内容文章内容文章内容文章内容内容内容文章内容文章内容文章内容文章内容文章内容内容")]), _vm._v(" "), _c('p', {
    staticClass: "item-right-date"
  }, [_vm._v("2019-23-34")])])]), _vm._v(" "), _c('li', {
    staticClass: "news-item"
  }, [_c('div', {
    staticClass: "item-right"
  }, [_c('p', {
    staticClass: "item-right-title"
  }, [_vm._v("文章标题")]), _vm._v(" "), _c('div', {
    staticClass: "item-right-cont"
  }, [_vm._v("文章文章文章文章内容文章内容文章内容文章内容文章内容文章内容内容内容文章内容文章内容文章内容文章内容文章内容内容")]), _vm._v(" "), _c('p', {
    staticClass: "item-right-date"
  }, [_vm._v("2019-23-34")])])]), _vm._v(" "), _c('li', {
    staticClass: "news-item"
  }, [_c('div', {
    staticClass: "item-right"
  }, [_c('p', {
    staticClass: "item-right-title"
  }, [_vm._v("文章标题")]), _vm._v(" "), _c('div', {
    staticClass: "item-right-cont"
  }, [_vm._v("文章文章文章文章内容文章内容文章内容文章内容文章内容文章内容内容内容文章内容文章内容文章内容文章内容文章内容内容")]), _vm._v(" "), _c('p', {
    staticClass: "item-right-date"
  }, [_vm._v("2019-23-34")])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-46620352", module.exports)
  }
}

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(429);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(148)("1a6ea1e0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-46620352\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./review.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-46620352\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./review.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=7.js.map
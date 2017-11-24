webpackJsonp([6],{

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(455)

var Component = __webpack_require__(147)(
  /* script */
  __webpack_require__(422),
  /* template */
  __webpack_require__(445),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\zyhTIMES\\mySvn\\vue4\\src\\components\\pages\\screen\\tjcyzc\\tjcyzc.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tjcyzc.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4253c4b2", Component.options)
  } else {
    hotAPI.reload("data-v-4253c4b2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 422:
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

exports.default = {
  data: function data() {
    return {};
  }
};

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, "\n.fl{float: left;\n}\n.fr{float: right;\n}\n.ck-container{\n\twidth: 100%;\n\theight: auto;\n\toverflow: hidden;\n\tbackground: #EFFAFA;\n}\n.ck-container .news-cont{\n\twidth: 1000px;\n  margin: 0 auto;\n  /*min-height: 500px;*/\n  margin-top: 10px;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  padding-bottom: 20px;\n}\n.ck-container .news-header{\n\tborder-bottom: 1px solid #ccc;\n    height: 28px;\n    width: 100%;\n    position: relative;\n}\n.ck-container .l-icon{\n\tposition: absolute;\n\ttop: 0;\n\tleft: -12px;\n\twidth:134px;\n\theight: 39px;\n}\n.ck-container .breads{\n\t\twidth: 1000px;\n    height: 100%;\n    margin: 0 auto;\n    margin-top: 10px;\n    color: #000;\n    text-align: left;\n    line-height: 28px;\n}\n.ck-container .news-body{\n\twidth: 100%;\n\theight: auto;\n\toverflow: hidden;\n}\n.ck-container .news-item{\n\t\twidth: 90%;\n    margin: 0 auto;\n    margin-top: 12px;\n    border-bottom: 1px dotted;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    overflow: hidden;\n}\n.ck-container .item-left{\n\twidth: 200px;\n\theight: 135px;\n\toverflow: hidden;\n}\n.ck-container .item-left img{\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: block;\n}\n.ck-container .item-right{\n\twidth: 680px;\n\theight: auto;\n\ttext-align: left;\n}\n.ck-container .item-right-title{\n\tfont-weight: bold;\n  color: #476399;\n  line-height: 30px;\n  margin-bottom: 4px;\n}\n.ck-container .item-right-cont{\n\tline-height: 25px;\n\tmargin-bottom: 5px;\n}\n.ck-container .item-right-date{\n\tcolor: #999;\n}\n", "", {"version":3,"sources":["D:/zyhTIMES/mySvn/vue4/src/components/pages/screen/tjcyzc/tjcyzc.vue?521d29cc"],"names":[],"mappings":";AAgEA,IAAA,YAAA;CAAA;AACA,IAAA,aAAA;CAAA;AACA;CACA,YAAA;CACA,aAAA;CACA,iBAAA;CACA,oBAAA;CACA;AACA;CACA,cAAA;EACA,eAAA;EACA,sBAAA;EACA,iBAAA;EACA,uBAAA;EACA,uBAAA;EACA,qBAAA;CACA;AACA;CACA,8BAAA;IACA,aAAA;IACA,YAAA;IACA,mBAAA;CACA;AACA;CACA,mBAAA;CACA,OAAA;CACA,YAAA;CACA,YAAA;CACA,aAAA;CACA;AACA;EACA,cAAA;IACA,aAAA;IACA,eAAA;IACA,iBAAA;IACA,YAAA;IACA,iBAAA;IACA,kBAAA;CACA;AACA;CACA,YAAA;CACA,aAAA;CACA,iBAAA;CACA;AACA;EACA,WAAA;IACA,eAAA;IACA,iBAAA;IACA,0BAAA;IACA,oBAAA;IACA,qBAAA;IACA,iBAAA;CACA;AACA;CACA,aAAA;CACA,cAAA;CACA,iBAAA;CACA;AACA;CACA,YAAA;CACA,aAAA;CACA,eAAA;CACA;AAEA;CACA,aAAA;CACA,aAAA;CACA,iBAAA;CACA;AACA;CACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;CACA,kBAAA;CACA,mBAAA;CACA;AACA;CACA,YAAA;CACA","file":"tjcyzc.vue","sourcesContent":["<template>\n  <div class=\"ck-container\">\n  \t<!--大赛动态-->\n  \t<div class=\"breads\">当前位置：天津创业政策</div>\n    <div class=\"news-cont\">\n    \t<div class=\"news-header\">\n    \t\t<!--<img src=\"./l_title.png\" alt=\"\" class=\"l-icon\"/>-->\n    \t\t\n    \t</div>\n    \t<div class=\"news-body\">\n    \t\t<ul>\n    \t\t\t<li class=\"news-item\"> \n    \t\t\t\t<div class=\"item-right\">\n    \t\t\t\t\t<p class=\"item-right-title\">文章标题</p>\n    \t\t\t\t\t<div class=\"item-right-cont\">文章文章文章文章内容文章内容文章内容文章内容文章内容文章内容内容内容文章内容文章内容文章内容文章内容文章内容内容</div>\n    \t\t\t\t\t<p class=\"item-right-date\">2019-23-34</p>\n    \t\t\t\t</div>\n    \t\t\t</li>\n    \t\t\t<li class=\"news-item\"> \n    \t\t\t\n    \t\t\t\t<div class=\"item-right\">\n    \t\t\t\t\t<p class=\"item-right-title\">文章标题</p>\n    \t\t\t\t\t<div class=\"item-right-cont\">文章文章文章文章内容文章内容文章内容文章内容文章内容文章内容内容内容文章内容文章内容文章内容文章内容文章内容内容</div>\n    \t\t\t\t\t<p class=\"item-right-date\">2019-23-34</p>\n    \t\t\t\t</div>\n    \t\t\t</li>\n    \t\t\t<li class=\"news-item\"> \n    \t\t\t\n    \t\t\t\t<div class=\"item-right\">\n    \t\t\t\t\t<p class=\"item-right-title\">文章标题</p>\n    \t\t\t\t\t<div class=\"item-right-cont\">文章文章文章文章内容文章内容文章内容文章内容文章内容文章内容内容内容文章内容文章内容文章内容文章内容文章内容内容</div>\n    \t\t\t\t\t<p class=\"item-right-date\">2019-23-34</p>\n    \t\t\t\t</div>\n    \t\t\t</li>\n    \t\t\t<li class=\"news-item\"> \n    \t\t\t\n    \t\t\t\t<div class=\"item-right\">\n    \t\t\t\t\t<p class=\"item-right-title\">文章标题</p>\n    \t\t\t\t\t<div class=\"item-right-cont\">文章文章文章文章内容文章内容文章内容文章内容文章内容文章内容内容内容文章内容文章内容文章内容文章内容文章内容内容</div>\n    \t\t\t\t\t<p class=\"item-right-date\">2019-23-34</p>\n    \t\t\t\t</div>\n    \t\t\t</li>\n    \t\t\t\n    \t\t</ul>\n    \t</div>\n    \t\n    </div>\n    \n    </div>\n</template>\n\n<script>\nexport default {\n  \n  data () {\n    return {\n      \n    }\n  }\n}\n</script>\n\n<!-- Add \"scoped\" attribute to limit CSS to this component only -->\n<style>\n.fl{float: left;}\n.fr{float: right;}\n.ck-container{\n\twidth: 100%;\n\theight: auto;\n\toverflow: hidden;\n\tbackground: #EFFAFA;\n}\n.ck-container .news-cont{\n\twidth: 1000px;\n  margin: 0 auto;\n  /*min-height: 500px;*/\n  margin-top: 10px;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  padding-bottom: 20px;\n}\n.ck-container .news-header{\n\tborder-bottom: 1px solid #ccc;\n    height: 28px;\n    width: 100%;\n    position: relative;\n}\n.ck-container .l-icon{\n\tposition: absolute;\n\ttop: 0;\n\tleft: -12px;\n\twidth:134px;\n\theight: 39px;\n}\n.ck-container .breads{\n\t\twidth: 1000px;\n    height: 100%;\n    margin: 0 auto;\n    margin-top: 10px;\n    color: #000;\n    text-align: left;\n    line-height: 28px;\n}\n.ck-container .news-body{\n\twidth: 100%;\n\theight: auto;\n\toverflow: hidden;\n}\n.ck-container .news-item{\n\t\twidth: 90%;\n    margin: 0 auto;\n    margin-top: 12px;\n    border-bottom: 1px dotted;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    overflow: hidden;\n}\n.ck-container .item-left{\n\twidth: 200px;\n\theight: 135px;\n\toverflow: hidden;\n}\n.ck-container .item-left img{\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: block;\n}\n\n.ck-container .item-right{\n\twidth: 680px;\n\theight: auto;\n\ttext-align: left;\n}\n.ck-container .item-right-title{\n\tfont-weight: bold;\n  color: #476399;\n  line-height: 30px;\n  margin-bottom: 4px;\n}\n.ck-container .item-right-cont{\n\tline-height: 25px;\n\tmargin-bottom: 5px;\n}\n.ck-container .item-right-date{\n\tcolor: #999;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ck-container"
  }, [_c('div', {
    staticClass: "breads"
  }, [_vm._v("当前位置：天津创业政策")]), _vm._v(" "), _c('div', {
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4253c4b2", module.exports)
  }
}

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(428);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(148)("6566c414", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4253c4b2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tjcyzc.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4253c4b2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tjcyzc.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=6.js.map
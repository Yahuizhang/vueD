webpackJsonp([1],{

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(458)

var Component = __webpack_require__(147)(
  /* script */
  __webpack_require__(423),
  /* template */
  __webpack_require__(448),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\zyhTIMES\\mySvn\\vue4\\src\\components\\pages\\screen\\video\\video.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] video.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7be353ec", Component.options)
  } else {
    hotAPI.reload("data-v-7be353ec", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 423:
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

var common_tools = __webpack_require__(104);

exports.default = {
    data: function data() {
        return {
            url: {
                lists: "http://www.tjqncxcyds.com/api.php?_R=App&_M=Common&_C=Config&_A=lists",
                lists1: 'http://job.zzu.edu.cn:9009/service/business/college/link/links/getLinks'
            },
            picvideoData: [{
                'imgSrc': '',
                'title': '文章标题1',
                'content': '文章标题内容1文章标题内容1文章标题内容1文章标题内容1文章标题内容1',
                'date': '2019-24-34'
            }, {
                'imgSrc': '',
                'title': '文章标题2',
                'content': '文章标题内容1文章标题内容1文章标题内容1文章标题内容1文章标题内容1',
                'date': '2019-24-34'
            }, {
                'imgSrc': '',
                'title': '文章标题3',
                'content': '文章标题内容1文章标题内容1文章标题内容1文章标题内容1文章标题内容1',
                'date': '2019-24-34'
            }, {
                'imgSrc': '',
                'title': '文章标题4',
                'content': '文章标题内容1文章标题内容1文章标题内容1文章标题内容1文章标题内容1',
                'date': '2019-24-34'
            }, {
                'imgSrc': '',
                'title': '文章标题5',
                'content': '文章标题内容1文章标题内容1文章标题内容1文章标题内容1文章标题内容1',
                'date': '2019-24-34'
            }]

        };
    },


    methods: {},

    mounted: function mounted() {
        var _self = this;
        //            common_tools.AJAX('post',_self.url.lists1,{},function (data) {
        //                console.log(data);
        //            },function (data) {
        //                console.log('错误');
        //                console.log(data)
        //            })

    }
};

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, "\n.fl{float: left;\n}\n.fr{float: right;\n}\n.video-center-container{\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n  background: #EFFAFA;\n}\n.video-cont{\n  width: 1000px;\n  margin: 0 auto;\n  /*min-height: 500px;*/\n  margin-top: 20px;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  padding-bottom: 20px;\n}\n.video-header{\n  border-bottom: 1px solid #ccc;\n  height: 28px;\n  width: 100%;\n  position: relative;\n}\n.l-icon{\n  position: absolute;\n  top: 0;\n  left: -12px;\n  width:134px;\n  height: 39px;\n}\n.video-part{\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100px;\n  height: 100%;\n  color: #FFFFFF;\n  text-align: left;\n  line-height: 28px;\n}\n.video-body{\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n}\n.video-item{\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 12px;\n  border-bottom: 1px dotted;\n  margin-bottom: 10px;\n  padding-bottom: 12px;\n  overflow: hidden;\n}\n.item-left{\n  width: 200px;\n  height: 135px;\n  overflow: hidden;\n}\n.item-left img{\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.item-right{\n  width: 680px;\n  height: auto;\n  text-align: left;\n}\n.item-right-title{\n  font-weight: bold;\n  color: #476399;\n  line-height: 30px;\n  margin-bottom: 4px;\n}\n.item-right-cont{\n  line-height: 25px;\n  margin-bottom: 5px;\n}\n.item-right-date{\n  color: #999;\n}\n\n", "", {"version":3,"sources":["D:/zyhTIMES/mySvn/vue4/src/components/pages/screen/video/video.vue?12450282"],"names":[],"mappings":";AA4FA,IAAA,YAAA;CAAA;AACA,IAAA,aAAA;CAAA;AACA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,oBAAA;CACA;AACA;EACA,cAAA;EACA,eAAA;EACA,sBAAA;EACA,iBAAA;EACA,uBAAA;EACA,uBAAA;EACA,qBAAA;CACA;AACA;EACA,8BAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,QAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;CACA;AACA;EACA,WAAA;EACA,eAAA;EACA,iBAAA;EACA,0BAAA;EACA,oBAAA;EACA,qBAAA;EACA,iBAAA;CACA;AACA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;EACA,eAAA;CACA;AAEA;EACA,aAAA;EACA,aAAA;EACA,iBAAA;CACA;AACA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,YAAA;CACA","file":"video.vue","sourcesContent":["<template>\n  <div class=\"video-container\">\n\n    <!--媒体报道-->\n    <div class=\"video-cont\">\n      <div class=\"video-header\">\n        <img src=\"./l_title.png\" alt=\"\" class=\"l-icon\"/>\n        <div class=\"video-part\">视频直播</div>\n      </div>\n      <div class=\"video-body\">\n        <ul>\n          <li class=\"video-item\" v-for=\"picvideo in picvideoData\">\n            <div class=\"item-left fl\">\n              <img src=\"./thum_200_135_59549f38bb3b3.jpg\" alt=\"\"/>\n            </div>\n            <div class=\"item-right fr\">\n              <p class=\"item-right-title\">{{picvideo.title}}</p>\n              <div class=\"item-right-cont\">{{picvideo.content}}</div>\n              <p class=\"item-right-date\">{{picvideo.date}}</p>\n            </div>\n          </li>\n\n        </ul>\n      </div>\n\n    </div>\n  </div>\n</template>\n<script>\n    var common_tools = require(\"common_tools\");\n\n    export default {\n        data() {\n            return {\n                url:{\n                    lists:\"http://www.tjqncxcyds.com/api.php?_R=App&_M=Common&_C=Config&_A=lists\",\n                    lists1:'http://job.zzu.edu.cn:9009/service/business/college/link/links/getLinks'\n                },\n                picvideoData:[\n                    {\n                        'imgSrc':'',\n                        'title':'文章标题1',\n                        'content':'文章标题内容1文章标题内容1文章标题内容1文章标题内容1文章标题内容1',\n                        'date':'2019-24-34'\n                    },\n                    {\n                        'imgSrc':'',\n                        'title':'文章标题2',\n                        'content':'文章标题内容1文章标题内容1文章标题内容1文章标题内容1文章标题内容1',\n                        'date':'2019-24-34'\n                    },\n                    {\n                        'imgSrc':'',\n                        'title':'文章标题3',\n                        'content':'文章标题内容1文章标题内容1文章标题内容1文章标题内容1文章标题内容1',\n                        'date':'2019-24-34'\n                    },\n                    {\n                        'imgSrc':'',\n                        'title':'文章标题4',\n                        'content':'文章标题内容1文章标题内容1文章标题内容1文章标题内容1文章标题内容1',\n                        'date':'2019-24-34'\n                    },{\n                        'imgSrc':'',\n                        'title':'文章标题5',\n                        'content':'文章标题内容1文章标题内容1文章标题内容1文章标题内容1文章标题内容1',\n                        'date':'2019-24-34'\n                    }\n                ]\n\n            }\n        },\n\n        methods: {\n\n        },\n\n        mounted: function() {\n            var _self=this;\n//            common_tools.AJAX('post',_self.url.lists1,{},function (data) {\n//                console.log(data);\n//            },function (data) {\n//                console.log('错误');\n//                console.log(data)\n//            })\n\n\n        }\n    }\n</script>\n\n<style>\n  .fl{float: left;}\n  .fr{float: right;}\n  .video-center-container{\n    width: 100%;\n    height: auto;\n    overflow: hidden;\n    background: #EFFAFA;\n  }\n  .video-cont{\n    width: 1000px;\n    margin: 0 auto;\n    /*min-height: 500px;*/\n    margin-top: 20px;\n    border: 1px solid #ccc;\n    background-color: #fff;\n    padding-bottom: 20px;\n  }\n  .video-header{\n    border-bottom: 1px solid #ccc;\n    height: 28px;\n    width: 100%;\n    position: relative;\n  }\n  .l-icon{\n    position: absolute;\n    top: 0;\n    left: -12px;\n    width:134px;\n    height: 39px;\n  }\n  .video-part{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100px;\n    height: 100%;\n    color: #FFFFFF;\n    text-align: left;\n    line-height: 28px;\n  }\n  .video-body{\n    width: 100%;\n    height: auto;\n    overflow: hidden;\n  }\n  .video-item{\n    width: 90%;\n    margin: 0 auto;\n    margin-top: 12px;\n    border-bottom: 1px dotted;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    overflow: hidden;\n  }\n  .item-left{\n    width: 200px;\n    height: 135px;\n    overflow: hidden;\n  }\n  .item-left img{\n    width: 100%;\n    height: 100%;\n    display: block;\n  }\n\n  .item-right{\n    width: 680px;\n    height: auto;\n    text-align: left;\n  }\n  .item-right-title{\n    font-weight: bold;\n    color: #476399;\n    line-height: 30px;\n    margin-bottom: 4px;\n  }\n  .item-right-cont{\n    line-height: 25px;\n    margin-bottom: 5px;\n  }\n  .item-right-date{\n    color: #999;\n  }\n\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 437:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAAnCAYAAADKOTDaAAADxElEQVR4nO2bz28bRRTHP/auHWeT2HE2HttxkskPx9PaxCG4gAqc4GZx6h9gDhyQSiVACFFAPQAShQKCAhICFSHKbwkJqKpegEMlTpVKT0iAKnFAJSoFKkShRRDMYS8Uj5uQ2ol/vM9x3+57T5qv3ryZnQndeufLvwODCH3DtsIEt99SYH7St5m/AB5xr1vShMOhTU5N2AqcUAidHWVpPsPYqGd75QTwIHDc3dzUhK0kl4qzXY+TTDRMEHWCSvE08LnRqi7C6BOy/jDlfJq0P2IznwaeBD4yWv0FIMLoA/yEx43FKXz79HEGeMBo9fG/H4owepxUwuPmsm4minPAbqPVkf8awm3PTNgycqk4Ny1Ok4xbF51fA3cBn9qMUjF6lKw/zFI+zXhyyGb+CngMOGq0+tP2ggijB/ETHqVZRXY8bjOfAQ4C7xut/m7mQ4TRYySGBqgUskxlRm3mc8ATwGtXEgWIMHqKsfggO0uTZOyVYgXYC7xptKqv5Uuazx4hMTTADjPRTBRngX3Au+sRBUjF6An8hMfyQoacStjMPwBPEfQU1kbThgijyxmLD7I4p5hKj9r+ea0ALxL0FBf+j18RRhcz7EW5ZlY1+0v6C/CS0Wr/RnyLMLoULxZhh5loJopLwLMEU8iGEGF0ISNelOu359CZpM18nkAUzxutVjcaQ4TRZYx4UZYXskwra0/xI/Ac8IrR6reriSPL1S7Ci0UoasVMNonjNgzdBeAN4JDR6qerjSUVo0sYiLgszqYpzilbpbgIvAPsb4UoQITRFbiOw/JChtJ82mZeBV4H9hqtfm1ZzFY5EtpD1HW4oZjD6JTNvEqwT/EQ8Ecr44owOhgvFqE8lyafsy5JLwKHgMeNVpdaHVuE0aF4sQilmRRzubFmjebbwAtGq5/bEV+E0YG4jkNh0qcwnSI20DBEdeAI8IzR6nTbcmiXY2HjbNM+5XyGSMSxmY8SNJrftTMHEUaHcW0+cyVRfAjsMVp93+48ZIOrg6iYLIvz6WaieAu4fzNEAVIxOoKo61CcSWGmU0SjDUOyCrwHPGq0+nazcnLL+fRB4A4gu54PatWKXHTtA8LAw8C9wDdbnIvQQYRr1Uod+AC4GzhOULqEPueyaeHwsZMlgkOju4CI7QOZSvqDy1YltWrlS+A+4FVg3QdHhd6jYblaq1ZWCKrGPoLDpEIfYt3HqFUr54EDwD0E9xyFPmPNfuHwsZO3EVyA3QmEpMfoD9bc+axVK58Be4BP2p+O0Cmsa0u8Vq2cIjgMcqC96Qidwj+MNZSeTa+NxgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "video-container"
  }, [_c('div', {
    staticClass: "video-cont"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "video-body"
  }, [_c('ul', _vm._l((_vm.picvideoData), function(picvideo) {
    return _c('li', {
      staticClass: "video-item"
    }, [_vm._m(1, true), _vm._v(" "), _c('div', {
      staticClass: "item-right fr"
    }, [_c('p', {
      staticClass: "item-right-title"
    }, [_vm._v(_vm._s(picvideo.title))]), _vm._v(" "), _c('div', {
      staticClass: "item-right-cont"
    }, [_vm._v(_vm._s(picvideo.content))]), _vm._v(" "), _c('p', {
      staticClass: "item-right-date"
    }, [_vm._v(_vm._s(picvideo.date))])])])
  }))])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "video-header"
  }, [_c('img', {
    staticClass: "l-icon",
    attrs: {
      "src": __webpack_require__(437),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "video-part"
  }, [_vm._v("视频直播")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item-left fl"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(438),
      "alt": ""
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7be353ec", module.exports)
  }
}

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(431);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(148)("1c75af68", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7be353ec\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./video.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7be353ec\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./video.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=1.js.map
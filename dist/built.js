 (function(modules) { // webpackBootstrap
   // The module cache
  //  缓存已加载的模块 moduleId: module
 	var installedModules = {};

   // The require function
  //  webpack自定义的模块加载方法，核心功能是返回模块中导出的内容
 	function __webpack_require__(moduleId) {
 		// Check if module is in cache
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		// Create a new module (and put it into the cache)
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
     // Execute the module function
    //  执行模块对应的函数，相当于引入模块的内容
    // 1. 改变this指向module.exports，传入参数module对象，module.exports, __webpack_require__模块引入的方法（方便加载当前模块里导入的其他模块）
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 		// Flag the module as loaded
 		module.l = true;

 		// Return the exports of the module
 		return module.exports;
 	}

   // expose the modules object (__webpack_modules__)
  //  保存一份modules
 	__webpack_require__.m = modules;

   // expose the module cache
  //  保存一份已加载模块
 	__webpack_require__.c = installedModules;

 	// define getter function for harmony exports
 	__webpack_require__.d = function(exports, name, getter) {
    //  __webpack_require__.o 判断对象exports是否有属性name
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};

   // define __esModule on exports
  //  标记模块是否是esModule
 	__webpack_require__.r = function(exports) {
    //  下面条件成立说明是一个esModule
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      //  Object.prototype.toString.call(exports) === 'Module'
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};

 	// create a fake namespace object
 	// mode & 1: value is a module id, require it
 	// mode & 2: merge all properties of value into the ns
 	// mode & 4: return value when already ns object
 	// mode & 8|1: behave like require
 	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
 	};
 	// getDefaultExport function for compatibility with non-harmony modules
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
       function getModuleExports() { return module; };
      //  为getter添加a属性，a属性的值通过getter获取，getter调用时会判断是否是esModule，返回不同的值
      // 说明通过a属性可以拿到module的默认导致值
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};

 	// Object.prototype.hasOwnProperty.call
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
 	// __webpack_public_path__
 	__webpack_require__.p = "";
   // Load entry module and return exports
  //  __webpack_require__.s 入口模块的id
 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
 })
/************************************************************************/
 ({
    "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /*! no static exports found */
    (function(module, exports) {
      console.log('123')
      module.exports = '导出内容'
    })
 });

//  自执行函数，接收一个对象参数，键值对为模块id和包裹模块内容的函数
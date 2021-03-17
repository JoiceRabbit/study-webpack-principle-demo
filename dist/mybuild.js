(
  function(modules) {

    // data [[chunkId], { path: module }] [['login], { './src/login/js': function(module, exports){}}]
    function webpackJsonpCallback(data) {
      var chunkIds = data[0]; // 数组, 包含模块id
      var moreModules = data[1]; // 对象，key为模块地址，value为模块内容
       
      var i = 0, resolves = []
      for(i; i < chunkIds.length; i++) {
        var chunkId = chunkIds[i]
        if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
          resolves.push(installedChunks[chunkId][0])
        }

        installedChunks[chunkId] = 0;
      }

      for(moduleId in moreModules) {
        if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
          // 在modules上保存一份,方便t方法中执行__webpack_require__
          modules[moduleId] = moreModules[moduleId];
        }
      }
      if(parentJsonpFunction) parentJsonpFunction(data);
 
      while(resolves.length) {
        resolves.shift()();
      }
    }

    var installedModules = {}

    // object to store loaded and loading chunks
    // undefined = chunk not loaded, null = chunk preloaded/prefetched
    // Promise = chunk loading, 0 = chunk loaded
    var installedChunks = {
      "main": 0
    };

    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) return installedModules[moduleId].exports

      var module = installedModules[moduleId] = {
        i: moduleId,
        l: false,
        exports: {}
      }

      modules[moduleId].call(module, module, module.exports, __webpack_require__)

      module.l = true

      return module.exports
    }

    __webpack_require__.c = installedModules

    __webpack_require__.m = modules

    // publicPath
    __webpack_require__.p = ''

    __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property)
    }

    __webpack_require__.d = function(exports, name, getter) {
      if (!__webpack_require__.o(exports, name)) {
        Object.defineProperty(exports, name, { enumerable: true, get: getter })
      }
    }

    __webpack_require__.r = function(exports) {
      // Symbol.toStringTag 是一个内置 symbol，它通常作为对象的属性键使用，对应的属性值应该为字符串类型，
      // 这个字符串用来表示该对象的自定义类型标签，通常只有内置的 Object.prototype.toString() 方法会去读取这个标签并把它包含在自己的返回值里。
      if (typeof Symbol !== undefined && Symbol.toStringTag) {
        // why ?? !! 用来标记对象类型，即模块
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
      }
      Object.defineProperty(exports, '__esModule', { value: true })
    }

    function jsonpScriptSrc(chunkId) {
      return __webpack_require__.p + '' + chunkId + '.built.js'
    }

    // 实现异步加载模块，并返回一个promise
    __webpack_require__.e = function requireEnsure(chunkId) {
      // 加载模块 1. 得到模块的完整地址 2. script 3. 模块获取完成则resolve
      var promises = []

      var installedChunkData = installedChunks[chunkId]

      if (installedChunkData !== 0) { // 0 加载完成
        if (installedChunkData) { // promise 加载中
          promises.push(installedChunkData[2])
        } else {
          // 模块未被加载
          var promise = new Promise((resolve, reject) => {
            installedChunkData = installedChunks[chunkId] = [resolve, reject]
          })

          promises.push(installedChunkData[2] = promise)

          var script = document.createElement('script')
          var onScriptComplete;

          script.charset = 'utf-8';
 				  script.timeout = 120;
           if (__webpack_require__.nc) {
            script.setAttribute("nonce", __webpack_require__.nc);
          }
          script.src = jsonpScriptSrc(chunkId);

          var error = new Error()
          onScriptComplete = function(event) {
            script.onload = script.onerror = null
            clearTimeout(timeout)

            var chunk = installedChunks[chunkId]

            if (chunk !== 0) {
              if(chunk) {
                var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                var realSrc = event && event.target && event.target.src;
                error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
                error.name = 'ChunkLoadError';
                error.type = errorType;
                error.request = realSrc;
                chunk[1](error);
              }
              installedChunks[chunkId] = undefined;
            }
          }

          var timeout = setTimeout(() =>{
            onScriptComplete({ type: 'timeout', target: script })
          }, 120000)
          script.onerror = script.onload = onScriptComplete
          document.head.appendChild(script)
        }
      }

      return Promise.all(promises)
    }

    __webpack_require__.t = function(value, mode) {
      if (mode & 1) value = __webpack_require__(value)
      if (mode & 8) return value
      if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value
      var ns = Object.create(null)
      // 标记为esModule
      __webpack_require__.r(ns)
      Object.defineProperty(ns, 'default', { enumerable: true, value: value })
      if ((mode & 2) && typeof value !== 'string') {
        for(key in value) {
          __webpack_require__.d(ns, key, function(key) {
            return value[key]
          }.bind(null, key))
        }
      }
      // return 模块内容
      return ns
    }

    var jsonpArray = window['webpackJsonp'] = window['webpackJsonp'] || []
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray)
    jsonpArray.push = webpackJsonpCallback
    // why ??
    jsonpArray = jsonpArray.slice();
    for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;


    return __webpack_require__(__webpack_require__.s = "./src/index.js")
  }
)({
  "./src/index.js":
  /*! no static exports found */ 
  (function(module, exports, __webpack_require__) {
    let btn = document.getElementById('btn')
    btn.addEventListener('click', function() {
      __webpack_require__.e(/*! import() | login */ "login").then(__webpack_require__.t.bind(null, /*! ./login.js */ "./src/login.js", 7)).then(data => {
        console.log('login', data)
      })
      __webpack_require__.e(/*! import() | home */ "home").then(__webpack_require__.t.bind(null, /*! ./home.js */ "./src/home.js", 7)).then(data => {
        console.log('home', data)
      })
    })

    module.exports = '导出内容'
 })
})
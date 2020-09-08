/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/lovitax/code/toy-react/main.js: Spread children are not supported in React.\\n\\u001b[0m \\u001b[90m  7 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mMy\\u001b[39m \\u001b[33mComp\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  9 | \\u001b[39m            {\\u001b[33m...\\u001b[39m\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mchildren}\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m            \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m    }\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m}\\u001b[0m\\n    at File.buildCodeFrameError (/Users/lovitax/code/toy-react/node_modules/@babel/core/lib/transformation/file/file.js:248:12)\\n    at NodePath.buildCodeFrameError (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/path/index.js:144:21)\\n    at PluginPass.visitor.JSXSpreadChild (/Users/lovitax/code/toy-react/node_modules/@babel/helper-builder-react-jsx/lib/index.js:29:16)\\n    at newFn (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/visitors.js:175:21)\\n    at NodePath._call (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/path/context.js:55:20)\\n    at NodePath.call (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/path/context.js:42:17)\\n    at NodePath.visit (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/path/context.js:92:31)\\n    at TraversalContext.visitQueue (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/context.js:112:16)\\n    at TraversalContext.visitMultiple (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/context.js:79:17)\\n    at TraversalContext.visit (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/context.js:138:19)\\n    at Function.traverse.node (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/index.js:82:17)\\n    at NodePath.visit (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/path/context.js:99:18)\\n    at TraversalContext.visitQueue (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/context.js:112:16)\\n    at TraversalContext.visitSingle (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/context.js:84:19)\\n    at TraversalContext.visit (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/context.js:140:19)\\n    at Function.traverse.node (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/index.js:82:17)\\n    at NodePath.visit (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/path/context.js:99:18)\\n    at TraversalContext.visitQueue (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/context.js:112:16)\\n    at TraversalContext.visitMultiple (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/context.js:79:17)\\n    at TraversalContext.visit (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/context.js:138:19)\\n    at Function.traverse.node (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/index.js:82:17)\\n    at NodePath.visit (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/path/context.js:99:18)\\n    at TraversalContext.visitQueue (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/context.js:112:16)\\n    at TraversalContext.visitSingle (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/context.js:84:19)\\n    at TraversalContext.visit (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/context.js:140:19)\\n    at Function.traverse.node (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/index.js:82:17)\\n    at NodePath.visit (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/path/context.js:99:18)\\n    at TraversalContext.visitQueue (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/context.js:112:16)\\n    at TraversalContext.visitSingle (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/context.js:84:19)\\n    at TraversalContext.visit (/Users/lovitax/code/toy-react/node_modules/@babel/traverse/lib/context.js:140:19)\");\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./webpack/webpack.tp":
/*!****************************!*\
  !*** ./webpack/webpack.tp ***!
  \****************************/
/***/ (() => {

eval("red\n\n//# sourceURL=webpack://re-learning/./webpack/webpack.tp?");

/***/ }),

/***/ "./webpack/webpack-1.js":
/*!******************************!*\
  !*** ./webpack/webpack-1.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// require('./webpack.tj')\nconsole.log('ssss')\n__webpack_require__(/*! ./webpack.tp */ \"./webpack/webpack.tp\")\n\nfunction selectionSort(arr) {\n  console.log('www')\n  let len = arr.length\n  let j = 0\n  while(j < len) {\n    let min = arr[j]\n    let pre = j\n    for(let i = j + 1; i < len; i ++) {\n      if (min > arr[i]) {\n        pre = i\n        min = arr[i]\n      }\n    }\n    // change places\n    [arr[j], arr[pre]] = [min, arr[j]]\n    j ++\n    \n  }\n  return arr\n}\n\n\n\n//# sourceURL=webpack://re-learning/./webpack/webpack-1.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./webpack/webpack-1.js");
/******/ 	
/******/ })()
;
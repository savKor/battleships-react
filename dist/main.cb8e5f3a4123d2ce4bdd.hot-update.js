"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatebattleships_react"]("main",{

/***/ "./src/components/Board/Row/index.js":
/*!*******************************************!*\
  !*** ./src/components/Board/Row/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Row\": () => (/* binding */ Row)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Row(_ref) {\n  var rowIndex = _ref.rowIndex,\n      choosenRow = _ref.choosenRow;\n\n  function getCells(rowIndex, choosenRow) {\n    var cells = [];\n\n    for (var j = 0; j < choosenRow.length; j++) {\n      var columnIndex = j;\n      var cellId = rowIndex + '_' + columnIndex; // добавление корабля на сетку\n\n      var cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        id: cellId,\n        className: \"cell\"\n      });\n      cells[j] = cell;\n    }\n\n    return cells;\n  }\n\n  var row = getCells(rowIndex, choosenRow);\n  return row;\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Board/Row/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2f5a40b602c952714ad9")
/******/ })();
/******/ 
/******/ }
);
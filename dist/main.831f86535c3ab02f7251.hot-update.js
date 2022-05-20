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

/***/ "./src/components/Board/index.js":
/*!***************************************!*\
  !*** ./src/components/Board/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Board() {\n  function createMatrix() {\n    var matrix = [];\n    var n = 10,\n        m = 10;\n\n    for (var i = 0; i < n; i++) {\n      matrix[i] = getMatrixRowWithEmptyElement(m);\n    }\n\n    return matrix;\n  }\n\n  function getMatrixRowWithEmptyElement(size) {\n    var row = [];\n\n    for (var j = 0; j < size; j++) {\n      row[j] = undefined;\n    }\n\n    return row;\n  }\n\n  var matrix = createMatrix();\n\n  function renderMatrix() {\n    var field = [];\n\n    for (var i = 0; i < matrix.length; i++) {\n      var row = matrix[i];\n      var newDiv = document.createElement('div');\n      newDiv.className = 'row';\n      newDiv.id = 'row' + i;\n      board.appendChild(newDiv);\n      var rowElement = document.getElementById('row' + i);\n      rowElement.style.display = 'flex';\n\n      for (var j = 0; j < row.length; j++) {\n        renderCell(rowIndex, j, rowElement);\n      }\n    }\n\n    return field;\n  }\n\n  function renderCell(rowIndex, columnIndex, rowElement) {\n    var newDiv = document.createElement('div');\n    newDiv.className = 'cell';\n    newDiv.id = rowIndex + '_' + columnIndex;\n    rowElement.appendChild(newDiv);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null));\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Board/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("176372271354802c5051")
/******/ })();
/******/ 
/******/ }
);
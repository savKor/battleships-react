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

/***/ "./src/storage/index.js":
/*!******************************!*\
  !*** ./src/storage/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCellId\": () => (/* binding */ getCellId),\n/* harmony export */   \"getRowAndColumn\": () => (/* binding */ getRowAndColumn)\n/* harmony export */ });\nfunction getRowAndColumn(cellId) {\n  var coordinates = [];\n  var splitId = cellId.split('_');\n  var idNumbers = splitId.map(Number);\n  var rowIndex = idNumbers[1];\n  var columnIndex = idNumbers[0];\n  coordinates.push(columnIndex, rowIndex);\n  return coordinates;\n}\nvar getCellId = function getCellId(colId, rowId) {\n  return \"\".concat(colId, \"_\").concat(rowId);\n};\n\n//# sourceURL=webpack://battleships-react/./src/storage/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8564d36b61d99663f2f8")
/******/ })();
/******/ 
/******/ }
);
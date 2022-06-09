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

/***/ "./src/components/Battle-board/Row/Cell/index.js":
/*!*******************************************************!*\
  !*** ./src/components/Battle-board/Row/Cell/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cells\": () => (/* binding */ Cells)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nfunction Cells(_ref) {\n  var rowIndex = _ref.rowIndex,\n      colums = _ref.colums;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('cell'),\n      _useState2 = _slicedToArray(_useState, 1),\n      classForCell = _useState2[0];\n\n  var cells = [];\n\n  for (var j = 0; j < colums.length; j++) {\n    var columnIndex = j;\n    var cellId = rowIndex + '_' + columnIndex;\n    var cellClass = classForCell;\n    var cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: cellId,\n      className: cellClass,\n      onClick: addShipOnMap,\n      onMouseOver: addListenersToShowTheShip\n    });\n    cells[j] = cell;\n  }\n\n  return cells;\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Battle-board/Row/Cell/index.js?");

/***/ }),

/***/ "./src/components/Battle-board/Row/index.js":
/*!**************************************************!*\
  !*** ./src/components/Battle-board/Row/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Row\": () => (/* binding */ Row)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell */ \"./src/components/Battle-board/Row/Cell/index.js\");\n\n\nfunction Row(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: props.rowIndex,\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Cell__WEBPACK_IMPORTED_MODULE_1__.Cells, props));\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Battle-board/Row/index.js?");

/***/ }),

/***/ "./src/components/Battle-board/index.js":
/*!**********************************************!*\
  !*** ./src/components/Battle-board/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row */ \"./src/components/Battle-board/Row/index.js\");\n\n\nvar size = 10;\nfunction Board() {\n  function createMatrix() {\n    var matrix = [];\n\n    for (var i = 0; i < size; i++) {\n      matrix[i] = getMatrixRowWithEmptyElement();\n    }\n\n    return matrix;\n  }\n\n  function getMatrixRowWithEmptyElement() {\n    var row = [];\n\n    for (var j = 0; j < size; j++) {\n      row[j] = undefined;\n    }\n\n    return row;\n  }\n\n  var matrix = createMatrix();\n  var field = [];\n\n  for (var i = 0; i < matrix.length; i++) {\n    var colums = matrix[i];\n    var rowIndex = i;\n    var row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Row__WEBPACK_IMPORTED_MODULE_1__.Row, {\n      rowIndex: rowIndex,\n      colums: colums\n    });\n    field[i] = row;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"board\"\n  }, field);\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Battle-board/index.js?");

/***/ }),

/***/ "./src/components/Battle.js":
/*!**********************************!*\
  !*** ./src/components/Battle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BattlePage\": () => (/* binding */ BattlePage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Battle_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Battle-board */ \"./src/components/Battle-board/index.js\");\n\n\nfunction BattlePage() {\n  /*#__PURE__*/\n  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"board-of-the-game\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Battle_board__WEBPACK_IMPORTED_MODULE_1__.Board, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"board-of-the-game\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Battle_board__WEBPACK_IMPORTED_MODULE_1__.Board, null))));\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Battle.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("526a39d87c6accc7d276")
/******/ })();
/******/ 
/******/ }
);
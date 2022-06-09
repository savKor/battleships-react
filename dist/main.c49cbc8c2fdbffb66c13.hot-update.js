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

/***/ "./src/components/Main-board/index.js":
/*!********************************************!*\
  !*** ./src/components/Main-board/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board),\n/* harmony export */   \"ContextForbiddenCells\": () => (/* binding */ ContextForbiddenCells)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row */ \"./src/components/Main-board/Row/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar size = 10;\nvar ContextForbiddenCells = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n  arrayOfForbiddenCells: null,\n  setArrayOfForbiddenCells: function setArrayOfForbiddenCells() {}\n});\nfunction Board() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      arrayOfForbiddenCells = _useState2[0],\n      setArrayOfForbiddenCells = _useState2[1];\n\n  var forbiddenArray = {\n    arrayOfForbiddenCells: arrayOfForbiddenCells,\n    setArrayOfForbiddenCells: setArrayOfForbiddenCells\n  };\n\n  function createMatrix() {\n    var matrix = [];\n\n    for (var i = 0; i < size; i++) {\n      matrix[i] = getMatrixRowWithEmptyElement();\n    }\n\n    return matrix;\n  }\n\n  function getMatrixRowWithEmptyElement() {\n    var row = [];\n\n    for (var j = 0; j < size; j++) {\n      row[j] = undefined;\n    }\n\n    return row;\n  }\n\n  var matrix = createMatrix();\n  var field = [];\n\n  for (var i = 0; i < matrix.length; i++) {\n    var colums = matrix[i];\n    var rowIndex = i;\n    var row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Row__WEBPACK_IMPORTED_MODULE_1__.Row, {\n      rowIndex: rowIndex,\n      colums: colums\n    });\n    field[i] = row;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContextForbiddenCells.Provider, {\n    value: forbiddenArray\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"board\"\n  }, field));\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Main-board/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1f8a108a901e107ec6d7")
/******/ })();
/******/ 
/******/ }
);
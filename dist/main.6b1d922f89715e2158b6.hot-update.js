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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Main */ \"./src/components/Main.js\");\n/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Row */ \"./src/components/Board/Row/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar count = {\n  oneCellShip: 0,\n  twoCellShip: 0,\n  threeCellShip: 0,\n  fourCellShip: 0\n};\nvar size = 10;\nfunction Board() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_1__.ContextShipState),\n      stateAreYouChooseTheShip = _useContext.stateAreYouChooseTheShip,\n      setStateAreYouChooseTheShip = _useContext.setStateAreYouChooseTheShip;\n\n  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_1__.ContextShipPosition),\n      shipPosition = _useContext2.shipPosition;\n\n  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_1__.ContextChoosenShip),\n      choosenShipType = _useContext3.choosenShipType;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      arrayOfForbiddenCells = _useState2[0],\n      setForbiddenArrayOfCells = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(count),\n      _useState4 = _slicedToArray(_useState3, 2),\n      countShips = _useState4[0],\n      setCountShips = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState6 = _slicedToArray(_useState5, 2),\n      shipsOnMap = _useState6[0],\n      setShipsOnMap = _useState6[1];\n\n  function createMatrix() {\n    var matrix = [];\n\n    for (var i = 0; i < size; i++) {\n      matrix[i] = getMatrixRowWithEmptyElement();\n    }\n\n    return matrix;\n  }\n\n  function getMatrixRowWithEmptyElement() {\n    var row = [];\n\n    for (var j = 0; j < size; j++) {\n      row[j] = undefined;\n    }\n\n    return row;\n  }\n\n  var matrix = createMatrix();\n  var field = [];\n\n  for (var i = 0; i < matrix.length; i++) {\n    var colums = matrix[i];\n    var rowIndex = i;\n    var row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Row__WEBPACK_IMPORTED_MODULE_2__.Row, {\n      rowIndex: rowIndex,\n      colums: colums\n    });\n    field[i] = row;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"board\"\n  }, field);\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Board/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4f9345d2b179736331ba")
/******/ })();
/******/ 
/******/ }
);
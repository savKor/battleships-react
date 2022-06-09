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

/***/ "./src/components/Battle.js":
/*!**********************************!*\
  !*** ./src/components/Battle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BattlePage\": () => (/* binding */ BattlePage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ \"./src/App.js\");\n/* harmony import */ var _Battle_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Battle-board */ \"./src/components/Battle-board/index.js\");\n\n\n\nfunction BattlePage() {\n  var battle;\n\n  _App__WEBPACK_IMPORTED_MODULE_1__.ws.onmessage = function (_ref) {\n    var data = _ref.data;\n    debugger;\n    setUsersLogin(data);\n  };\n\n  if (usersLogin === false) {\n    battle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"\\u0436\\u0434\\u0438\");\n  } else {\n    battle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: \"main\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: \"board-of-the-game\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Battle_board__WEBPACK_IMPORTED_MODULE_2__.Board, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"\\u0421\\u0435\\u0439\\u0447\\u0430\\u0441 \\u0445\\u043E\\u0434\\u0438\\u0442 \\u044D\\u0442\\u043E\\u0442 \\u0438\\u0433\\u0440\\u043E\\u043A\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: \"board-of-the-game\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Battle_board__WEBPACK_IMPORTED_MODULE_2__.Board, null)));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"board-of-the-game\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Battle_board__WEBPACK_IMPORTED_MODULE_2__.Board, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"\\u0421\\u0435\\u0439\\u0447\\u0430\\u0441 \\u0445\\u043E\\u0434\\u0438\\u0442 \\u044D\\u0442\\u043E\\u0442 \\u0438\\u0433\\u0440\\u043E\\u043A\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"board-of-the-game\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Battle_board__WEBPACK_IMPORTED_MODULE_2__.Board, null)));\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Battle.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6ccbfd1d7918b5d1b14b")
/******/ })();
/******/ 
/******/ }
);
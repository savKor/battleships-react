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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cells\": () => (/* binding */ Cells)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../App */ \"./src/App.js\");\n/* harmony import */ var _features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../features/counter/storageSlice */ \"./src/features/counter/storageSlice.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction Cells(_ref) {\n  var rowIndex = _ref.rowIndex,\n      colums = _ref.colums,\n      playerNick = _ref.playerNick;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      checkedCells = _useState2[0],\n      setCheckedCells = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('cell'),\n      _useState4 = _slicedToArray(_useState3, 1),\n      classForCell = _useState4[0];\n\n  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.selectState);\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  var username = store.username;\n  var dataForTheGame = store.dataForTheGame;\n  var turn = dataForTheGame.turn;\n  var winner = dataForTheGame.winner;\n  var player1 = dataForTheGame.player1;\n  var player2 = dataForTheGame.player2;\n  var arrayOfMissedShotPlayer1 = dataForTheGame.arrayOfMissedShotPlayer1;\n  var arrayOfMissedShotPlayer2 = dataForTheGame.arrayOfMissedShotPlayer2;\n  var arrayOfShotShipsPlayer1 = dataForTheGame.arrayOfShotShipsPlayer1;\n  var arrayOfShotShipsPlayer2 = dataForTheGame.arrayOfShotShipsPlayer2;\n  var cells = [];\n\n  function checkTheCell(e) {\n    var cellsChecked = checkedCells;\n    debugger;\n    var cellId = e.target.id;\n\n    if (username === playerNick && username === turn && winner === null && cellsChecked.find(function (id) {\n      return cellId !== id;\n    })) {\n      cellsChecked.push(cellId);\n      setCheckedCells(cellsChecked);\n      _App__WEBPACK_IMPORTED_MODULE_2__.ws.send(JSON.stringify(cellId));\n    } else if (username !== playerNick && username === turn) {\n      debugger;\n      alert('Не ваша доска');\n    } else if (winner !== null) {\n      debugger;\n      alert('Игру выйграл:' + winner);\n    } else {\n      debugger;\n      alert('Не ваш ход');\n    }\n  }\n\n  var _loop = function _loop(j) {\n    var columnIndex = j;\n    var cellId = rowIndex + '_' + columnIndex;\n    var cellClass = classForCell;\n\n    if (playerNick === player1) {\n      if (arrayOfShotShipsPlayer1.find(function (id) {\n        return cellId === id;\n      })) {\n        cellClass = 'cell-with-ships';\n      } else if (arrayOfMissedShotPlayer1.find(function (id) {\n        return cellId === id;\n      })) {\n        cellClass = 'cell-toggle-ship';\n      }\n    } else if (playerNick === player2) {\n      if (arrayOfShotShipsPlayer2.find(function (id) {\n        return cellId === id;\n      })) {\n        cellClass = 'cell-with-ships';\n      } else if (arrayOfMissedShotPlayer2.find(function (id) {\n        return cellId === id;\n      })) {\n        cellClass = 'cell-toggle-ship';\n      }\n    }\n\n    var cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: cellId,\n      className: cellClass,\n      onClick: checkTheCell\n    });\n    cells[j] = cell;\n  };\n\n  for (var j = 0; j < colums.length; j++) {\n    _loop(j);\n  }\n\n  return cells;\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Battle-board/Row/Cell/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e9431c9f010bcbc7aa68")
/******/ })();
/******/ 
/******/ }
);
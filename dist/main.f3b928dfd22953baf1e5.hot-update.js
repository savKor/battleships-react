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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cells\": () => (/* binding */ Cells)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../App */ \"./src/App.js\");\n/* harmony import */ var _features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../features/counter/storageSlice */ \"./src/features/counter/storageSlice.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../storage */ \"./src/storage/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction Cells(_ref) {\n  var rowIndex = _ref.rowIndex,\n      colums = _ref.colums,\n      playerNick = _ref.playerNick;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('cell'),\n      _useState2 = _slicedToArray(_useState, 1),\n      classForCell = _useState2[0];\n\n  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.selectState);\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(); // const checkedCells = store.checkedCells;\n\n  var username = store.username;\n  var dataForTheGame = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.dataForTheGameSelector);\n  var checkedCells = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.checkedCellsSelector);\n  var turn = dataForTheGame.turn,\n      winner = dataForTheGame.winner,\n      player1 = dataForTheGame.player1,\n      player2 = dataForTheGame.player2,\n      arrayOfMissedShotPlayer1 = dataForTheGame.arrayOfMissedShotPlayer1,\n      arrayOfMissedShotPlayer2 = dataForTheGame.arrayOfMissedShotPlayer2,\n      arrayOfShotShipsPlayer1 = dataForTheGame.arrayOfShotShipsPlayer1,\n      arrayOfShotShipsPlayer2 = dataForTheGame.arrayOfShotShipsPlayer2;\n  var cells = [];\n\n  function changeCellClass(arrayOfShotShips, arrayOfMissedShot) {\n    var newCellClass;\n\n    if (arrayOfShotShips.find(function (id) {\n      return cellId === id;\n    })) {\n      newCellClass = 'cell-with-ships';\n    } else if (arrayOfMissedShot.find(function (id) {\n      return cellId === id;\n    })) {\n      newCellClass = 'cell-toggle-ship';\n    } else {\n      newCellClass = classForCell;\n    }\n\n    return newCellClass;\n  }\n\n  function checkTheCell(e) {\n    if (winner === null) {\n      var _cellId = e.target.id;\n      var cellThatNotInArray = !checkedCells.some(function (id) {\n        return _cellId === id;\n      });\n\n      if (username === playerNick && username === turn && cellThatNotInArray === true) {\n        dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateCheckedCells)(_cellId));\n        _App__WEBPACK_IMPORTED_MODULE_2__.ws.send(JSON.stringify(_cellId));\n      } else if (username !== playerNick && username === turn) {\n        alert('Не ваша доска');\n      } else if (cellThatNotInArray == false) {\n        console.log('Ты уже проверял эту кнопку');\n      } else {\n        alert('Не ваш ход');\n      }\n    } else {\n      alert('Игра закончена');\n    }\n  }\n\n  for (var j = 0; j < colums.length; j++) {\n    var columnIndex = j;\n\n    var _cellId2 = (0,_storage__WEBPACK_IMPORTED_MODULE_4__.getCellId)(rowIndex, columnIndex);\n\n    var cellClass = void 0;\n\n    if (playerNick === player1) {\n      cellClass = changeCellClass(arrayOfShotShipsPlayer1, arrayOfMissedShotPlayer1, _cellId2);\n    } else {\n      cellClass = changeCellClass(arrayOfShotShipsPlayer2, arrayOfMissedShotPlayer2, _cellId2);\n    }\n\n    var cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: _cellId2,\n      className: cellClass,\n      onClick: checkTheCell\n    });\n    cells[j] = cell;\n  }\n\n  return cells;\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Battle-board/Row/Cell/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2d261fc3d372c68b7dc4")
/******/ })();
/******/ 
/******/ }
);
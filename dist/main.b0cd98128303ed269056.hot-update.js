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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cells\": () => (/* binding */ Cells)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../App */ \"./src/App.js\");\n/* harmony import */ var _features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../features/counter/storageSlice */ \"./src/features/counter/storageSlice.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../storage */ \"./src/storage/index.js\");\n\n\n\n\n\nfunction Cells(_ref) {\n  var rowIndex = _ref.rowIndex,\n      colums = _ref.colums,\n      playerNick = _ref.playerNick;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  var username = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.usernameSelector);\n  var dataForTheGame = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.dataForTheGameSelector);\n  var checkedCells = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.checkedCellsSelector);\n  var turn = dataForTheGame.turn,\n      winner = dataForTheGame.winner,\n      player1 = dataForTheGame.player1,\n      arrayOfMissedShotPlayer1 = dataForTheGame.arrayOfMissedShotPlayer1,\n      arrayOfMissedShotPlayer2 = dataForTheGame.arrayOfMissedShotPlayer2,\n      arrayOfShotShipsPlayer1 = dataForTheGame.arrayOfShotShipsPlayer1,\n      arrayOfShotShipsPlayer2 = dataForTheGame.arrayOfShotShipsPlayer2;\n  var cells = [];\n\n  function setClass(cellId) {\n    var cellClass;\n\n    if (playerNick === player1) {\n      cellClass = (0,_storage__WEBPACK_IMPORTED_MODULE_4__.changeCellClass)(arrayOfShotShipsPlayer1, arrayOfMissedShotPlayer1, cellId);\n    } else {\n      cellClass = (0,_storage__WEBPACK_IMPORTED_MODULE_4__.changeCellClass)(arrayOfShotShipsPlayer2, arrayOfMissedShotPlayer2, cellId);\n    }\n\n    return cellClass;\n  }\n\n  function checkTheCell(e) {\n    if (winner === null) {\n      var cellId = e.target.id;\n      var cellThatNotInArray = !checkedCells.some(function (id) {\n        return cellId === id;\n      });\n\n      if (username === playerNick && username === turn && cellThatNotInArray === true) {\n        dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateCheckedCells)(cellId));\n        _App__WEBPACK_IMPORTED_MODULE_2__.ws.send(JSON.stringify(cellId));\n      } else if (username !== playerNick && username === turn) {\n        alert('Не ваша доска');\n      } else if (cellThatNotInArray == false) {\n        console.log('Ты уже проверял эту кнопку');\n      } else {\n        alert('Не ваш ход');\n      }\n    } else {\n      alert('Игра закончена');\n    }\n  }\n\n  for (var j = 0; j < colums.length; j++) {\n    var columnIndex = j;\n    var cellId = (0,_storage__WEBPACK_IMPORTED_MODULE_4__.getCellId)(rowIndex, columnIndex);\n    var cellClass = setClass(cellId);\n    var cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: cellId,\n      className: cellClass,\n      onClick: checkTheCell\n    });\n    cells[j] = cell;\n  }\n\n  return cells;\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Battle-board/Row/Cell/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5bb22050770c11051184")
/******/ })();
/******/ 
/******/ }
);
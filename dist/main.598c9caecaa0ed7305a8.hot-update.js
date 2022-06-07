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

/***/ "./src/components/Main-board/Row/Cell/index.js":
/*!*****************************************************!*\
  !*** ./src/components/Main-board/Row/Cell/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cells\": () => (/* binding */ Cells)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.. */ \"./src/components/Main-board/index.js\");\n/* harmony import */ var _features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../features/counter/storageSlice */ \"./src/features/counter/storageSlice.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../storage */ \"./src/storage/index.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction Cells(_ref) {\n  var rowIndex = _ref.rowIndex,\n      colums = _ref.colums;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_2__.ContextForbiddenCells),\n      arrayOfForbiddenCells = _useContext.arrayOfForbiddenCells,\n      setArrayOfForbiddenCells = _useContext.setArrayOfForbiddenCells;\n\n  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_2__.ContextShipOnMap),\n      shipsOnMap = _useContext2.shipsOnMap,\n      setShipsOnMap = _useContext2.setShipsOnMap;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('cell'),\n      _useState2 = _slicedToArray(_useState, 1),\n      classForCell = _useState2[0];\n\n  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.selectState);\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  var countShips = store.countShips;\n  var shipPosition = store.shipPosition;\n  var arrayOfCellsDisplaedOnMap = store.arrayOfCellsDisplaedOnMap;\n  var stateAreYouChooseTheShip = store.stateAreYouChooseTheShip;\n  var choosenShipType = store.choosenShipType;\n  var cells = [];\n\n  function addIdsOfCellsWhereYouCantAddShipNow(cellId) {\n    var rowAndColumn = (0,_storage__WEBPACK_IMPORTED_MODULE_4__.getRowAndColumn)(cellId);\n    var row = rowAndColumn[1];\n    var column = rowAndColumn[0];\n\n    for (var i = row - 1; i <= row + 1; i++) {\n      var _rowIndex = i;\n\n      if (0 <= _rowIndex && _rowIndex < 10) {\n        pushAllIdsWhereYouCantAddShipsNow(_rowIndex, column);\n      }\n    }\n  }\n\n  function pushAllIdsWhereYouCantAddShipsNow(rowIndex, column) {\n    for (var j = column - 1; j <= column + 1; j++) {\n      var columnIndex = j;\n\n      if (0 <= columnIndex && columnIndex < 10) {\n        (function () {\n          var idOfCellWhereYouCanNoLongerAddShip = columnIndex + '_' + rowIndex;\n\n          if (!arrayOfForbiddenCells.find(function (id) {\n            return idOfCellWhereYouCanNoLongerAddShip === id;\n          })) {\n            var newArray = arrayOfForbiddenCells;\n            newArray.push(idOfCellWhereYouCanNoLongerAddShip);\n            setArrayOfForbiddenCells(newArray);\n          }\n        })();\n      }\n    }\n  }\n\n  function getIdsOfShip(row, column, setShipOrNot) {\n    var shipIds = [];\n\n    for (var i = 0; i < choosenShipType[0]; i++) {\n      var shipElement = getIdOfCell(i, row, column, setShipOrNot);\n\n      if (shipElement !== false) {\n        shipIds.push(shipElement);\n      }\n    }\n\n    return shipIds;\n  }\n\n  function getIdOfCell(cycleNumber, row, column, setShipOrNot) {\n    var value = {\n      column: column,\n      row: row\n    };\n    var key = shipPosition === 'horizontal' ? 'column' : 'row';\n\n    if (cycleNumber === 0) {\n      value[key] = value[key];\n    } else if (cycleNumber % 2 === 0) {\n      value[key] = value[key] + 1;\n    } else if (cycleNumber >= 3) {\n      value[key] = value[key] + 2;\n    } else {\n      value[key] = value[key] - 1;\n    }\n\n    var cellId = value['row'] + '_' + value['column'];\n    var shipId = checkIfYouCanAddShipOnThisCell(cellId, value[key], setShipOrNot);\n    return shipId;\n  }\n\n  function checkIfYouCanAddShipOnThisCell(cellId, changeOnBoard, setShipOrNot) {\n    var shipElement;\n    var idInForbiddenArray = setShipOrNot === true ? arrayOfForbiddenCells.find(function (id) {\n      return cellId === id;\n    }) : false;\n\n    if (idInForbiddenArray || changeOnBoard < 0 || 10 <= changeOnBoard) {\n      shipElement = false;\n    } else {\n      shipElement = cellId;\n    }\n\n    return shipElement;\n  }\n\n  function addCoordinates(idsOfShip) {\n    var key = choosenShipType[2];\n\n    if (idsOfShip.length === choosenShipType[0] && countShips[key] !== choosenShipType[1]) {\n      dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateArrayOfCellsDisplaedOnMap)([]));\n      dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateCountShips)(key));\n\n      var mappedShips = _toConsumableArray(shipsOnMap);\n\n      for (var i = 0; i < idsOfShip.length; i++) {\n        mappedShips.push(idsOfShip[i]);\n        addIdsOfCellsWhereYouCantAddShipNow(idsOfShip[i]);\n      }\n\n      dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateStateAreYouChooseTheShip)(false));\n      setShipsOnMap(mappedShips);\n    } else if (countShips[key] === choosenShipType[1]) {\n      alert('Все корабли этого типа уже были добавлены. Выберите другой корабль');\n    } else {\n      alert('нельзя тут ставить корабль');\n    }\n  }\n\n  function addShipOnMap(e) {\n    var rowAndColumn = (0,_storage__WEBPACK_IMPORTED_MODULE_4__.getRowAndColumn)(e.target.id);\n\n    if (stateAreYouChooseTheShip === true) {\n      e.target.onmouseover;\n      var setOrNot = true;\n      var idsOfShip = getIdsOfShip(rowAndColumn[0], rowAndColumn[1], setOrNot);\n      addCoordinates(idsOfShip);\n    } else {\n      alert('Выбери корабль');\n    }\n  }\n\n  function handleOnMouseOverOnBoard(e) {\n    var cellId = (0,_storage__WEBPACK_IMPORTED_MODULE_4__.getRowAndColumn)(e.target.id);\n    var setOrNot = false;\n    var idsOfShip = getIdsOfShip(cellId[0], cellId[1], setOrNot);\n    dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateArrayOfCellsDisplaedOnMap)(idsOfShip));\n  }\n\n  function addListenersToShowTheShip(e) {\n    if (stateAreYouChooseTheShip === true) {\n      handleOnMouseOverOnBoard(e);\n\n      e.target.onmouseout = function () {\n        dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateArrayOfCellsDisplaedOnMap)([]));\n      };\n    }\n  }\n\n  var _loop = function _loop(j) {\n    var columnIndex = j;\n    var cellId = rowIndex + '_' + columnIndex;\n    var cellOnMap = shipsOnMap.find(function (id) {\n      return cellId === id;\n    });\n    var cellOnMouseOver = arrayOfCellsDisplaedOnMap.find(function (id) {\n      return cellId === id;\n    });\n    var idInForbiddenArray = arrayOfForbiddenCells.find(function (id) {\n      return cellId === id;\n    });\n    var cellClass = classForCell;\n\n    if (cellOnMap || cellOnMouseOver && idInForbiddenArray || cellOnMouseOver && cellOnMap || arrayOfCellsDisplaedOnMap !== choosenShipType[0]) {\n      cellClass = 'cell-with-ships';\n    } else if (cellOnMouseOver) {\n      cellClass = 'cell-toggle-ship';\n    }\n\n    var cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: cellId,\n      className: cellClass,\n      onClick: addShipOnMap,\n      onMouseOver: addListenersToShowTheShip\n    });\n    cells[j] = cell;\n  };\n\n  for (var j = 0; j < colums.length; j++) {\n    _loop(j);\n  }\n\n  return cells;\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Main-board/Row/Cell/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("36b30ebe8735bb477a78")
/******/ })();
/******/ 
/******/ }
);
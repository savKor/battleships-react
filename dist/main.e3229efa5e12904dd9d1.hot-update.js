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

/***/ "./src/components/Board/Cells/index.js":
/*!*********************************************!*\
  !*** ./src/components/Board/Cells/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RowOfCells\": () => (/* binding */ RowOfCells)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction RowOfCells(_ref) {\n  var rowIndex = _ref.rowIndex,\n      choosenRow = _ref.choosenRow;\n\n  function getCells(rowIndex, choosenRow) {\n    var cells = [];\n\n    var _loop = function _loop(j) {\n      var columnIndex = j;\n      var cellId = rowIndex + '_' + columnIndex;\n\n      function addShipOnMap(e) {\n        var offsetX = e.nativeEvent.offsetX;\n        console.log(offsetX);\n\n        if (stateAreYouChooseTheShip === true) {\n          var idsOfShip = getIdsOfShips(rowIndex, columnIndex);\n          addCoordinates(idsOfShip);\n        } else {\n          alert('Выбери корабль');\n        }\n      } // добавление корабля на сетку\n\n\n      var cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        id: cellId,\n        className: \"cell\"\n      });\n      cells[j] = cell;\n    };\n\n    for (var j = 0; j < choosenRow.length; j++) {\n      _loop(j);\n    }\n\n    return cells;\n  }\n\n  var row = getCells(rowIndex, choosenRow);\n  return row;\n} // добавление тех координат на которые уже нельзя добавлять корабли\n\nfunction addCoordinatesWhereYouCantAddShipNow(cellId) {\n  var splitId = cellId.split('_');\n  var idNumbers = splitId.map(Number);\n  var row = idNumbers[1];\n  var column = idNumbers[0];\n\n  for (var i = row - 1; i <= row + 1; i++) {\n    var rowIndex = i;\n\n    if (0 <= rowIndex && rowIndex < 10) {\n      for (var j = column - 1; j <= column + 1; j++) {\n        var columnIndex = j;\n\n        if (0 <= columnIndex && columnIndex < 10) {\n          (function () {\n            var idOfCellWhereYouCanNoLongerAddShip = columnIndex + '_' + rowIndex;\n            var idInForbiddenArray = forbiddenArrayOfCells.find(function (id) {\n              return idOfCellWhereYouCanNoLongerAddShip === id;\n            });\n\n            if (idInForbiddenArray) {\n              console.log('id уже в массиве');\n            } else {\n              var newArray = forbiddenArrayOfCells;\n              newArray.push(idOfCellWhereYouCanNoLongerAddShip);\n              console.log(newArray);\n              setForbiddenArrayOfCells(newArray);\n            }\n          })();\n        }\n      }\n    }\n  }\n}\n\nfunction getNewIdFromColumn(newNumber, row, column) {\n  var shipElement;\n  var newColumn = column + newNumber;\n  var newCellId = newColumn + '_' + row;\n  var idInForbiddenArray = forbiddenArrayOfCells.find(function (id) {\n    return newCellId === id;\n  });\n\n  if (idInForbiddenArray || newColumn < 0 || 10 <= newColumn) {\n    newColumn = column - newNumber;\n    newCellId = newColumn + '_' + row;\n\n    var _idInForbiddenArray = forbiddenArrayOfCells.find(function (id) {\n      return newCellId === id;\n    });\n\n    if (_idInForbiddenArray || newColumn < 0 || 10 <= newColumn) {\n      console.log('Клетка уже занята');\n      shipElement = false;\n    } else {\n      shipElement = newCellId;\n    }\n  } else {\n    shipElement = newCellId;\n  }\n\n  return shipElement;\n}\n\nfunction getNewIdFromRow(newNumber, row, column) {\n  var shipElement;\n  var newRow = row + newNumber;\n  var newCellId = column + '_' + newRow;\n  var idInForbiddenArray = forbiddenArrayOfCells.find(function (id) {\n    return newCellId === id;\n  });\n\n  if (idInForbiddenArray || newRow < 0 || 10 <= newRow) {\n    newRow = row - newNumber;\n    newCellId = column + '_' + newRow;\n\n    var _idInForbiddenArray2 = forbiddenArrayOfCells.find(function (id) {\n      return newCellId === id;\n    });\n\n    if (_idInForbiddenArray2 || newRow < 0 || 10 <= newRow) {\n      console.log('Клетка уже занята');\n      shipElement = false;\n    } else {\n      shipElement = newCellId;\n    }\n  } else {\n    shipElement = newCellId;\n  }\n\n  return shipElement;\n}\n\nfunction getIdsOfShips(row, column) {\n  var shipIds = [];\n\n  for (var i = 0; i < choosenShipType[0]; i++) {\n    var numberOfCycle = i;\n    var partOfShip = void 0;\n\n    if (shipPosition === 'horizontal') {\n      partOfShip = getNewIdFromColumn(numberOfCycle, row, column);\n\n      if (partOfShip !== false) {\n        shipIds.push(partOfShip);\n      }\n    } else {\n      partOfShip = getNewIdFromRow(numberOfCycle, row, column);\n\n      if (partOfShip !== false) {\n        shipIds.push(partOfShip);\n      }\n    }\n  }\n\n  return shipIds;\n}\n\nfunction addCoordinates(idsAndSizeOfShip) {\n  var newCountOfShips = countShips;\n  var key = choosenShipType[2];\n\n  if (idsAndSizeOfShip.length === choosenShipType[0] && newCountOfShips[key] !== choosenShipType[1]) {\n    newCountOfShips[key] += 1;\n    setCountShips(newCountOfShips);\n\n    for (var i = 0; i < idsAndSizeOfShip.length; i++) {\n      var mappedShips = shipsOnMap;\n      var newCellId = idsAndSizeOfShip[i];\n      mappedShips.push(newCellId);\n      setShipsOnMap(mappedShips);\n      addCoordinatesWhereYouCantAddShipNow(newCellId);\n    }\n\n    setStateAreYouChooseTheShip(false);\n  } else if (newCountOfShips[key] === choosenShipType[1]) {\n    alert('Все корабли этого типа уже были добавлены');\n  } else {\n    console.log('Нельзя ставить тут корабль');\n    alert('Нельзя ставить тут корабль');\n  }\n}\n\nfunction getCells(rowIndex, choosenRow) {\n  var cells = [];\n\n  var _loop2 = function _loop2(j) {\n    var columnIndex = j;\n    var cellId = rowIndex + '_' + columnIndex; // добавление корабля на сетку\n\n    function addShipOnMap(e) {\n      var offsetX = e.nativeEvent.offsetX;\n      console.log(offsetX);\n\n      if (stateAreYouChooseTheShip === true) {\n        var splitId = cellId.split('_');\n        var idNumbers = splitId.map(Number);\n        var row = idNumbers[1];\n        var column = idNumbers[0];\n        var idsAndSizeOfShip = getIdsOfShips(row, column);\n        addCoordinates(idsAndSizeOfShip);\n      } else {\n        alert('Выбери корабль');\n      }\n    }\n\n    var idOfCellWithAShip = shipsOnMap.find(function (id) {\n      return cellId === id;\n    });\n\n    if (idOfCellWithAShip) {\n      var cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        id: cellId,\n        className: \"cell-with-ships\",\n        onClick: addShipOnMap\n      });\n      cells[j] = cell;\n    } else {\n      var _cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        id: cellId,\n        className: \"cell\",\n        onClick: addShipOnMap\n      });\n\n      cells[j] = _cell;\n    }\n  };\n\n  for (var j = 0; j < choosenRow.length; j++) {\n    _loop2(j);\n  }\n\n  return cells;\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Board/Cells/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("273a3e5d331c4f1581ba")
/******/ })();
/******/ 
/******/ }
);
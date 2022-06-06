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

/***/ "./src/components/Board/Row/cell/index.js":
/*!************************************************!*\
  !*** ./src/components/Board/Row/cell/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cells\": () => (/* binding */ Cells)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ \"./src/components/Board/index.js\");\n/* harmony import */ var _storage_incex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../storage/incex */ \"./src/storage/incex.js\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Main */ \"./src/components/Main.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\nfunction Cells(_ref) {\n  var rowIndex = _ref.rowIndex,\n      colums = _ref.colums;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_3__.ContextShipState),\n      stateAreYouChooseTheShip = _useContext.stateAreYouChooseTheShip,\n      setStateAreYouChooseTheShip = _useContext.setStateAreYouChooseTheShip;\n\n  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_3__.ContextShipPosition),\n      shipPosition = _useContext2.shipPosition;\n\n  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_3__.ContextChoosenShip),\n      choosenShipType = _useContext3.choosenShipType;\n\n  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_1__.ContextForbiddenCells),\n      arrayOfForbiddenCells = _useContext4.arrayOfForbiddenCells,\n      setArrayOfForbiddenCells = _useContext4.setArrayOfForbiddenCells;\n\n  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_1__.ContextCounter),\n      countShips = _useContext5.countShips,\n      setCountShips = _useContext5.setCountShips;\n\n  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_1__.ContextShipOnMap),\n      shipsOnMap = _useContext6.shipsOnMap,\n      setShipsOnMap = _useContext6.setShipsOnMap;\n\n  var cells = [];\n\n  function addCoordinatesWhereYouCantAddShipNow(cellId) {\n    var rowAndColumn = (0,_storage_incex__WEBPACK_IMPORTED_MODULE_2__.getRowAndColumn)(cellId);\n    var row = rowAndColumn[1];\n    var column = rowAndColumn[0];\n\n    for (var i = row - 1; i <= row + 1; i++) {\n      var _rowIndex = i;\n\n      if (0 <= _rowIndex && _rowIndex < 10) {\n        for (var j = column - 1; j <= column + 1; j++) {\n          var columnIndex = j;\n\n          if (0 <= columnIndex && columnIndex < 10) {\n            (function () {\n              var idOfCellWhereYouCanNoLongerAddShip = columnIndex + '_' + _rowIndex;\n              var idInForbiddenArray = arrayOfForbiddenCells.find(function (id) {\n                return idOfCellWhereYouCanNoLongerAddShip === id;\n              });\n\n              if (!idInForbiddenArray) {\n                var newArray = arrayOfForbiddenCells;\n                newArray.push(idOfCellWhereYouCanNoLongerAddShip);\n                setArrayOfForbiddenCells(newArray);\n              }\n            })();\n          }\n        }\n      }\n    }\n  }\n\n  function getIdsOfShip(row, column) {\n    var shipIds = [];\n\n    for (var i = 0; i < choosenShipType[0]; i++) {\n      var shipElement = getIdOfCell(i, row, column);\n\n      if (shipElement !== false) {\n        shipIds.push(shipElement);\n      }\n    }\n\n    return shipIds;\n  }\n\n  function getIdOfCell(cycleNumber, row, column) {\n    var cellId;\n    var newColumn;\n    var newRow;\n    var shipId;\n\n    if (shipPosition === 'horizontal') {\n      if (cycleNumber === 0) {\n        newColumn = column;\n      } else if (cycleNumber % 2 === 0) {\n        newColumn = column + 1;\n      } else if (cycleNumber >= 3) {\n        newColumn = column + 2;\n      } else {\n        newColumn = column - 1;\n      }\n\n      cellId = row + '_' + newColumn;\n      shipId = checkIfYouCanAddShipOnThisCell(cellId, newColumn);\n    } else {\n      if (cycleNumber === 0) {\n        newRow = row;\n      } else if (cycleNumber % 2 === 0) {\n        newRow = row + 1;\n      } else if (cycleNumber >= 3) {\n        newRow = row + 2;\n      } else {\n        newRow = row - 1;\n      }\n\n      cellId = newRow + '_' + column;\n      shipId = checkIfYouCanAddShipOnThisCell(cellId, newRow);\n    }\n\n    return shipId;\n  }\n\n  function addListenersToShowTheShip(shipLength) {\n    boardOfPreparetionPage.onmouseover = function (e) {\n      handleOnmouseoverOnBoard(e, shipLength);\n    };\n\n    boardOfPreparetionPage.onmouseout = function (e) {\n      handleOnmouseoutOnBoard(e, shipLength);\n    };\n  }\n\n  function checkIfYouCanAddShipOnThisCell(cellId, changeOnBoard) {\n    var shipElement;\n    var idInForbiddenArray = arrayOfForbiddenCells.find(function (id) {\n      return cellId === id;\n    });\n\n    if (idInForbiddenArray || changeOnBoard < 0 || 10 <= changeOnBoard) {\n      shipElement = false;\n    } else {\n      shipElement = cellId;\n    }\n\n    return shipElement;\n  }\n\n  function addCoordinates(idsOfShip) {\n    var newCountOfShips = countShips;\n    var key = choosenShipType[2];\n\n    if (idsOfShip.length === choosenShipType[0] && newCountOfShips[key] !== choosenShipType[1]) {\n      newCountOfShips[key] += 1;\n      setCountShips(newCountOfShips);\n\n      var mappedShips = _toConsumableArray(shipsOnMap);\n\n      for (var i = 0; i < idsOfShip.length; i++) {\n        mappedShips.push(idsOfShip[i]);\n        addCoordinatesWhereYouCantAddShipNow(idsOfShip[i]);\n      }\n\n      setStateAreYouChooseTheShip(false);\n      setShipsOnMap(mappedShips);\n    } else if (newCountOfShips[key] === choosenShipType[1]) {\n      alert('Все корабли этого типа уже были добавлены. Выберите другой корабль');\n    } else {\n      alert('нельзя тут ставить корабль');\n    }\n  }\n\n  function addShipOnMap(e) {\n    var offsetX = e.nativeEvent.offsetX;\n    var rowAndColumn = (0,_storage_incex__WEBPACK_IMPORTED_MODULE_2__.getRowAndColumn)(e.target.id);\n\n    if (stateAreYouChooseTheShip === true) {\n      e.target.onmouseover;\n      var idsOfShip = getIdsOfShip(rowAndColumn[0], rowAndColumn[1]);\n      addCoordinates(idsOfShip);\n    } else {\n      alert('Выбери корабль');\n    }\n  }\n\n  function handleOnMouseOverOnBoard(e) {\n    if (stateAreYouChooseTheShip === true) {\n      var cellId = (0,_storage_incex__WEBPACK_IMPORTED_MODULE_2__.getRowAndColumn)(e.target.id);\n      var idsOfShip = getIdsOfShip(cellId[0], cellId[1]);\n      showCoordintesOfElementsOfTheShipOnTheBoard(idsOfShip);\n    }\n  }\n\n  function handleOnMouseOutOnBoard(e) {\n    if (stateAreYouChooseTheShip === true) {\n      var cellId = (0,_storage_incex__WEBPACK_IMPORTED_MODULE_2__.getRowAndColumn)(e.target.id);\n      var idsOfShip = getIdsOfShip(cellId[0], cellId[1]);\n      hideCoordinatesOfElementsOfTheShipOnBoard(idsOfShip);\n    }\n  }\n\n  function showCoordintesOfElementsOfTheShipOnTheBoard(ship) {\n    var _iterator = _createForOfIteratorHelper(ship),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var elementOfShip = _step.value;\n\n        if (ship.length === choosenShipType[0]) {\n          document.getElementById(elementOfShip).style.background = 'blue';\n        } else {\n          document.getElementById(elementOfShip).style.background = 'red';\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n\n  function hideCoordinatesOfElementsOfTheShipOnBoard(ship) {\n    var _iterator2 = _createForOfIteratorHelper(ship),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var elementOfShip = _step2.value;\n        document.getElementById(elementOfShip).style.background = '';\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  }\n\n  var _loop = function _loop(j) {\n    var columnIndex = j;\n    var cellId = rowIndex + '_' + columnIndex;\n\n    if (shipsOnMap.find(function (id) {\n      return cellId === id;\n    })) {\n      var cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        id: cellId,\n        className: \"cell-with-ships\",\n        onClick: addShipOnMap\n      });\n      cells[j] = cell;\n    } else {\n      var _cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        id: cellId,\n        className: \"cell\",\n        onClick: addShipOnMap,\n        onMouseOver: handleOnMouseOverOnBoard,\n        onMouseOut: handleOnMouseOutOnBoard\n      });\n\n      cells[j] = _cell;\n    }\n  };\n\n  for (var j = 0; j < colums.length; j++) {\n    _loop(j);\n  }\n\n  return cells;\n}\n/**\n * \n * \n    let currentDroppable = null;\n\n    ball.onmousedown = function(event) {\n\n      let shiftX = event.clientX - e.getBoundingClientRect().left;\n      let shiftY = event.clientY - e.getBoundingClientRect().top;\n\n      e.style.position = 'absolute';\n      e.style.zIndex = 1000;\n      document.body.append(e);\n\n      moveAt(event.pageX, event.pageY);\n\n      function moveAt(pageX, pageY) {\n        e.style.left = pageX - shiftX + 'px';\n        e.style.top = pageY - shiftY + 'px';\n      }\n\n      function onMouseMove(event) {\n        moveAt(event.pageX, event.pageY);\n\n        e.hidden = true;\n        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);\n        e.hidden = false;\n\n        if (!elemBelow) return;\n\n        let droppableBelow = elemBelow.closest('.droppable');\n        if (currentDroppable != droppableBelow) {\n          if (currentDroppable) { // null если мы были не над droppable до этого события\n            // (например, над пустым пространством)\n            leaveDroppable(currentDroppable);\n          }\n          currentDroppable = droppableBelow;\n          if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события\n            // (например, только что покинули droppable)\n            enterDroppable(currentDroppable);\n          }\n        }\n      }\n\n      document.addEventListener('mousemove', onMouseMove);\n\n      e.onmouseup = function() {\n        document.removeEventListener('mousemove', onMouseMove);\n        e.onmouseup = null;\n      };\n\n    };\n\n    function enterDroppable(e) {\n      e.style.background = 'pink';\n    }\n\n    function leaveDroppable(e) {\n      e.style.background = '';\n    }\n\n    e.ondragstart = function() {\n      return false;\n    };\n * \n */\n\n//# sourceURL=webpack://battleships-react/./src/components/Board/Row/cell/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("af0241dc0cf12ee03e2a")
/******/ })();
/******/ 
/******/ }
);
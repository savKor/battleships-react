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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cells\": () => (/* binding */ Cells)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../App */ \"./src/App.js\");\n/* harmony import */ var _features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../features/counter/storageSlice */ \"./src/features/counter/storageSlice.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../storage */ \"./src/storage/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction Cells(_ref) {\n  var rowIndex = _ref.rowIndex,\n      colums = _ref.colums;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('cell'),\n      _useState2 = _slicedToArray(_useState, 1),\n      classForCell = _useState2[0];\n\n  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.selectState);\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  var countShips = store.countShips;\n  var shipPosition = store.shipPosition;\n  var arrayOfCellsDisplaedOnMap = store.arrayOfCellsDisplaedOnMap;\n  var stateAreYouChooseTheShip = store.stateAreYouChooseTheShip;\n  var choosenShipType = store.choosenShipType;\n  var arrayOfForbiddenCells = store.arrayOfForbiddenCells;\n  var shipsOnMap = store.shipsOnMap;\n  var cells = [];\n\n  function addIdsOfCellsWhereYouCantAddShipNow(cellId) {\n    var rowAndColumn = (0,_storage__WEBPACK_IMPORTED_MODULE_4__.getRowAndColumn)(cellId);\n    var row = rowAndColumn[1];\n    var column = rowAndColumn[0];\n\n    for (var i = row - 1; i <= row + 1; i++) {\n      var _rowIndex = i;\n\n      if (0 <= _rowIndex && _rowIndex < 10) {\n        pushAllIdsWhereYouCantAddShipsNow(_rowIndex, column);\n      }\n    }\n  }\n\n  function pushAllIdsWhereYouCantAddShipsNow(rowIndex, column) {\n    for (var j = column - 1; j <= column + 1; j++) {\n      var columnIndex = j;\n\n      if (0 <= columnIndex && columnIndex < 10) {\n        (function () {\n          var idOfCellWhereYouCanNoLongerAddShip = columnIndex + '_' + rowIndex;\n\n          if (!arrayOfForbiddenCells.find(function (id) {\n            return idOfCellWhereYouCanNoLongerAddShip === id;\n          })) {\n            dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateArrayOfForbiddenCells)(idOfCellWhereYouCanNoLongerAddShip));\n          }\n        })();\n      }\n    }\n  }\n\n  function getIdsOfShip(row, column, setShipOrNot) {\n    var shipIds = [];\n\n    for (var i = 0; i < choosenShipType[0]; i++) {\n      var shipElement = getIdOfCell(i, row, column, setShipOrNot);\n\n      if (shipElement !== false) {\n        shipIds.push(shipElement);\n      }\n    }\n\n    return shipIds;\n  }\n\n  function getIdOfCell(cycleNumber, row, column, setShipOrNot) {\n    var value = {\n      column: column,\n      row: row\n    };\n    var key = shipPosition === 'horizontal' ? 'column' : 'row';\n\n    if (cycleNumber === 0) {\n      value[key] = value[key];\n    } else if (cycleNumber % 2 === 0) {\n      value[key] = value[key] + 1;\n    } else if (cycleNumber >= 3) {\n      value[key] = value[key] + 2;\n    } else {\n      value[key] = value[key] - 1;\n    }\n\n    var cellId = value['row'] + '_' + value['column'];\n    var shipId = checkIfYouCanAddShipOnThisCell(cellId, value[key], setShipOrNot);\n    return shipId;\n  }\n\n  function checkIfYouCanAddShipOnThisCell(cellId, changeOnBoard, setShipOrNot) {\n    var shipElement;\n    var idInForbiddenArray = setShipOrNot === true ? arrayOfForbiddenCells.find(function (id) {\n      return cellId === id;\n    }) : false;\n\n    if (idInForbiddenArray || changeOnBoard < 0 || 10 <= changeOnBoard) {\n      shipElement = false;\n    } else {\n      shipElement = cellId;\n    }\n\n    return shipElement;\n  }\n\n  function addCoordinates(idsOfShip) {\n    var key = choosenShipType[2];\n\n    if (idsOfShip.length === choosenShipType[0] && countShips[key] !== choosenShipType[1]) {\n      dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateArrayOfCellsDisplaedOnMap)([]));\n      dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateCountShips)(key));\n\n      for (var i = 0; i < idsOfShip.length; i++) {\n        dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateShipsOnMap)(idsOfShip[i]));\n        addIdsOfCellsWhereYouCantAddShipNow(idsOfShip[i]);\n      }\n\n      dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateStateAreYouChooseTheShip)(false));\n      dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateChoosenShipType)([]));\n    } else if (countShips[key] === choosenShipType[1]) {\n      alert('Все корабли этого типа уже были добавлены. Выберите другой корабль');\n    } else {\n      alert('нельзя тут ставить корабль');\n    }\n  }\n\n  function addShipOnMap(e) {\n    var rowAndColumn = (0,_storage__WEBPACK_IMPORTED_MODULE_4__.getRowAndColumn)(e.target.id);\n\n    if (stateAreYouChooseTheShip === true) {\n      e.target.onmouseover;\n      var setOrNot = true;\n      var idsOfShip = getIdsOfShip(rowAndColumn[0], rowAndColumn[1], setOrNot);\n      addCoordinates(idsOfShip);\n    } else {\n      alert('Выбери корабль');\n    }\n  }\n\n  function handleOnMouseOverOnBoard(e) {\n    var cellId = (0,_storage__WEBPACK_IMPORTED_MODULE_4__.getRowAndColumn)(e.target.id);\n    var setOrNot = false;\n    var idsOfShip = getIdsOfShip(cellId[0], cellId[1], setOrNot);\n    dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateArrayOfCellsDisplaedOnMap)(idsOfShip));\n  }\n\n  function addListenersToShowTheShip(e) {\n    if (stateAreYouChooseTheShip === true) {\n      handleOnMouseOverOnBoard(e);\n\n      e.target.onmouseout = function () {\n        dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateArrayOfCellsDisplaedOnMap)([]));\n      };\n    }\n  }\n\n  var _loop = function _loop(j) {\n    var columnIndex = j;\n    var cellId = rowIndex + '_' + columnIndex;\n    var cellOnMap = shipsOnMap.find(function (id) {\n      return cellId === id;\n    });\n    var cellOnMouseOver = arrayOfCellsDisplaedOnMap.find(function (id) {\n      return cellId === id;\n    });\n    var idInForbiddenArray = arrayOfForbiddenCells.find(function (id) {\n      return cellId === id;\n    });\n    var cellClass = classForCell;\n\n    if (cellOnMap || cellOnMouseOver && idInForbiddenArray || cellOnMouseOver && cellOnMap) {\n      cellClass = 'cell-with-ships';\n    } else if (cellOnMouseOver) {\n      cellClass = 'cell-toggle-ship';\n    }\n\n    var cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: cellId,\n      className: cellClass,\n      onClick: addShipOnMap,\n      onMouseOver: addListenersToShowTheShip\n    });\n    cells[j] = cell;\n  };\n\n  for (var j = 0; j < colums.length; j++) {\n    _loop(j);\n  }\n\n  return cells;\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Main-board/Row/Cell/index.js?");

/***/ }),

/***/ "./src/components/Main-board/Row/index.js":
/*!************************************************!*\
  !*** ./src/components/Main-board/Row/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Row\": () => (/* binding */ Row)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell */ \"./src/components/Main-board/Row/Cell/index.js\");\n\n\nfunction Row(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: props.rowIndex,\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Cell__WEBPACK_IMPORTED_MODULE_1__.Cells, props));\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Main-board/Row/index.js?");

/***/ }),

/***/ "./src/components/Main-board/index.js":
/*!********************************************!*\
  !*** ./src/components/Main-board/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row */ \"./src/components/Main-board/Row/index.js\");\n\n\nvar size = 10;\nfunction Board() {\n  function createMatrix() {\n    var matrix = [];\n\n    for (var i = 0; i < size; i++) {\n      matrix[i] = getMatrixRowWithEmptyElement();\n    }\n\n    return matrix;\n  }\n\n  function getMatrixRowWithEmptyElement() {\n    var row = [];\n\n    for (var j = 0; j < size; j++) {\n      row[j] = undefined;\n    }\n\n    return row;\n  }\n\n  var matrix = createMatrix();\n  var field = [];\n\n  for (var i = 0; i < matrix.length; i++) {\n    var colums = matrix[i];\n    var rowIndex = i;\n    var row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Row__WEBPACK_IMPORTED_MODULE_1__.Row, {\n      rowIndex: rowIndex,\n      colums: colums\n    });\n    field[i] = row;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"board\"\n  }, field);\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Main-board/index.js?");

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainPage\": () => (/* binding */ MainPage)\n/* harmony export */ });\n/* harmony import */ var _Main_board___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main-board/ */ \"./src/components/Main-board/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/counter/storageSlice */ \"./src/features/counter/storageSlice.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App */ \"./src/App.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nfunction MainPage() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      usersLogin = _useState2[0],\n      setUsersLogin = _useState2[1];\n\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();\n  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.selectState);\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  var shipPosition = store.shipPosition;\n  var choosenShipType = store.choosenShipType;\n  var countShips = store.countShips;\n  var shipsOnMap = store.shipsOnMap;\n  var shipType = {\n    oneCellShip: [1, 4, 'oneCellShip'],\n    twoCellShip: [2, 3, 'twoCellShip'],\n    threeCellShip: [3, 2, 'threeCellShip'],\n    fourCellShip: [4, 1, 'fourCellShip']\n  };\n\n  function chooseShipFromList(_x) {\n    return _chooseShipFromList.apply(this, arguments);\n  }\n\n  function _chooseShipFromList() {\n    _chooseShipFromList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {\n      var key;\n      return _regeneratorRuntime().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateStateAreYouChooseTheShip)(true));\n              key = e.target.id;\n              dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateChoosenShipType)(shipType[key]));\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _chooseShipFromList.apply(this, arguments);\n  }\n\n  function changePosition() {\n    return _changePosition.apply(this, arguments);\n  }\n\n  function _changePosition() {\n    _changePosition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {\n      return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (shipPosition === 'horizontal') {\n                dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateShipPosition)('vertical'));\n              } else {\n                dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateShipPosition)('horizontal'));\n              }\n\n            case 1:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _changePosition.apply(this, arguments);\n  }\n\n  function addIdsOsShips() {\n    if (shipsOnMap.length === 20 && usersLogin === 'Вcе игроки зашли') {\n      _App__WEBPACK_IMPORTED_MODULE_4__.ws.send(JSON.stringify(shipsOnMap));\n      var path = \"/public/main/battle/\";\n      navigate(path);\n    } else {\n      console.log('Второй игрок ещё не зашёл');\n    }\n  }\n\n  _App__WEBPACK_IMPORTED_MODULE_4__.ws.onmessage = function (_ref) {\n    var data = _ref.data;\n    setUsersLogin(data);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    id: \"main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    id: \"ship-counter\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"\\u041E\\u0434\\u043D\\u043E\\u043A\\u043B\\u0435\\u0442\\u043E\\u0447\\u043D\\u044B\\u0435 \\u043A\\u043E\\u0440\\u0430\\u0431\\u043B\\u0438 \", countShips.oneCellShip), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"\\u0414\\u0432\\u0443\\u0445\\u043A\\u043B\\u0435\\u0442\\u043E\\u0447\\u043D\\u044B\\u0435 \\u043A\\u043E\\u0440\\u0430\\u0431\\u043B\\u0438 \", countShips.twoCellShip), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"\\u0422\\u0440\\u0451\\u0445\\u043A\\u043B\\u0435\\u0442\\u043E\\u0447\\u043D\\u044B\\u0435 \\u043A\\u043E\\u0440\\u0430\\u0431\\u043B\\u0438 \", countShips.threeCellShip), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"\\u0427\\u0435\\u0442\\u044B\\u0440\\u0451\\u0445\\u043A\\u043B\\u0435\\u0442\\u043E\\u0447\\u043D\\u044B\\u0435 \\u043A\\u043E\\u0440\\u0430\\u0431\\u043B\\u0438 \", countShips.fourCellShip)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    id: \"info-position\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"\\u041A\\u043E\\u0440\\u0430\\u0431\\u043B\\u044C \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441 \\u0432 \", shipPosition, \" \\u043F\\u043E\\u043B\\u043E\\u0436\\u0435\\u043D\\u0438\\u0438. \\u0412\\u044B\\u0431\\u0440\\u0430\\u043D\\u043D\\u044B\\u0439 \\u0442\\u0438\\u043F \\u043A\\u043E\\u0440\\u0430\\u0431\\u043B\\u044F: \", choosenShipType[2])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    id: \"board-of-the-game\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    id: \"list-of-ships\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"\\u0421\\u043F\\u0438\\u0441\\u043E\\u043A \\u043A\\u043E\\u0440\\u0430\\u0431\\u043B\\u0435\\u0439\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    id: \"change-position\",\n    onClick: changePosition\n  }, \"\\u043F\\u0435\\u0440\\u0435\\u0432\\u0435\\u0440\\u043D\\u0443\\u0442\\u044C \\u043A\\u043E\\u0440\\u0430\\u0431\\u043B\\u044C\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    id: \"oneCellShip\",\n    \"class\": \"type-of-ship\",\n    onClick: chooseShipFromList\n  }, \"\\u043E\\u0434\\u043D\\u0430 \\u043A\\u043B\\u0435\\u0442\\u043A\\u0430\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    id: \"twoCellShip\",\n    \"class\": \"type-of-ship\",\n    onClick: chooseShipFromList\n  }, \"\\u0434\\u0432\\u0435 \\u043A\\u043B\\u0435\\u0442\\u043A\\u0438\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    id: \"threeCellShip\",\n    \"class\": \"type-of-ship\",\n    onClick: chooseShipFromList\n  }, \"\\u0442\\u0440\\u0438 \\u043A\\u043B\\u0435\\u0442\\u043A\\u0438\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    id: \"fourCellShip\",\n    \"class\": \"type-of-ship\",\n    onClick: chooseShipFromList\n  }, \"\\u0447\\u0435\\u0442\\u044B\\u0440\\u0435 \\u043A\\u043B\\u0435\\u0442\\u043A\\u0438\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Main_board___WEBPACK_IMPORTED_MODULE_0__.Board, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    id: \"start-the-game\",\n    onClick: addIdsOsShips\n  }, \"\\u041D\\u0430\\u0447\\u0430\\u0442\\u044C \\u0438\\u0433\\u0440\\u0443\"))));\n}\n\n//# sourceURL=webpack://battleships-react/./src/components/Main.js?");

/***/ }),

/***/ "./src/storage/index.js":
/*!******************************!*\
  !*** ./src/storage/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRowAndColumn\": () => (/* binding */ getRowAndColumn)\n/* harmony export */ });\nfunction getRowAndColumn(cellId) {\n  var coordinates = [];\n  var splitId = cellId.split('_');\n  var idNumbers = splitId.map(Number);\n  var rowIndex = idNumbers[1];\n  var columnIndex = idNumbers[0];\n  coordinates.push(columnIndex, rowIndex);\n  return coordinates;\n}\n\n//# sourceURL=webpack://battleships-react/./src/storage/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7581fc23e97dc3e8a01c")
/******/ })();
/******/ 
/******/ }
);
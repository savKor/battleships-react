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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cells\": () => (/* binding */ Cells)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.. */ \"./src/components/Main-board/index.js\");\n/* harmony import */ var _features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../features/counter/storageSlice */ \"./src/features/counter/storageSlice.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../storage */ \"./src/storage/index.js\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Main */ \"./src/components/Main.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nfunction Cells(_ref) {\n  var rowIndex = _ref.rowIndex,\n      colums = _ref.colums;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_5__.ContextShipState),\n      stateAreYouChooseTheShip = _useContext.stateAreYouChooseTheShip,\n      setStateAreYouChooseTheShip = _useContext.setStateAreYouChooseTheShip;\n\n  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_5__.ContextShipPosition),\n      shipPosition = _useContext2.shipPosition;\n\n  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Main__WEBPACK_IMPORTED_MODULE_5__.ContextChoosenShip),\n      choosenShipType = _useContext3.choosenShipType;\n\n  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_2__.ContextForbiddenCells),\n      arrayOfForbiddenCells = _useContext4.arrayOfForbiddenCells,\n      setArrayOfForbiddenCells = _useContext4.setArrayOfForbiddenCells;\n\n  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_2__.ContextCounter),\n      countShips = _useContext5.countShips,\n      setCountShips = _useContext5.setCountShips;\n\n  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_2__.ContextShipOnMap),\n      shipsOnMap = _useContext6.shipsOnMap,\n      setShipsOnMap = _useContext6.setShipsOnMap;\n\n  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_2__.ContextDisplaedShipOnMap),\n      arrayOfShownShipOnMap = _useContext7.arrayOfShownShipOnMap,\n      setArrayOfShownShipOnMap = _useContext7.setArrayOfShownShipOnMap;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('cell'),\n      _useState2 = _slicedToArray(_useState, 1),\n      classForCell = _useState2[0];\n\n  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.selectState);\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  var cells = [];\n\n  function addCoordinatesWhereYouCantAddShipNow(cellId) {\n    var rowAndColumn = (0,_storage__WEBPACK_IMPORTED_MODULE_4__.getRowAndColumn)(cellId);\n    var row = rowAndColumn[1];\n    var column = rowAndColumn[0];\n\n    for (var i = row - 1; i <= row + 1; i++) {\n      var _rowIndex = i;\n\n      if (0 <= _rowIndex && _rowIndex < 10) {\n        for (var j = column - 1; j <= column + 1; j++) {\n          var columnIndex = j;\n\n          if (0 <= columnIndex && columnIndex < 10) {\n            (function () {\n              var idOfCellWhereYouCanNoLongerAddShip = columnIndex + '_' + _rowIndex;\n\n              if (!arrayOfForbiddenCells.find(function (id) {\n                return idOfCellWhereYouCanNoLongerAddShip === id;\n              })) {\n                var newArray = arrayOfForbiddenCells;\n                newArray.push(idOfCellWhereYouCanNoLongerAddShip);\n                setArrayOfForbiddenCells(newArray);\n              }\n            })();\n          }\n        }\n      }\n    }\n  }\n\n  function getIdsOfShip(row, column, setShipOrNot) {\n    var shipIds = [];\n\n    for (var i = 0; i < choosenShipType[0]; i++) {\n      var shipElement = getIdOfCell(i, row, column, setShipOrNot);\n\n      if (shipElement !== false) {\n        shipIds.push(shipElement);\n      }\n    }\n\n    return shipIds;\n  }\n\n  function getIdOfCell(cycleNumber, row, column, setShipOrNot) {\n    var value = {\n      column: column,\n      row: row\n    };\n    var key = shipPosition === 'horizontal' ? 'column' : 'row';\n\n    if (cycleNumber === 0) {\n      value[key] = value[key];\n    } else if (cycleNumber % 2 === 0) {\n      value[key] = value[key] + 1;\n    } else if (cycleNumber >= 3) {\n      value[key] = value[key] + 2;\n    } else {\n      value[key] = value[key] - 1;\n    }\n\n    var cellId = value['row'] + '_' + value['column'];\n    var shipId = checkIfYouCanAddShipOnThisCell(cellId, value[key], setShipOrNot);\n    return shipId;\n  }\n\n  function checkIfYouCanAddShipOnThisCell(cellId, changeOnBoard, setShipOrNot) {\n    var shipElement;\n    var idInForbiddenArray = setShipOrNot === true ? arrayOfForbiddenCells.find(function (id) {\n      return cellId === id;\n    }) : false;\n\n    if (idInForbiddenArray || changeOnBoard < 0 || 10 <= changeOnBoard) {\n      shipElement = false;\n    } else {\n      shipElement = cellId;\n    }\n\n    return shipElement;\n  }\n\n  function addCoordinates(_x) {\n    return _addCoordinates.apply(this, arguments);\n  }\n\n  function _addCoordinates() {\n    _addCoordinates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(idsOfShip) {\n      var newCountOfShips, key, mappedShips, i;\n      return _regeneratorRuntime().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              debugger;\n              newCountOfShips = store.countShips;\n              key = choosenShipType[2];\n\n              if (idsOfShip.length === choosenShipType[0] && newCountOfShips[key] !== choosenShipType[1]) {\n                debugger;\n                newCountOfShips[key] += 1;\n                setArrayOfShownShipOnMap([]);\n                dispatch((0,_features_counter_storageSlice__WEBPACK_IMPORTED_MODULE_3__.updateCountShips)(newCountOfShips));\n                mappedShips = _toConsumableArray(shipsOnMap);\n\n                for (i = 0; i < idsOfShip.length; i++) {\n                  mappedShips.push(idsOfShip[i]);\n                  addCoordinatesWhereYouCantAddShipNow(idsOfShip[i]);\n                }\n\n                setStateAreYouChooseTheShip(false);\n                setShipsOnMap(mappedShips);\n              } else if (newCountOfShips[key] === choosenShipType[1]) {\n                alert('Все корабли этого типа уже были добавлены. Выберите другой корабль');\n              } else {\n                alert('нельзя тут ставить корабль');\n              }\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _addCoordinates.apply(this, arguments);\n  }\n\n  function addShipOnMap(e) {\n    var offsetX = e.nativeEvent.offsetX;\n    var rowAndColumn = (0,_storage__WEBPACK_IMPORTED_MODULE_4__.getRowAndColumn)(e.target.id);\n\n    if (stateAreYouChooseTheShip === true) {\n      e.target.onmouseover;\n      var setOrNot = true;\n      var idsOfShip = getIdsOfShip(rowAndColumn[0], rowAndColumn[1], setOrNot);\n      addCoordinates(idsOfShip);\n    } else {\n      alert('Выбери корабль');\n    }\n  }\n\n  function handleOnMouseOverOnBoard(e) {\n    var cellId = (0,_storage__WEBPACK_IMPORTED_MODULE_4__.getRowAndColumn)(e.target.id);\n    var setOrNot = false;\n    var idsOfShip = getIdsOfShip(cellId[0], cellId[1], setOrNot);\n    setArrayOfShownShipOnMap(idsOfShip);\n  }\n\n  function addListenersToShowTheShip(e) {\n    if (stateAreYouChooseTheShip === true) {\n      handleOnMouseOverOnBoard(e);\n\n      e.target.onmouseout = function () {\n        setArrayOfShownShipOnMap([]);\n      };\n    }\n  }\n\n  var _loop = function _loop(j) {\n    var columnIndex = j;\n    var cellId = rowIndex + '_' + columnIndex;\n    var cellOnMap = shipsOnMap.find(function (id) {\n      return cellId === id;\n    });\n    var cellOnMouseOver = arrayOfShownShipOnMap.find(function (id) {\n      return cellId === id;\n    });\n    var idInForbiddenArray = arrayOfForbiddenCells.find(function (id) {\n      return cellId === id;\n    });\n    var cellClass = classForCell;\n\n    if (cellOnMap) {\n      cellClass = 'cell-with-ships';\n    } else if (cellOnMouseOver) {\n      if (idInForbiddenArray || arrayOfShownShipOnMap.length !== choosenShipType[0]) {\n        cellClass = 'cell-with-ships';\n      } else {\n        cellClass = 'cell-toggle-ship';\n      }\n    }\n\n    var cell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: cellId,\n      className: cellClass,\n      onClick: addShipOnMap,\n      onMouseOver: addListenersToShowTheShip\n    });\n    cells[j] = cell;\n  };\n\n  for (var j = 0; j < colums.length; j++) {\n    _loop(j);\n  }\n\n  return cells;\n}\n/**\n * \n * \n    let currentDroppable = null;\n\n    ball.onmousedown = function(event) {\n\n      let shiftX = event.clientX - e.getBoundingClientRect().left;\n      let shiftY = event.clientY - e.getBoundingClientRect().top;\n\n      e.style.position = 'absolute';\n      e.style.zIndex = 1000;\n      document.body.append(e);\n\n      moveAt(event.pageX, event.pageY);\n\n      function moveAt(pageX, pageY) {\n        e.style.left = pageX - shiftX + 'px';\n        e.style.top = pageY - shiftY + 'px';\n      }\n\n      function onMouseMove(event) {\n        moveAt(event.pageX, event.pageY);\n\n        e.hidden = true;\n        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);\n        e.hidden = false;\n\n        if (!elemBelow) return;\n\n        let droppableBelow = elemBelow.closest('.droppable');\n        if (currentDroppable != droppableBelow) {\n          if (currentDroppable) { // null если мы были не над droppable до этого события\n            // (например, над пустым пространством)\n            leaveDroppable(currentDroppable);\n          }\n          currentDroppable = droppableBelow;\n          if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события\n            // (например, только что покинули droppable)\n            enterDroppable(currentDroppable);\n          }\n        }\n      }\n\n      document.addEventListener('mousemove', onMouseMove);\n\n      e.onmouseup = function() {\n        document.removeEventListener('mousemove', onMouseMove);\n        e.onmouseup = null;\n      };\n\n    };\n\n    function enterDroppable(e) {\n      e.style.background = 'pink';\n    }\n\n    function leaveDroppable(e) {\n      e.style.background = '';\n    }\n\n    e.ondragstart = function() {\n      return false;\n    };\n * \n */\n\n//# sourceURL=webpack://battleships-react/./src/components/Main-board/Row/Cell/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f8fb3bb78e3a5239a45d")
/******/ })();
/******/ 
/******/ }
);
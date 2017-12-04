(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RegExBlocks"] = factory();
	else
		root["RegExBlocks"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Block_1 = __webpack_require__(1);
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group(blocks) {
        if (blocks === void 0) { blocks = []; }
        var _this = _super.call(this) || this;
        _this.isCapturing = false;
        _this.blocks = [];
        _this.blocks = blocks;
        return _this;
    }
    Group.prototype.add = function (block) {
        this.blocks.push(block);
    };
    Group.prototype.toString = function () {
        var blockStr = '';
        this.blocks.forEach(function (blk) { return blockStr += blk.toString(); });
        if (!this.isCapturing && !this.quantifier)
            return blockStr;
        return '(' + this.innerModifier() + blockStr + ')' + this.getQuantifierString();
    };
    Group.prototype.innerModifier = function () {
        return (this.isCapturing) ? '' : '?:';
    };
    return Group;
}(Block_1.Block));
exports.Group = Group;
var capture = function (group) {
    group.isCapturing = true;
    return group;
};
exports.capture = capture;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Block = /** @class */ (function () {
    function Block() {
        this.isCapture = false;
    }
    Block.prototype.setQuantifier = function (quantifier) {
        this.quantifier = quantifier;
    };
    Block.prototype.getQuantifierString = function () {
        return (this.quantifier) ? this.quantifier.symbol : '';
    };
    return Block;
}());
exports.Block = Block;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Block_1 = __webpack_require__(1);
var Character = /** @class */ (function (_super) {
    __extends(Character, _super);
    function Character() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Character;
}(Block_1.Block));
exports.Character = Character;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RegularExpression_1 = __webpack_require__(4);
exports.RegularExpression = RegularExpression_1.RegularExpression;
var Group_1 = __webpack_require__(0);
exports.Group = Group_1.Group;
var Alternator_1 = __webpack_require__(5);
exports.Alternator = Alternator_1.Alternator;
var CharacterLiteral_1 = __webpack_require__(6);
exports.whitespace = CharacterLiteral_1.whitespace;
exports.string = CharacterLiteral_1.string;
exports.digit = CharacterLiteral_1.digit;
exports.word = CharacterLiteral_1.word;
var CharacterSet_1 = __webpack_require__(7);
exports.CharacterSet = CharacterSet_1.CharacterSet;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RegularExpression = /** @class */ (function () {
    function RegularExpression() {
        this.blocks = [];
        this.flags = [];
        this.startsWith = true;
        this.endsWith = true;
    }
    RegularExpression.prototype.add = function (block) {
        this.blocks.push(block);
    };
    RegularExpression.prototype.toString = function () {
        var start = (this.startsWith) ? '^' : '';
        var end = (this.endsWith) ? '$' : '';
        var str = '';
        this.blocks.forEach(function (blk) { return str += blk.toString(); });
        return start + str + end;
    };
    RegularExpression.prototype.compile = function () {
        return new RegExp(this.toString(), this.flags.join(''));
    };
    return RegularExpression;
}());
exports.RegularExpression = RegularExpression;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Group_1 = __webpack_require__(0);
var Alternator = /** @class */ (function (_super) {
    __extends(Alternator, _super);
    function Alternator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alternator.prototype.toString = function () {
        var opts_string = [];
        this.blocks.forEach(function (opt) { return opts_string.push(opt.toString()); });
        return '(' + this.innerModifier() + opts_string.join('|') + ')' + this.getQuantifierString();
    };
    return Alternator;
}(Group_1.Group));
exports.Alternator = Alternator;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Character_1 = __webpack_require__(2);
var CharacterLiteral = /** @class */ (function (_super) {
    __extends(CharacterLiteral, _super);
    function CharacterLiteral(symbol) {
        var _this = _super.call(this) || this;
        _this.symbol = symbol;
        return _this;
    }
    CharacterLiteral.prototype.toString = function () {
        var qs = this.getQuantifierString();
        var sy = this.symbol;
        if (qs === '')
            return sy;
        if (sy.length === 1)
            return sy + qs;
        if (sy.length === 2 && sy[0] === '\\')
            return sy + qs;
        return '(?:' + this.symbol + ')' + qs;
    };
    return CharacterLiteral;
}(Character_1.Character));
var StringLiteral = /** @class */ (function (_super) {
    __extends(StringLiteral, _super);
    function StringLiteral(symbol) {
        var _this = _super.call(this, StringLiteral.escapeSpecial(symbol)) || this;
        _this.symbol = symbol;
        return _this;
    }
    StringLiteral.escapeSpecial = function (str) {
        // TODO - fix this?
        return str.replace(/([.?()])/g, 'test');
    };
    return StringLiteral;
}(CharacterLiteral));
exports.StringLiteral = StringLiteral;
var whitespace = function () { return new CharacterLiteral('\\s'); };
exports.whitespace = whitespace;
var digit = function () { return new CharacterLiteral('\\d'); };
exports.digit = digit;
var word = function () { return new CharacterLiteral('\\w'); };
exports.word = word;
var string = function (string) { return new StringLiteral(string); };
exports.string = string;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Character_1 = __webpack_require__(2);
var CharacterSet = /** @class */ (function (_super) {
    __extends(CharacterSet, _super);
    function CharacterSet(charString) {
        var _this = _super.call(this) || this;
        _this.charString = charString;
        _this.isNot = false;
        return _this;
    }
    CharacterSet.prototype.toString = function () {
        var mod = (this.isNot) ? '^' : '';
        return '[' + mod + this.charString + ']';
    };
    return CharacterSet;
}(Character_1.Character));
exports.CharacterSet = CharacterSet;


/***/ })
/******/ ]);
});
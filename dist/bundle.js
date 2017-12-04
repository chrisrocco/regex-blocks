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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
var Block_1 = __webpack_require__(2);
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
    Group.prototype.concat = function (block) {
        this.blocks.push(block);
    };
    Group.prototype.capture = function () {
        this.isCapturing = true;
        return this;
    };
    Group.prototype.nonCapturing = function () {
        this.isCapturing = false;
        return this;
    };
    Group.prototype.toString = function () {
        var blockStr = '';
        this.blocks.forEach(function (blk) { return blockStr += blk.toString(); });
        if (!this.isCapturing && !this.quantifier)
            return blockStr;
        return this.addModifiers('(' + this.innerModifier() + blockStr + ')');
    };
    Group.prototype.innerModifier = function () {
        return (this.isCapturing) ? '' : '?:';
    };
    return Group;
}(Block_1.Block));
exports.Group = Group;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RegularExpression = /** @class */ (function () {
    function RegularExpression(blocks) {
        if (blocks === void 0) { blocks = []; }
        this.leadingAnchor = false;
        this.trailingAnchor = false;
        if (!blocks)
            blocks = [];
        this.blocks = blocks;
        this.flags = ['g'];
    }
    RegularExpression.prototype.concat = function () {
        var blocks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            blocks[_i] = arguments[_i];
        }
        (_a = this.blocks).push.apply(_a, blocks);
        return this; // for chained calls
        var _a;
    };
    RegularExpression.prototype.fullMatch = function () {
        this.leadingAnchor = this.trailingAnchor = true;
        return this;
    };
    RegularExpression.prototype.partialMatch = function () {
        this.leadingAnchor = this.trailingAnchor = false;
        return this;
    };
    RegularExpression.prototype.startsWith = function () {
        this.leadingAnchor = true;
        return this;
    };
    RegularExpression.prototype.endsWith = function () {
        this.trailingAnchor = true;
        return this;
    };
    RegularExpression.prototype.setFlags = function (flags) {
        this.flags = flags;
        return this;
    };
    RegularExpression.prototype.toString = function () {
        var start = (this.leadingAnchor) ? '^' : '';
        var end = (this.trailingAnchor) ? '$' : '';
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Quantifier_1 = __webpack_require__(8);
var Block = /** @class */ (function () {
    function Block() {
        this.isCapture = false;
    }
    Block.prototype.zeroOrMore = function () {
        this.quantifier = Quantifier_1.ZERO_OR_MORE;
        return this;
    };
    Block.prototype.oneOrMore = function () {
        this.quantifier = Quantifier_1.ONE_OR_MORE;
        return this;
    };
    Block.prototype.optional = function () {
        this.quantifier = Quantifier_1.ZERO_OR_ONE;
        return this;
    };
    Block.prototype.lazy = function () {
        if (this.quantifier)
            this.quantifier.lazy();
        else
            throw "Tried to make lazy quantifier on expression with no quantifier set!";
        return this;
    };
    Block.prototype.repeat = function (min, max) {
        if (min === void 0) { min = 1; }
        if (max === void 0) { max = 1; }
        this.quantifier = Quantifier_1.repeat(min, max);
        return this;
    };
    Block.prototype.whenFollowing = function (block) {
        this.lookBehind = block;
        return this;
    };
    Block.prototype.whenFollowedBy = function (block) {
        this.lookAhead = block;
        return this;
    };
    Block.prototype.getQuantifierString = function () {
        return (this.quantifier) ? this.quantifier.toString() : '';
    };
    Block.prototype.getLookAheadString = function () {
        if (!this.lookAhead)
            return '';
        return "(?=" + this.lookAhead.toString() + ")";
    };
    Block.prototype.getLookBehindString = function () {
        if (!this.lookBehind)
            return '';
        return '(?!' + this.lookBehind.toString() + ')';
    };
    Block.prototype.addModifiers = function (str) {
        return this.getLookBehindString() + str + this.getQuantifierString() + this.getLookAheadString();
    };
    return Block;
}());
exports.Block = Block;


/***/ }),
/* 3 */
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
        return this.addModifiers('(' + this.innerModifier() + opts_string.join('|') + ')');
    };
    return Alternator;
}(Group_1.Group));
exports.Alternator = Alternator;


/***/ }),
/* 4 */
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
var Character_1 = __webpack_require__(5);
var CharacterSet = /** @class */ (function (_super) {
    __extends(CharacterSet, _super);
    function CharacterSet(charString) {
        var _this = _super.call(this) || this;
        _this.charString = charString;
        _this.isNot = false;
        return _this;
    }
    CharacterSet.prototype.not = function () {
        this.isNot = true;
        return this;
    };
    CharacterSet.prototype.toString = function () {
        var mod = (this.isNot) ? '^' : '';
        return this.addModifiers('[' + mod + this.charString + ']');
    };
    return CharacterSet;
}(Character_1.Character));
exports.CharacterSet = CharacterSet;


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
var Block_1 = __webpack_require__(2);
var Character = /** @class */ (function (_super) {
    __extends(Character, _super);
    function Character() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Character;
}(Block_1.Block));
exports.Character = Character;


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
var Character_1 = __webpack_require__(5);
var CharacterLiteral = /** @class */ (function (_super) {
    __extends(CharacterLiteral, _super);
    function CharacterLiteral(symbol) {
        var _this = _super.call(this) || this;
        _this.symbol = symbol;
        return _this;
    }
    CharacterLiteral.prototype.toString = function () {
        var qs = this.getQuantifierString();
        var la = this.getLookAheadString();
        var lb = this.getLookBehindString();
        var sy = this.symbol;
        if (qs === '' && la === '' && lb === '')
            return sy;
        if (sy.length === 1)
            return this.addModifiers(sy);
        if (sy.length === 2 && sy[0] === '\\')
            return this.addModifiers(sy);
        return this.addModifiers('(?:' + this.symbol + ')');
    };
    return CharacterLiteral;
}(Character_1.Character));
exports.CharacterLiteral = CharacterLiteral;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var RegularExpression_1 = __webpack_require__(1);
exports.RegularExpression = RegularExpression_1.RegularExpression;
var Group_1 = __webpack_require__(0);
exports.Group = Group_1.Group;
var Alternator_1 = __webpack_require__(3);
exports.Alternator = Alternator_1.Alternator;
var CharacterSet_1 = __webpack_require__(4);
exports.CharacterSet = CharacterSet_1.CharacterSet;
__export(__webpack_require__(9));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Quantifier = /** @class */ (function () {
    function Quantifier(symbol, isLazy) {
        if (isLazy === void 0) { isLazy = false; }
        this.symbol = symbol;
        this.isLazy = isLazy;
    }
    Quantifier.prototype.lazy = function () {
        this.isLazy = true;
        return this;
    };
    Quantifier.prototype.toString = function () {
        var lazy = (this.isLazy) ? "?" : "";
        return this.symbol + lazy;
    };
    return Quantifier;
}());
exports.Quantifier = Quantifier;
var repeat = function (min, max) {
    if (min === void 0) { min = 1; }
    if (max === void 0) { max = 1; }
    return new Quantifier("{" + min + "," + max + "}");
};
exports.repeat = repeat;
var ONE_OR_MORE = new Quantifier('+');
exports.ONE_OR_MORE = ONE_OR_MORE;
var ZERO_OR_MORE = new Quantifier('*');
exports.ZERO_OR_MORE = ZERO_OR_MORE;
var ZERO_OR_ONE = repeat(0, 1);
exports.ZERO_OR_ONE = ZERO_OR_ONE;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Alternator_1 = __webpack_require__(3);
var CharacterLiteral_1 = __webpack_require__(6);
var Group_1 = __webpack_require__(0);
var CharacterSet_1 = __webpack_require__(4);
var RegularExpression_1 = __webpack_require__(1);
var StringLiteral_1 = __webpack_require__(10);
/**
 * BLOCK FACTORIES
 * =======================
 */
var regex = function () {
    var blocks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        blocks[_i] = arguments[_i];
    }
    return new RegularExpression_1.RegularExpression(blocks);
};
exports.regex = regex;
var anyOf = function () {
    var blocks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        blocks[_i] = arguments[_i];
    }
    return new Alternator_1.Alternator(blocks);
};
exports.anyOf = anyOf;
var group = function () {
    var blocks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        blocks[_i] = arguments[_i];
    }
    return new Group_1.Group(blocks);
};
exports.group = group;
var inSet = function (charList) { return new CharacterSet_1.CharacterSet(charList); };
exports.inSet = inSet;
var backRef = function (n) { return new CharacterLiteral_1.CharacterLiteral('\\' + n); };
exports.backRef = backRef;
var str = function (rawString) { return new StringLiteral_1.StringLiteral(rawString); };
exports.str = str;
// special tokens
var space = function () { return new CharacterLiteral_1.CharacterLiteral('\\s'); };
exports.space = space;
var digit = function () { return new CharacterLiteral_1.CharacterLiteral('\\d'); };
exports.digit = digit;
var word = function () { return new CharacterLiteral_1.CharacterLiteral('\\w'); };
exports.word = word;
var notSpace = function () { return new CharacterLiteral_1.CharacterLiteral('\\S'); };
exports.notSpace = notSpace;
var notDigit = function () { return new CharacterLiteral_1.CharacterLiteral('\\D'); };
exports.notDigit = notDigit;
var notWord = function () { return new CharacterLiteral_1.CharacterLiteral('\\W'); };
exports.notWord = notWord;
var anything = function () { return new CharacterLiteral_1.CharacterLiteral('.'); };
exports.anything = anything;
/**
 * SETTINGS WRAPPERS
 * =======================
 */
var capture = function () {
    var blocks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        blocks[_i] = arguments[_i];
    }
    return group.apply(void 0, blocks).capture();
};
exports.capture = capture;


/***/ }),
/* 10 */
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
var CharacterLiteral_1 = __webpack_require__(6);
var StringLiteral = /** @class */ (function (_super) {
    __extends(StringLiteral, _super);
    function StringLiteral(symbol) {
        var _this = this;
        var escaped = symbol.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        _this = _super.call(this, escaped) || this;
        return _this;
    }
    return StringLiteral;
}(CharacterLiteral_1.CharacterLiteral));
exports.StringLiteral = StringLiteral;


/***/ })
/******/ ]);
});
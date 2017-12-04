import {Block} from "./blocks/Block";
import {Alternator} from "./blocks/Alternator";
import {CharacterLiteral} from "./blocks/character/CharacterLiteral";
import {Group} from "./blocks/Group";
import {CharacterSet} from "./blocks/character/CharacterSet";
import {RegularExpression} from "./RegularExpression";
import {StringLiteral} from "./blocks/character/StringLiteral";

/**
 * BLOCK FACTORIES
 * =======================
 */

const regex = (...blocks: Block[]) => new RegularExpression(blocks);
const anyOf = (...blocks: Block[]) => new Alternator(blocks);
const group = (...blocks: Block[]) => new Group(blocks);
const inSet = (charList: string) => new CharacterSet(charList);
const backRef = (n: number) => new CharacterLiteral('\\'+n);
const str = (rawString: string) => new StringLiteral(rawString);

// special tokens
const space = (): CharacterLiteral => new CharacterLiteral('\\s');
const digit = (): CharacterLiteral => new CharacterLiteral('\\d');
const word = (): CharacterLiteral => new CharacterLiteral('\\w');
const notSpace = (): CharacterLiteral => new CharacterLiteral('\\S');
const notDigit = (): CharacterLiteral => new CharacterLiteral('\\D');
const notWord = (): CharacterLiteral => new CharacterLiteral('\\W');
const anything = (): CharacterLiteral => new CharacterLiteral('.');

/**
 * SETTINGS WRAPPERS
 * =======================
 */
const capture = (...blocks: Block[]) => {
    return group(...blocks).capture();
};

export {regex, anyOf, str, space, digit, backRef, word, capture, inSet, group, anything, notDigit, notSpace, notWord}
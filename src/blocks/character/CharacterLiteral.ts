import {Character} from "./Character";

class CharacterLiteral extends Character {

    constructor(protected symbol: string){ super() }

    toString(): string {
        let qs = this.getQuantifierString();
        let sy = this.symbol;
        if(qs === '') return sy;
        if(sy.length === 1) return sy + qs;
        if(sy.length === 2 && sy[0] === '\\') return sy + qs;
        return '(?:' + this.symbol + ')' + qs;
    }
}

class StringLiteral extends CharacterLiteral {
    constructor(protected symbol: string){
        super(StringLiteral.escapeSpecial(symbol));
    }

    private static escapeSpecial(str: string): string {
        // TODO - fix this?
        return str.replace(/([.?()])/g, 'test')
    }
}

const whitespace = (): CharacterLiteral => new CharacterLiteral('\\s');
const digit = (): CharacterLiteral => new CharacterLiteral('\\d');
const word = (): CharacterLiteral => new CharacterLiteral('\\w');
const string = ( string: string ) => new StringLiteral( string );

export { whitespace, digit, word, string, StringLiteral }
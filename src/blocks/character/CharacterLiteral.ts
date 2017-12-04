import {Character} from "./Character";

class CharacterLiteral extends Character {

    symbol: string;

    constructor(symbol: string){
        super();
        this.symbol = symbol;
    }

    toString(): string {
        let qs = this.getQuantifierString();
        let la = this.getLookAheadString();
        let lb = this.getLookBehindString();
        let sy = this.symbol;
        if(qs === '' && la === '' && lb === '')
            return sy;
        if(sy.length === 1)
            return this.addModifiers(sy);
        if(sy.length === 2 && sy[0] === '\\')
            return this.addModifiers(sy);
        return this.addModifiers('(?:' + this.symbol + ')');
    }
}

export { CharacterLiteral }
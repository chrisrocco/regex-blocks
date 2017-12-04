
import {CharacterLiteral} from "./CharacterLiteral";

class StringLiteral extends CharacterLiteral {
    constructor(symbol: string){
        let escaped = symbol.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        super(escaped);
    }
}

export { StringLiteral }
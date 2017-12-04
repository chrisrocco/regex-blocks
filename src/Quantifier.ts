import {Block} from "./blocks/Block";

interface Quantifier {
    symbol: string
}

const ONE_OR_MORE: Quantifier = {
    symbol: '+'
};

const ZERO_OR_MORE: Quantifier = {
    symbol: '*'
};

const ZERO_OR_ONE: Quantifier = {
    symbol: '?'
};

let kleeneStar = ( block: Block ) => {
    block.setQuantifier(ZERO_OR_ONE);
    return block;
};

let kleenPlus = ( block: Block ) => {
    block.setQuantifier(ONE_OR_MORE);
    return block;
};

let optionally = ( block: Block ) => {
    block.setQuantifier(ZERO_OR_ONE);
    return block;
};

export { Quantifier, ONE_OR_MORE, ZERO_OR_MORE, ZERO_OR_ONE, kleeneStar, kleenPlus, optionally }

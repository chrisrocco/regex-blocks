class Quantifier {

    constructor(
        protected symbol: string,
        protected isLazy: boolean = false
    ){}

    lazy(){
        this.isLazy = true;
        return this;
    }

    toString(){
        let lazy = (this.isLazy) ? "?" : "";
        return this.symbol + lazy;
    }
}

let repeat = ( min: number = 1, max: number = 1 ): Quantifier => new Quantifier(`{${min},${max}}`);

const ONE_OR_MORE: Quantifier = new Quantifier('+');
const ZERO_OR_MORE: Quantifier = new Quantifier('*');
const ZERO_OR_ONE: Quantifier = repeat(0, 1);


export {Quantifier, repeat, ONE_OR_MORE, ZERO_OR_MORE, ZERO_OR_ONE}

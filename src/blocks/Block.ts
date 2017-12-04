
import {Quantifier} from "../Quantifier";

export abstract class Block {

    protected quantifier: Quantifier;
    protected isCapture: boolean = false;

    abstract toString(): string;

    public setQuantifier( quantifier: Quantifier ){
        this.quantifier = quantifier;
    }

    protected getQuantifierString(){
        return (this.quantifier)? this.quantifier.symbol : '';
    }
}
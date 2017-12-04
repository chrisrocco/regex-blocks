import {ONE_OR_MORE, Quantifier, repeat, ZERO_OR_MORE, ZERO_OR_ONE} from "../Quantifier";

export abstract class Block {

    private lookAhead: Block;
    private lookBehind: Block;
    protected isCapture: boolean = false;
    protected quantifier: Quantifier;

    abstract toString(): string;

    zeroOrMore() {
        this.quantifier = ZERO_OR_MORE;
        return this;
    }

    oneOrMore() {
        this.quantifier = ONE_OR_MORE;
        return this;
    }

    optional() {
        this.quantifier = ZERO_OR_ONE;
        return this;
    }

    lazy() {
        if(this.quantifier)
            this.quantifier.lazy();
        else throw "Tried to make lazy quantifier on expression with no quantifier set!";
        return this;
    }

    repeat(min: number = 1, max: number = 1){
        this.quantifier = repeat(min, max);
        return this;
    }

    whenFollowing( block: Block ): Block {
        this.lookBehind = block;
        return this;
    }

    whenFollowedBy( block: Block ): Block {
        this.lookAhead = block;
        return this;
    }

    protected getQuantifierString() {
        return (this.quantifier) ? this.quantifier.toString() : '';
    }

    protected getLookAheadString(){
        if(!this.lookAhead) return '';
        return "(?=" + this.lookAhead.toString() + ")"
    }

    protected getLookBehindString(){
        if(!this.lookBehind) return '';
        return '(?!' + this.lookBehind.toString() + ')';
    }

    protected addModifiers( str: string ){
        return this.getLookBehindString() + str + this.getQuantifierString() + this.getLookAheadString();
    }
}
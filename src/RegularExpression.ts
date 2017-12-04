
import {Block} from "./blocks/Block";

export class RegularExpression {

    blocks: Block[];
    flags: string[];
    leadingAnchor: boolean = false;
    trailingAnchor: boolean = false;

    constructor( blocks: Block[] = []){
        if(!blocks) blocks = [];
        this.blocks = blocks;
        this.flags = ['g'];
    }

    concat( ...blocks: Block[] ){
        this.blocks.push(...blocks);
        return this; // for chained calls
    }

    fullMatch(){
        this.leadingAnchor = this.trailingAnchor = true;
        return this;
    }

    partialMatch(){
        this.leadingAnchor = this.trailingAnchor = false;
        return this;
    }

    startsWith(){
        this.leadingAnchor = true;
        return this;
    }

    endsWith(){
        this.trailingAnchor = true;
        return this;
    }

    setFlags(flags: string[]){
        this.flags = flags;
        return this;
    }

    toString(){
        let start = (this.leadingAnchor)? '^' : '';
        let end = (this.trailingAnchor)? '$' : '';
        let str = '';
        this.blocks.forEach((blk) => str += blk.toString());
        return start + str + end;
    }

    compile(): RegExp {
        return new RegExp(this.toString(), this.flags.join(''));
    }

}
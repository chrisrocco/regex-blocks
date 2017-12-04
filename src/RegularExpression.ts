
import {Block} from "./blocks/Block";

export class RegularExpression {

    blocks: Block[] = [];
    flags: string[] = [];
    startsWith: boolean = true;
    endsWith: boolean = true;

    add( block: Block ){
        this.blocks.push(block);
    }

    toString(){
        let start = (this.startsWith)? '^' : '';
        let end = (this.endsWith)? '$' : '';
        let str = '';
        this.blocks.forEach((blk) => str += blk.toString());
        return start + str + end;
    }

    compile(): RegExp {
        return new RegExp(this.toString(), this.flags.join(''));
    }

}
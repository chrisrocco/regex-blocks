import {Character} from "./Character";

class CharacterSet extends Character {

    isNot: boolean = false;

    constructor(private charString: string){ super() }

    toString(){
        let mod = (this.isNot)? '^' : '';
        return '[' + mod + this.charString + ']';
    }

}

export {CharacterSet}
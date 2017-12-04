import {Character} from "./Character";

class CharacterSet extends Character {

    isNot: boolean = false;

    constructor(private charString: string){ super() }

    not(){
        this.isNot = true;
        return this;
    }

    toString(){
        let mod = (this.isNot)? '^' : '';
        return this.addModifiers('[' + mod + this.charString + ']');
    }

}

export {CharacterSet}
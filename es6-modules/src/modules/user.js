// Classes
export class User {
    constructor(name){
        this.name = name;
        this.nickname = '';
    }
    setNickName(nickname){
        this.nickname = nickname;
        return this;
    }
    sayHello(){
        logger('Hello I\'m ' + this.name);
        return this;
    }
}

// Inheritance
export class Programmer extends User{
    constructor({ name, deparment}){ // Destructuring
        super(name);
        this.deparment = deparment;
    }
}
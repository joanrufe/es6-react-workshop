// Constants
const t = 100;
// x = 12 will throw error

// Use let instead
let n = 1;
n = 2;

// With objects we may change internal values
const obj = {
    x: 0,
    y: 0
}
obj.y = 10;

// But can't change reference
// obj = { x:1, y:1 }; -> Throws error

// Using destructuring it's a easy way to extract values from a object
const {x,y} = obj;

// Print using template strings
console.log(`X: ${x} Y: ${y}`);

// New class methods
class User {
    constructor(name){
        this.name = name;
        this.nickname = '';
    }
    setNickName(nickname){
        this.nickname = nickname;
        return this;
    }
    sayHello(){
        logger(`Hello I'm  ${this.name}`);
        return this;
    }
}

// Instantiation
const will = new User('will');
will.setNickName('Handless Will') ;


// Class instantiate
class Programmer extends User {
    constructor({ name, deparment}){ // Destructuring
        super(name);
        this.deparment = deparment;
    }
}

// Instantiate inherit class
const helen = new Programmer({
    name: 'helen',
    deparment: 'UX programmer'
});


// Default parameters are introduced
function position(x = 0, y = 0){
    return {x,y}
}
const initialPosition = position();

// Spread operator
const arr1 = ['two', 'three'];
const arr2 = ['one', ...arr1, 'four', 'five'];
console.log(arr2);

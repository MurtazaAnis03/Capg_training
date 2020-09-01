/*
//Method #1
function foo() {
    console.log("Hello");
    console.log(this);
}

foo();

//Method #2
var obj = {};
obj.foo = function(){
    console.log("hello 2");
    console.log(this);
}
obj.foo();

//Method #3
new foo();

//Method #4
foo.call(the func you want to call);
*/

//func meant to be called in constr mode
function Bicycle(cadence, speed, gear, tirePressure){
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function () {
        this.tirePressure += 3;
    }
}

//calling the func in constr mode
var bicycle1 = new Bicycle(10,20,30,40);
bicycle1.inflateTires();

function Mechanic(name) {
    this.name = name;
}
var mike = new Mechanic("Mike");
mike.inflateTires = bicycle1.inflateTires;
console.log(mike.inflateTires.call(bicycle1));
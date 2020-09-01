var bicycle = {
    "name" : "trevor",
    "speed" : 50,
    "gear" : 30
};
console.log(bicycle);

//Normal func
function createBicycle(name, speed, gear){
    var newBicycle = {};
    newBicycle.name = name;
    newBicycle.speed = speed;
    newBicycle.gear = gear;
    return newBicycle;
}
var bicycle1 = createBicycle("mike", 10, 20);
console.log(bicycle1);

//function with constr
function Bicycle(name, speed, gear) {
    this.name = name;
    this.speed = speed; 
    this.gear = gear;
} 

var bicycle2 = new Bicycle(30, 40, 50);
console.log(bicycle2);
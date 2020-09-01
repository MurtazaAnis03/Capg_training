function Employee(name){
    this.name = name;
}

var emp1 = new Employee("Jim");
console.log(emp1);
var emp2 = new Employee("Sam");
console.log(emp2);

Employee.prototype.playPrank = function(){
    console.log(" Prank Played");
}

Employee.prototype.playPrank();
emp1.playPrank();
emp2.playPrank();

Employee.prototype.greet = function(){
    console.log("Hello!");
}

Employee.prototype.greet();
emp1.greet();
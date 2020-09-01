'use strict';

var myArray = [1, 2, 3, 4, 5];
var mySet = new Set(myArray);

mySet.add('10');
mySet.add({ a: 6, b: 7 });
mySet.delete(2);
console.log(mySet.size);

mySet.forEach(function (val) {
    console.log(val);
});

var myMap = new Map([[a1, hello], [a2, goodbye]]);
myMap.set('a3', 'Foo');
myMap.delete('a1');
console.log(Map.size);

var carWeakSet = new WeakSet();
var car1 = {
    company: 'Honda',
    model: 'i10'
};
carWeakSet.add(car1);

var car2 = {
    company: 'Toyota',
    model: 'q23'
};
carWeakSet.add(car2);

carWeakSet.delete(car1);
console.log(carWeakSet.size);

var carWeakMap = WeakMap();
var key1 = {
    id: 1
};
var house1 = {
    owner: 'malini',
    storey: '2'
};
carWeakMap.set(key1, house1);

var key2 = {
    id: 2
};
var house2 = {
    owner: 'sharma',
    storey: '3'
};
carWeakMap.set(key2, house2);

carWeakMap.delete(key1);
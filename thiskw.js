'use strict';

const cleanTable = function(soap){
    console.log("cleaning" {this.table} "using" {soap});
}

this.table = "window table";

this.garage = {
    table : 'garage table'
}

let johnsRoom = {
    table : 'johns table'
}

cleanTable.call(this, 'some soap');
cleanTable.call(this.garage, 'some soap');
cleanTable.call(johnsRoom, 'some soap');
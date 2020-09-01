'use strict';

var name = 'michael';

function upperCase(word) {
    return word.toUpperCase();
}

var template = '<h1>' + upperCase('hello') + ', ' + name + '<h1>\n<p>A simple template in JS</p>';

document.getElementById('template').innerHTML = template;
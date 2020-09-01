'use strict';

function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
    var _this = this;

    return arr.map(function (x) {
        console.log(_this.prefix + x);
    });
};

var pre = new Prefixer('Hello ');
pre.prefixArray(['Brad', 'Jeff']);
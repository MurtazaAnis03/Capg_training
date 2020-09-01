'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    function User(username, email, password) {
        _classCallCheck(this, User);

        this.username = username;
        this.email = email;
        this.password = password;
    }

    _createClass(User, [{
        key: 'register',
        value: function register() {
            console.log(this.username + ' is now registered');
        }
    }], [{
        key: 'countUser',
        value: function countUser() {
            console.log('There are 500 users');
        }
    }]);

    return User;
}();

var sam = new User('sam', 'sam@gmail.com', '12345');

sam.register();

User.countUser();

var Member = function (_User) {
    _inherits(Member, _User);

    function Member(username, email, password, memberPackage) {
        _classCallCheck(this, Member);

        var _this = _possibleConstructorReturn(this, (Member.__proto__ || Object.getPrototypeOf(Member)).call(this, username, email, password));

        _this.package = memberPackage;
        return _this;
    }

    _createClass(Member, [{
        key: 'getPackage',
        value: function getPackage() {
            console.log(this.username + ' is registered with the ' + this.package + ' package');
        }
    }]);

    return Member;
}(User);

var mike = new Member('mike', 'mike@gmail.com', '123', 'premium');

mike.getPackage();
mike.register();
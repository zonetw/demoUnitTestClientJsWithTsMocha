var Test;
(function (Test) {
    var Person = (function () {
        function Person(name) {
            this._counter = 0;
            this.name = name;
        }
        Person.prototype.greet = function () {
            this._counter++;
            return 'Hello, ' + this.name;
        };
        Person.prototype.getGreetCalledCounter = function () {
            return this._counter;
        };
        return Person;
    }());
    Test.Person = Person;
})(Test || (Test = {}));
var Test;
(function (Test) {
    var joe = new Test.Person("Joe");
    console.log("Joe greet v2 : " + joe.greet());
})(Test || (Test = {}));
//# sourceMappingURL=final.js.map
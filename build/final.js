var Test;
(function (Test) {
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.greet = function () {
            return 'Hello, ' + this.name;
        };
        return Person;
    }());
    Test.Person = Person;
})(Test || (Test = {}));
var Test;
(function (Test) {
    var joe = new Test.Person("Joe");
    console.log(joe.greet());
})(Test || (Test = {}));
//# sourceMappingURL=final.js.map
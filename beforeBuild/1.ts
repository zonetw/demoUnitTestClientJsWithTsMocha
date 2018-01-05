namespace Test {
    export class Person {
        private name: string;

        public constructor(name: string) {
            this.name = name;
        }

        greet() {
            return 'Hello, ' + this.name;
        }

    }
}

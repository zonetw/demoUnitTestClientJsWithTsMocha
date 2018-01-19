namespace Test {
    export interface IPerson{
        greet(): void
    }

    export class Person {
        /*FK1*/
        //@zone 測試用 code
        private _counter: number = 0;
        /*FK2*/
        private name: string;

        public constructor(name: string) {
            this.name = name;
        }

        greet() {
            /*FK1*/
            this._counter ++;
            /*FK2*/
            return 'Hello, ' + this.name;
        }

        getGreetCalledCounter(){
            return this._counter;
        }
    }
}

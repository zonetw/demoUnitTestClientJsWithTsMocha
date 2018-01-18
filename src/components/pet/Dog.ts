/// <reference path='../Person.ts'/>

namespace Test{
    export class Dog{
        private _name: string;
        private _master: Person;

        constructor(name: string = "none"){
            this._name = name;
        }

        public bark(){
            return "WanWan!!";
        }

        public setMaster(master: Person){
            this._master = master;
        }
    }
}
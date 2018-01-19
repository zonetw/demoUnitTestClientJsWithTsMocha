/// <reference path='components/person.ts'/>
namespace Test{
    let joe: IPerson = new Person("Joe");

    console.log("Joe greet v2 : " + joe.greet());
    //@zone 以下程式在正式 build 的程序之前應該要被移除
}

/// <reference path='1.ts'/>
namespace Test{
    var joe = new Person("Joe");

    console.log(joe.greet());
    //@zone 以下程式在正式 build 的程序之前應該要被移除
}

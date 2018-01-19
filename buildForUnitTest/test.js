var expect = chai.expect;
describe('getPrivateContent', function(){
    var p1 = new Test.Person();
    it('get 1 after called once', function(){
        p1.greet();
        expect(p1.getGreetCalledCounter()).equal(1);
    })
});
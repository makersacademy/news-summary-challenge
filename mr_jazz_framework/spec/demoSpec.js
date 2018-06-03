describe('Demo',function(){
  var demo;
  beforeEach(function(){
    demo = new Demo();
  })

  it("returns 'Hello World!'", function(){
    expect(demo.sayHello()).toEqual('Hello World!');
  });

  it("equals 'Hello World!'", function(){
    expect(demo.sayHello()).toEqual('Hello World!');
  });
})

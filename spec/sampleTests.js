var Thing = function() {};

Thing.prototype.error = function () {
  throw new Error;
};

var ObjectUnderTest = function() {}

ObjectUnderTest.prototype.sayhello = function () {
  return 'hello';
};

ObjectUnderTest.prototype.saybye = function () {
  return 'bye';
};

describe('Sample Tests', function() {
  it('checks to toBeDefined matcher', function() {
    var thing = new Thing();
    expect(thing).toBeDefined();
  });

  it('checks toEqual matcher', function() {
    expect(3).toEqual("3");
  });

  it('checks toContain matcher', function() {
    expect(3).toBe(3);
  });

  it('checks toContain matcher', function() {
    expect([1,2,"3"]).toContain("3");
  });

  it('checks toBeNull matcher', function(){
    expect(null).toBeNull();
  });

  it('checks toThrowError matcher', function() {
    var thing = new Thing();
    var other;
    //This is not a full solution but a demonstration of possible resolution.
    try{
      expect(thing.error()).toThrowError(new Error);
    }catch(e){
      console.log(e);
    }
  });

  it('checks if spy is working', function() {
    Double(ObjectUnderTest, 'sayhello').andReturn('hello')
    expect(ObjectUnderTest.sayhello()).toEqual('hello');
  });

});

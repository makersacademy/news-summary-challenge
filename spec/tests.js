describe("numbers match", function() {

  it("should match 1 and 1", function(){
    expect(1).toEqual(1);
  });

  it("should fail horribly", function(){
    expect(1).toEqual(2);
  });

  describe("nested describe", function() {

    it("should match 1 and 1", function(){
      expect(1).toEqual(1);
    });

    it("should fail horribly", function(){
      expect(1).toEqual(2);
    });
  });

});

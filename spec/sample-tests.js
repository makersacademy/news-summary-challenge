var testSuite = function() {
  console.log("SAMPLE TEST SUITE");
  describe("Number", function() {
    it("should be equal when 3 is compared with 3", function() {
      assert.equal(3,3);
    });
    it("should be not equal when 3 is compared with 4", function() {
      assert.equal(3,4);
    });
  });
}

testSuite();
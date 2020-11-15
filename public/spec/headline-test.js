describe(".Headline", () => {
  
  describe("When 'New News!!!' is passed as an argument", () => {

    var headlineTest = new Headline("New News!!!");
    
    it("It should have text 'New News!!!'", () => {
      assert.isEqual(headlineTest.text, "New News!!!");
    });

    it("It should return 'New News!!!' when returnHeadline is called", () => {
      assert.isEqual(headlineTest.returnHeadline() , "New News!!!");
    });

  });
});
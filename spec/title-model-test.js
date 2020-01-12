(function () {
  
    var title = new Title("First headline of the newsfeed");
  
    function testTitleText() {
      assert.isTrue(title.text === "First headline of the newsfeed");
    };
  
    function testReturnText() {
      assert.isTrue(title.returnText() === "First headline of the newsfeed");
    }
  
    testTitleText();
    testReturnText();
  
  })(this);
(function(exports){
    function testNewsHeadline() {
      var headline = new NewsHeadline(1, "Some title", "Some API url")
      assert.isTrue(headline.id === 1)
      assert.isTrue(headline.title === "Some title")
      assert.isTrue(headline.API === "Some API url")
    }
    testNewsHeadline();
  })(this);
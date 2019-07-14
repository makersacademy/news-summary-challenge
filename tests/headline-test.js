(function() {
  function testHeadlineHasText() {
    var string = "Flowers Good For Bees, Reports Say"
    var headline = new Headline(string);

    var expected = string;
    var got = headline.text;

    if (expected !== got) {
      throw new Error(`Expected "${expected}", got "${got}"`)
    } else {
      console.log("passed: testHeadlineHasText")
    };
  }
  testHeadlineHasText()
})(this);
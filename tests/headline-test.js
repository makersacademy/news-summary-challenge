(function() {
  function testHeadlineHasText() {
    var string = "US beekeepers lost 40% of honeybee colonies over past year, survey finds";
    var headline = new Headline(string);

    var expected = string;
    var got = headline.text;

    if (expected !== got) {
      throw new Error(`Expected "${expected}", got "${got}"`)
    } else {
      console.log("passed: testHeadlineHasText")
    };
  }
  testHeadlineHasText();
})(this);
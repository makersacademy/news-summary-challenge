(function() {
  function testNoHeadlinesIsLength0() {
    var newsList = new NewsList;

    var expected = 0;
    var got = newsList.allHeadlines.length;

    if (expected !== got) {
      throw new Error(`Expected "${expected}", got "${got}"`)
    } else {
      console.log("passed: testNoHeadlinesIsLength0")
    };
  }
  testNoHeadlinesIsLength0();
})(this);

(function() {
  function testOneHeadlineIsLength1() {
    var string = "Truck carrying more than 130 million bees overturns";
    var newsList = new NewsList;

    newsList.newHeadline(string);

    var expected = 1;
    var got = newsList.allHeadlines.length;

    if (expected !== got) {
      throw new Error(`Expected "${expected}", got "${got}"`)
    } else {
      console.log("passed: testOneHeadlineIsLength1")
    };
  }
  testOneHeadlineIsLength1();
})(this);

(function() {
  function testCreateHeadline() {
    var string = "Bumblebees affected by 2018 extreme UK weather, experts say";
    var newsList = new NewsList;

    newsList.newHeadline(string);

    var expected = string;
    var got = newsList.allHeadlines[0].text;

    if (expected !== got) {
      throw new Error(`Expected "${expected}", got "${got}"`)
    } else {
      console.log("passed: testCreateHeadline")
    };
  }
  testCreateHeadline();
})(this);

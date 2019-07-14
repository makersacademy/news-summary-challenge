(function() {
  function testEmptyNewsList() {
    var newsList = new NewsList();
    var view = new NewsListHTML(newsList);

    var expected = `<ul></ul>`;
    var got = view.generateHTML();
    if (got !== expected) {
      throw new Error(`Expected "${expected}", got "${got}"`)
    } else {
      console.log(`passed: testEmptyNewsList`)
    }
  }
  testEmptyNewsList();
})(this);

(function() {
  function testNewsListOfOne() {
    var string = `'Bee saviour' sugar cards could save starving insects`
    var newsList = new NewsList();
    newsList.newHeadline(string);
    var view = new NewsListHTML(newsList);

    var expected = `<ul><li>${string}</li></ul>`;
    var got = view.generateHTML();
    if (got !== expected) {
      throw new Error(`Expected "${expected}", got "${got}"`)
    } else {
      console.log(`passed: testNewsListOfOne`)
    }
  }
  testNewsListOfOne();
})(this);

(function() {
  function testNewsListOfThree() {
    var string1 = `'It's a miracle': hundreds of thousands of bees survive Notre Dame fire`;
    var string2 = `Doctors discover four live bees feeding on tears inside woman's eye`;
    var string3 = `Bavaria to pass 'save the bees' petition into law in landmark move`;

    var newsList = new NewsList();

    newsList.newHeadline(string1);newsList.newHeadline(string2);newsList.newHeadline(string3);
    var view = new NewsListHTML(newsList)

    var expected = `<ul><li>${string1}</li>,<li>${string2}</li>,<li>${string3}</li></ul>`
    var got = view.generateHTML();
    if (got !== expected) {
      throw new Error(`Expected "${expected}", got "${got}"`)
    } else {
      console.log(`passed: testNewsListOfThree`)
    }
  }
  testNewsListOfThree();
})(this);
(function(exports) {
  function testNewspaperViewHeadLineHtml() {
    let articleDouble = {};
    articleDouble.showHeadline = function() {
      return "A Headline";
    }
    let newspaperDouble = {};
    newspaperDouble.viewArticles = function() {
      return [articleDouble];
    }
    let newspaperView = new NewspaperView(newspaperDouble);

    assert.isTrue(
      newspaperView.headlineHtml() === "<ul><li><div>A Headline</div></li></ul>",
      "NewspaperView.headLineHtml returns headline HTML"
    );
  }

  testNewspaperViewHeadLineHtml();
})(this);
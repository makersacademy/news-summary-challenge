(function(exports) {

  let articleDouble = {};
  let newspaperDouble = {};
  let newspaperView = new NewspaperView(newspaperDouble);
  
  articleDouble.showHeadline = function() {
    return "A Headline";
  }

  function testNewspaperViewHeadLineHtml() {
    newspaperDouble.viewArticles = function() {
      return [articleDouble];
    }
    assert.isTrue(
      newspaperView.headlineHtml() === "<ul><li><div>A Headline</div></li></ul>",
      "NewspaperView.headLineHtml returns headline HTML for 1 article"
    );
  }

  function testNewspaperViewHeadLineHtmlSeveralArticles() {
    newspaperDouble.viewArticles = function() {
      return [articleDouble, articleDouble];
    }

    assert.isTrue(
      newspaperView.headlineHtml() === ("<ul><li><div>A Headline</div></li>" +
      "<li><div>A Headline</div></li></ul>"),
      "NewspaperView.headLineHtml returns headline HTML for several articles"
    );
  }

  testNewspaperViewHeadLineHtml();
  testNewspaperViewHeadLineHtmlSeveralArticles();
})(this);
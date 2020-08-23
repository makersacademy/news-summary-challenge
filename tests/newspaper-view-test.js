(function(exports) {

  let articleDouble = {};
  let newspaperDouble = {};
  let newspaperView = new NewspaperView(newspaperDouble);
  
  articleDouble.showHeadline = function() {
    return "A Headline";
  }
  articleDouble.showUrl = function() {
    return "http://test.com";
  }

  function testNewspaperViewHtmlOneArticle() {
    newspaperDouble.viewArticles = function() {
      return [articleDouble];
    }
    assert.isTrue(
      newspaperView.html() === 
      '<ul><li><div><a href="http://test.com">A Headline</a></div></li></ul>',
      "NewspaperView.headLineHtml returns HTML for 1 article"
    );
  }

  function testNewspaperViewHtmlSeveralArticles() {
    newspaperDouble.viewArticles = function() {
      return [articleDouble, articleDouble];
    }

    assert.isTrue(
      newspaperView.html() === (
        '<ul><li><div><a href="http://test.com">A Headline</a></div></li>' +
        '<li><div><a href="http://test.com">A Headline</a></div></li></ul>'
        ), 
        "NewspaperView.headLineHtml returns HTML for several articles"
    );
  }

  testNewspaperViewHtmlOneArticle();
  testNewspaperViewHtmlSeveralArticles();
})(this);

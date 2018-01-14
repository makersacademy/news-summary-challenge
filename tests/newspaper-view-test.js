(function(exports){
  function testCreateHtmlString() {
    function DoubleArticle(headline, url, body) {};

    DoubleArticle.prototype = {
      displayHeadline: function() {
        return "Headline";
      },

      displayURL: function() {
        return "http://www.example.com"
      }
    };

    var article1 = new DoubleArticle();
    var article2 = new DoubleArticle();
    var newspaper = new Newspaper();
    newspaper.addArticle(article1);
    newspaper.addArticle(article2);
    var newspaperView = new NewspaperView(newspaper);

    assert.isTrue(newspaperView.returnHtml() === "<ul><li><a href='http://www.example.com'>Headline</a></li><li><a href='http://www.example.com'>Headline</a></li></ul>", "Headline returned as Html string");
  };

  testCreateHtmlString()
})(this);

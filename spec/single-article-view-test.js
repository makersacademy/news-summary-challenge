(function() {
  'use strict';

  var singleArticleView = new SingleArticleView(new Article('headline', 'image', 'summary', 'articleURL'));

  describe('Renders html for a single article', function() {
    var HTMLString = `<div><img src="image"><h3>headline</h3><a href="articleURL">View the full article</a><div>summary</div></div>`
    return assert.isTrue(singleArticleView.render() === HTMLString);
  })
}());

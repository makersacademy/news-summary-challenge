(function() {
  'use strict';

  function ArticleDouble(image, id, headline) {
    this._image = image;
    this._id = id;
    this._headline = headline;
  }

  ArticleDouble.prototype = {
    image: function() {
      return this._image;
    },
    id: function() {
      return this._id;
    },
    headline: function() {
      return this._headline;
    }
  };

  function ArticleListDouble(articlesArray) {
    this._articles = articlesArray;
  }

  ArticleListDouble.prototype.articles = function () {
    return this._articles;
  };

  var articleList = new ArticleListDouble([new ArticleDouble('image', '1', 'headline'), new ArticleDouble('image2', '2', 'headline2'), new ArticleDouble('image3', '3', 'headline3')]);
  var articleListView = new ArticleListView(articleList);

  describe('Article list view converts article to html', function() {
    var HTMLString = `<div><div><img src="image"><a href="#articles/1"><h3>headline</h3></a></div><div><img src="image2"><a href="#articles/2"><h3>headline2</h3></a></div><div><img src="image3"><a href="#articles/3"><h3>headline3</h3></a></div></div>`
    return assert.isTrue(articleListView.render() === HTMLString);
  })


}());

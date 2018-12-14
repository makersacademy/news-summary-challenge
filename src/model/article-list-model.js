(function(exports) {

  function ArticleList() {
    this.articleList = [];
  }

  ArticleList.prototype.fetchArticleJSON = async function () {
    content = await fetch('https://content.guardianapis.com/uk-news?api-key=33af01f2-5304-4b72-a634-db5c9c974c37&show-fields=thumbnail');
    return await content.json();
  };

  ArticleList.prototype.createArticleList = function (testArray = undefined) {
    if (testArray === undefined) {
      this.fetchArticleJSON().then(function(result) {
        console.log(result);
        this.articleList = result.response.results;
      }).then(this.returnArticleList());
    } else {
      this.articleList = testArray
    }
  };

  ArticleList.prototype.returnArticleList = function () {
    return this.articleList;
  };

  exports.ArticleList = ArticleList;

})(this);

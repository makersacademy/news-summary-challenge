(function(exports) {
  function NewsController() {
    this.aylienApi = 'aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://news-summary-api.herokuapp.com/'
    this.guardianReq = 'guardian?apiRequestUrl='
    this.guardianHeadlineUrl = 'http://content.guardianapis.com/search?show-fields=thumbnail'
    this.guardianBodyQuery = '?show-fields=body'
  }

  NewsController.prototype.renderHeadlines = async function() {
    const json = await this._getData(this.guardianReq + this.guardianHeadlineUrl);
    this.articleListJSON = json.response.results
    document.getElementById('app').innerHTML = this._getArticleListHTML();
    this._listen()
  }

  NewsController.prototype._listen = function() {
    window.addEventListener("hashchange", async () => { 
      const articleUrl = this._formatUrl(this._returnArticleModelFromURL().apiUrl());
      this.articleJSON = await this._getData(this.aylienApi + this.guardianReq + articleUrl + this.guardianBodyQuery)
      this._renderArticle()
    });
  }

  NewsController.prototype._renderArticle = function() {
    try {
      document.getElementById('app').innerHTML = new ArticleView(this.articleJSON, this._returnArticleModelFromURL()).returnHTML()
    } catch(err) {
      document.getElementById('app').innerHTML = '<h1>Oops, something went wrong!</h1>'
    }   
  }

  NewsController.prototype._getArticleList = function() {
    const articleList = new ArticleList();
    articleList.createList(this.articleListJSON);
    return articleList
  }

  NewsController.prototype._formatUrl = function(url) {
    return url.replace('https://','http://') // this seems to be specific to the news-summary api
  }

  NewsController.prototype._getArticleListHTML = function() {
    return new ArticleListView(this._getArticleList()).returnHTML();
  }

  NewsController.prototype._getData = function(apiRequestUrl) {   
    return new GetJSON(apiRequestUrl).response();
  }

  NewsController.prototype._returnArticleModelFromURL = function() {
    return this._getArticleList().getList().filter(article => {
      return article.getId().toString() === this._returnIdFromURL(window.location);
    })[0];
  }

  NewsController.prototype._returnIdFromURL = function(location) {
    return location.hash.split("#")[1].split("/")[1];
  }

  exports.NewsController = NewsController
})(this)

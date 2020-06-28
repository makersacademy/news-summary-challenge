(function(exports) {
  function NewsController() {
    this.guardianApi = 'http://content.guardianapis.com/search?show-fields=thumbnail&q=uk'
  }

  NewsController.prototype.renderPage = async function() {  
    // var HTMLString = responseJSON.response.results.reduce((acc, val) => {
    //   console.log(val)
    //   return acc += '<div>'
    //     +`<p>${val.sectionName}</p>`
    //     +`<img src="${val.fields.thumbnail}">`
    //     +`<h3>${val.webTitle}</h3>`
    //     +'</div>';
    // },'');
    //document.getElementById('app').innerHTML = HTMLString;
    
    const articleList = await this._getArticleList()
    console.log(articleList)
  }

  NewsController.prototype._getArticleList = async function() {
    const articleListJSON = await this._getData(this.guardianApi);
    const articleList = new ArticleList();
    articleList.createList(articleListJSON);
    return articleList
  }


  NewsController.prototype._getData = async function(apiRequestUrl) {
    const data = await new GetJSON(apiRequestUrl).response()
    return data.results
  }

  exports.NewsController = NewsController

})(this)

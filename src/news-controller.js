(function(exports) {
  function NewsController() {
    // this.NewsSummaryApi = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl='
    // this.articleUrl = 'http://content.guardianapis.com/search?show-fields=thumbnail&q=uk'
    // this.url = this.NewsSummaryApi + this.articleUrl

  }

  NewsController.prototype.renderPage = async function() {  
    // const response = await fetch(this.url)
    // const responseJSON = await response.json()
    // var HTMLString = responseJSON.response.results.reduce((acc, val) => {
    //   console.log(val)
    //   return acc += '<div>'
    //     +`<p>${val.sectionName}</p>`
    //     +`<img src="${val.fields.thumbnail}">`
    //     +`<h3>${val.webTitle}</h3>`
    //     +'</div>';
    // },'');

    articleListData = await this._getData('http://content.guardianapis.com/search?show-fields=thumbnail&q=uk')
    console.log(articleListData)
    //document.getElementById('app').innerHTML = HTMLString;
  }

  NewsController.prototype._getData = async function(apiRequestUrl) {
    const data = await new GetJSON(apiRequestUrl).response()
    return data.results
  }

  exports.NewsController = NewsController

})(this)

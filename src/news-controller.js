(function(exports) {
  function NewsController() {
    this.NewsSummaryApi = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl='
    this.articleUrl = 'http://content.guardianapis.com/search?show-fields=thumbnail&q=uk'
    this.url = this.NewsSummaryApi + this.articleUrl

  }

  NewsController.prototype.renderPage = async function() {  
    const response = await fetch(this.url)
    const responseJSON = await response.json()
    var HTMLString = responseJSON.response.results.reduce((acc, val) => {
      console.log(val)
      return acc += `<div><img src="${val.fields.thumbnail}"><br>${val.webTitle}</div>`;
    },'');
    

    document.getElementById('app').innerHTML = HTMLString;
  }

  exports.NewsController = NewsController

})(this)

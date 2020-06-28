(function (exports) {
  class ArticleListController {
    constructor(articleList = new ArticleList(), articleListView = new ArticleListView(ArticleList), request = new XMLHttpRequest()) {
      this._articleList = articleList;
      this._articleListView = articleListView;
      this._apiRequest = apiRequest;
    };

    fetchData() {
      let self = this;
      // setting up the apiRequestUrl query parameter for the Makers News Summary API
      // use Makers News Summary API key to fetch data from the guardian
      // use a apiRequestUrl as a parameter  to reqest the data from the guardian
      let apiRequestUrl = "https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest"
      //initialize a new requst, using a GET request on the apirequesturl, representing the URL to send the request to.
      //true indicates the operation will be performed asynchronously
      self._apiRequest.open('GET', apiRequestUrl, true);
      // onload allows us to do something with the fetched data
      self._apiRequest.onload = function() {
        //access the JSON data to iterate over using ForEach loop
        //parse a string(JSON formatting) and return JS object
        JSON.parse(this.response).response.results.forEach(function(data) {
        //assign dato to url and title variables to be called upon
        let title = data.webTitle;
        let url = data.webUrl;
        self._articleList.addArticle(title, url);
      })
    };
        // send the request to the server
        self._apiRequest.send();
    };

      renderData() {
        this._articleListView.updateArticleList(this._articleList);
        // render all information fetched to articlelist element and change its content
        document.getElementById('article-list-view').innerHTML = this._articleListView.ReturnHtml();
      };
  };

exports.ArticleListController = ArticleListController;
})(this);

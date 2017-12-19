(function(exports) {
  'use strict';

  var imageURL = 'https://media.guim.co.uk/b8e342100a4c474f880f1e2731e801515884fcbb/0_297_4635_2781/500.jpg';

  var mainDiv = document.getElementById('app');

  function ArticleController(articleListView, articleList, singleArticleView, xmlHTTPRequest) {
    this._articleList = articleList;
    this._singleArticleView = singleArticleView;
    this._articleListView = articleListView;
    this._xmlHTTPRequest = xmlHTTPRequest;
  }

  ArticleController.prototype.hashChangeListener = function () {
    var that = this;
    window.addEventListener("hashchange", function() {that._homeOrSingleView(that)});
  };

  ArticleController.prototype._homeOrSingleView = function (reference) {
    location.hash === '' ? reference._getAllArticles(reference) : reference._getSingleArticleView(reference, location.hash.split('/')[1]);
  };

  ArticleController.prototype._getAllArticles = function (reference) {
    mainDiv.innerHTML = (new reference._articleListView(reference._articleList).render());
  };

  ArticleController.prototype._getSingleArticleView = function (reference, id) {
    var singleArticle = reference._articleList.articles().filter(function(item) {
      return item.id() == id;
    })[0];
    reference.singleArticleInsertHTML(singleArticle);
  };

  ArticleController.prototype.singleArticleInsertHTML = function (singleArticle) {
    mainDiv.innerHTML = new this._singleArticleView(singleArticle).render();
  };

  ArticleController.prototype.ajaxRequest = function () {
    var that = this;
    var xhttp = new this._xmlHTTPRequest();
    var guardian_endpoint = GUARDIAN_ENDPOINT;
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var results = JSON.parse(this.responseText).response.results;
        results.forEach(function(result) {
          var secondXhttp = new that._xmlHTTPRequest();
          var url = result.webUrl;
          var headline = result.webTitle;
          var image;
          result.fields ? image = result.fields.thumbnail : image = 'https://image.ibb.co/c0bv2w/image_unavailable.jpg';

          var aylien_endpoint = AYLIEN_ENDPOINT + url;

          secondXhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              var summary = JSON.parse(this.responseText).sentences.join(' ');
              that._articleList.add(headline, image, summary, url);
              mainDiv.innerHTML = (new that._articleListView(that._articleList).render());
            }
          }
          secondXhttp.open("GET", aylien_endpoint, true);
          secondXhttp.send();
        })
      }
    };

    xhttp.open("GET", guardian_endpoint, true);
    xhttp.send();
  };

  ArticleController.prototype.useSeedData = function (array) {
    var that = this;
    array.forEach(function(article) {
      that._articleList.add(article._headline, article._image, article._summary, article._articleURL)
    })
    mainDiv.innerHTML = (new this._articleListView(this._articleList).render());
  };

  exports.ArticleController = ArticleController;

}(this));

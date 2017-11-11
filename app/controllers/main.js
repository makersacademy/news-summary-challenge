(function(exports) {

  exports.Controller = function(PromoListModel, PromoListView, RequestClass=XMLHttpRequest) {
    var _promoListModel = new PromoListModel();
    var _promoListView = new PromoListView(_promoListModel);

    function doRequest() {
      var _httpRequest = new RequestClass();
      _httpRequest.onreadystatechange = function() {
        if (_httpRequest.readyState === RequestClass.DONE) {
          if (_httpRequest.status === 200) {
            var results = JSON.parse(_httpRequest.responseText).response.results
            updatePromoListModel(results);
          }
        }
      };
      _httpRequest.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search", true);
      _httpRequest.send();
    };
    doRequest();

    function updatePromoListModel(results) {
      results.forEach(function(result) {
        _promoListModel.addArticle(new ArticleModel(result.webTitle, result.webUrl));
      });
      displayPromoList();
    }

    function displayPromoList() {
      var promoListViewHtml = _promoListView.toHtml();
      document.getElementById("app")
        .innerHTML = promoListViewHtml;
    };
  };

})(this);

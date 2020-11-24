(function(exports){
  function SingleArticleView(article) {
    this.article = article;
  }

  SingleArticleView.prototype = (function(){

    function articleToView() {
      return this.article
    };

    async function requestSummary() {
      const url = this.articleToView().articleURL();
      request1 = new XMLHttpRequest();
      request1.timeout = 3000;
      request1.onreadystatechange = async function(e) {
        if (request1.readyState === 4) {
          if (request1.status === 200) {
            data = await JSON.parse(request1.response)
            document.getElementById("app").innerHTML = "<div>" + data.text + "</div>";
          } else {
            console.log('error');
          }
        }
      }
      request1.ontimeout = function () {
        console.log('Timeout')
      };
      const requestUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url;
      request1.open("GET", requestUrl, true);
      request1.send();
    }
    return {
      articleToView,
      requestSummary
    };
  })()
  exports.SingleArticleView = SingleArticleView;
})(this)

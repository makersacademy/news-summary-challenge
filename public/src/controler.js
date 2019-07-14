(function(exports){

  var API = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics'
  // var API = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body'
  // var API = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog'

  function Controler() {
    this.request = new XMLHttpRequest();
  }

  Controler.prototype = {
  
    displayNewsList: function(newslist = new newsList()) {
      this.request.open('GET', API, true);
      console.log(this.request.send());
      this.request.addEventListener('load', function() {
        var data = JSON.parse(this.response);
        var arrayArticles = data.response.results
        var title = document.getElementById('api-title')
        title.innerHTML = newslist.display(arrayArticles);
      })
    },

    displayFullArticle: function() {
      var newslist = document.getElementById('api-title')
      newslist.addEventListener('click', function(event) {
        event.preventDefault();
        var httpLink = event.path[0].href
        var displaytext = new displayText(httpLink)
        var request = new XMLHttpRequest();
        console.log(displaytext._URL)
        request.open('GET', displaytext._URL, true);
        request.addEventListener('load', function() {
          var data = JSON.parse(this.response);
          var fullText = document.getElementById('api-body')
          fullText.innerHTML = data.text
        })
        request.send();
      })
    }
  }
  exports.Controler = Controler;
})(this);
(function(exports){
  function Newspaper() {
    this.contents = [];
  };

  Newspaper.prototype = (function() {

    function articles() {
      return this.contents;
    };
    
    function addArticle(title, url) {
      let article = new Article(title, url);
      article.id = this.articles().length;
      this.articles().push(article);
    }

    async function getHeadlines() {
      request = new XMLHttpRequest();
      request.timeout = 3000;
      request.onreadystatechange = function(e) {
        if (request.readyState === 4) {
          if (request.status === 200) {
            JSON.parse(request.response).response.results.forEach(function(article){
            let [title, url] = [article.webTitle, article.webUrl];
            newspaper.addArticle(title, url);
          });
            controller = new NewspaperController(newspaper);
            controller.renderHTML();
          } else {
           console.log('error');
          }
        }
      }
      request.ontimeout = function () {
        console.log('Timeout')
      };
      request.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=news&format=json", true);
      request.send();
    }

    return {
      articles,
      addArticle,
      getHeadlines
    };
  })();

  exports.Newspaper = Newspaper;
})(this);

(function(exports){

  function Controller() {

  }

    Controller.prototype.sendAPIRequest = function() {
    var guardianApi = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=body,headline,thumbnail"
    var articlesList = new ArticlesList();

    fetch(guardianApi)
      .then(
        function(response) {
          if(response.status !== 200) {
            console.log("There was a problem with response. Status code: " + response.status);
            return;
          } else {
            response.json().then(function(data) {
            articlesList.addArticles(data);
            var articlesView = new ArticlesView(articlesList)
            var ul = document.querySelector('ul')
            ul.innerHTML = articlesView.getHTML()
            })
          }
        })
        .catch(function(err) {
          console.log("Error " + err);
        });

  }

exports.Controller = Controller;
})(this)

var controller = new Controller();
controller.sendAPIRequest();

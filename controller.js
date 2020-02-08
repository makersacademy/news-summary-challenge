(function(exports){
  function Controller() {
    this.view = new ArticleView()
  }
  exports.Controller = Controller
  })(this);

var controller = new Controller();

Controller.prototype.summaryView = function() {
  var el = document.getElementById("summary")
  el.innerHTML = this.view.render()
}

Controller.prototype.refresh = function() {
  fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search").then(response => {
   return response.json();
  }).then(data => {
   // Work with JSON data here
     console.log(data);
     let arrayTenNews = data.response.results;
     arrayTenNews.forEach((piece) => {
       var article = new Article();
       article.title = piece.webTitle;
       article.id = piece.id;
       controller.view.list.list.push(article)
     })
     document.body.innerHTML = body;
  }).catch(err => {
   // Do something for an error here
   console.log("Whoopsie");
  });
  }
controller.refresh()

Controller.prototype.articleBuilder = function() {
  var array = this.view.list.list
  array.forEach((article) => {
    var url= "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/" + article.id + "?show-fields=body"
    console.log(url)
    fetch(url).then(response => {
   return response.json();
  }).then(data => {
   // Work with JSON data here
     console.log("ARTICLE BUILDER", data);
     let completeArticle = data.response.content.fields.body;
     article.body = completeArticle;
  }).catch(err => {
   // Do something for an error here
   console.log("Whoopsie");
  });
  })
}

function loadUp() {
  controller.articleBuilder();
  controller.summaryView();
}
loadUp()
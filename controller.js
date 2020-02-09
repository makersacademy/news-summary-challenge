(function(exports){
  function Controller() {
    this.view = new ArticleView()
  }
  exports.Controller = Controller
  })(this);

var controller = new Controller();

Controller.prototype.summaryView = function() {
  var el = document.getElementById("summary")
  el.innerHTML = controller.view.render()
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

Controller.prototype.articleThumbnailAdder = function() {
  var array = this.view.list.list
  array.forEach((article) => {
    var url= "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/" + article.id + "?show-fields=thumbnail"
    console.log(url)
    fetch(url).then(response => {
   return response.json();
  }).then(data => {
   // Work with JSON data here
     console.log("ARTICLE THUMBNAIL ADDER", data);
     let littleImage = data.response.content.fields.thumbnail;
     article.thumbnail = "<img src='" + littleImage + "' style='width:133px;height:80px;' border:'5'>";
  }).catch(err => {
   // Do something for an error here
   console.log("Whoopsie");
  });
  })
}

function loadUp() {
  controller.articleBuilder();
  controller.articleThumbnailAdder();
  setTimeout (controller.summaryView, 1500);
  summaryButton = document.getElementsByClassName("gohome")[0]
  summaryButton.style.visibility = 'hidden'
  window.addEventListener("hashchange", controller.viewArticle)
}

// function enumerateArticles(array) {
//   for (var i=0; i<array.length; i++) {
//     array[i].number = i
//   }
// }

Controller.prototype.waitToShowSingleArticle = function() {
  window.addEventListener("hashchange", controller.viewArticle)
}

Controller.prototype.viewArticle = function() {
  var urlId = location.hash.split('#piece/')[1]
  var selectedArticle = controller.view.list.list[urlId]
  var singlePieceViewer = new SinglePieceViewer(selectedArticle)
  el = document.getElementById("summary")
  el.innerHTML = singlePieceViewer.viewSinglePiece()
  button = document.getElementsByClassName("loadup")
  button[0].style.visibility = 'hidden'
  summaryButton = document.getElementsByClassName("gohome")[0]
  summaryButton.style.visibility = 'visible'
}

function goHome() {
  window.reload()
  summaryButton = document.getElementsByClassName("gohome")[0]
  summaryButton.style.visibility = 'hidden'
  controller.summaryView();
}
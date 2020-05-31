Articles.instance();
var apis = new Api()

function getArticles(callback){
let xhttp = new XMLHttpRequest();
xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?format=json&from-date=2020-05-30&order-by=newest", true);

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response);
      let results = response.response.results
      console.log(results)
      callback(results, runArticleCreator)
      }
    }
xhttp.send();
}

function showArticles(){
  console.log("Yo we in dis bitch?")
  for(article of Articles.all){
    var x = document.createElement("A")
    var headline = document.createTextNode(`${article.title}`);
    x.setAttribute("href", `#${article.title}`);
    x.setAttribute("id", `${article.title}`);
    x.appendChild(headline);
    var list = document.createElement("LI");
    list.appendChild(x);
    document.getElementById("headlineList").appendChild(list);
  }
}

getArticles(apiGrabber)
setTimeout(function(){
  showArticles();
}, 1500);

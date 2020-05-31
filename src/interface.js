function newArticles(callback){
let xhttp = new XMLHttpRequest();
xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?format=json&from-date=2020-05-30&order-by=newest", true);

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && callback) {
      let response = JSON.parse(this.response);
      let results = response.response.results
      callback(results)
      }
    }
xhttp.send();
}

var apis = new Api()

function apiGrabber(json){
  apis.add(json)
}

newArticles(apiGrabber);
console.log(apis.apis)

//articlesJson.forEach()


// function listArticles(item){
//   document.getElementById("demo").innerHTML = item.content.fields.body;
// }
//articles.forEach(listArticles)

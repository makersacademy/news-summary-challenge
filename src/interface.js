function getArticles(callback){
let xhttp = new XMLHttpRequest();
xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?format=json&from-date=2020-05-30&order-by=newest", true);

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response);
      let results = response.response.results
      console.log(results)
      callback(results)
      }
    }
xhttp.send();
}

var apis = new Api()

function apiGrabber(json){
  apis.add(json)
}


getArticles(apiGrabber)
Articles.instance();
setTimeout(function(){
    console.log(apis.apis);
    for(i = 0; i < 10; i++){
    createArticles(apis.apis[i])
  }
}, 1000)

//console.log(apis.apis.length);
//;

class Api {
  constructor(){
    this.apis = []
  }

  add(json){
    for(const element of json){
      var url = element.apiUrl
      var apiUrl = url.replace('s','');
      this.apis.push("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=" + apiUrl + "?show-fields=body")
    }
  }
}

class Article {
  constructor(article){
    this.api = article.response.content.apiUrl
    this.title = article.response.content.webTitle
    this.body = article.response.content.fields.body
    Articles.add(this)
  }
}

class Articles {
  static instance(){
    this.all = []
  }

  static add(article){
    this.all.push(article)
  }
}

function createArticles(url){
  let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let response = JSON.parse(this.response);
          console.log(response)
          new Article(response)
        }
      }
    xhttp.send();
  }

// function printArticles(url, i){
//   //Articles.instance()
//   console.log(url)
//   let xhttp = new XMLHttpRequest();
//   xhttp.open("GET", url, true);
//
//   xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         let response = JSON.parse(this.response);
//         console.log(response.response.content.webTitle)
//         var node = document.createElement("article")
//         var newHeadline = document.createTextNode(response.response.content.webTitle);
//         document.getElementById("news" + `${i + 1}`).appendChild(node.appendChild(newHeadline));
//         }
//       }
//   xhttp.send();
// }

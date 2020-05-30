let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response);
      var articles = response.response.results
      function listArticles(item){
        document.getElementById("demo").innerHTML = item.content.fields.body;
      }
      articles.forEach(listArticles)
    }
};
xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?format=json&from-date=2020-05-30&order-by=newest", true);
xhttp.send();

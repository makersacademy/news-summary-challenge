'use strict'


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var headlines = JSON.parse(this.responseText).response.results;

      headlines.forEach(print);

      function print(headline, index) {
        document.getElementById("app").innerHTML +=  "<a href='http://localhost:8080#" + index + "'>" + translate(headline.webTitle) + "</a><div class=headline_image><img src='" + headline.fields.thumbnail + "'></div><br>";
      }

      function makeUrlChangeShowArticleOnCurrentPage() {
        window.addEventListener("hashchange", showArticleOnCurrentPage);
      }

      function showArticleOnCurrentPage() {
        showArticle(getIDFromUrl(window.location));
      }

      function getIDFromUrl(location) {
        return location.hash.split("#")[1];
      }
  
      function showArticle(ID) {
  
        document
          .getElementById("app")
          .innerHTML = "<div class=headline_image><img src='" + headlines[parseInt(ID)].fields.thumbnail + "'></div><br>" + translate(headlines[parseInt(ID)].fields.body);
      }

      makeUrlChangeShowArticleOnCurrentPage();

    }
  }
  xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail,body&&api-key=22b33ae2-8f2d-49c8-8781-1940fb4dae90");
  xhttp.send();

}

loadDoc();

function translate(HTML) {

  var translation = HTML.replace(/President Trump/gi, "Cheeto Man");
  translation = translation.replace(/Donald Trump/gi, "Cheeto Man");
  translation = translation.replace(/Trump/gi, "Cheeto Man");

  return translation
}
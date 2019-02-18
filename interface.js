function initialize () {

  var articleList = new ArticleList();

  var articlesDiv = document.getElementById('main')
  var individual = document.getElementById('individual')

  function getGuardianData () {

    var request = new XMLHttpRequest();
    var urlAPI = "https://content.guardianapis.com/uk-news?show-editors-picks=true&api-key=690962db-172e-4bae-8562-7fee1e1fffa3&show-fields=thumbnail";
    request.open('GET', urlAPI, true);
    request.onload = function () {
      var result = JSON.parse(this.response);
      var responseLenght = result.response.results.length;
      for (var i=0; i<responseLenght; i++) {
        articleList.add(result.response.results[i].webTitle, result.response.results[i].webUrl, result.response.results[i].fields.thumbnail)
      }

      articlesDiv.appendChild(articleList.displayArticles());

    }
    request.send();
  }

  function getSummaryData (articleUrl, summary) {
    var request = new XMLHttpRequest();
    var urlAPI = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + articleUrl
    request.open('GET', urlAPI, true);
    request.onload = function () {
      var result = JSON.parse(this.response);
      summary.innerText = result.sentences[0] + " " + result.sentences[1] + " " + result.sentences[2]
    }
    request.send();
  }

  document.addEventListener('clicked_event', function(event) {
    //create an element to hold the article summary
    var summary = document.createElement('p')
    summary.setAttribute("style", "margin: 1em");

    hideMainPage(articlesDiv);
    showHomepageButton(individual, articlesDiv);
    showArticlePic(individual);
    loadArticleSummary(individual,summary);

    getSummaryData (event.detail.url, summary);
  })

  function hideMainPage(articlesDiv) {
    articlesDiv.setAttribute("style", "display: none;");
    individual.innerText = "";
    individual.setAttribute("style", "display: inline-block;");
    individual.setAttribute("style", "width: 39em");
    return individual;
  }

  function showHomepageButton(individual, articlesDiv) {
    var homepagebutton = document.createElement('button')
    homepagebutton.innerHTML = 'Take me back to the homepage';
    homepagebutton.setAttribute("style", "margin-bottom: 1em");

    homepagebutton.addEventListener('click', function () {
      articlesDiv.setAttribute("style", "display: inline-block;");
      individual.setAttribute("style", "display: none;");
    })
    individual.appendChild(homepagebutton)
    return individual;
  }

  function showArticlePic(individual) {
    var pic = document.createElement('img');
    pic.setAttribute("src", event.detail.pic);
    individual.appendChild(pic);
    return individual;
  }

  function loadArticleSummary(individual,summary) {
    individual.appendChild(summary);
    return individual;
  }

  getGuardianData();

}

document.addEventListener("DOMContentLoaded", initialize);

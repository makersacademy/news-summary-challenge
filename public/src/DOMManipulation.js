var request = new XMLHttpRequest();

request.open("GET", "https://content.guardianapis.com/search?q=debate%20AND%20economy&tag=politics/politics&from-date=2014-01-01&api-key=test", true);

request.onload = function() {

  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.response.results.forEach(headline => {
      headlineController.add(headline.webTitle, headline.webUrl);
    })
  } else {
    console.log('error')
  }

  var app = document.getElementById("app");

  app.innerHTML = headlineController.returnHeadlines();

}

request.send()
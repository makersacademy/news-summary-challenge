fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2020-04-04").then(function(response) {
    response.text().then(function(text) {
      //console.log(text);
      var news = JSON.parse(text)
      //console.log(news.response.results[0].webTitle);

      news.response.results.forEach(i => {
          console.log(i.webTitle);
      })
    });
  });

  


  
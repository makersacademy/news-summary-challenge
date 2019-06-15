function NewsService() {};

NewsService.prototype = {
  getHeadlines: function(onHeadlinesReadyCallback) {
    var url = `https://content.guardianapis.com/search?api-key=${apiKey}`
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      var headlines = [];

      if (this.readyState == 4 && this.status == 200) {
        var responseJson = JSON.parse(this.responseText);
        var results = responseJson.response.results;

        results.forEach(result => {
          headlines.push(new Headline(result.webTitle));
        });

        onHeadlinesReadyCallback(headlines);
      }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
  }
};
fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/us-news/live/2018/nov/16/florida-election-recount-latest-trump-democrats-republicans-politics")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data)
    var summary = data.sentences
      for (var i = 0; i < summary.length; i++) {
        var text = summary[i]
        var node = document.createElement("p");
        node.innerHTML = text
        document.body.appendChild(node)
      }
  })

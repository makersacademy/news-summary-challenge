article = "https://www.theguardian.com/politics/live/2018/nov/18/theresa-may-brexit-jeremy-corbyn-eu-live"

summarise = function(article) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    var base = "https://api.aylien.com/api/v1/summarize?url="
    var url = proxyurl + base + article
    var request = new Request(url, {
    headers: new Headers({
      "X-AYLIEN-TextAPI-Application-Key": "",
      "X-AYLIEN-TextAPI-Application-ID": ""
    })
  })
  fetch(request).then(response => response.json())
    .then((data) => {
      console.log(data)
    })
  }

summarise(article)

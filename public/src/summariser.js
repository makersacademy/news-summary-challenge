
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
      summary = data.text
      s = document.createElement("SECTION")
      var sum = document.createTextNode(summary)
      s.appendChild(sum)
      document.getElementById('summary_container').appendChild(s)
    })
  }

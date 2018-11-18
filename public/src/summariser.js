
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
      summariseView(data)
    })
  }

var summariseView = function(data) {
  sumContainer = document.getElementById('summary_container')
  sumContainer.style.display = 'block;'
  summary = summariseText(data)
  const header = document.createElement("H1")
  const s = document.createElement("SECTION")
  header.innerHTML = "Summary"
  var sum = document.createTextNode(summary)
  sumContainer.appendChild(header)
  s.appendChild(sum)
  sumContainer.appendChild(s)
}

var summariseText = function(data) {
  text = ""
  data.sentences.forEach(function(sentence) {
    text += sentence
  })
  return text
}

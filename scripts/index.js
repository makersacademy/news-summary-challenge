const url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"

fetch(url)
.then((res) => res.json())
.then((data) => {
  let content = data.response.content
  let url = content.webUrl
  var newsTitle = document.createTextNode(content.webTitle)
  var item = document.createElement("p")
  item.appendChild(newsTitle)
  document.getElementById("news-feed").appendChild(item)
})
.catch((err) => console.log(err))
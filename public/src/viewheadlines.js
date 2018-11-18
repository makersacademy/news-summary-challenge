var getHeadlines = function(url) {
  var request = new Request(url, {})
  fetch(request).then(response => response.json())
  .then((data) => {
    displayHeadlines(data.response.results)
  })
}

displayHeadlines = function(results) {
  for(i=0;i<results.length;i++){
    addImage(results, i)
    addTitle(results, i)
  }
}

addTitle = function(results, i) {
   var title = results[i].webTitle
   var link = results[i].webUrl
   var imgUrl = results[i].fields.thumbnail
   var headline = document.createTextNode(title)
   var a = document.createElement("A")
   var li = document.createElement("LI")
   a.setAttribute('href', link)
   a.appendChild(headline)
   li.appendChild(a)
   document.getElementById('headlines_container').appendChild(li)
}

addImage = function(results, i) {
  var imgUrl = results[i].fields.thumbnail
  var img = document.createElement("IMG")
  img.setAttribute('id', results[i].webUrl)
  img.setAttribute('src', imgUrl)
  img.setAttribute('width', '300px')
  img.setAttribute('onclick', 'getid(this)')
  document.getElementById('headlines_container').appendChild(img)
}

getHeadliners = function() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        result = JSON.parse(this.responseText).response.results
        displayHeadliners(result)
      }
    };
  request.open("GET", "https://content.guardianapis.com/search?q=debates&api-key=c70caebd-9aca-4647-a488-642b7ef30a6b", true);
  request.send();
}

displayHeadliners = function(stories) {
  for (var i = 0; i < stories.length; i++) {
    var a = document.createElement("A")
    var title = stories[i].webTitle
    var link = stories[i].webUrl
    var headline = document.createTextNode(title)
    a.setAttribute('href', link)
    a.appendChild(headline)
    document.body.appendChild(a)
    b = document.createElement("BR")
    document.body.appendChild(b)
  }
}

getHeadliners()

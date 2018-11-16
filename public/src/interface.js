getHeadliners = function() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        result = JSON.parse(this.responseText).response.results
        displayHeadliners(result)
      }
    };
  request.open("GET", "https://content.guardianapis.com/search?q=debates&show-fields=thumbnail&api-key=c70caebd-9aca-4647-a488-642b7ef30a6b", true);
  request.send();
}

displayHeadliners = function(stories) {
  for (var i = 0; i < stories.length; i++) {
    addHeadlinerWithLink(stories, i)
    addShowMoreButton(stories, i)
    addHeadlinerImage(stories, i)
    addSummaryArea(stories, i)
    b = document.createElement("BR")
    document.body.appendChild(b)
  }
}

addHeadlinerWithLink = function(stories, i) {
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

addHeadlinerImage = function(stories, i) {
  var img = document.createElement("IMG")
  console.log(stories[i])
  img.setAttribute("src", stories[i].fields.thumbnail)
  document.body.appendChild(img)
}

addShowMoreButton = function(stories, i) {
  var button = document.createElement('BUTTON')
  var text = document.createTextNode("Show More")
  button.setAttribute('onclick', 'showSummary(' + i + ')')
  button.appendChild(text)
  document.body.appendChild(button)
}

addSummaryArea = function(stories, i) {
  var div = document.createElement('DIV')
  div.setAttribute('id', 'summary' + i)
  document.body.appendChild(div)
  addSummary(stories, i)
  document.getElementById('summary' + i).style.display = "none"
}

addSummary = function(stories, i) {
  var summaryRequest = new XMLHttpRequest();
  summaryRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        result = JSON.parse(this.responseText).response.content.fields.body
        result = result.split("</p>")[0] + result.split("</p>")[1]
        document.getElementById("summary" + i).innerHTML = result
      }
    };
  summaryRequest.open("GET", stories[i].apiUrl + "?show-fields=body&api-key=c70caebd-9aca-4647-a488-642b7ef30a6b", true);
  summaryRequest.send();
}

showSummary = function(i) {
  var x = document.getElementById("summary" + i);
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

getHeadliners()

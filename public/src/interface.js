var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      result = JSON.parse(this.responseText)
      stories = result.response.results
      for (var i = 0; i < stories.length; i++) {
        var p = document.createElement("P")
        var storyDetails = stories[i].id.split("/")
        var title = storyDetails[storyDetails.length - 1]
        var headline = document.createTextNode(title)
        p.appendChild(headline)
        document.body.appendChild(p)
      }
    }
  };

request.open("GET", "https://content.guardianapis.com/search?q=debates&api-key=c70caebd-9aca-4647-a488-642b7ef30a6b", true);
request.send();

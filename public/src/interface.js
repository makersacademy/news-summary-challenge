var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      result = JSON.parse(this.responseText)
      headlines = result.response.results
      for (var i = 0; i < headlines.length; i++) {
        var p = document.createElement("P")
        var headline = document.createTextNode(headlines[i].id)
        p.appendChild(headline)
        document.body.appendChild(p)
      }
      // document.getElementById("headline").innerHTML = result.response.results;
      // console.log(result.response.results)
    }
  };

request.open("GET", "https://content.guardianapis.com/search?q=debates&api-key=c70caebd-9aca-4647-a488-642b7ef30a6b", true);
request.send();

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.response)
      stories = obj['response']['results']
      headlines = "Today's headlines from Guardian"
      for (let i=0; i<stories.length; i++) {
        story = stories[i]
        headlines += story['webTitle']
        headlines += story['webPublicationDate']
        headlines += story['webUrl']
      };
      document.getElementById("demo").innerHTML = headlines;
    }
  };
  url="https://content.guardianapis.com/search?api-key=5b04ca4c-8fe4-44d9-ac02-4f23b30c04f2"
  url="gardian.json" //stub
  xhttp.open("GET", url, true);
  xhttp.send();
}

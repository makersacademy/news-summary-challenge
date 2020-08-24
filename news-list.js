(function(exports){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var snippet = new Snippet(JSON.parse(this.responseText))
      document.getElementById("demo").innerHTML = snippet.toHtml()
    };
  };

  xhttp.open("GET", "https://content.guardianapis.com/search?api-key=21b29e63-af73-49ed-b3af-9f3cdb402be6", true);
  xhttp.send();
  exports.xhttp = XMLHttpRequest;
})(this);

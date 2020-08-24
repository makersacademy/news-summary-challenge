(function(exports){
  var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        response = JSON.parse(this.responseText)
        document.getElementById("article").innerHTML = String(response["response"]["results"])
      };
    };


    request.open("GET", "https://content.guardianapis.com/us-news/live/2020/aug/22/us-politics-live-joe-biden-kamala-harris-donald-trump-coronavirus-election-latest-news-updates?api-key=21b29e63-af73-49ed-b3af-9f3cdb402be6", true);
    request.send();
    exports.request = XMLHttpRequest;
})(this);

// <meta name="description" content="Charges under the Terrorism Act come as part of police investigation into the New IRA"/>

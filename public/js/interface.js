// API call

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText)
    // var results = JSON.parse(this.responseText.response.response.results)
    console.log(response.response.results)
    // document.getElementById("headline").innerHTML = ;
    }
  };
xhttp.open("GET", "https://content.guardianapis.com/search?q=technology&show-fields=thumbnail&api-key=bad91230-b571-4dec-b899-7575ea60a1a4", true);
xhttp.send();

// Functions

function displayHeadlines(results) {
  for (var i = 0; i < results.length; i++) {
    var listItem = document.createElement('li')
    document.getElementById('')
    document.getElementById('headline').
  }
}

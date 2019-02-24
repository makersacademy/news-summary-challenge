function guardianListener() {
  var data = JSON.parse(this.responseText);
  console.log(data);
  for (var i = 0; i < data.response.results.length; i++) {
    var div = document.createElement("div");
    div.id = i.toString();
    div.className = "card border-warning "
    document.body.appendChild(div);
    document.getElementById(div.id).innerHTML += "<div class='card-title' style='display: inline-block; font-size:25px;'><a href=" + data.response.results[i].webUrl +">" + data.response.results[i].webTitle + "</a></div><br>";
    document.getElementById(div.id).innerHTML += "<div><img style='display: inline-block; padding: 15px; height: 100%; width: 100%;' src=" + data.response.results[i].fields.thumbnail + "></div>";
    summaryPrinter(data.response.results[i].webUrl, i)
  }
}

var guardianRequest = new XMLHttpRequest();
guardianRequest.addEventListener("load", guardianListener);
guardianRequest.open("GET", "http://content.guardianapis.com/uk-news?show-fields=thumbnail&api-key=" + config.MY_KEY);
guardianRequest.send();

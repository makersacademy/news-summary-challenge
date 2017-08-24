function httpRequest(url, nextFunction) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      nextFunction(data);
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}
guardianlUrl = "http://content.guardianapis.com/search?q=cats&api-key=3076bfa9-8478-4c22-afa5-e8e808fbd35b";

httpRequest(guardianlUrl, nextFunction);

function nextFunction(data){
  var ul = document.createElement('ul');
  document.body.appendChild(ul);

  // var articles = [];
  for (var i = 0; i < data.response.results.length; i++){
    var li = document.createElement("li");
    li.innerText = data.response.results[i].webTitle;
    ul.appendChild(li);
    // console.log(data.response.results[i]);
    // console.log(data.response.results[i].webTitle);
    // articles.push(data.response.results[i].webTitle);
    // console.log(articles);
}
// return articles;
}

// var articles = data.response.results[i];
// var articles = response.results;//[array of articles]
// var tittle = data.response.results[0].webTitle;

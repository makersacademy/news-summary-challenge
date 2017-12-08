getNews = function(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world');
  xhr.onload = function() {
    if (xhr.status === 200) {

      var data = JSON.parse(xhr.responseText)
      // array = []
      // for (var i = 0; i < 10; i++){
      //
      //    array.push(data.response) ;
      // }
      toView(render(data.response))
    }
    else {
      alert('Request failed.  Returned status of ' + xhr.status);
    }

  };
  xhr.send();
}



render = function(news) {
  var htmlString = ""
  console.log(news.results[1].webUrl)

    for (var i = 0; i < news.results.length; i++){
        htmlString += `<a href = "${news.results[i].webUrl}"<li><div>${news.results[i].webTitle}...</a></div></li>`
    }
    return (`<ul>${htmlString}</ul>`)
}


toView = function(list) {
  oops = document.getElementById('app');
  oops.innerHTML = list;
}

getNews();

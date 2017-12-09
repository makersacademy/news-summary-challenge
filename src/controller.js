getNews = function(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world' );
  xhr.onload = function() {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText)
      toView(render(data.response))
    }
    else {
      alert('Request failed.  Returned status of ' + xhr.status);
    }

  };
  xhr.send();
}

getSummary = function(link){
  // var sliceLink = link.slice(28);
  // console.log(sliceLink)
  console.log(link)
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + link);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText)
      console.log("getSummary",data.sentences)
      toSummaryView(summaryRender(data))
    }
    else {
      alert('Request failed.  Returned status of ' + xhr.status);
    }

  };
  xhr.send();
}


render = function(news) {
  var htmlString = ""
    for (var i = 0; i < news.results.length; i++){
        htmlString += `<a href = "${news.results[i].webUrl}"<li>
                      <div>${news.results[i].webTitle}</a></div>
                      <button onClick="(getSummary('${news.results[i].webUrl}'))">Get Summary </button>
                      </li>`
    }
    return (`<ul>${htmlString}</ul>`)
}

summaryRender = function(singleNews){
  var htmlString = ''
  for(var i = 0; i < singleNews.sentences.length; i++){
    htmlString += `<div>${singleNews.sentences[i]}</div><br>`
  }
    return (`${htmlString}`)
}


toView = function(list) {
  oops = document.getElementById('app');
  oops.innerHTML = list;
}

toSummaryView = function(summary){
  righto = document.getElementById('summary');
  oops.innerHTML = summary;
}

getNews();

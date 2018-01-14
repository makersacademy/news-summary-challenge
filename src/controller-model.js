
  function returnArticles(){
    var url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=uk&from-date=2018-01-12';
    var request = new XMLHttpRequest();

    request.open('GET', url);
    request.onload = function() {
      if (request.status === 200) {
        var data = JSON.parse(request.responseText)
        // console.log(request.responseText)
        console.log(data.response)
        viewNews(getHTMLstring(data.response))
      }
      else {
        alert('Request failed.  Request status: ' + request.status);
      }
    };
    request.send();
  }

  getHTMLstring = function(news) {
    var string = ""
    for (var i = 0; i < news.results.length; i++){
        string += `<a href = "${news.results[i].webUrl}"<li>
                      <div>${news.results[i].webTitle}</a></div>
                      </li>`
    }
    return (`<ul>${string}</ul>`)
  }

  viewNews = function(list) {
    viewHTML = document.getElementById('articles');
    viewHTML.innerHTML = list;
  }

  returnArticles()

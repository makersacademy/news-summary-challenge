
  function startHeadlineRequest(){
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = getAndShowHeadlinesOnThePage;
    httpRequest.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2018-04-07', true);
    httpRequest.send();

      function getAndShowHeadlinesOnThePage(){
        console.log(httpRequest.readyState);
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          showHeadlines(getHeadlines())
        }
      }


      function getHeadlines() {
        if (httpRequest.status === 200) {
          var response = JSON.parse(httpRequest.responseText).response.results.map(result =>
            ({
              title: result.webTitle, url: result.webUrl
            })
          );
          return response;
        } else {
          alert('There was a problem with the request.');
        }

      }
  }

  function showHeadlines(headlines){
    headlines.map(headline =>
      {
        var li = document.createElement("li");
        var originalLink = document.createElement("a");
        var summaryLink = document.createElement("a");

        originalLink.textContent = headline.title;
        originalLink.setAttribute('href', headline.url);

        summaryLink.textContent = "Show Summary";
        console.log(`return getAndShowSummary("${headline.url}")`);
        summaryLink.setAttribute('onclick', `return getAndShowSummary("${headline.url}")`);
        summaryLink.setAttribute('href', "#")

        li.appendChild(originalLink)
        li.appendChild(document.createElement("br"))
        li.appendChild(summaryLink)
        document.querySelector("ul").appendChild(li);
      }
    )
  }

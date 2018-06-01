
  function startHeadlineRequest(){
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = getAndShowHeadlinesOnThePage;
    httpRequest.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2018-04-08%26show-fields=thumbnail', true);
    httpRequest.send();

      function getAndShowHeadlinesOnThePage(){
        console.log(httpRequest.readyState);
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          showHeadlines(getAndAddEachIndexIntoObj(getHeadlines()))
        }
      }


      function getHeadlines() {
        if (httpRequest.status === 200) {
          var response = JSON.parse(httpRequest.responseText).response.results.map(result =>
            ({
              title: result.webTitle, url: result.webUrl, imageUrl: result.fields? result.fields.thumbnail : undefined
            })
          );
          return response;
        } else {
          alert('There was a problem with the request.');
        }
      }
  }

  function getAndAddEachIndexIntoObj(headlines){
    console.log(headlines);
    var valueWithIndex = Array.from(headlines.entries());
    return valueWithIndex.map(subarr =>
      ({
        title: subarr[1].title, url: subarr[1].url, imageUrl: subarr[1].imageUrl, id: subarr[0]
        })
    )
  }

  function showHeadlines(headlines){
    headlines.map(headline =>
      {
        var li = document.createElement("li");
        var originalLink = document.createElement("a");
        var summaryLink = document.createElement("a");
        var image = document.createElement("img");

        originalLink.textContent = headline.title;
        originalLink.setAttribute('href', headline.url);
        li.setAttribute('id', headline.id)
        li.classList.add("headlines")

        summaryLink.textContent = "Show Summary";
        summaryLink.onclick = function(){
          getAndShowSummary(headline.url)
          hideOtherLinks(headline.id)
          summaryLink.classList.add("hidden")
        };
        summaryLink.setAttribute('href', "#")
        summaryLink.classList.add("showSummary")

        image.setAttribute('src', headline.imageUrl);

        li.appendChild(image)
        li.appendChild(document.createElement("br"))
        li.appendChild(originalLink)
        li.appendChild(document.createElement("br"))
        li.appendChild(summaryLink)
        li.appendChild(document.createElement("br"))
        document.querySelector("ul").appendChild(li);
      }
    )
  }

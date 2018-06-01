function getAndShowSummary(url){
  console.log(url);
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = getAndShowSummaryOnPage;
  httpRequest.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + url, true);
  httpRequest.send();

  function getSummary(){
    if (httpRequest.status === 200) {
      var response = JSON.parse(httpRequest.responseText).sentences
      console.log(response);
      return response
    } else {
      alert('There was a problem with the request.');
    }

  }

    function getAndShowSummaryOnPage(){
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        showSummaryContentOnPage(getSummary())
      }
    }
  }

function showSummaryContentOnPage(summary){
  document.getElementById("summary").textContent = summary
}

function hideOtherLinks(idOfShowingsummary){
  var elements = document.getElementById("headlines");
  Array.from(elements.children).map(child => {
    if(child.id != idOfShowingsummary){
      child.classList.add("hidden")
    }
  })
}

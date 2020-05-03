

document.addEventListener("DOMContentLoaded", function () {
  function getRequestToGuardian(callBack) {
    let guardianURL =
      "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search";
    var request = new XMLHttpRequest();
    //var herokuappURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="

    request.onload = function () {
      let parsedResponse = JSON.parse(this.responseText);
      let results = parsedResponse.response.results;
      let headLineList = document.getElementById("headlines");

      populateHeadlineList(results, headLineList);
    
    
    
    };
    request.open("GET", guardianURL);
    request.send();
  }

  getRequestToGuardian();
});
//}

function populateHeadlineList(results, headLineList) {
  results.forEach(function (result) {
    //let aylienURL = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + result.webUrl
    //var request = new XMLHttpRequest();

    
    headLineList.innerHTML += `<p onclick="showSummary()" class='headline'>${result.webTitle}<br></p>`;

  


    addGuardianLink(result, headLineList);
  });
  //request.open('Get', aylienURL)
  //request.send()
}



function addGuardianLink(result, headLineList) {
  headLineList.innerHTML += `<a href='${result.webUrl}'> Link to original news article </a>`;
  headLineList.innerHTML += "<br>" + "<br>";
}

function showSummary() {
  let headLineList = document.getElementById("headlines")
  let summary = document.getElementById("summary");
  console.log("in display summary");
  summary.innerHTML = `<p> summary test </p>  <button onclick="goBack()"> back </button>`;
  headLineList.innerHTML = "<p>  </p>"
  //summary = "<p> summary test </p>";
}

function goBack(){
  location.reload()
}
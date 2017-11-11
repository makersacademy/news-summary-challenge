(function(exports) {

  function GuardianAPI() {
    var list = new HeadlinesList();
    // console.log(list.returnHeadlines());
}
  //   var request = new XMLHttpRequest();
  //     request.open('GET', ("https://content.guardianapis.com/search?q=economy&api-key=test"));
  //     request.send();
  //
  //   request.onreadystatechange = runRequest;
  //
  //   function runRequest() {
  //     var headlines = document.getElementById("allHeadlines");
  //     if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
  //       var dataReceived = JSON.parse(request.responseText);
  //       list.addHeadlines(dataReceived.response.results[0].webTitle);
  //     }
  //     headlines.innerHTML = list.returnHeadlines();
  //   }
  // };
  // exports.GuardianAPI = GuardianAPI;
})(this);

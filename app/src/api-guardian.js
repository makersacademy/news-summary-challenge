(function(exports) {

  function APIGuardian() {

  var headlinesID = document.getElementById("headlines");
  headlinesArray = [];

  var xhr = new XMLHttpRequest();
   xhr.open('GET', "https://content.guardianapis.com/search?q=debates&api-key=test", true);
   xhr.send();

   xhr.onreadystatechange = processRequest;

   function processRequest() {
     if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        headlinesArray.push(response.response.results[0].webTitle);
     }
    headlinesID.innerHTML = headlinesArray;
   }};

   exports.APIGuardian = APIGuardian;
})(this);


//  Dev Env Api key: https://content.guardianapis.com/search?api-key=a6ef6232-e59a-495c-a292-3571f2050a5e

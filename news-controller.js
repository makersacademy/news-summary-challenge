// Makers Academy News Summary API using cURL
//
// var xhr = new XMLHttpRequest();
// xhr.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body");
// xhr.onload = function() {
//   if (xhr.status === 200) {
//     let data = xhr.responseText;
//     console.log(`DATA FROM RESPONSE: ${data}`);
//     var jsonResponse = JSON.parse(data);
//     console.log(jsonResponse.response.content.webTitle);
//   }
//   else {
//     alert('Request failed.  Returned status of ' + xhr.status);
//   }
// };
// xhr.send();
//


var xhr = new XMLHttpRequest();
xhr.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html");
xhr.onload = function() {
  if (xhr.status === 200) {
    let data = xhr.responseText;
    console.log(`DATA FROM RESPONSE: ${data}`);
    var jsonResponse = JSON.parse(data);
    console.log(`JSON RESPONSE AFTER PARSE: ${jsonResponse}`);
  }
  else {
    alert('Request failed.  Returned status of ' + xhr.status);
  }
};
xhr.send();

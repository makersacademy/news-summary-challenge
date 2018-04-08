// Makers Academy News Summary API using cURL: http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body
// debate and econoy: https://content.guardianapis.com/search?q=debate%20AND%20economy&tag=politics/politics&from-date=2014-01-01
// example of how to get all fields https://gist.github.com/dannguyen/c9cb220093ee4c12b840
'use strict';

var todayDate = (new Date()).toISOString().slice(0, 10);

var xhr = new XMLHttpRequest();
xhr.open('GET', `http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=debate%20AND%20economy&show-fields=all&tag=politics/politics&from-date=${todayDate}`);
xhr.onload = function() {
  if (xhr.status === 200) {
    let data = xhr.responseText;
    console.log(`DATA FROM RESPONSE: ${data}`);
    let jsonResponse = JSON.parse(data);
    console.log(jsonResponse.response.results);
  }
  else {
    alert('Request failed.  Returned status of ' + xhr.status);
  }
};
xhr.send();

// image for an article example: https://i.guim.co.uk/img/media/73dd885e9ec074bef1871dad8709d405df817737/0_155_4500_2700/master/4500.jpg?w=620&q=20&auto=format&usm=12&fit=max&dpr=2&s=5fc0a3ad31dde7e40e6baf3e246958a7

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html");
// xhr.onload = function() {
//   if (xhr.status === 200) {
//     let data = xhr.responseText;
//     console.log(`DATA FROM RESPONSE: ${data}`);
//     var jsonResponse = JSON.parse(data);
//     console.log(`JSON RESPONSE AFTER PARSE: ${jsonResponse}`);
//   }
//   else {
//     alert('Request failed.  Returned status of ' + xhr.status);
//   }
// };
// xhr.send();

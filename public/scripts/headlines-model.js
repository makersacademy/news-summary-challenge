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

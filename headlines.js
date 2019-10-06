var headlines = new XMLHttpRequest();
var headlineObject;

// AJAX Request for headlines
headlines.open('GET',
'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body', true);
headlines.send();

headlines.onload = function() {
        headlineObject = JSON.parse(headlines.responseText);
        document.getElementById('headline').innerHTML=headlineObject.webTitle;
        console.log(headlines)
};

function fetchNews() {
//var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"
   var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics"
   fetch(url).then(function(response){
     console.log(response.json());
     return "Hello"
     //return response.json();
   })
}

function fetchSummary(url) {
   var newurl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="+url
   fetch(newurl).then(function(response){
     return response.json();
   })
}


var guardianRequest = new XMLHttpRequest();
guardianRequest.addEventListener("load", renderHeadlineListView);
guardianRequest.open("GET", "https://content.guardianapis.com/search?q=content&show-fields=thumbnail,bodyText&api-key=" + MY_API_KEY)
guardianRequest.send();

// var guardianRequest = new XMLHttpRequest();
// guardianRequest.open("GET", "https://content.guardianapis.com/search?q=politics&show-fields=bodyText,thumbnail&api-key=" + MY_API_KEY)
// guardianRequest.send();
// var json = JSON.parse(guardianRequest.responseText).response.results;
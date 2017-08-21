var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-fields=BodyText&q=politics";
var headlineList = new HeadlineList();
var api = new ApiCall(url, headlineList);
var apiCall = api.makeCall();

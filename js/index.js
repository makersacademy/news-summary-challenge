var politicsApiRequest = "https://content.guardianapis.com/politics";

// Headlines requests
var makersHeadlinesApiRequest = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=" + politicsApiRequest;
var ownKeyHeadlinesApiRequest = politicsApiRequest + "?" + apiKey;

// Single article requests
var requestsFields = "show-fields=body";
var article1Api = "https://content.guardianapis.com/politics/2017/aug/20/brexit-davis-urges-brussels-rethink-on-holding-withdrawal-and-trade-talks-at-same-time";
var articleRequest1 = article1Api + "?" + requestsFields + "&" + apiKey;

// Instantiation
var newsController = new NewsController(ApiRequester, ArticleManager);

const client = new Client();

function makeHeadlinesRequest(callback) {
	client.fetchHeadlines().then(callback);
}

function makeSummaryRequest(url, callback) {
	client.fetchSummary(url).then(callback);
}

// function makeArticleRequest(url, callback) {
//   client.fetchArticle(url).then(callback);
// }

// const app = new App(makeHeadlinesRequest, makeSummaryRequest, makeArticleRequest);
const app = new App(makeHeadlinesRequest, makeSummaryRequest);
window.addEventListener('load', () => app.getHeadlines());

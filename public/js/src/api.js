const POLITICS_URL = `https://content.guardianapis.com/search?from-date=${yesterday()}&to-date=${today()}&q=politics&api-key=test&show-fields=all`

const frontPage = new FrontPage();

fetchArticles();

function fetchArticles(url = POLITICS_URL) {
  if (ENVIRONMENT === 'test') {
    const results = '{"response":{"status":"ok","results":"Test OK"}}'
    frontPage.articles = results;
    return results;
  }
  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
    .then(data => frontPage.articles = data.response.results);
}

function today() {
  const today = new Date().toLocaleDateString();
  return today.split('/').reverse().join('-')
}

function yesterday() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString().split('/').reverse().join('-')
}

function fetchSummaries(articleUrl) {
  const makersUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl='
  const aylienUrl = 'https://api.aylien.com/api/v1/summarize?url='
  const url = makersUrl + aylienUrl + articleUrl

  if (ENVIRONMENT === 'test') {
    const result = '{"response":{"status":"ok","results":"Test OK"}}'
    frontPage.summaries.push(result);
    return result;
  }

  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
    .then(data => frontPage.summaries.push(data));
}

// setTimeout(() => {
//   fetchSummaries(frontPage.articles[0].webUrl)
// }, 400)

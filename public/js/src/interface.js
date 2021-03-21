const testUrl = "http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=test"


fetchArticles(testUrl);

function fetchArticles(url) {
  if (ENVIRONMENT === 'test') {
    return '{"response":{"status":"ok","results":"Test OK"}}';
  }

  const response = fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
    .then(data => console.log(data));
}

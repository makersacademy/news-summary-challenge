class NewsApi {
  loadNews() {
    fetch('http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=98e51f22-b91b-4a89-b784-aa14c541dfed')
    .then(responseAnswer => responseAnswer.json())
    .then(data => console.log(data.response))
  }

}

module.exports = NewsApi;
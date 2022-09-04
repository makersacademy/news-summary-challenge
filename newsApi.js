class NewsApi {
  loadSummaries(callback, errorCb) {
    fetch("https://content.guardianapis.com/search?api-key=e3a72dc4-399d-43f2-a749-2637ab119442")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      callback(data)
    })
    .catch((error) => {
      console.log(error)
      errorCb(error)
    })
  }
}

module.exports = NewsApi;
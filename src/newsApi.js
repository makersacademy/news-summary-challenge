class newsApi {

  loadNews(callback) {
    fetch('https://content.guardianapis.com/search?q=headline&api-key=21831b4e-69fe-49f1-a75d-d24709168ad2')
    .then(response => response.json())
    .then((data) => {
      console.log('Load', data);
      callback(data);
    })
  }
}

module.exports = newsApi;
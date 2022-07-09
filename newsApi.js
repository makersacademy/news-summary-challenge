class NewsApi {
  loadData(callback, errorCallback) {
    fetch('http://localhost:3000/news')
      .then(response => response.json())
      .then(data => {
        callback(data)
      // })
      // .catch(() => {
      //   errorCallback();
      });
  }
}

module.exports = NewsApi;
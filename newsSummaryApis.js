class NewsSummaryApis {
  loadNews(callback) {
    let today = new Date();
    let fullYear = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    fetch(`http://content.guardianapis.com/search?healine&from-date=${fullYear}-${month}-${day}&show-elements=image&thumbnail&api-key=`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch(error => console.error(error))
  }
}

module.exports = NewsSummaryApis;
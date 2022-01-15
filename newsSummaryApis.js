class NewsSummaryApis {
  loadHeadlines(callback) {
    let today = new Date();
    let fullYear = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    fetch(`http://content.guardianapis.com/search?section=politics&from-date=${fullYear}-${month}-${day}&show-fields=thumbnail&api-key=`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch(error => console.error(error))
  }
}

module.exports = NewsSummaryApis;
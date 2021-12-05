const fetchArticle = (callback) => {
  fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/2021/dec/05/raab-says-formal-party-in-no-10-last-christmas-would-have-broken-rules?show-fields=body")
  .then(response => response.json())
  .then(data => callback(data));
};

module.exports = fetchArticle;

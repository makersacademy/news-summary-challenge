const fetchArticle = (callback) => {
  fetch("https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=test&show-fields=thumbnail")
  .then(response => response.json())
  .then(data => callback(data));
};

module.exports = fetchArticle;

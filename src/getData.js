const getData = () => {
  fetch("https://content.guardianapis.com/search?page-size=10&api-key=test&format=json&show-fields=body,headline,thumbnail")
    .then(response => response.json())
    .then(data => {
      const articles = data.response.results
      articles.forEach((article) => {
        createCard(article)
      });
    })
  }

module.exports = getData;
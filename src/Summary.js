class Summary {
  
  getAllArticles = (card) => {
  fetch("https://content.guardianapis.com/search?page-size=20&api-key=test&format=json&show-fields=body,headline,thumbnail")
    .then(response => response.json())
    .then(data => {
      const articles = data.response.results
      articles.forEach((article) => {
        card.createCard(article)
      });
    })
  }

}
module.exports = Summary;
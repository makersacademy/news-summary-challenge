class Summary {
  
  getAllArticles = (card) => {
  fetch("https://content.guardianapis.com/search?page-size=10&api-key=test&format=json&show-fields=body,headline,thumbnail")
    .then(response => response.json())
    .then(data => {
      const articles = data.response.results
      articles.forEach((article) => {
        card.createCard(article)
      });
    })
  }

  getSectionArticles = (card, section) => {
    fetch(`https://content.guardianapis.com/section?q=${section}&page-size=10&api-key=test&format=json&show-fields=body,headline,thumbnail`)
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
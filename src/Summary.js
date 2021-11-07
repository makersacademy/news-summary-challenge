const modalLogic = require("./modalLogic");

class Summary {
  
  getAllArticles = (card, modal) => {
  fetch("https://content.guardianapis.com/search?page-size=20&api-key=test&format=json&show-fields=body,headline,thumbnail")
    .then(response => response.json())
    .then(data => {
      const articles = data.response.results
      async function myFunc() {
        await new Promise((resolve) => {
          resolve(articles.forEach((article) => {
          card.createCard(article, modal)
        }));
      });
      modalLogic();
      }
      myFunc();
      })
  }

}
module.exports = Summary;
/* eslint-disable class-methods-use-this */
const modalLogic = require('./modalLogic');

class Summary {
  getAllArticles(card, modal) {
    fetch('https://content.guardianapis.com/search?page-size=20&api-key=test&format=json&show-fields=body,headline,thumbnail')
      .then(card.showLoading())
      .then((response) => response.json())
      .then((data) => {
        const articles = data.response.results;
        async function myFunc(callback) {
          await new Promise((resolve) => {
            resolve(articles.forEach((article) => {
              setTimeout(() => { card.createCard(article, modal); }, 900);
            }));
            callback();
          });
          setTimeout(() => { modalLogic(); }, 1000);
        }
        myFunc();

        setTimeout(() => { card.removeLoading(); }, 800);
      });
  }
}
module.exports = Summary;

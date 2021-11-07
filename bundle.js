(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchNews.js
  var require_fetchNews = __commonJS({
    "fetchNews.js"(exports, module) {
      var testAPI = "https://content.guardianapis.com/search?page=1&api-key=test&show-fields=body,headline,thumbnail";
      var fetchNews2 = (onDataFetched) => {
        fetch(testAPI).then((response) => response.json()).then(onDataFetched);
      };
      module.exports = fetchNews2;
    }
  });

  // index.js
  var fetchNews = require_fetchNews();
  fetchNews((newsData) => {
    console.log(newsData);
  });
  var displayNewsCards = () => {
    if (cardContainer) {
      document.getElementById("card-container").replaceWith(cardContainer);
      return;
    }
    if (modalContainer) {
      document.getElementById("modal-container").replaceWith(modalContainer);
      return;
    }
    fetchNews((newsData) => {
      cardContainer = document.getElementById("card-container");
      newsData.response.results.forEach((news) => {
        createNewsCard(news);
      });
    });
  };
  displayNewsCards();
})();

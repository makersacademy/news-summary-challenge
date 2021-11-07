(() => {
  // index.js
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

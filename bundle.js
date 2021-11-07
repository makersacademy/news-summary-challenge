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
  var newsCard = document.querySelector("#newsCard");
  var cardImg = document.querySelector("#cardImg");
  var cardTitle = document.querySelector("#cardTitle");
  var cardText = document.querySelector("#cardText");
  var cardLink = document.querySelector("#cardLink");
  fetchNews((newsData) => {
    console.log(newsData);
  });
  var cardContainer;
  createNewsCard = (news) => {
    let col = document.createElement("div");
    col.className = "col col-md-3 my-4";
    let card = document.createElement("div");
    card.className = "card shadow cursor-pointer";
    card.style = "width: 18rem;";
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    let pic = document.createElement("IMG");
    pic.className = "card-img-top";
    pic.setAttribute("src", news.fields.thumbnail);
    let title = document.createElement("h5");
    title.innerText = news.fields.headline;
    title.className = "card-title text-truncate";
    let text = document.createElement("p");
    text.innerText = news.webTitle;
    text.className = "card-text";
    let link = document.createElement("a");
    link.className = "btn btn-primary";
    link.innerText = "Read more";
    link.href = news.webUrl;
    card.appendChild(cardBody);
    card.prepend(pic);
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(link);
    col.appendChild(card);
    cardContainer.appendChild(col);
  };
  var displayNewsCards = () => {
    if (cardContainer) {
      document.getElementById("card-container").replaceWith(cardContainer);
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

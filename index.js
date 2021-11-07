const fetchNews = require("./fetchNews");

let newsCard = document.querySelector("#newsCard");
let cardImg = document.querySelector("#cardImg");
let cardTitle = document.querySelector("#cardTitle");
let cardText = document.querySelector("#cardText");
let cardLink = document.querySelector("#cardLink");

fetchNews((newsData) => {
  console.log(newsData);
  // document.write(JSON.stringify(newsData.response.results));
});

let cardContainer;

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

let displayNewsCards = () => {
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

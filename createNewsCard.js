let cardContainer;

createNewsCard = (news) => {
  let col = document.createElement("div");
  col.className = "col col-md-3 my-4";

  let card = document.createElement("div");
  card.className = "card shadow cursor-pointer";
  card.style = "width: 18rem; height: 400px;";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let pic = document.createElement("IMG");
  pic.className = "card-img-top";
  pic.setAttribute("src", news.fields.thumbnail);

  let title = document.createElement("h5");
  title.innerText = news.fields.headline;
  title.className = "card-title text-truncate";

  let text = document.createElement("p");
  text.innerHTML = news.fields.body;
  text.innerHTML = `<p>${text.innerText}</p>`.substring(0, 130) + "...";
  text.className = "card-text";
  text.style = "height: 90px;";

  let link = document.createElement("button");
  link.className = "btn btn-dark";
  link.innerText = "Read more";

  link.addEventListener("click", () => {
    const modal = readSingleArticle(news);
    modal.show();
  });

  card.appendChild(cardBody);
  card.prepend(pic);
  cardBody.appendChild(title);
  cardBody.appendChild(text);
  cardBody.appendChild(link);
  col.appendChild(card);
  cardContainer.appendChild(col);
};

fetch("https://content.guardianapis.com/search?q=debate&tag=politics/politics&show-fields=thumbnail&api-key=test")
  .then((response) => {
    if (!response.ok) {
      throw Error("Bad Response");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const articles = data.response.results
      .map((article) => {
        return `
        <div class="article">
        <p><img src="${article.fields.thumbnail}" alt=${article.webTitle}" /></p>
        <h3>Headline: ${article.webTitle}</h3>
        <p><a href=${article.webUrl} target="${article.webUrl}">Click for full Story:</a></p>
        </div>
        `;
      })
      .join("");
    document
      .querySelector("#news-headlines")
      .insertAdjacentHTML("afterbegin", articles);
  })
  .catch((error) => {
    console.log(error);
  });

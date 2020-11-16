// const SECRET_API_KEY = "89e36cb9-825d-498a-a539-58c3d6815fa5";
// const URL = `http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?q=&show-fields=starRating,headline,thumbnail,short-url&show-refinements=all&order-by=relevance&api-key=${SECRET_API_KEY}`;

  fetch('https://content.guardianapis.com/search?q=debate&tag=politics/politics&show-fields=thumbnail&api-key=test')
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
          <p><img src="${article.thumbnail}" alt=${article.webTitle}" /></p>
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
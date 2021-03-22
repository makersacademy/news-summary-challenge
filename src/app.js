let newsApi = new NewsApi();
let articles = [];
newsApi.getLatestNews(render);

function render(apiResponses) {
  articles = convertToArticles(apiResponses);
  showArticles(articles);
}

function convertToArticles(apiResponses) {
  let results = [];

  for (let index = 0; index < apiResponses.length; index++) {
    let response = apiResponses[index];
    let article =  new Article(
      response.webTitle,
      response.fields ? response.fields.standfirst : "",
      response.fields ? response.fields.thumbnail : "",
      response.webUrl
    );
    results.push(article);
  }

  return results;
}

function showArticles(articles) {
  let articlesElement = document.getElementById("articles");
  articlesElement.innerHTML = "";

  for (let index = 0; index < articles.length; index++) {
    let article = articles[index];
    articlesElement.appendChild(article.getPreview(index, showArticle));
  }
}

function showArticle(id) {
  let articlesElement = document.getElementById("articles");
  articlesElement.innerHTML = "";
  articlesElement.appendChild(articles[id].getContent());
}

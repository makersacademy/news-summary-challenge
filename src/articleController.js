class ArticleController {
  constructor(articleList = new ArticleList) {
    this.articleList = articleList;
    this.API_KEY = "78fb758b-9cd0-48e8-96c1-fe29eb42c6d0";
  }

  fetchTodaysArticles() {
    let url = `http://content.guardianapis.com/search?from-date=${new Date().toJSON().slice(0,10)}&show-fields=headline%2Cthumbnail&api-key=${this.API_KEY}`;
    this.#clearArticleList();

    this.#getAsyncXmlHTTP(url, function(response){
      let latestArticles = JSON.parse(response).response.results;
      latestArticles.forEach(article => {
        this.articleList.addArticle(article.fields.headline, article.fields.thumbnail, article.id);
      })
      let articleListView = new ArticleListView(this.articleList);
      document.getElementById("app").innerHTML = articleListView.getHTML();
    }.bind(this));
  }

  createArticleView(id) {
    let article = this.#getArticleByID(id);
    let url = `http://content.guardianapis.com/${article.getUrlID()}?show-fields=body&api-key=${this.API_KEY}`;
    this.#getAsyncXmlHTTP(url, function(response){
      let articleBody = JSON.parse(response).response.content.fields.body;
      console.log("Article body received is: ");
      console.log(articleBody);
      let singleArticleView = new SingleArticleView(article, articleBody);
      document.getElementById("app").innerHTML = singleArticleView.getHTML();
    })
  }

  #getAsyncXmlHTTP(url, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        callback(xhttp.responseText);
      }
    }.bind(this);
    xhttp.open("GET", url, true);
    xhttp.send();
  }

  #getArticleByID(id) {
    return this.articleList.getArticleByID(id);
  }

  #clearArticleList() {
    this.articleList = new ArticleList;
  }
}

let articleController = new ArticleController;
articleController.fetchTodaysArticles()

window.addEventListener('hashchange', function(event){
  if (event.newURL.slice(-1) == '/') {
    articleController.fetchTodaysArticles();
  } else {
    let id = event.newURL.slice(-1);
    articleController.createArticleView(id);
  }
})

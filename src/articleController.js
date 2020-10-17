class ArticleController{

  constructor(articleListView) {
    this.listView = articleListView;
  }

  getHtml() {
    return this.listView.outputHTML();
  }

  insertHtml() {
    let articles = document.getElementById('articles');
    // let pageContent = this.getHtml();
    articles.innerHTML = this.getHtml(); 
  }

  getArticles() {
    const url =
    fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(response) {
      console.log(response.response.results[0].webTitle)
    })
  }

}



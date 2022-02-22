class News {
  constructor() {
    this.articles = [];
  }

  fetchAllNews(date, pages) {
    for (let i = 0; i < pages; i++){
      fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=${date}`)
      .then(response => response.json())
      .then(data => {
        data.response.results.forEach(article => {
          this.createArticleDiv(article);
        })
      })
    }
  };

  fetchNewsData(date) {
    fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=${date}`)
      .then(response => response.json())
      .then(data => {
        const pages = data.response.pages;
        this.fetchAllNews(date, pages)
      })
  };

  createArticleDiv(article) {
    const mainListDiv = document.querySelector('#main-list');
    let newArticleDiv = document.createElement('div');
    newArticleDiv.style = 'padding:10px';
    newArticleDiv.innerText = article.webTitle;
    mainListDiv.appendChild(newArticleDiv);
  };
  
}



module.exports = News;
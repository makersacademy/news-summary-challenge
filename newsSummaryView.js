class NewsSummaryView {
  constructor (api) {
    this.api = api
    
    this.newsContainer = document.querySelector('#news-container')
  }

  displayNews(newsData) {
    console.log(newsData)
    let newsInfoArray = newsData.response.results;
    newsInfoArray.forEach((result) => {
      const h4 = document.createElement('h4');
      h4.innerText = result.webTitle;
      h4.className = 'title is-4';
      this.newsContainer.append(h4);
    })
  }
}

module.exports = NewsSummaryView;
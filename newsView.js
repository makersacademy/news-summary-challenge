class NewsView{
  constructor(model, api){
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');

  }

  displayNews(newsData){
    const news_array = this.model.getNews(newsData)
    console.log(news_array);
    for(const newsItem of news_array)  {
      const div = document.createElement('div');
      div.className = 'news-item';
      div.innerText = newsItem.webTitle;
      this.mainContainerEl.append(div);
    }
  }
}

module.exports = NewsView;
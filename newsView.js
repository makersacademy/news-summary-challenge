class NewsView{
  constructor(model, api){
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');

  }

  displayNews(newsData){
    console.log(newsData);
    const news_array = this.model.getNews(newsData)
    for(const newsItem of news_array)  {
      const article_wrapper = document.createElement('div');
      article_wrapper.innerHTML = `
      <h2>${newsItem.webTitle}</h2>

      <div class = "img_wrapper"> 
        <img src = "${newsItem.fields.thumbnail}"/>
      </div>

      `
      article_wrapper.className = 'article_wrapper';
      this.mainContainerEl.append(article_wrapper);
    }
  }
}

module.exports = NewsView;
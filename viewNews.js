class NewsModel {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.newsArray = [];
    this.maincontainerEl = document.querySelector('#main-container');
    this.inputEl = document.querySelector('#input-search');
    this.searchButtonEl = document.querySelector('#search-button');
    this.searchButtonEl.addEventListener('click', () =>{
      this.resetPage();
      console.log(this.inputEl.value)
      this.displayNewsFromApi();
    });
  }

  resetPage() {
    document.querySelectorAll('a.headline').forEach((news) => {
      console.log('I am in constructor')
      news.remove();
    });
    document.querySelectorAll('img.photo').forEach((news) => {
      console.log('I am in constructor')
      news.remove();
    });
  }

  displayNews() {
    
    this.resetPage();
    
    const news = this.model.getNews();
  
    news.forEach(news => {
      const newsEl = document.createElement('a');
      newsEl.className = 'headline';
      let linkText = document.createTextNode(news.fields.headline)
      let lineSpace = document.createElement('br');
      newsEl.href = news.webUrl
      document.body.appendChild(newsEl);
      newsEl.appendChild(linkText);
      newsEl.appendChild(lineSpace);
      const imageEl = document.createElement('img')
      imageEl.className = 'photo';
      imageEl.src = news.fields.thumbnail;
     
      newsEl.append(imageEl);
      this.maincontainerEl.append(newsEl);
    })
  }

  displayNewsFromApi() {
    this.model.resetModel();
    console.log('input text:', this.inputEl.value)
    this.api.loadHeadlines(this.inputEl.value,(recievedData) => {
      const data = recievedData.response.results
      data.forEach(news =>
        this.newsArray.push(news))

      this.model.setNews(this.newsArray);
      this.newsArray = [];
      this.displayNews();
    })
  }
}

module.exports = NewsModel;
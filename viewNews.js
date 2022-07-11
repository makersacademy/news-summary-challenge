class NewsView {
  constructor(model){
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container')

  }
  displayNews(){
    const news = this.model.getNews()

    news.forEach(news => {
      const newEl = document.createElement('div');
      newEl.innerText = news;
      newEl.className = 'headline';
      this.mainContainerEl.append(newEl)
    })
  }
}



module.exports = NewsView;


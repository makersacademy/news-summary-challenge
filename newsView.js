class NewsView{
 constructor(model, client){
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container')

 }

 displayNews(){
    this.loadNewsFromApi()
        .then(() => {
        return this.model.getNews();
        })
        .then((stories) => {
            stories.forEach((story) => {
                const image = document.createElement('img')
                const news = document.createElement('div')
                const link = document.createElement('a')

                news.className = 'news';
                news.textContent = story.webTitle;
                image.src = story.fields.thumbnail;
                link.href = story.webUrl;
                link.target = '_blank';
              

                link.textContent = news.webTitle;
                news.appendChild(image);
                news.appendChild(link);

                this.mainContainerEl.appendChild(news)
            })
        })
 }


 loadNewsFromApi() {
    return new Promise((resolve) => {
      this.client.loadNews(
        (news) => {
          this.model.setNews(news);
          resolve();
        }
      );
    });
  }
    
 showNews(){
    this.loadNewsFromApi().then(() => console.log(this.model.getNews()))
}

  

}


  


module.exports = NewsView;
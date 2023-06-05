class NewsView {
    constructor(client, model) {
      this.client = client;
      this.model = model;
      this.mainContainerEl = document.querySelector('#main-container');
      document.querySelector('#search-button').addEventListener('click', () => {
        const keyWord = document.querySelector('#keyword-input').value;
  
        document.querySelectorAll('.thumbnail').forEach(img => {
          img.remove();
        })
        
        this.displayNewsFromSearch(keyWord);
  
        document.querySelector('#keyword-input').value = "";
      })
    }
  
    displayFrontPage() {
        document.querySelectorAll('.headline').forEach(element => {
            element.remove();
          });


        const allNews = this.model.getNews();
    
        allNews.forEach(item => {
          const headline = document.createElement('div');
          headline.textContent = item.webTitle;
          headline.className = 'headline';
          
        //   headline.innerHTML = `<a href="${article.webUrl}">${article.headline}</a>`;

          const image = document.createElement('img');
          image.src = item.fields.thumbnail;
          image.className = 'thumbnail';

          const aTag = document.createElement('a');
          aTag.innerHTML = item.webTitle;
          aTag.href = item.webUrl
          
         
          this.mainContainerEl.append(image);
        //   this.mainContainerEl.append(headline);
          this.mainContainerEl.append(aTag);
         
        });
      }
    
      displayNewsFromApi() {
        this.client.loadNews((newsFromApi) => {
          this.model.addNews(newsFromApi);
          this.displayFrontPage();
          console.log(this.model.getNews())
        })
      }

      displayNewsFromSearch(keyWord) {
        this.client.searchQueryResults(keyWord, (newsFromApi) => {
          this.model.addNews(newsFromApi);
          this.displayFrontPage();
          console.log(this.model.getNews())
        });
      }
    
  }
  
  module.exports = NewsView;
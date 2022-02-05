class NewsFetcher {
  

  getNews(callback){
    console.log('called')
    fetch('https://content.guardianapis.com/search?page=1&api-key=test&show-fields=body,headline,thumbnail')
    .then(res => res.json())
    .then(callback);
  };
  
  displayNewsOnPage(data){
 
    data.response.results.forEach(result => {
    
      const article = document.createElement('div');
      const picture = this.createPicture(result);
      article.appendChild(picture);    
      const link = this.createLink(result);       
      const title = this.createTitle(result);
      const button = this.createButton();

      button.addEventListener('click',() => {
        this.loadSummaryPage(picture, result);
      });
  
      link.appendChild(title);
      article.appendChild(link);
      article.appendChild(button);

      const newsContainer = document.getElementById("news-articles");
      newsContainer.appendChild(article);
    });
  };

  createPicture(result){
    const picture = document.createElement('img');
    picture.src = result.fields.thumbnail;
    return picture;
  }

  createLink(result){
    const link = document.createElement('a');
    link.className = "article"
    link.href = result.webUrl;
    return link;
  }

  createTitle(result){
    const title = document.createElement('h1');
    title.innerText = (result.webTitle);
    return title;
  }

  createButton(){
    const button = document.createElement('button');
    button.style = "padding: 50px;"
    button.innerText = 'See Summary';
    return button;
  }

  loadSummaryPage(picture, result){
    const body = document.body;
    body.innerText = '';

    body.appendChild(picture);
    const summary = document.createElement('div');
    summary.innerHTML = result.fields.body
    body.appendChild(summary);
    
  }
};

module.exports = NewsFetcher


class NewsSummaryView {
  constructor (api) {
    this.api = api
    
    this.newsContainer = document.querySelector('#news-container')
  }

  // main container 
  //   <section>
   // figure
  //       img
      // /figure
  //       h4
  //   </section>

  displayNews(newsData) {
    console.log(newsData)
    let newsInfoArray = newsData.response.results;
    newsInfoArray.forEach((result) => {
      const sectionEl = document.createElement('section');
      const h3El = document.createElement('h3');
      const figureEl = document.createElement('figure')
      const imgEl = document.createElement('img');

      sectionEl.className = 'section'
      figureEl.className = 'image is-16by9';
      imgEl.src = result.fields.thumbnail;
      h3El.innerText = result.webTitle;
      h3El.className = 'title is-3 margin mt-3 is-flex is-justify-content-center';
      
      figureEl.appendChild(imgEl);
      sectionEl.appendChild(figureEl);
      sectionEl.appendChild(h3El);
      this.newsContainer.append(sectionEl);
    })
  }
}

module.exports = NewsSummaryView;
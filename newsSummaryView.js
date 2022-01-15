class NewsSummaryView {
  constructor (api) {
    this.api = api
    
    this.headlinesContainer = document.querySelector('#headline-container')
  }

  displayNews(newsData) {
    console.log(newsData)
    let newsInfoArray = newsData.response.results;
    newsInfoArray.forEach((result) => {
      const sectionEl = document.createElement('section');
      const h3El = document.createElement('h3');
      const figureEl = document.createElement('figure')
      const imgEl = document.createElement('img');
      const aEl = document.createElement('a');

      aEl.href = "#"
      sectionEl.className = 'section'
      figureEl.className = 'image is-16by9';
      imgEl.src = result.fields.thumbnail;
      h3El.innerText = result.webTitle;
      h3El.className = 'title is-3 margin mt-3 is-flex is-justify-content-center';
      
      figureEl.appendChild(imgEl);
      sectionEl.appendChild(figureEl);
      sectionEl.appendChild(h3El);
      aEl.appendChild(sectionEl)
      this.headlinesContainer.append(aEl);
    })
  }
}

module.exports = NewsSummaryView;
class NewsSummaryView {
  constructor (model, api) {
    this.api = api
    this.model = model

    this.headlinesContainer = document.querySelector('#headlines-container');
    this.headlineTitle = document.querySelectorAll('.is-3');
    this.summaryContainer = document.querySelector('#summary-container');

    window.addEventListener('click', (event) => {
      let articleId = event.target.id;
      this.model.setArticle(articleId);
      this.api.getSummary(articleId, (data) => {
        this.displaySummary(data);
      })
      this.headlinesContainer.style.display = 'none';
    });
  }

  displayHeadlines(newsData) {
    let newsInfoArray = newsData.response.results;
    newsInfoArray.forEach((result) => {
      const sectionEl = document.createElement('section');
      const h3El = document.createElement('h3');
      const figureEl = document.createElement('figure')
      const imgEl = document.createElement('img');
      const aEl = document.createElement('a');

      aEl.href = '#summary-container';
      sectionEl.className = 'section';
      figureEl.className = 'image is-16by9';
      imgEl.src = result.fields.thumbnail;
      h3El.innerText = result.webTitle;
      h3El.id = result.id;
      h3El.className = 'title is-3 mt-3 is-flex is-justify-content-center';
      
      figureEl.appendChild(imgEl);
      aEl.appendChild(h3El)
      sectionEl.appendChild(figureEl);
      sectionEl.appendChild(aEl);
      this.headlinesContainer.append(sectionEl);
    })
  }

  displaySummary(summaryData) {
    const sSectionEl = document.createElement('section');
    const sFigureEl = document.createElement('figure');
    const sImgEl = document.createElement('img');
    const sH3El = document.createElement('h3');

    sSectionEl.className = 'section';
    sSectionEl.id = 'summary-content'
    sFigureEl.className = 'image is-16by9';
    sImgEl.src = summaryData.article_image;
    sH3El.innerText = summaryData.article_title;
    sH3El.className = 'title is-3 mt-3 is-flex is-justify-content-center';

    sFigureEl.appendChild(sImgEl);
    sSectionEl.appendChild(sFigureEl);
    sSectionEl.appendChild(sH3El);

    const summaryArray = summaryData.summary;
    summaryArray.forEach(summaryP => {
      const sP = document.createElement('p');
      sP.innerText = summaryP
      sP.className = 'mb-2'
      sSectionEl.appendChild(sP);
    })
    this.summaryContainer.append(sSectionEl);
  }
}

module.exports = NewsSummaryView;
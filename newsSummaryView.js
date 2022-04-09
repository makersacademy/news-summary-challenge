class NewsSummary {
  constructor() {
    this.mainContainer = document.querySelector('#main-container');
  }

  displayNews() {
    const headlines = ['News #1', 'News #2', 'News #3'];
    
    headlines.forEach(news => {
      const newsEl = document.createElement('div');
      newsEl.innerText = news;
      newsEl.className = 'headline';
      this.mainContainer.append(newsEl);
    });
  }
}

module.exports = NewsSummary;
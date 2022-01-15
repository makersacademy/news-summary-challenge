class NewsView {
  addHeadline(headline) { 
    const headlinesContainerEl = document.querySelector('#headline-container');
    const headlineEl = document.createElement('div');
    headlineEl.innerText = headline;
    headlineEl.className = 'headline';
    headlinesContainerEl.append(headlineEl);
  }
}

module.exports = NewsView;
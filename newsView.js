class NewsView {
  constructor(model) {
    this.model = model;
    
  }

  displayHeadlines() {
    const headlines = this.model.getHeadlines();
    headlines.forEach(headline => {
      const headlineEl = document.createElement('div');
      headlineEl.innerText = headline;
      headlineEl.className = 'headline';
      this.headlinesContainerEl = document.querySelector('#headline-container');
      this.headlinesContainerEl.append(headlineEl);
      const imageEl = document.createElement('img')
      imageEl.className = 'headlineImage'
      imageEl.src = "https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png"
      this.headlinesContainerEl.append(imageEl)
    });
    
  }
}

module.exports = NewsView;
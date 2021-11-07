class Presenter {
  constructor(results) {
    this.results = results;
  }

  createHeadlines() {
    const newsSection = document.getElementById('headlines');

    this.results.forEach((result, index) => {
      let resultDiv = document.createElement('div');
      resultDiv.id = `hl-${index}`;

      let headline = document.createElement('h1');
      headline.textContent = result.webTitle;

      let img = document.createElement('img');
      img.src = result.fields.thumbnail;

      resultDiv.appendChild(headline);
      resultDiv.appendChild(img);
      newsSection.appendChild(resultDiv);
    });
  }
}

module.exports = Presenter;

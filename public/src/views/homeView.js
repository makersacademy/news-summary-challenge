class CreateHome {
  constructor() {
    this.counter = 0;
  }

  displayArticles(articleArray) {
    let generateDiv = articleArray.map((article) => {
      let articleDiv = `<div class=newsDiv id=#a${this.counter}>${article}</div>`;
      this.counter++;
      return articleDiv;
    });

    return generateDiv.join('');
  }
}

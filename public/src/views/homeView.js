class HomeView {
  constructor() {
    this.counter = 0;
  }

  displayTitles(titles) {
    let generateDiv = titles.map((title) => {
      let articleDiv = `<div class=newsDiv id=#a${this.counter}><h3>${title}</h3></div>`;
      this.counter++;
      return articleDiv;
    });

    return generateDiv.join('');
  }
}

class HomeView {
  constructor() {
    this.counter = 0;
  }

  displayTitles(articles) {
    let generateDiv = articles.map((each) => {
      let articleDiv = `<div class=newsDiv id=#a${this.counter}>
      <p>${each.tag}</p><br><h2> | </h2>
      <h3>${each.title}</h3>
      </div>`;
      this.counter++;
      return articleDiv;
    });

    return generateDiv.join('');
  }
}

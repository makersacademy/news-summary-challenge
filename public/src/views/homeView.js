class HomeView {
  constructor() {
    this.counter = 0;
  }

  displayTitles(articles) {
    let generateDiv = articles.map((each) => {
      let articleDiv = `<div class=newsDiv id=#a${
        this.counter
      }><div><p class="pCreated">${each.createdAt
        .slice(5, 19)
        .replace(/T/g, ' ')}</p><p class="pTag">${each.tag}</p></div><h3>${
        each.title
      }</h3><a class="btn-1" href=${each.url}>Read</a></div>`;
      this.counter++;
      return articleDiv;
    });

    return generateDiv.join('');
  }
}

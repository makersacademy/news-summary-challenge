class HomeController {
  constructor(homeView, newsPull) {
    this.homeView = homeView;
    this.newsPull = newsPull;
    this.app = document.getElementById('app');
  }

  renderHome() {
    let [homeView, newsPull, app] = [this.homeView, this.newsPull, this.app];

    return (app.innerHTML = homeView.displayTitles(newsPull.articles));
  }

  listenForClick() {
    let [newsPull, app] = [this.newsPull, this.app];
    let allDiv = app.getElementsByTagName('div');
    [...allDiv].map((div) => {
      div.addEventListener('click', () => {
        let idNumber = parseInt(div.id.slice(-1), 10);
        let singleArticle = new ArticleView(newsPull.articles, idNumber);
        app.innerHTML = singleArticle.displayArticle();
      });
    });
  }
}

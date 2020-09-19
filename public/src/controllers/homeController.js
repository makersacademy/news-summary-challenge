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
        div.style.background = '#e6fff5';
        setTimeout(() => {
          div.style.background = 'white';
        }, 1400);
      });
    });
  }
}

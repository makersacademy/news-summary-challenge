class HomeController {
  constructor(homeView, newsPull) {
    this.homeView = homeView;
    this.newsPull = newsPull;
  }

  renderHome() {
    let [homeView, newsPull] = [this.homeView, this.newsPull];
    let app = document.getElementById('app');
    newsPull.getTitles();
    return (app.innerHTML = homeView.displayTitles(newsPull.titles));
  }
}

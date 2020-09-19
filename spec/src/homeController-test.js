(function (exports) {
  function doublePage() {
    let app = document.createElement('div');
    app.setAttribute('id', 'app');
    app.style.visibility = 'hidden';
    document.body.appendChild(app);
    confirm.isTrue(document.getElementById('app') === app);
  }

  function homeControllerHasTwoProperties() {
    let home = new HomeView();
    let fakeArticleList = ['Article 1', 'Article 2'];
    let homeController = new HomeController(home, fakeArticleList);

    confirm.isTrue(homeController.homeView === home);
    confirm.isTrue(homeController.newsPull === fakeArticleList);
  }

  function renderTheHomePage() {
    let home = new HomeView();
    let newsPull = new NewsPull();
    let homeController = new HomeController(home, newsPull);
    let result = homeController.renderHome();
    confirm.isTrue(result.slice(0, 30) === '<div class=newsDiv id=#a0><h3>');
  }

  doublePage();
  homeControllerHasTwoProperties();
  renderTheHomePage();
})(this);

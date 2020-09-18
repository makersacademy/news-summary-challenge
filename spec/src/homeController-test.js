(function (exports) {
  function doublePage() {
    let app = document.createElement('div');
    app.setAttribute('id', 'app');
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

  doublePage();
  homeControllerHasTwoProperties();
})(this);

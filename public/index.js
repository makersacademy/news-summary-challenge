window.addEventListener('load', (event) => {
  let homeView = new HomeView();
  let newsPull = new NewsPull();
  let homeController = new HomeController(homeView, newsPull);
  homeController.renderHome();
  homeController.listenForClick();
});

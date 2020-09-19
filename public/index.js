window.addEventListener('load', async () => {
  let homeView = new HomeView();
  let newsPull = new NewsPull();
  let homeController = new HomeController(homeView, newsPull);
  await homeController.renderHome();
  homeController.listenForClick();
});

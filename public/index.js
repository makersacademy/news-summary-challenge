window.addEventListener('load', async () => {
  let homeView = new HomeView();
  let newsPull = new NewsPull();
  let homeController = new HomeController(homeView, newsPull);
  await newsPull.fetchNews();
  console.log(newsPull.articles);
  homeController.renderHome();
  homeController.listenForClick();
});

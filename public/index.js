window.addEventListener('load', async () => {
  let homeView = new HomeView();
  let newsPull = new NewsPull();
  let homeController = new HomeController(homeView, newsPull);
  await newsPull.fetchNews();
  console.log(newsPull.articles[0]);
  homeController.renderHome();
  homeController.listenForClick();
});

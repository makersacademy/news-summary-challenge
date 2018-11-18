export default class NewsController {
  constructor(newsList) {
    this.newsList = newsList;
    this.render();
  }

  render() {
    this.newsList.fetchFromGuardianAndUpdateArticles();
    setTimeout(() => {
      const view = this.newsList.getView();
      document.getElementById('headlines').innerHTML = view;
    }, 1500);
  }
}

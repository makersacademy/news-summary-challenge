export default class NewsController {
  constructor(newsList) {
    this.newsList = newsList;
    this.setup();
  }

  setup() {
    this.newsList.fetchFromGuardianAndUpdateArticles();
    setTimeout(() => {
      this.render();
    }, 1500);
  }

  render() {
    const view = this.newsList.getView();
    document.getElementById('headlines').innerHTML = view;
  }
}

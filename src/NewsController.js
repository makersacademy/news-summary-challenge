export default class NewsController {
  constructor(newsList) {
    this.newsList = newsList;
  }

  render() {
    this.newsList.fetchFromGuardianAndUpdateArticles();
    setTimeout(() => {
      const view = this.newsList.getView();
      document.getElementById('headlines').innerHTML = view;
      this.newsList.fetchSummariesFromAylienAndUpdateSentences();
    }, 1500);
  }
}

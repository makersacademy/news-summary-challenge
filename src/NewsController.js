export default class NewsController {
  constructor(newsList) {
    this.newsList = newsList;
  }

  render() {
    this.newsList.fetchFromGuardianAndUpdateArticles();
    setTimeout(() => {
      this.showHeadlines();
      this.watchForHashChanges();
      this.newsList.fetchSummariesFromAylienAndUpdateSentences();
    }, 1500);
  }

  showHeadlines() {
    const view = this.newsList.getView();
    document.getElementById('content').innerHTML = view;
  }

  watchForHashChanges() {
    window.addEventListener('hashchange', () => {
      if (!(window.location.hash.length === 0)) {
        this.showNewsArticle();
      } else {
        this.showHeadlines();
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  showNewsArticle() {
    const id = window.location.hash.split('/')[1];
    const view = this.newsList.articles[id].getSummaryView();
    document.getElementById('content').innerHTML = view;
  }
}

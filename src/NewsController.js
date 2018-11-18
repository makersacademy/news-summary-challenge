export default class NewsController {
  constructor(newsList) {
    this.newsList = newsList;
  }

  render() {
    const view = this.newsList.getView();
    document.getElementById('headlines').innerHTML = view;
  }
}

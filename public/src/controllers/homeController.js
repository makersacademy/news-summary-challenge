class HomeController {
  constructor(homeView, newsPull) {
    this.homeView = homeView;
    this.newsPull = newsPull;
    this.app = document.getElementById('app');
  }

  renderHome() {
    let [homeView, newsPull, app] = [this.homeView, this.newsPull, this.app];

    return (app.innerHTML = homeView.displayTitles(newsPull.articles));
  }

  listenForClick() {
    let count = 0;
    let [newsPull, app] = [this.newsPull, this.app];
    let allDiv = app.getElementsByTagName('div');

    [...allDiv].map((div) => {
      div.addEventListener(
        'click',
        async () => {
          let url = newsPull.articles[count].url;
          let data = await summarize(url);
          let summary = new summaryView(data.text, data.sentences);
          div.appendChild(summary.displaySummary());
          count++;

          this.styleTheClick(div);
        },
        { once: true } //listen only for one click
      );
    });
  }
  styleTheClick(div) {
    div.style.background = '#e6fff5';
    setTimeout(() => {
      div.style.background = 'white';
    }, 1400);
  }
}

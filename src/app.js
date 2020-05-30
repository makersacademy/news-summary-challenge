let guardian = new Guardian();
let headlines = new HeadlinesList();
let view = new HeadlinesListView(headlines);
let controller = new Controller(view);

guardian.onload().response.results.forEach((item) => {
    let title = item.webTitle;
    let url = item.webUrl;
    let headline = new Headline(title, url);
    headlines.addHeadline(headline);
  });

controller.insertView();

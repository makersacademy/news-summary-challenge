const articles = [];

fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=body')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let total = data.response.results.length;
    console.log(total);
    for (let i = 0; i < total; i++) {
      let newsData = data.response.results[i];
      let news = new News(newsData);
      console.log(news);
      articles.push(news);
    }

    console.log(articles);
  });

news = new NewsAPI();
summary = new SummaryAPI();

news.getNews().then((data) => {
    console.log(data);
    data.forEach(element => {
        let div = document.createElement('div');

        div.className = 'article-container'

        div.innerHTML = `
        <h1>${element.webTitle}</h1>
        <img src=${element.fields.thumbnail}>
        `

        document.getElementById('articles').appendChild(div)
    });
});

// let promises = [];

// data.forEach(element => {
//     promises.push(summary.getSummary(element.webUrl, element.webTitle));
// });

// Promise.all(promises).then((values) => {
//     console.log(values)
// })
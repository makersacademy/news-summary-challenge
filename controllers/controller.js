news = new NewsAPI();
summary = new SummaryAPI();

news.getNews().then((data) => {
    data.forEach(element => {
        let div = document.createElement('div');
        div.className = 'article-container';
        div.addEventListener('click', () => {
            loadSingle(element.webUrl, element.webTitle, element.fields.thumbnail)
        });

        div.innerHTML = `
        <h1>${element.webTitle}</h1>
        <img src=${element.fields.thumbnail}>
        `

        document.getElementById('articles').appendChild(div)
    });
});

function loadSingle(url, title, thumbnail) {
    summary.getSummary(url).then((data) => {
        let div = document.createElement('div');

        div.className = 'single-article-container';

        div.innerHTML = `
        <h1>${title}</h1>
        <img src=${thumbnail}>
        `

        document.getElementById('articles').appendChild(div)
    })
}
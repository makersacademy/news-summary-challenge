class guardianAPI {
    getArticleInfo(articleTitle, callback) {
        fetch("https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=eace7341-f6b2-40cd-bcb0-b2a6b761597b" + articleTitle)
        .then(response => response.json())
        .then(data => {
            callback(data)
        });
    }
}

module.exports = guardianAPI;
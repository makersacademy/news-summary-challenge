class guardianAPI {
    getArticleInfo(articleTitle, callback) {
        fetch('https://content.guardianapis.com/search' + articleTitle)
        .then(response => response.json())
        .then(data => {
            callback(data)
        });
    }
}

module.exports = guardianAPI;
class ArticleController {
    static app = document.getElementById('app');

    apiCall() {
        fetch("https://content.guardianapis.com/search?&show-fields=all&api-key=78fb758b-9cd0-48e8-96c1-fe29eb42c6d0")
            .then(response => response.json())
            .then(data => this.renderPage(data.response.results));
    }

    renderPage(data) {
        for (let article of data) {
            console.log(article)
            let newArticle = new Article(
                article.fields.headline,
                article.webUrl,
                article.fields.thumbnail,
                article.fields.firstPublicationDate
            )
            ArticleController.app.innerHTML += newArticle.getHTML();
        }
        
    }
}

let controller = new ArticleController;
controller.apiCall();
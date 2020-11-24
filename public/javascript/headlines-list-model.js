import News from './news-model.js'

function HeadLinesList(articles) {
    this.original_objects = articles;
    this.list = [];
    this.generateList();
}

HeadLinesList.prototype.generateList = function() {
    if (this.original_objects.length > 0) {
        this.original_objects.forEach( article =>
            {
                const new_article = new News(article.webTitle, article.webUrl, article.image_url, article.summary);
                this.list.push(new_article);
            }
        );//new News(article.webTitle, article.webURL, article.image_url, article.summary));
    }
}

HeadLinesList.prototype.addArticle = function (article) {
    const newNewsObject = new News(article.webTitle, article.webUrl, article.image_url, article.summary);
    this.list.push(newNewsObject);
    return newNewsObject;
}

export default HeadLinesList;
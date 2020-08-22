import News from './news-model.js'

function HeadLinesList() {
    this.list = []
}

HeadLinesList.prototype.addArticle = function (data) {
    const article = new News(data.webTitle, data.article_url, data.image_url, data.summary);
    this.list.push(article);
    return article
}

export default HeadLinesList;
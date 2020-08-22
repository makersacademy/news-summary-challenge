import News from './news-model.js'

function HeadlinesList() {
    this.list = []
}

HeadlinesList.prototype.addArticle = function(data) {
    const article = new News(data.headline, data.article_url, data.image_url, data.summary);
    this.list.push(article)
    return article
}

export default HeadlinesList;
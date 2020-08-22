import News from './news-model.js'


// Prepares the display for the news articles in a list

function HeadlinesView(){
    this.list = []
}

HeadlinesView.prototype.wrapHTMLAround = function(data) {
    const article = new News(data.headline, data.article_url, data.image_url, data.summary)
    this.list.push("<div>" + "<ul><li>" + "<div class='article_image'>" + "<img src=" + data.image_url + "/></img>" + "</div>" + "<div class='article_headline'>" + data.headline + "</div>" + "</li></ul>"+ "</div>")
    return this.list
}

export default HeadlinesView;
let global_id = 0;

// Creates News (Articles)
function News(headline, article_url, image_url, summary) {
    this.id = global_id
    this.headline = headline
    this.article_url = article_url
    this.image_url = image_url
    this.summary = summary
    global_id ++;
}

News.prototype.content = function() {
    return {
        id: this.id,
        headline: this.headline,
        article_url: this.article_url,
        image_url: this.image_url,
        summary: this.summary
    }
}

export default News;
export { global_id };

if (typeof window !== "undefined") { window.News = News }
let global_id = 0;

// Creates News (Articles)
function News(webTitle, webUrl, image_url = 'https://placekitten.com/200/300', summary = 'lorem ipsum decorum') {
    this.id = global_id
    this.webTitle = webTitle
    this.webUrl = webUrl
    this.image_url = image_url
    this.summary = summary[0]
    global_id ++;
}

News.prototype.content = function() {
    return {
        id: this.id,
        webTitle: this.webTitle,
        webUrl: this.webUrl,
        image_url: this.image_url,
        summary: this.summary
    }
}

export default News;
export { global_id };

if (typeof window !== "undefined") { window.News = News }
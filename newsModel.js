class newsModel {
    constructor() {
        this.headlines = []
        this.url = []
    }

    getHeadlines() {
        return this.headlines;

    }

    getUrl() {
        return this.url
    }

    addUrl(url) {
        this.url.push(url)
    }

    addHeadlines(headline) {
        this.headlines.push(headline);
    }

    clear() {
        this.headlines = [];
    }
}

module.exports = newsModel;
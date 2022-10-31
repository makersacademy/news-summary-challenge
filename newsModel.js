class newsModel {
    constructor() {
        this.headlines = []
        this.url = []
        this.search = null
    }

    getHeadlines() {
        return this.headlines;

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
class newsModel {
    constructor() {
        this.headlines = []
    }

    getHeadlines() {
        return this.headlines;

    }

    addHeadlines(headline) {
        this.headlines.push(headline);
    }

    clear() {
        this.headlines = [];
    }
}

module.exports = newsModel;
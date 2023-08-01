class newsModel {
    constructor () {
        this.newsInfo = null
    }

    getNewsInfo(newsInfo) {
        this.newsInfo = newsInfo;
    }
    getNews() {
        return this.newsInfo;
    }
}

module.exports = newsModel;
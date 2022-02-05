
class NewsModel {
    constructor() {

        this.newsInfo = null
    
    }

    setNewsInfo(newsInfo) {
        this.newsInfo = newsInfo;
    }

    getNewsInfo() {
        
        return this.newsInfo;
        
    }


}


module.exports = NewsModel;
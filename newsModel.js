
class NewsModel {
    constructor() {

        this.newsInfo = []
    
    }

    getHeadlines() {
        
        return this.newsInfo;
        
    }

    addHeadlines(text) {
        this.newsInfo.push(text) 
    }

    setHeadlines(newsInfo) {
        this.newsInfo = newsInfo
    }


}


module.exports = NewsModel;
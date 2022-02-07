
class NewsModel {
    constructor() {

        this.headlines = []
    
    }

    getHeadlines() {
        
        return this.headlines;
        
    }

    addHeadlines(text) {
        this.headlines.push(text) 
    }

    setHeadlines(headlines) {
        this.headlines = [...headlines]
    }


}


module.exports = NewsModel;
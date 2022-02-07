class NewsModel{
    constructor(){
        this.headlines = []
    }

    getHeadline() {
        return this.headlines
    }

    addHeadline(headline){
        this.headlines.push(headline)
    }

    reset(){
        this.headlines = []
    }
}

module.exports = NewsModel;
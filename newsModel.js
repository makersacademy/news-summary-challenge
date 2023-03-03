class NewsModel {
    constructor() {
        this.articlesArray = []
    }

    setArticles(response) {
        this.notesArray.push(response)
    }

    getArticles() {
        return this.articlesArray
    }

//     formatArticles() {
//         let formattedArticles = []
//         for (let index = 0; index < this.articlesArray.length; index++) {
            
//     }
// }

}

module.exports = NewsModel;
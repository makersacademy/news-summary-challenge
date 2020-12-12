class newsController {
    constructor(){
        this.news = new News
    }

    getTheNews(){
        this.news.getNewsArticles()
    }

    insertIntoHtml(){
        let articleTitle = document.getElementById("app")
        articleTitle.innerHTML = this.news.output()
    }
}

let newNews = new newsController
newNews.getTheNews()
console.log(newNews.news.listOfArticles)
newNews.insertIntoHtml()
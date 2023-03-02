class NewsView {
    constructor(client) {
        this.client = client
        this.mainContainerEl = document.querySelector('#main-container')
        document.querySelector("#search-button").addEventListener('click', () =>{
            let searchInput = document.querySelector('#search-bar-input').value
            this.displayArticlesByTopic(searchInput)
            document.querySelector('#search-bar-input').value = ""
        })
    }

    displayArticles() {
        //this will generate a new div for each
        // article object that comes back from the 
        // API call, append to main container
    }

    displayArticlesByTopic(searchQuery) {
        //this will take searchInput as its argument and use
        // the client loadArticles API call to display articles
        // matching the topic inputted
    }
}
s
module.exports = NewsView;
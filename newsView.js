class NewsView {
    constructor(model, client) {
        this.model = model
        this.client = client
        this.mainContainerEl = document.querySelector('#main-container')
        document.querySelector("#search-button").addEventListener('click', () =>{
            let searchInput = document.querySelector('#search-bar-input').value
            this.displayArticlesByTopic(searchInput)
            document.querySelector('#search-bar-input').value = ""
        })
    }

    displayArticles() {
    this.client.loadArticles((response) => {
        this.model.setArticles(response)
        console.log(response)
        for (let index = 0; index < this.model.getArticles().length; index++) {
            const divElement = document.createElement('div')
            divElement.className = "article";
            divElement.innerText = this.model.getArticles()[index];
            this.mainContainerEl.append(divElement);}
        })
    }

    displayArticlesByTopic(searchQuery) {
        //this will take searchInput as its argument and use
        // the client loadArticles API call to display articles
        // matching the topic inputted
    }
}

module.exports = NewsView;
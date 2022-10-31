const model = require('./newsModel')
const view = require('./newsClient')

class newsView {
    constructor(model, client) {
        this.model = model;
        this.client = client;
        this.displayHeadlinesFromApi()
        this.buttonSubmit = document.querySelector('#submit');
        this.buttonSubmit.addEventListener('click', () => {
            const searchValue = document.querySelector('#search-value').value;
              this.model.search = searchValue;
              console.log(searchValue)
              this.displayFilterHeadlinesFromApi();
        })
    }

    displayFilterHeadlinesFromApi() {
        
        const all_headlines = this.model.getHeadlines()
        const filter = element => { if (element.headline.includes(this.model.search)) {
            console.log(element.headline)
        }};
        
        const filtered = all_headlines.forEach(filter)

    }

    displayHeadlinesFromApi() {
        const headlines = this.client.loadHeadlines(headline => {
            const response = headline.response.results
            const webTitle_url = element => {
                const news_object = {}
                news_object.headline = element.webTitle
                news_object.url = element.webUrl
                this.model.addHeadlines(news_object)
            }
            const names = response.forEach(webTitle_url);
            this.displayHeadlines();
        })
    }

    displayHeadlines() {
        
        const insert_headline = object => {
            const newElement = document.createElement('a')
            const text = document.createTextNode(object.headline)
            newElement.setAttribute("href", object.url)
            newElement.appendChild(text);
            newElement.className = 'headlines'
            const lineBreak = document.createElement('br')
            document.querySelector('#main-container').append(newElement);
            document.querySelector('#main-container').append(lineBreak);
        };
            
        const headlines = this.model.getHeadlines();
        const loop_headline = headlines.forEach(insert_headline)
        }

        
       


        
        
}

module.exports = newsView;
const model = require('./newsModel')
const view = require('./newsClient')

class newsView {
    constructor(model, client) {
        this.model = model;
        this.client = client
    }

    displayHeadlinesFromApi() {
        const headlines = this.client.loadHeadlines(headline => {
            const array = headline.response.results
            const webTitle = element => {
                this.model.addHeadlines(element.webTitle)
            }
            const names = array.forEach(webTitle);
            this.displayHeadlines();
        })
    }

    displayHeadlines() {
        const insert = element => {
            const newElement = document.createElement('div')
            newElement.className = 'headline';
            newElement.innerText = element;
            document.querySelector('#main-container').append(newElement);
        };
        const headlines = this.model.getHeadlines();
        const loop = headlines.forEach(insert)
        
        
    }

 
}

module.exports = newsView;
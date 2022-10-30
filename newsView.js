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
            const webTitle = element => { // need to change the name of this variable
                const news_object = {}
                news_object.headline = element.webTitle
                news_object.url = element.webUrl
                this.model.addHeadlines(news_object)
            }
            const names = array.forEach(webTitle);
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
class NewsView {
    constructor(newsModel){
        this.newsModel = newsModel;

        this.mainContainerEl = document.querySelector('#main-container');
    }

    displayHeadlines(){

        document.querySelectorAll('.headline').forEach(element => {
            element.remove();
          });

        const headlines = this.newsModel.getHeadlines();

        headlines.forEach(headline => {
            let headlineEl = document.createElement('div')
            headlineEl.innerText = headline;
            headlineEl.className = 'headline';
            this.mainContainerEl.append(headlineEl);
        });
    } 

}

module.exports = NewsView;
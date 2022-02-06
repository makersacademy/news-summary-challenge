class HeadlinesView {
    constructor(model, api) {
        this.model = model
        this.api = api
        this.mainContainerEl = document.querySelector('#main-container')
        const key = 'search?api-key=04fa366b-cd7a-4a4f-98b4-15f1685362ce'

        this.api.getNewsInfo(key, newsData => {
            console.log(newsData);
            this.displayHeadlines(newsData);

        })
        
    }

    displayHeadlines(data) {

        const keyEl = document.querySelector('#article-title')

        keyEl.textContent = data.webTitle;

        let div = document.querySelector('#main-container')

        const img = document.createElement('img')
        img.src='https://i.guim.co.uk/img/media/8845ff83be89349821a42ae6a8e07d867eed9261/318_420_3133_1880/master/3133.jpg?width=1225&quality=85&auto=format&fit=max&s=3ad39cbd2888c7c7ce5b4b407c7b3c67'
        div.append(img)
    }
    
}




module.exports = HeadlinesView;
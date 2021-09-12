var url = 'https://content.guardianapis.com/search?from-date=2021-09-12&to-date=2021-09-12&show-elements=image&api-key=test'
let headlines = document.getElementById("headlines");
const masterListOfArticles = []

class ArticleTitles {

    constructor(){
        this.listOfAllStories = []
    }

getArticles() {
    let promise = fetch('https://content.guardianapis.com/search?from-date=2021-09-12&to-date=2021-09-12&show-elements=image&api-key=test')
    .then(response => response.json())
    .then(data => {
        
        console.log(data);
        console.log(data.response.results.length);
        console.log(data.response.results[0].webTitle)

    for (let i = 0; i < data.response.results.length; i++) {
    masterListOfArticles.push([data.response.results[i].webTitle, data.response.results[i].webUrl])
    }
    })
    return promise; 
}
} 

class ArticleSummaries {

    constructor(){
        this.summaryAPIKeys = []
    }

    getSummaryAPIKey() {
        for (let i = 0; i < masterListOfArticles.length; i++)
        {
            //console.log(masterListOfArticles[i][1]);
            //console.log(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${masterListOfArticles[i][1]}`);
            this.summaryAPIKeys.push(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${masterListOfArticles[i][1]}`);
            //return
        }
    }

    addSummaryAPIKey() {
    for (let i = 0; i < masterListOfArticles.length; i++)
    {
        //console.log(masterListOfArticles[i][1]);
        //console.log(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${masterListOfArticles[i][1]}`);
        masterListOfArticles[i][2] = (`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${masterListOfArticles[i][1]}`);
        //return
    }
    }

    getDummyText(){
        this.summaryAPIKeys.forEach(article => {
            for (let i = 0; i < masterListOfArticles.length; i++){
                masterListOfArticles[i][2] = ("The books you think I wrote are way too thick\nWho needs a thousand metaphors to figure out you shouldn't be a dick?\nAnd I don't watch you when you sleep\nSurprisingly, I don't use my omnipotence to be a fucking creep\nYou're not going to heaven\nWhy the fuck would you think I'd ever kick it with you?\nNone of you are going to heaven\nThere's a trillion aliens cooler than you\n\nYou shouldn't abstain from rape just 'cause you think that I want you to\nYou shouldn't rape 'cause rape is a fucked up thing to do\nPretty obvious, just don't fucking rape people, please\nDidn't think I had to write that one down for ya");
            }
        })
    }


    getSummaryText() {
        this.summaryAPIKeys.forEach(article => {
            let promise = fetch(article)
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < masterListOfArticles.length; i++){
                    masterListOfArticles[i][2] = data.text
                }

            })

        }
            
        )
    }

    getONEtext() {
        let promise = fetch(this.summaryAPIKeys[0])
        .then(response => response.json())
        .then(data => {
            masterListOfArticles[0][2] = data.text
        })
    }

}
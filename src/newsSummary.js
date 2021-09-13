// This array of arrays has titles, urls, and the snippet text from Aylien
const masterListOfArticles = []

// This class grabs the article titles
class ArticleTitles {
// This method calls the guardian via the test API and grabs the titles and urls
// The test api doesn't have the body text, or image urls
// Looks like the Maker's API has body text with urls within the body but you can't really grab that...
getArticles() {
    let promise = fetch('https://content.guardianapis.com/search?from-date=2021-09-12&to-date=2021-09-12&show-elements=image&api-key=test')
    .then(response => response.json())
    .then(data => {
        // Test console logs
        // Does it pull all the data?
        // console.log(data);
        // Does it return the response array? If yes, how long is it?
        // console.log(data.response.results.length);
        // Does the array item have a webTitle? 
        // console.log(data.response.results[0].webTitle)
        //
    for (let i = 0; i < data.response.results.length; i++) {
    masterListOfArticles.push([data.response.results[i].webTitle, data.response.results[i].webUrl])
    }
    })
    return promise; 
}
} 

class ArticleSummaries {
    // This is an array generated so that we can test what's getting generated in the _getSummaryAPIKey method
    constructor(){
        this.summaryAPIKeys = []
    }

    // This grabs the API keys from Aylien and appends them to the master list
    addSummaryAPIKey() {
    for (let i = 0; i < masterListOfArticles.length; i++)
    {
        masterListOfArticles[i][2] = (`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${masterListOfArticles[i][1]}`);
    }
    }

    // This appends the lyrics to Bo Burnham's 'From God's Perspective' to each array in the master list
    // I was playing this on the piano all weekend so it was a fit
    // Sorry if you don't like Bo Burnham
    getDummyText(){
        this.summaryAPIKeys.forEach(article => {
            for (let i = 0; i < masterListOfArticles.length; i++){
                masterListOfArticles[i][2] = ("The books you think I wrote are way too thick\nWho needs a thousand metaphors to figure out you shouldn't be a dick?\nAnd I don't watch you when you sleep\nSurprisingly, I don't use my omnipotence to be a fucking creep\nYou're not going to heaven\nWhy the fuck would you think I'd ever kick it with you?\nNone of you are going to heaven\nThere's a trillion aliens cooler than you\n\nYou shouldn't abstain from rape just 'cause you think that I want you to\nYou shouldn't rape 'cause rape is a fucked up thing to do\nPretty obvious, just don't fucking rape people, please\nDidn't think I had to write that one down for ya");
            }
        })
    }

    //  DO NOT RUN THIS UNTIL THE END
    // This is the method to get the summary text from Aylien
    // It works! Just don't touch it
    //  DO NOT RUN THIS UNTIL THE END
    getSummaryText() {
        this.summaryAPIKeys.forEach(article => {
            let promise = fetch(article)
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < masterListOfArticles.length; i++){
                    masterListOfArticles[i][2] = data.text
                }
            })
            return promise;
        }
       )
    }

    // This method was just to check that I was fetching the data with the API properly - I am!
    _getONEtext() {
        let promise = fetch(this.summaryAPIKeys[0])
        .then(response => response.json())
        .then(data => {
            masterListOfArticles[0][2] = data.text
        })
    }

    // This method is just to check that you can get the correct API keys
    _getSummaryAPIKey() {
        for (let i = 0; i < masterListOfArticles.length; i++)
        {
        this.summaryAPIKeys.push(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${masterListOfArticles[i][1]}`);
        }
    }
}


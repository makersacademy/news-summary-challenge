var url = 'https://content.guardianapis.com/search?api-key=fed10329-e5b5-4ed3-afda-6ac7a6d00245'
var newsdata = []
var apiKey = 'fed10329-e5b5-4ed3-afda-6ac7a6d00245'

function getApi() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for(var result of data.response.results)
        {
            var tempArticle = new Article(result.id, result.type, result.sectionId, result.sectionName, result.webPublicationDate, result.webTitle, result.webUrl, result.apiUrl)
            newsArray.push(tempArticle)
        }
        
        updateNews()
        
    })   
}

function getArticle(weburl) {
    fetch(weburl)
    
}
var url = 'https://content.guardianapis.com/search?api-key=fed10329-e5b5-4ed3-afda-6ac7a6d00245'
var newsdata = []

async function getApi() {
    var response = await fetch(url);
    var data = await response.json();
    return data
}


function otherApiFunction() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for(var result of data.response.results)
        {
            var tempArticle = new Article()
            tempArticle.id = result.id
            tempArticle.type = result.type
            tempArticle.sectionId = result.sectionId
            tempArticle.sectionName = result.sectionName
            tempArticle.webPublicationDate = result.webPublicationDate
            tempArticle.webTitle = result.webTitle
            tempArticle.webUrl = result.webUrl
            tempArticle.apiUrl = result.apiUrl
            // tempArticle.isHosted = result.isHosted
            // tempArticle.pillarId = result.pillarId
            // tempArticle.pillarName = result.pillarName
            newsArray.push(tempArticle)
        }
        
        updateNews()
        
    })   
}

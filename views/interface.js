document.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM content loaded")

    otherApiFunction()
    console.log(newsdata)
});

var newsArray = []
console.log(newsArray)

function updateNews() {
    var newsArticle = document.getElementById('news')
    for(var i = 0; i < newsArray.length; i++) {
    var article = newsArray[i]

    var newspiece = document.createElement('div', {
        'id' : article['id'],
        'type': article['type'],
        'sectionId': article['sectionId'],
        'sectionName': article['sectionName'],
        'webPublicationDate': article['webPublicationDate'],

        'webUrl': article['webUrl'],
        'apiUrl': article['apiUrl']
    })
    
    var title = document.createElement('div', {
        'webTitle': article['webTitle'],
    })

    newspiece.setAttribute("id", "john")
    newspiece.innerHTML = article['sectionName'] + " " + article['webPublicationDate'];
    title.innerHTML = article['webTitle']
    newsArticle.appendChild(newspiece)
    newspiece.appendChild(title)
    console.log("working!")

    }
    console.log("Hello")
}

updateNews()



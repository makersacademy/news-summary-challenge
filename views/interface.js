document.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM content loaded")

    getApi()
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
    console.log(article['apiUrl'])
    var title = document.createElement('div', {
        'webTitle': article['webTitle'],
    })

    

    // newspiece.setAttribute('href', article['webUrl'])
    newspiece.setAttribute("id", "story")
    newspiece.setAttribute("class", "cell")
    newspiece.setAttribute("onclick", "gotoLink('" + article['webUrl'] + "')")
    // newspiece.addEventListener("click", function() {
    //     window.location = article['webUrl']
    // })
    newspiece.innerHTML = article['sectionName'];
    title.innerHTML = article['webTitle']
    newsArticle.appendChild(newspiece)
    newspiece.appendChild(title)
    console.log("working!")

    }
    console.log("Hello")
}

updateNews()

function gotoLink(link) {
    window.location = link
}
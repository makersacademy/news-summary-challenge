var articleList = document.getElementById('articleList');
var getNews = document.getElementById('getNews');
var fiveMoreButton = document.getElementById('fiveMore');
var counter = 1;
var noteList = {};

getNews.addEventListener('click', function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://content.guardianapis.com/search?api-key=c148d976-d913-445c-8148-b46110b280d0');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
});

function renderHTML(data) {
    var htmlString = '';
    for (i = 0; i < 5; i++) {
        htmlString += '<li><a href= ' + data.response.results[i].webUrl + '>'+ data.response.results[i].webTitle +'</a></li>'
    }
    articleList.innerHTML = htmlString;
}

getNews.click();
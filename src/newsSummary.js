var articleList = document.getElementById('articleList');
var summaryField = document.getElementById('summaryField');
var refreshNews = document.getElementById('refreshNews');
var threeMoreButton = document.getElementById('threeMore');
var backToNews = document.getElementById('backToNews');
var topOfPageTitle = document.getElementById('topOfPagetitle');

var counter = 0;
var articleCounter = 1;
var buttonCounter = 0;
var increment = 3;

getNews = function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        articleList.innerHTML += renderHTML(ourData, counter);
    };
    ourRequest.send();
};

getNewsSummary = function(link) {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + link);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        summaryField.innerHTML = renderHTMLSummary(ourData, counter);
    };
    ourRequest.send();
};

refreshNews.addEventListener('click', function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://content.guardianapis.com/search?api-key=c148d976-d913-445c-8148-b46110b280d0');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        articleList.innerHTML = renderHTML(ourData, 0, counter + 3);
    };
    articleCounter = 1;
    ourRequest.send();
});

articleList.addEventListener('click', function(e) {
    console.log(e.target);
    if (e.path[0].innerHTML === 'Summary') {
        getNewsSummary(e.path[1].value);
        hideElement(true, articleList);
        hideElement(true, threeMoreButton);
        hideElement(true, refreshNews);
        unhideElement(true, backToNews);
    }
});

backToNews.addEventListener('click', function() {
    articleList.style.display = '';
    threeMoreButton.style.display = '';
    refreshNews.style.display = '';
    backToNews.style.display = 'none';
    summaryField.innerHTML = ''
});

function renderHTML(data, int, incrementValue = increment) {
    var htmlString = '';
    for (i = int; i < (int + incrementValue); i++) {
        var link = data.response.results[i].webUrl
        htmlString += '<li> <a href=' + link + ' id=article' + articleCounter + ' class="center">'+ data.response.results[i].webTitle +' </a>';
        htmlString += '<br>';
        htmlString += '<button id="article' + articleCounter + '" value="' + link + '" class="button articleButton center"><span>Summary</span></button></li>';;
        articleCounter += 1;
    }
    return htmlString;
}

function renderHTMLSummary(data) {
    var htmlString = '<p class="summary">';
    if (data.sentences.length !== 0) {
        for (i=0; i < data.sentences.length; i++) {
            htmlString += data.sentences[i] + ' ' + '<br><br>';
        }
    } else {
        console.log('nope!');
        htmlString += data.text
    }
    htmlString += '</p>';

    console.log(htmlString);
    console.log('htmlString above');
    return htmlString;
}


threeMoreButton.addEventListener('click', function() {
    counter += increment;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://content.guardianapis.com/search?api-key=c148d976-d913-445c-8148-b46110b280d0');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        articleList.innerHTML += renderHTML(ourData, counter);
    };
    ourRequest.send();

    incrementButtonPress();
    hideElement(buttonCounter >= 2, threeMoreButton)
});

hideElement = function(condition, element) {
    if (condition) {
        element.style.display = 'none';
    }
};

unhideElement = function(condition, element) {
    if (condition) {
        element.style.display = '';
    }
};

incrementButtonPress = function() {
    buttonCounter += 1
};

getNews();
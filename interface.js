// ************ Variables **************
var guardianData;

// *********** Events **********
window.onload = function() {
  guardianAPICall();
};

document.getElementById('back').addEventListener("click", function(){
  back();
});

// ************ Functions *************
function guardianAPICall(){

  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();


  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=headline,trailText,thumbnail,body', true);

  //set what should happen when request is sent
  request.onload = function () {

    if (this.readyState == 4 && this.status == 200) {
      guardianData = JSON.parse(this.response);
      generateHeadlines();
    }

  }
  // Send request
  request.send();
}

function generateHeadlines(){
  for (var i = 0; i < window.guardianData.response.results.length; i++) {
    //contents variables
    var data = guardianData.response.results[i]
    var headline = document.createTextNode(data.webTitle);
    var bylineText = document.createTextNode(data.fields.trailText);
    var image = data.fields.thumbnail;

    //create html elements
    var article = document.createElement('article');
    var link = document.createElement('a');
    link.href="javascript:showArticle(" + i + ")";
    var link2 = document.createElement('a');
    link2.href="javascript:showArticle(" + i + ")";
    var header = document.createElement('h2');
    var imageElement = document.createElement('img');
    imageElement.src = image;
    var details = document.createElement('details');
    var summary = document.createElement('summary');
    summary.appendChild(document.createTextNode('View summary'))
    var byline = document.createElement('p');

    // Append elements
    byline.appendChild(bylineText);
    details.appendChild(summary);
    details.appendChild(byline);

    header.appendChild(headline);
    link.appendChild(header);

    link2.appendChild(imageElement)

    article.appendChild(link2)
    article.appendChild(link)
    article.appendChild(details)

    document.getElementById('headlines').appendChild(article);
  }
}

function showArticle(articleNumber){
  articleDetails = guardianData.response.results[articleNumber];
  document.getElementById('individual-img').src = articleDetails.fields.thumbnail;
  document.getElementById('individual-headline').innerHTML = articleDetails.webTitle;
  document.getElementById('individual-byline').innerHTML = articleDetails.fields.trailText;
  document.getElementById('individual-article-text').innerHTML = articleDetails.fields.body;

  document.getElementById('headlines').style.display="none";
  document.getElementById('individual-article').style.display="block";
}

function back(){
  document.getElementById('headlines').style.display="block";
  document.getElementById('individual-article').style.display="none";
}

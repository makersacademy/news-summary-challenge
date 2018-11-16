// API call

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);
    var results = response.response.results;
    displayContent(results);
    // createContainers(results);
    // displayHeadlines(results);
    }
  };
xhttp.open("GET", "https://content.guardianapis.com/search?q=technology&show-fields=thumbnail,trailText&api-key=bad91230-b571-4dec-b899-7575ea60a1a4", true);
xhttp.send();

// Functions

function displayContent(results) {
  for (var i = 0; i < results.length; i++) {
    // Create div container
    var container = document.createElement('div');
    container.setAttribute('id', 'headline' + i);
    // Import thumbnail
    var image = document.createElement('img');
    image.setAttribute('src', results[i].fields.thumbnail);
    // Create paragraphs
    var headlineParagraph = document.createElement('p');
    headlineParagraph.setAttribute('id', 'headlineParagraph' + i);
    headlineParagraph.setAttribute('class', 'headlineParagraph');
    var summaryParagraph = document.createElement('p');
    summaryParagraph.setAttribute('id', 'summaryParagraph' + i);
    // Import headline
    var headlineText = document.createTextNode(results[i].webTitle);
    // Import summary
    var summaryText = document.createTextNode(results[i].fields.trailText);
    // var summaryText = summaryText.replace(/(<([^>]+)>)/ig,"");
    // Append items
    headlineParagraph.appendChild(headlineText);
    summaryParagraph.appendChild(summaryText);
    container.appendChild(headlineParagraph);
    container.appendChild(image);
    container.appendChild(summaryParagraph);
    document.getElementById('article-summary').appendChild(container);
  }
}

// function createContainers(results) {
//   for (var i = 0; i < results.length; i++) {
//     var container = document.createElement('div');
//     container.setAttribute('id', 'headline' + i.toString());
//   }
// }
//
// function displayHeadlines(results) {
//   for (var i = 0; i < results.length; i++) {
//     var container = document.createElement('div');
//     container.setAttribute('id', 'headline' + i.toString());
//     var headlineParagraph = document.createElement('p');
//     var headlineText = document.createTextNode(results[i].webTitle);
//     headlineParagraph.setAttribute('id', 'headlineParagraph' + i);
//     headlineParagraph.setAttribute('class', 'headlineParagraph');
//     headlineParagraph.appendChild(headlineText);
//     container.appendChild(headlineParagraph);
//   }
// }

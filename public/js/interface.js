// ************************* API call *************************

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);
    var results = response.response.results;
    console.log(results);
    displayContent(results);
    // createContainers(results);
    // displayHeadlines(results);
    // setVariable(response);
    }
  };
xhttp.open("GET", "https://content.guardianapis.com/search?q=technology&show-fields=thumbnail,trailText,body&api-key=bad91230-b571-4dec-b899-7575ea60a1a4", true);
xhttp.send();

// ************************* Functions *************************

function displayContent(results) {
  for (var i = 0; i < results.length; i++) {
    // Create div headlineContainer
    var headlineContainer = document.createElement('div');
    headlineContainer.setAttribute('id', 'headline' + i);
    // Import thumbnail
    var image = document.createElement('img');
    image.setAttribute('src', results[i].fields.thumbnail);
    image.setAttribute('id', 'image' + i);
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
    // Append items
    headlineParagraph.appendChild(headlineText);
    summaryParagraph.appendChild(summaryText);
    headlineContainer.appendChild(headlineParagraph);
    headlineContainer.appendChild(image);
    headlineContainer.appendChild(summaryParagraph);
    document.getElementById('article').appendChild(headlineContainer);

    // Article content
    var body = document.createElement('div');
    body.setAttribute('id', 'body' + i);
    body.setAttribute('class', 'body');
    body.style.display="none";
    var bodyText = document.createTextNode(results[i].fields.body)
    body.appendChild(bodyText);
    document.getElementById('article').appendChild(body);
  }
}

// function createContainers(results) {
//   for (var i = 0; i < results.length; i++) {
//     var headlineContainer = document.createElement('div');
//     headlineContainer.setAttribute('id', 'headline' + i);
//     createHeadlineElement(i)
//     var bodyContainer = document.createElement('div');
//     bodyContainer.setAttribute('id', 'body' + i);
//   }
// }
//
// function createHeadlineElement(i) {
//   var image = document.createElement('img');
//   image.setAttribute('src', results[i].fields.thumbnail);
//   var headlineParagraph = document.createElement('p');
//   headlineParagraph.setAttribute('id', 'headlineParagraph' + i);
//   headlineParagraph.setAttribute('class', 'headlineParagraph');
//   var summaryParagraph = document.createElement('p');
//   summaryParagraph.setAttribute('id', 'summaryParagraph' + i);
// }

// function showArticle(id) {
//   document.getElementById(id).style.display = 'block';
// }
//
// // ************************* Events *************************
//
// function addClickEvent(id) {
//   document.getElementById(id).addEventListener('click', function() {
//     showArticle(id);
//   })
// }

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

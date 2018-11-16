// API call

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);
    var results = response.response.results;
    displayContent(results);
    }
  };
xhttp.open("GET", "https://content.guardianapis.com/search?q=technology&show-fields=thumbnail&api-key=bad91230-b571-4dec-b899-7575ea60a1a4", true);
xhttp.send();

// Functions

function displayContent(results) {
  for (var i = 0; i < results.length; i++) {
    // Create div container
    var container = document.createElement('div');
    container.setAttribute('id', 'headline' + i);
    console.log(container);
    // Import thumbnail
    var image = document.createElement('img');
    image.setAttribute('src', results[i].fields.thumbnail);
    // Create paragraph
    var element = document.createElement('p');
    console.log(element);
    // Import headline
    var text = document.createTextNode(results[i].webTitle);
    console.log(image);
    // Append items
    element.appendChild(text);
    container.appendChild(image);
    container.appendChild(element);
    document.getElementById('as-headline').appendChild(container);
  }
}

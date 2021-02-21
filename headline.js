
var myInit = { method: 'GET',
  headers: {
    'Content-type': 'application/json'
  }
}

let myRequest = new Request("https://content.guardianapis.com/search?api-key=ba948e8a-f899-4dfd-a0d4-fa556aa5abe4", myInit);

function getHeadlines(url) {
  fetch(myRequest).then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
  appendData(data.response.results);
  // jsonStr = JSON.stringify(data.response.results)
  // console.log(jsonStr);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
}

function appendData(data) {
  var mainHeadlineContainer = document.getElementById('headlines');
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement('div');
    div.innerHTML = data[i].id;
    mainHeadlineContainer.appendChild(div);
  }
}

window.addEventListener("load", getHeadlines)

function createNode(element) {
  return document.createElement(element);
};

function createText(text) {
  return document.createTextNode(text);
};

function append(parent, child) {
  return parent.appendChild(child);
};

function getNews() {
let url = "https://content.guardianapis.com/uk?show-editors-picks=true&api-key=test"
  headlineRequest = new headlineGrabber();
  headlineRequest.makeRequest();
  console.log(headlineRequest._headlines)
}



// function addTitles() {
//
//   var headDiv = document.getElementById("headlines")
//
//   for (i = 0; i < respText.length; i++) {
//     var h2 = createNode("h2")
//     h2.id = `headline_${i}`
//     var titleText = createText(myObj[i].webTitle)
//     console.log("h2: ", h2)
//     console.log("text: ", titleText)
//     append(h2, titleText)
//     console.log("headDiv: ", headDiv)
//     append(headDiv, h2)
//   }
// };

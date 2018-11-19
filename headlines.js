function createNode(element){
  return document.createElement(element);
}

function append(parent, el){
  return parent.appendChild(el);
}

const ul = document.getElementById("headlines");


const url = "https://content.guardianapis.com/search?show-fields=all&api-key="

fetch(url)
.then((Response) => Response.json())
.then(function(data){
  let headlines = data.response.results;
  console.log(headlines);
  var count = 0;

  headlines.map(function(headline){
    count += 1;
    let title = headline.webTitle,
    originalArticle = headline.webUrl,
    thumbnail = headline.fields.thumbnail;
    summary = headline.fields.body.slice(0,1000);

    let space = createNode('br'),
    summ = createNode('li'),
    img = createNode('img'),
    span = createNode('span'),
    link = createNode('a');
    img.src = thumbnail;

    link.setAttribute("href",`${originalArticle}`);
    img.setAttribute("id", "image" + count);
    summ.setAttribute("id", "news" + count);

    span.innerHTML = `${title}`
    summ.innerHTML = `${summary}.......`
    append(link, span);
    append(ul, img);
    append(ul, link);
    append(ul, summ);
    append(ul, space);
  })
})
//

document.getElementById("image1").addEventListener("click", function() {
  var storyElement = "news1";
  myFunction(storyElement);
}, false);



// function myFunction(storyElement) {
//   var x = document.getElementById(storyElement);
//   x.style.display = "none";
//   // for (var i = 1; i < 11; i++) {
//   //   var elementID = "news" + i;
//   //   var y = document.getElementById(elementID);
//   //   if (elementID !== storyElement) {
//   //     y.style.display = "block";
//   //
//   //   }
//   // }
// }

// var clickedElement = "";
//
// document.getElementById("image1").addEventListener("click", function() {
//   var storyElement = "news1";
//   myFunction(storyElement);
// }, false);
//
// document.getElementById("image2").addEventListener("click", function() {
//   var storyElement = "news2";
//   myFunction(storyElement);
// }, false);
//
// document.getElementById("image3").addEventListener("click", function() {
//   var storyElement = "news3";
//   myFunction(storyElement);
// }, false);
//
// document.getElementById("image4").addEventListener("click", function() {
//   var storyElement = "news4";
//   myFunction(storyElement);
// }, false);
//
// document.getElementById("image5").addEventListener("click", function() {
//   var storyElement = "news5";
//   myFunction(storyElement);
// }, false);
//
// document.getElementById("image6").addEventListener("click", function() {
//   var storyElement = "news6";
//   myFunction(storyElement);
// }, false);
//
// document.getElementById("image7").addEventListener("click", function() {
//   var storyElement = "news7";
//   myFunction(storyElement);
// }, false);
//
// document.getElementById("image8").addEventListener("click", function() {
//   var storyElement = "news8";
//   myFunction(storyElement);
// }, false);
//
// document.getElementById("image9").addEventListener("click", function() {
//   var storyElement = "news9";
//   myFunction(storyElement);
// }, false);
//
// document.getElementById("image10").addEventListener("click", function() {
//   var storyElement = "news10";
//   myFunction(storyElement);
// }, false);
//
// function myFunction(storyElement) {
//   var x = document.getElementById(storyElement);
//   x.style.display = "block";
//   for (var i = 1; i < 11; i++) {
//     var elementID = "news" + i;
//     var y = document.getElementById(elementID);
//     if (elementID !== storyElement) {
//       y.style.display = "none";
//
//     }
//   }
// }

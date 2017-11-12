//
// function createNode(element) {
//   return document.createElement(element); // Create the type of element you pass in the parameters
// }
//
// function append(parent, el) {
//   return parent.appendChild(el); // Append the second parameter(element) to the first one
// }
//
// const ul = document.getElementById('authors');
// const url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=all';
//
//
// fetch(url)
// .then((resp) => resp.json()) // transform data to json
// .then(function(data) {
//   let authors = data.results; // get results
//   return authors.map(function(author) {
//    li = createNode('li'), //create teh elements we need
//    img = createNode('img'),
//    span = createNode('span');
//   img.src = author.picture.medium; // Add the source of the image to be the src of the img element
//   span.innerHTML = '${author.name.first} ${author.name.last}'; // Make the HTML of our span to be the first and last name of our author
//   append(li, img); // Append all our elements
//   append(li, span);
//   append(ul, li);
// });
// // modify data as you please here
// // Create and append the li's to the ul
// })
// .catch(function(error) {
//   // catch error here
//   console.log(error);
// });

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('articles');
const url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/lifestyle?show-fields=all';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    console.log(data);

  let articles = data.results;
  console.log(articles);
  return articles.map(function(article) {
    let li = createNode('li'),
        span = createNode('span');
    span.innerHTML = `${id}`;
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});


// fetch(http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body) // Call the fetch function passing the url of the API as a parameter
// .then(function() {
//     // Your code for handling the data you get from the API
// })
// .catch(function() {
//     // This is where you run code if the server returns any errors
// });

function article(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}



function createNode(element) {
  return document.createElement(element); // creates element
}

function append(parent, el) {
  return parent.appendChild(el); // adds element to parent 
}

const ul = document.getElementById('authors'); // Get the list where we will place our authors
const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users


// get the information 
fetch(url)
  .then((resp) => resp.json()) // transform to json
  .then(function(data) {
    // create and append to li's
    let authors = data.results; // get results
    return authors.map(function(author) {
      let li = createNode('li'); // create elements we need
          img = createNode('img');
          span = createNode('span');
        img.src = author.picture.medium; // add source of the image
        span.innerHTML = `${author.name.first} ${author.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  });

  // save into articles array 
  // .headline
  // .summary
  // .fullArticle
  // .link
  // .imgsrc




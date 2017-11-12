const ul = document.getElementById('news-headlines'); // Get the list where we will place our authors
const url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk?show-editors-picks=true&show-fields=thumbnail'; // Get 10 random users

// https://randomuser.me/api/?results=10


function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

function anchor(href, textInside) {
  return `<a href=${href}>${textInside}</a> `
}

fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let articles = data.response.editorsPicks;
    return articles.map(function(article) {

      let li = createNode('li'),
        img = createNode('img'),
      span = createNode('span');

      let webHeadLine = `${article.webTitle} `;
      let webUrl = `${article.webUrl} `;
      let linkArticle = anchor(webUrl, webHeadLine);

      console.log(linkArticle);

      span.innerHTML = linkArticle;

      append(li, img);
      append(li, span);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  });

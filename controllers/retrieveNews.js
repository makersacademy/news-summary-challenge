const ul = document.getElementById('news-headlines'); // Get the list where we will place our authors

ul.className += "container-fluid";

// const url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=all'; // Get 10 random users



function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function anchor(href, textInside) {
  return `<a href=${href}>${textInside}</a> `
}

fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let articles = data.response.results;
    console.log(data.response.results);
    return articles.map(function(article) {

      let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span'),
        spanSummary = createNode('span');

      let webHeadLine = `${article.webTitle} `,
        webUrl = `${article.webUrl} `,
        srcImg = `${article.fields.thumbnail} `
        linkArticle = anchor(webUrl, webHeadLine);

      span.innerHTML = linkArticle;
      spanSummary.innerHTML = `${article.fields.trailText} `;

      li.className += "row col-lg-5 col-xs-5 col-sm-5 thumbnail";
      span.className += "col-sm-4 col-md-4 col-xs-12";
      spanSummary.className += "col-sm-4 col-md-4 col-xs-12";
      img.src = srcImg;
      img.className += "image-container"

      append(li, span);
      append(li, spanSummary);
      append(li, img);
      append(ul, li);

    })
  })
  .catch(function(error) {
    console.log(error);
  });

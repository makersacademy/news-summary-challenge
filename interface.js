const ul = document.getElementById('articles');
const fullArticle = document.getElementById('full-article');
const guardianURL = 'https://content.guardianapis.com/search?api-key=19158819-ba32-4e1f-a54c-d75a65fad4ab&show-fields=starRating,headline,thumbnail,short-url'

// http://content.guardianapis.com/search?api-key=19158819-ba32-4e1f-a54c-d75a65fad4ab&q=12%20years%20a%20slave&format=json&tag=film/film,tone/reviews&from-date=2010-01-01&show-tags=contributor
// &show-fields=starRating,headline,thumbnail,short-url&show-refinements=all&order-by=relevance

function createNode(element) {
  return document.createElement(element);
}
 
function append(parent, el) {
  return parent.appendChild(el);
}

fetch(guardianURL)
  .then((resp) => resp.json())

  .then(function(data){
    var articles = data.response.results;
    return articles.map(function(article) {
      let li = createNode('li');
      
      let link = createNode('a');
      link.setAttribute("href", `${article.webUrl}`);
      link.setAttribute("onClick", `showFullArticle()`);
      link.setAttribute("class", "viewPage");
      link.innerHTML = `${article.webUrl}`;

      let headline = createNode('h3');
      headline.innerHTML = `${article.webTitle}`;

      let summary = createNode('p');
      var articleApiUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + `${article.webUrl}`

      let image = createNode('img')
      image.setAttribute("class", "img-fluid");
      image.src = `${article.fields.thumbnail}`;
git 
      const fetchPromise = 
      fetch (articleApiUrl)
      fetchPromise.then(response => {
        // console.log(fetchPromise)
        return response.json();
      }).then(data => {
       this.fullText = data.text
        const sentence = data.sentences
        summary.innerHTML = sentence;
        summary.setAttribute("class", "text-justify");
        // console.log(data.sentences)
      })

      
      append(li,headline);
      append(li,image);
      append(li,summary);
      append(li,link);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  })

  function showFullArticle() {
    event.preventDefault()
    ul.style.display = "none";
    fullArticle.style.display = "block";
    fullArticle.innerHTML = this.fullText;
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-secondary btn-lg");
    button.innerText = "Go Back"
    append(fullArticle, button);
    button.addEventListener ("click", function() {
      ul.style.display = "block";
      fullArticle.style.display = "none";
    });
  }

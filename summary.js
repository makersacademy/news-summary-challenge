const createCard = (article) => {
  const newPostEl = document.createElement('div');
  const h = document.createElement("H3")
  const t = document.createTextNode(article.webTitle);
  h.appendChild(t);
  newPostEl.appendChild(h); 
  const p = document.createElement("p")
  const q = document.createTextNode(article.sectionId);
  p.appendChild(q);
  newPostEl.appendChild(p); 
  const image = document.createElement("img")
  image.src = article.fields.thumbnail
  newPostEl.appendChild(image); 
  newPostEl.className = 'post';
  document.body.appendChild(newPostEl);
}

const getData = () => {
  fetch("https://content.guardianapis.com/search?page-size=20&api-key=test&format=json&show-fields=body,headline,thumbnail")
    .then(response => response.json())
    .then(data => {
      const articles = data.response.results
      articles.forEach((article) => {
        createCard(article)
      });
    })
  }

getData();
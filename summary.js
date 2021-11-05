const createCard = (article) => {
  const newPostContainer = document.createElement('div');
  newPostContainer.classList.add('container');
  const newPostEl = document.createElement('div');
  const h = document.createElement("h3")
  const t = document.createTextNode(article.webTitle);
  h.appendChild(t);
  newPostEl.appendChild(h); 
  const p = document.createElement("p")
  const q = document.createTextNode(article.sectionId);
  p.appendChild(q);
  newPostEl.appendChild(p); 
  newPostEl.className = 'post';
  const newPostImg = document.createElement('div');
  newPostImg.style.backgroundImage = `url('${article.fields.thumbnail}')`;
  newPostImg.className = 'background_image';
  newPostContainer.appendChild(newPostEl);
  newPostContainer.appendChild(newPostImg);
  document.body.appendChild(newPostContainer);
}

const getData = () => {
  fetch("https://content.guardianapis.com/search?page-size=5&api-key=test&format=json&show-fields=body,headline,thumbnail")
    .then(response => response.json())
    .then(data => {
      const articles = data.response.results
      articles.forEach((article) => {
        createCard(article)
      });
    })
  }

getData();
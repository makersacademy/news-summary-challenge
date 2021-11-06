function extractContent(s) {
  var span = document.createElement('span');
  span.innerHTML = s;
  return span.textContent || span.innerText;
};


const writeArticleTitle = (article, newPostEl) => {
  const h3El = document.createElement("h3")
  const textTitle = document.createTextNode(article.webTitle);
  h3El.appendChild(textTitle);
  newPostEl.appendChild(h3El);
}

const writeTextPreview = (article, newPostEl) => {
  const body_text = article.fields.body
  const extracted = extractContent(body_text);
  const trim_text = extracted.substring(0, 500) + "..."
  const bodysection = document.createElement("p")
  bodysection.classList.add('post-body');
  const body = document.createTextNode(trim_text);
  bodysection.appendChild(body);
  newPostEl.appendChild(bodysection);
}

const writeSrcArticle = (article, postLinks, newPostEl) => {
  const articleOG = document.createElement("a")
  articleOG.setAttribute("href", `${article.webUrl}`);
  articleOG.innerHTML = 'original article'
  postLinks.appendChild(articleOG);
  newPostEl.appendChild(postLinks);
}

const writeSectionId = (article, postLinks, newPostEl) => {
  const sectionID = document.createElement("a")
  sectionID.setAttribute("href", `#`);
  sectionID.classList.add('section_button');
  sectionID.innerHTML = article.sectionId
  postLinks.appendChild(sectionID);
  newPostEl.appendChild(postLinks);
}

const writeBgImage = (article, newPostEl, newPostContainer) => {
  const newPostImg = document.createElement('div');
  newPostImg.style.backgroundImage = `url('${article.fields.thumbnail}')`;
  newPostImg.className = 'background_image';
  newPostContainer.appendChild(newPostEl);
  newPostContainer.appendChild(newPostImg);
  document.body.appendChild(newPostContainer);
}

const createCard = (article) => {
  const newPostContainer = document.createElement('div');
  newPostContainer.classList.add('container');
  const newPostEl = document.createElement('div');
  newPostEl.className = 'post';
  writeArticleTitle(article, newPostEl);
  writeTextPreview(article, newPostEl);
  const postLinks = document.createElement('div');
  postLinks.classList.add('post-links')
  writeSrcArticle(article, postLinks, newPostEl);
  writeSectionId(article, postLinks, newPostEl);
  writeBgImage(article, newPostEl, newPostContainer);
}


const getData = () => {
  fetch("https://content.guardianapis.com/search?page-size=10&api-key=test&format=json&show-fields=body,headline,thumbnail")
    .then(response => response.json())
    .then(data => {
      const articles = data.response.results
      articles.forEach((article) => {
        createCard(article)
      });
    })
  }

getData();
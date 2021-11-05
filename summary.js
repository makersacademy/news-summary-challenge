function extractContent(s) {
  var span = document.createElement('span');
  span.innerHTML = s;
  return span.textContent || span.innerText;
};

const createCard = (article) => {
  // main DIV
  const newPostContainer = document.createElement('div');
  newPostContainer.classList.add('container');
  // post DIV
  const newPostEl = document.createElement('div');
  newPostEl.className = 'post';
  // title
  const h = document.createElement("h3")
  const t = document.createTextNode(article.webTitle);
  h.appendChild(t);
  newPostEl.appendChild(h);
  // body
  const body_text = article.fields.body
  const extracted = extractContent(body_text);
  const trim_text = extracted.substring(0, 500) + "..."
  const bodysection = document.createElement("p")
  bodysection.classList.add('post-body');
  const body = document.createTextNode(trim_text);
  bodysection.appendChild(body);
  newPostEl.appendChild(bodysection);
  //  postlinks DIV
  const postLinks = document.createElement('div');
  postLinks.classList.add('post-links')
  // section button
  const sectionID = document.createElement("a")
  sectionID.setAttribute("href", `#`);
  sectionID.classList.add('section_button');
  sectionID.innerHTML = article.sectionId
  postLinks.appendChild(sectionID);
  newPostEl.appendChild(postLinks);
  // article button
  const articleOG = document.createElement("a")
  articleOG.setAttribute("href", `${article.webUrl}`);
  articleOG.innerHTML = 'original article'
  postLinks.appendChild(articleOG);
  newPostEl.appendChild(postLinks);
  // image DIV
  const newPostImg = document.createElement('div');
  newPostImg.style.backgroundImage = `url('${article.fields.thumbnail}')`;
  newPostImg.className = 'background_image';
  newPostContainer.appendChild(newPostEl);
  newPostContainer.appendChild(newPostImg);
  document.body.appendChild(newPostContainer);
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

const bodyHover = () => {

}

getData();
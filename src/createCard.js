class CreateCard {

  writeArticleTitle = (article, newPostEl) => {
  const h3El = document.createElement("h3")
  const textTitle = document.createTextNode(article.webTitle);
  h3El.appendChild(textTitle);
  newPostEl.appendChild(h3El);
}

  writeTextPreview = (article, newPostEl) => {
  const body_text = article.fields.body
  const extracted = this.extractContent(body_text);
  const trim_text = extracted.substring(0, 500) + "..."
  const bodysection = document.createElement("p")
  bodysection.classList.add('post-body');
  const body = document.createTextNode(trim_text);
  bodysection.appendChild(body);
  newPostEl.appendChild(bodysection);
}

  writeSrcArticle = (article, postLinks, newPostEl) => {
  const articleOG = document.createElement("a")
  articleOG.setAttribute("href", `${article.webUrl}`);
  articleOG.innerHTML = 'original article'
  postLinks.appendChild(articleOG);
  newPostEl.appendChild(postLinks);
}

  writeSectionId = (article, postLinks, newPostEl) => {
  const sectionID = document.createElement("a")
  sectionID.setAttribute("href", `#`);
  sectionID.classList.add('section_button');
  sectionID.innerHTML = article.sectionId
  postLinks.appendChild(sectionID);
  newPostEl.appendChild(postLinks);
}

  writeBgImage = (article, newPostEl, newPostContainer) => {
  const newPostImg = document.createElement('div');
  newPostImg.style.backgroundImage = `url('${article.fields.thumbnail}')`;
  newPostImg.className = 'background_image';
  newPostContainer.appendChild(newPostEl);
  newPostContainer.appendChild(newPostImg);
  document.body.appendChild(newPostContainer);
}

writeCardModal = (article, newId) => {
  const newModalDiv = document.createElement('div');
  newModalDiv.className = 'modal';
  newModalDiv.id = 'myModal-' + newId;
  const newModalContent = document.createElement('div');
  newModalContent.className = 'modal-content';
  newModalContent.innerHTML = 'this is a test for my modal';
  const closeButton = document.createElement('span');
  closeButton.className = 'close';
  closeButton.innerHTML = '&times;';
  newModalContent.appendChild(closeButton);
  newModalDiv.appendChild(newModalContent);
  document.body.appendChild(newModalDiv);
}

  extractContent = (string) => {
  var span = document.createElement('span');
  span.innerHTML = string;
  return span.textContent || span.innerText;
};

  createCard = (article) => {
  const newPostContainer = document.createElement('div');
  newPostContainer.classList.add('container');
  const newPostEl = document.createElement('div');
  const newId = document.querySelectorAll('.post').length + 1;
  newPostEl.className = 'post';
  newPostEl.id = 'post-' + newId;
  this.writeArticleTitle(article, newPostEl);
  this.writeTextPreview(article, newPostEl);
  const postLinks = document.createElement('div');
  postLinks.classList.add('post-links')
  this.writeSectionId(article, postLinks, newPostEl);
  this.writeSrcArticle(article, postLinks, newPostEl);
  this.writeBgImage(article, newPostEl, newPostContainer);
  this.writeCardModal(article, newId);
}
}

module.exports = CreateCard;
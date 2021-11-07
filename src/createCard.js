class CreateCard {

  writeArticleTitle = (article, newPostEl) => {
  const h3El = document.createElement("h3")
  const textTitle = document.createTextNode(article.webTitle);
  h3El.appendChild(textTitle);
  newPostEl.appendChild(h3El);
}


  writeSrcArticle = (article, postLinks, newPostEl) => {
  const articleOG = document.createElement("a")
  articleOG.setAttribute("href", `${article.webUrl}`);
  const icon = document.createElement("i")
  icon.className = "bi"
  icon.classList.add("bi-newspaper")
  articleOG.appendChild(icon)
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
 
  createCard = (article, modal) => {
  const newPostContainer = document.createElement('div');
  newPostContainer.classList.add('container');
  const newPostEl = document.createElement('div');
  const newId = document.querySelectorAll('.post').length + 1;
  newPostEl.className = 'post';
  newPostEl.id = 'post-' + newId;
  this.writeArticleTitle(article, newPostEl);
  const postLinks = document.createElement('div');
  postLinks.classList.add('post-links')
  this.writeSectionId(article, postLinks, newPostEl);
  this.writeSrcArticle(article, postLinks, newPostEl);
  this.writeBgImage(article, newPostEl, newPostContainer);
  modal.writeCardModal(article, newId);
}
}

module.exports = CreateCard;
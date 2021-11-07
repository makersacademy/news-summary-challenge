/* eslint-disable class-methods-use-this */
class CreateCard {
  formatTitle(article) {
    if ((article.webTitle).length > 80) {
      return `${(article.webTitle).slice(0, 80)}...`;
    }
    return article.webTitle;
  }

  writeArticleTitle(article, newPostEl) {
    const h3El = document.createElement('h3');
    const textTitle = document.createTextNode(this.formatTitle(article));
    h3El.appendChild(textTitle);
    newPostEl.appendChild(h3El);
  }

  writeSrcArticle(article, postLinks, newPostEl) {
    const articleOG = document.createElement('a');
    articleOG.setAttribute('href', `${article.webUrl}`);
    const icon = document.createElement('i');
    icon.className = 'bi';
    icon.classList.add('bi-newspaper');
    articleOG.appendChild(icon);
    postLinks.appendChild(articleOG);
    newPostEl.appendChild(postLinks);
  }

  writeSectionId(article, postLinks, newPostEl) {
    const sectionID = document.createElement('a');
    sectionID.setAttribute('href', '#');
    sectionID.classList.add('section_button');
    sectionID.innerHTML = article.sectionId;
    postLinks.appendChild(sectionID);
    newPostEl.appendChild(postLinks);
  }

  writeBgImage(article, newPostEl) {
    const newPostImg = document.createElement('img');
    newPostImg.setAttribute('src', article.fields.thumbnail);
    newPostImg.className = 'card-image';
    newPostEl.appendChild(newPostImg);
  }

  createCard(article, modal) {
    const newPostContainer = document.createElement('div');
    newPostContainer.classList = 'animate__animated animate__fadeIn container';
    const newPostEl = document.createElement('div');
    const newId = document.querySelectorAll('.post').length + 1;
    newPostEl.className = 'post';
    newPostEl.id = `post-${newId}`;
    const postLinks = document.createElement('div');
    postLinks.classList.add('post-links');
    this.writeArticleTitle(article, newPostEl);
    this.writeSectionId(article, postLinks, newPostEl);
    this.writeSrcArticle(article, postLinks, newPostEl);
    this.writeBgImage(article, newPostEl, newPostContainer);
    newPostContainer.appendChild(newPostEl);
    document.body.appendChild(newPostContainer);
    modal.writeCardModal(article, newId);
  }

  showLoading() {
    const loading = document.createElement('div');
    loading.id = 'loading-div';
    const loadingHolder = document.createElement('h1');
    const loadingTitle = document.createTextNode('Fetching the latest news');
    loadingHolder.appendChild(loadingTitle);
    loading.appendChild(loadingHolder);
    const loadingCircle = document.createElement('div');
    loadingCircle.className = 'loader';
    loading.appendChild(loadingCircle);
    document.body.appendChild(loading);
  }

  removeLoading() {
    const loading = document.getElementById('loading-div');
    loading.style.display = 'none';
  }
}

module.exports = CreateCard;

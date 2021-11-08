/* eslint-disable class-methods-use-this */
class CreateModal {
  writeCloseButton(newId, newModalContent) {
    const closeButton = document.createElement('button');
    closeButton.id = `close-${newId}`;
    closeButton.innerHTML = '&times;';
    newModalContent.appendChild(closeButton);
  }

  writeModalTitle(article, newModalContent) {
    const modalTitle = document.createElement('h1');
    const modalTitleText = document.createTextNode(article.webTitle);
    modalTitle.appendChild(modalTitleText);
    newModalContent.appendChild(modalTitle);
  }

  writeModalBody(article, newModalContent) {
    const textDiv = document.createElement('p');
    textDiv.innerHTML = article.fields.body;
    newModalContent.appendChild(textDiv);
  }

  writeModalImage(article, newModalContent) {
    const articleImage = document.createElement('img');
    articleImage.setAttribute('src', article.fields.thumbnail);
    articleImage.className = 'modal-article-image';
    newModalContent.appendChild(articleImage);
  }

  writeCardModal(article, newId) {
    const newModalDiv = document.createElement('div');
    newModalDiv.className = 'modal animate__animated animate__fadeIn';
    newModalDiv.id = `myModal-${newId}`;
    const newModalContent = document.createElement('div');
    newModalContent.className = 'modal-content';
    this.writeCloseButton(newId, newModalContent);
    this.writeModalImage(article, newModalContent);
    this.writeModalTitle(article, newModalContent);
    this.writeModalBody(article, newModalContent);
    newModalDiv.appendChild(newModalContent);
    document.body.appendChild(newModalDiv);
  }
}

module.exports = CreateModal;

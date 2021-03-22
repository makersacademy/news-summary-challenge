class Article {
  constructor(title, standfirst, thumbnail, url) {
    this.title = title;
    this.standfirst = standfirst;
    this.thumbnail = thumbnail;
    this.url = url;
  }

  getPreview(id, callback) {
    let articleElement = document.createElement("article");
    let anchorElement = document.createElement("a");
    anchorElement.href = "#";
    anchorElement.id = id;
    anchorElement.addEventListener("click", (event) => {
      event.preventDefault();
      callback(event.target.parentElement.id);
    })
    anchorElement.innerHTML = `<img src="${this.thumbnail}"><h2>${this.title}</h2>`;
    articleElement.appendChild(anchorElement);

    return articleElement;
  }

  getContent() {
    let articleElement = document.createElement("article");
    articleElement.innerHTML = `<a href="${this.url}">
      <img src="${this.thumbnail}">
      <h2>${this.title}</h2>
    </a>
    <p>${this.standfirst}</p>`;

    return articleElement;
  }
}


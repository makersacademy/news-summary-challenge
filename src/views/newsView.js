class newsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.newsContainer = document.querySelector("#newsContainer");

    this.searchInput = document.querySelector("#searchInput");
    this.searchButton = document.querySelector("#searchButton");
    this.searchButton.addEventListener("click", this.handleSearch.bind(this));

    this.modal = document.querySelector("#news-modal");
    this.modalImage = document.querySelector("#modalImage");
    this.modalTitle = document.querySelector("#modalTitle");
    this.modalSummary = document.querySelector("#modalSummary");
    this.modalLink = document.querySelector("#modalLink");
  }

  displayNews() {
    this.clearNewsContainer();

    this.model.getNews().forEach((article) => {
      const articleContainer = document.createElement("div");
      articleContainer.classList.add("article");
      articleContainer.dataset.articleId = article.id;

      const thumbnail = document.createElement("img");
      thumbnail.src = article.fields.thumbnail;
      articleContainer.appendChild(thumbnail);

      const headline = document.createElement("h2");
      headline.innerText = article.fields.headline;
      articleContainer.appendChild(headline);

      this.newsContainer.appendChild(articleContainer);

      articleContainer.addEventListener("click", () => {
        this.displayModal(article);
      });
    });
  }

  displayNewsFromApi() {
    const callback = (data) => {
      this.model.setNews(data);
      this.displayNews();
    };
    this.client.fetchNews(callback);
  }

  displayModal(article) {
    this.modalImage.src = article.fields.thumbnail;
    this.modalTitle.innerText = article.fields.headline;
    this.modalSummary.innerText = "Loading summary...";
    this.modalLink.href = article.webUrl;
    //show the modal
    this.modal.style.display = "block";

    this.client.fetchSummary(article.webUrl, (summary) => {
      this.modalSummary.innerText = summary;
    });

    const closeButton = this.modal.querySelector(".close");
    closeButton.onclick = () => {
      this.modal.style.display = "none";
    };

    const closeModal = (event) => {
      if (event.target == this.modal) {
        this.modal.style.display = "none";
        window.removeEventListener("click", closeModal);
      }
    };

    window.addEventListener("click", closeModal);
  }

  handleSearch() {
    const searchQuery = this.searchInput.value.trim();

    // Fetch news with search query
    this.client.searchNews(searchQuery, (data) => {
      this.model.setNews(data);
      this.displayNews();
    });
  }

  clearNewsContainer() {
    this.newsContainer.innerHTML = "";
  }
}

module.exports = newsView;

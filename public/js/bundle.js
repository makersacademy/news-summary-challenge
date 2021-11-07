(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/modalLogic.js
  var require_modalLogic = __commonJS({
    "src/modalLogic.js"(exports, module) {
      var modalLogic2 = () => {
        for (let i = 1; i < 21; i += 1) {
          const modal2 = document.getElementById(`myModal-${i}`);
          const btn = document.getElementById(`post-${i}`);
          const span = document.getElementById(`close-${i}`);
          btn.onclick = function() {
            modal2.style.display = "block";
          };
          span.onclick = function() {
            modal2.style.display = "none";
          };
          document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
              modal2.style.display = "none";
            }
          });
        }
      };
      module.exports = modalLogic2;
    }
  });

  // src/Summary.js
  var require_Summary = __commonJS({
    "src/Summary.js"(exports, module) {
      var modalLogic2 = require_modalLogic();
      var Summary2 = class {
        getAllArticles(card2, modal2) {
          fetch("https://content.guardianapis.com/search?page-size=20&api-key=test&format=json&show-fields=body,headline,thumbnail").then(card2.showLoading()).then((response) => response.json()).then((data) => {
            const articles = data.response.results;
            async function myFunc(callback) {
              await new Promise((resolve) => {
                resolve(articles.forEach((article) => {
                  setTimeout(() => {
                    card2.createCard(article, modal2);
                  }, 900);
                }));
                callback();
              });
              setTimeout(() => {
                modalLogic2();
              }, 1e3);
            }
            myFunc();
            setTimeout(() => {
              card2.removeLoading();
            }, 800);
          });
        }
      };
      module.exports = Summary2;
    }
  });

  // src/createCard.js
  var require_createCard = __commonJS({
    "src/createCard.js"(exports, module) {
      var CreateCard2 = class {
        writeArticleTitle(article, newPostEl) {
          const h3El = document.createElement("h3");
          const textTitle = document.createTextNode(article.webTitle);
          h3El.appendChild(textTitle);
          newPostEl.appendChild(h3El);
        }
        writeSrcArticle(article, postLinks, newPostEl) {
          const articleOG = document.createElement("a");
          articleOG.setAttribute("href", `${article.webUrl}`);
          const icon = document.createElement("i");
          icon.className = "bi";
          icon.classList.add("bi-newspaper");
          articleOG.appendChild(icon);
          postLinks.appendChild(articleOG);
          newPostEl.appendChild(postLinks);
        }
        writeSectionId(article, postLinks, newPostEl) {
          const sectionID = document.createElement("a");
          sectionID.setAttribute("href", "#");
          sectionID.classList.add("section_button");
          sectionID.innerHTML = article.sectionId;
          postLinks.appendChild(sectionID);
          newPostEl.appendChild(postLinks);
        }
        writeBgImage(article, newPostEl) {
          const newPostImg = document.createElement("img");
          newPostImg.setAttribute("src", article.fields.thumbnail);
          newPostImg.className = "card-image";
          newPostEl.appendChild(newPostImg);
        }
        createCard(article, modal2) {
          const newPostContainer = document.createElement("div");
          newPostContainer.classList = "animate__animated animate__fadeIn container";
          const newPostEl = document.createElement("div");
          const newId = document.querySelectorAll(".post").length + 1;
          newPostEl.className = "post";
          newPostEl.id = `post-${newId}`;
          const postLinks = document.createElement("div");
          postLinks.classList.add("post-links");
          this.writeArticleTitle(article, newPostEl);
          this.writeSectionId(article, postLinks, newPostEl);
          this.writeSrcArticle(article, postLinks, newPostEl);
          this.writeBgImage(article, newPostEl, newPostContainer);
          newPostContainer.appendChild(newPostEl);
          document.body.appendChild(newPostContainer);
          modal2.writeCardModal(article, newId);
        }
        showLoading() {
          const loading = document.createElement("div");
          loading.id = "loading-div";
          const loadingHolder = document.createElement("h1");
          const loadingTitle = document.createTextNode("Fetching the latest news");
          loadingHolder.appendChild(loadingTitle);
          loading.appendChild(loadingHolder);
          const loadingCircle = document.createElement("div");
          loadingCircle.className = "loader";
          loading.appendChild(loadingCircle);
          document.body.appendChild(loading);
        }
        removeLoading() {
          const loading = document.getElementById("loading-div");
          loading.style.display = "none";
        }
      };
      module.exports = CreateCard2;
    }
  });

  // src/createModal.js
  var require_createModal = __commonJS({
    "src/createModal.js"(exports, module) {
      var CreateModal2 = class {
        writeCloseButton(newId, newModalContent) {
          const closeButton = document.createElement("button");
          closeButton.id = `close-${newId}`;
          closeButton.innerHTML = "&times;";
          newModalContent.appendChild(closeButton);
        }
        writeModalTitle(article, newModalContent) {
          const modalTitle = document.createElement("h1");
          const modalTitleText = document.createTextNode(article.webTitle);
          modalTitle.appendChild(modalTitleText);
          newModalContent.appendChild(modalTitle);
        }
        writeModalBody(article, newModalContent) {
          const textDiv = document.createElement("p");
          textDiv.innerHTML = article.fields.body;
          newModalContent.appendChild(textDiv);
        }
        writeModalImage(article, newModalContent) {
          const articleImage = document.createElement("img");
          articleImage.setAttribute("src", article.fields.thumbnail);
          articleImage.className = "modal-article-image";
          newModalContent.appendChild(articleImage);
        }
        writeCardModal(article, newId) {
          const newModalDiv = document.createElement("div");
          newModalDiv.className = "modal animate__animated animate__fadeIn";
          newModalDiv.id = `myModal-${newId}`;
          const newModalContent = document.createElement("div");
          newModalContent.className = "modal-content";
          this.writeCloseButton(newId, newModalContent);
          this.writeModalImage(article, newModalContent);
          this.writeModalTitle(article, newModalContent);
          this.writeModalBody(article, newModalContent);
          newModalDiv.appendChild(newModalContent);
          document.body.appendChild(newModalDiv);
        }
      };
      module.exports = CreateModal2;
    }
  });

  // index.js
  var Summary = require_Summary();
  var CreateCard = require_createCard();
  var CreateModal = require_createModal();
  var modalLogic = require_modalLogic();
  var summary = new Summary();
  var card = new CreateCard();
  var modal = new CreateModal();
  summary.getAllArticles(card, modal);
})();

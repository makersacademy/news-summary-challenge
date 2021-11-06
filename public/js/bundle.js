(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/modalLogic.js
  var require_modalLogic = __commonJS({
    "src/modalLogic.js"(exports, module) {
      var modalLogic2 = () => {
        for (let i = 1; i < 10; i++) {
          const modal = document.getElementById(`myModal-${i}`);
          const btn = document.getElementById(`post-${i}`);
          const span = document.getElementsByClassName("close")[0];
          btn.onclick = function() {
            console.log("click");
            modal.style.display = "block";
          };
          span.onclick = function() {
            modal.style.display = "none";
          };
          window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          };
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
        getAllArticles = (card2) => {
          fetch("https://content.guardianapis.com/search?page-size=20&api-key=test&format=json&show-fields=body,headline,thumbnail").then((response) => response.json()).then((data) => {
            const articles = data.response.results;
            async function myFunc2() {
              await new Promise((resolve) => {
                resolve(articles.forEach((article) => {
                  card2.createCard(article);
                }));
              });
              modalLogic2();
            }
            myFunc2();
          });
        };
      };
      module.exports = Summary2;
    }
  });

  // src/createCard.js
  var require_createCard = __commonJS({
    "src/createCard.js"(exports, module) {
      var CreateCard2 = class {
        writeArticleTitle = (article, newPostEl) => {
          const h3El = document.createElement("h3");
          const textTitle = document.createTextNode(article.webTitle);
          h3El.appendChild(textTitle);
          newPostEl.appendChild(h3El);
        };
        writeSrcArticle = (article, postLinks, newPostEl) => {
          const articleOG = document.createElement("a");
          articleOG.setAttribute("href", `${article.webUrl}`);
          const icon = document.createElement("i");
          icon.className = "bi";
          icon.classList.add("bi-newspaper");
          articleOG.appendChild(icon);
          postLinks.appendChild(articleOG);
          newPostEl.appendChild(postLinks);
        };
        writeSectionId = (article, postLinks, newPostEl) => {
          const sectionID = document.createElement("a");
          sectionID.setAttribute("href", `#`);
          sectionID.classList.add("section_button");
          sectionID.innerHTML = article.sectionId;
          postLinks.appendChild(sectionID);
          newPostEl.appendChild(postLinks);
        };
        writeBgImage = (article, newPostEl, newPostContainer) => {
          const newPostImg = document.createElement("div");
          newPostImg.style.backgroundImage = `url('${article.fields.thumbnail}')`;
          newPostImg.className = "background_image";
          newPostContainer.appendChild(newPostEl);
          newPostContainer.appendChild(newPostImg);
          document.body.appendChild(newPostContainer);
        };
        writeCardModal = (article, newId) => {
          const newModalDiv = document.createElement("div");
          newModalDiv.className = "modal";
          newModalDiv.id = "myModal-" + newId;
          const newModalContent = document.createElement("div");
          newModalContent.className = "modal-content";
          newModalContent.innerHTML = "this is a test for my modal";
          const closeButton = document.createElement("span");
          closeButton.className = "close";
          closeButton.innerHTML = "&times;";
          newModalContent.appendChild(closeButton);
          newModalDiv.appendChild(newModalContent);
          document.body.appendChild(newModalDiv);
        };
        extractContent = (string) => {
          var span = document.createElement("span");
          span.innerHTML = string;
          return span.textContent || span.innerText;
        };
        createCard = (article) => {
          const newPostContainer = document.createElement("div");
          newPostContainer.classList.add("container");
          const newPostEl = document.createElement("div");
          const newId = document.querySelectorAll(".post").length + 1;
          newPostEl.className = "post";
          newPostEl.id = "post-" + newId;
          this.writeArticleTitle(article, newPostEl);
          const postLinks = document.createElement("div");
          postLinks.classList.add("post-links");
          this.writeSectionId(article, postLinks, newPostEl);
          this.writeSrcArticle(article, postLinks, newPostEl);
          this.writeBgImage(article, newPostEl, newPostContainer);
          this.writeCardModal(article, newId);
        };
      };
      module.exports = CreateCard2;
    }
  });

  // index.js
  var Summary = require_Summary();
  var CreateCard = require_createCard();
  var modalLogic = require_modalLogic();
  var summary = new Summary();
  var card = new CreateCard();
  async function myFunc() {
    await new Promise((resolve) => {
      resolve(summary.getAllArticles(card));
    });
    console.log("index says its done");
  }
  myFunc();
})();

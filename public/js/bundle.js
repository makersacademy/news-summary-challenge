(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/getData.js
  var require_getData = __commonJS({
    "src/getData.js"(exports, module) {
      var getData2 = (card2) => {
        fetch("https://content.guardianapis.com/search?page-size=10&api-key=test&format=json&show-fields=body,headline,thumbnail").then((response) => response.json()).then((data) => {
          const articles = data.response.results;
          articles.forEach((article) => {
            card2.createCard(article);
          });
        });
      };
      module.exports = getData2;
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
        writeTextPreview = (article, newPostEl) => {
          const body_text = article.fields.body;
          const extracted = this.extractContent(body_text);
          const trim_text = extracted.substring(0, 500) + "...";
          const bodysection = document.createElement("p");
          bodysection.classList.add("post-body");
          const body = document.createTextNode(trim_text);
          bodysection.appendChild(body);
          newPostEl.appendChild(bodysection);
        };
        writeSrcArticle = (article, postLinks, newPostEl) => {
          const articleOG = document.createElement("a");
          articleOG.setAttribute("href", `${article.webUrl}`);
          articleOG.innerHTML = "original article";
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
        extractContent = (string) => {
          var span = document.createElement("span");
          span.innerHTML = string;
          return span.textContent || span.innerText;
        };
        createCard = (article) => {
          const newPostContainer = document.createElement("div");
          newPostContainer.classList.add("container");
          const newPostEl = document.createElement("div");
          newPostEl.className = "post";
          this.writeArticleTitle(article, newPostEl);
          this.writeTextPreview(article, newPostEl);
          const postLinks = document.createElement("div");
          postLinks.classList.add("post-links");
          this.writeSrcArticle(article, postLinks, newPostEl);
          this.writeSectionId(article, postLinks, newPostEl);
          this.writeBgImage(article, newPostEl, newPostContainer);
        };
      };
      module.exports = CreateCard2;
    }
  });

  // index.js
  var getData = require_getData();
  var CreateCard = require_createCard();
  var card = new CreateCard();
  getData(card);
})();

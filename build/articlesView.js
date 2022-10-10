var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ArticlesView_clearArticles, _ArticlesView_getArticleColumnDiv, _ArticlesView_getBodyEl, _ArticlesView_getTitleEl, _ArticlesView_getAbstractEl, _ArticlesView_getSectionEl, _ArticlesView_getDateEl, _ArticlesView_formatDate, _ArticlesView_getBylineEl, _ArticlesView_getLinkEl, _ArticlesView_getImageEl;
export class ArticlesView {
    constructor() {
        this.displayArticles = (articles) => {
            __classPrivateFieldGet(this, _ArticlesView_clearArticles, "f").call(this);
            for (let i = 0; i < articles.length; i += 2) {
                const rowEl = document.createElement("div");
                rowEl.className = "row";
                rowEl.append(__classPrivateFieldGet(this, _ArticlesView_getArticleColumnDiv, "f").call(this, articles[i], i));
                if (articles[i + 1]) {
                    rowEl.append(__classPrivateFieldGet(this, _ArticlesView_getArticleColumnDiv, "f").call(this, articles[i + 1], i + 1));
                }
                this.articlesContainerEl.append(rowEl);
            }
        };
        this.addSearchEventHandler = (callback) => {
            this.searchButton.addEventListener("click", () => {
                callback(this.searchInput.value);
            });
        };
        this.addResetEventHandler = (callback) => {
            this.resetButton.addEventListener("click", () => {
                this.searchInput.value = "";
                callback();
            });
        };
        _ArticlesView_clearArticles.set(this, () => {
            var first = this.articlesContainerEl.firstElementChild;
            while (first) {
                first.remove();
                first = this.articlesContainerEl.firstElementChild;
            }
        });
        _ArticlesView_getArticleColumnDiv.set(this, (article, index) => {
            const columnEl = document.createElement("div");
            columnEl.className = "col-sm-6";
            const cardEl = document.createElement("div");
            cardEl.className = "card mb-3";
            if (article.multimedia) {
                cardEl.append(__classPrivateFieldGet(this, _ArticlesView_getImageEl, "f").call(this, article.multimedia[0]));
            }
            cardEl.append(__classPrivateFieldGet(this, _ArticlesView_getBodyEl, "f").call(this, article, index));
            columnEl.append(cardEl);
            return columnEl;
        });
        _ArticlesView_getBodyEl.set(this, (article, index) => {
            const bodyEl = document.createElement("div");
            bodyEl.className = "card-body";
            bodyEl.id = "article-" + (index + 1);
            bodyEl.append(__classPrivateFieldGet(this, _ArticlesView_getTitleEl, "f").call(this, article.title));
            bodyEl.append(__classPrivateFieldGet(this, _ArticlesView_getSectionEl, "f").call(this, article.section));
            bodyEl.append(__classPrivateFieldGet(this, _ArticlesView_getDateEl, "f").call(this, article.published_date));
            bodyEl.append(__classPrivateFieldGet(this, _ArticlesView_getBylineEl, "f").call(this, article.byline));
            bodyEl.append(__classPrivateFieldGet(this, _ArticlesView_getLinkEl, "f").call(this, article.url));
            bodyEl.append(__classPrivateFieldGet(this, _ArticlesView_getAbstractEl, "f").call(this, article.abstract));
            return bodyEl;
        });
        _ArticlesView_getTitleEl.set(this, (title) => {
            const titleEl = document.createElement("h6");
            titleEl.className = "card-title";
            titleEl.textContent = title;
            return titleEl;
        });
        _ArticlesView_getAbstractEl.set(this, (abstract) => {
            const abstractEl = document.createElement("p");
            abstractEl.className = "card-text";
            abstractEl.textContent = abstract;
            return abstractEl;
        });
        _ArticlesView_getSectionEl.set(this, (section) => {
            const sectionEl = document.createElement("p");
            sectionEl.className = "card-text mb-0";
            const sectionSmall = document.createElement("small");
            sectionSmall.className = "text-muted";
            sectionSmall.textContent = section.toUpperCase();
            sectionEl.append(sectionSmall);
            return sectionEl;
        });
        _ArticlesView_getDateEl.set(this, (date) => {
            const dateEl = document.createElement("p");
            dateEl.className = "card-text mb-0";
            const dateSmall = document.createElement("small");
            dateSmall.className = "text-muted";
            dateSmall.textContent = __classPrivateFieldGet(this, _ArticlesView_formatDate, "f").call(this, date);
            dateEl.append(dateSmall);
            return dateEl;
        });
        _ArticlesView_formatDate.set(this, (date) => {
            const day = date.split("T")[0];
            const time = date.split("T")[1].split("-")[0].slice(0, 5);
            return day + " " + time;
        });
        _ArticlesView_getBylineEl.set(this, (byline) => {
            const bylineEl = document.createElement("p");
            bylineEl.className = "card-text mb-0";
            const bylineSmall = document.createElement("small");
            bylineSmall.className = "text-muted";
            bylineSmall.textContent = byline;
            bylineEl.append(bylineSmall);
            return bylineEl;
        });
        _ArticlesView_getLinkEl.set(this, (url) => {
            const wrapperEl = document.createElement("p");
            wrapperEl.className = "card-text";
            const smallEl = document.createElement("small");
            const linkEl = document.createElement("a");
            linkEl.href = url;
            linkEl.textContent = "LINK";
            smallEl.append(linkEl);
            wrapperEl.append(smallEl);
            return wrapperEl;
        });
        _ArticlesView_getImageEl.set(this, (imageObj) => {
            const imageEl = document.createElement("img");
            imageEl.className = "card-img-top mt-4 mx-auto";
            imageEl.src = imageObj.url;
            imageEl.alt = imageObj.caption;
            imageEl.style.width = "200px";
            return imageEl;
        });
        this.articlesContainerEl = document.querySelector("#articles-container");
        this.resetButton = document.querySelector("#reset-button");
        this.searchButton = document.querySelector("#search-button");
        this.searchInput = document.querySelector("#search-query");
    }
}
_ArticlesView_clearArticles = new WeakMap(), _ArticlesView_getArticleColumnDiv = new WeakMap(), _ArticlesView_getBodyEl = new WeakMap(), _ArticlesView_getTitleEl = new WeakMap(), _ArticlesView_getAbstractEl = new WeakMap(), _ArticlesView_getSectionEl = new WeakMap(), _ArticlesView_getDateEl = new WeakMap(), _ArticlesView_formatDate = new WeakMap(), _ArticlesView_getBylineEl = new WeakMap(), _ArticlesView_getLinkEl = new WeakMap(), _ArticlesView_getImageEl = new WeakMap();

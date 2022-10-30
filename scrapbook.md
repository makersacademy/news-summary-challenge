VIEW CLASS
this.displaySearchedArticles();

this.searchInput.addEventListener("input", (e) => {
this.articlesFromModel.forEach((article) => {
const searchInput = e.target.value.toLowerCase(); // gets user input and converts to lower case - WORKS
const isVisible = article.webTitle.toLowerCase().includes(searchInput); // gets headlinesand converts to lower case - WORKS
// const arr = document.querySelectorAll("h1.news-title");
if (isVisible) {
this.displayArticles();
}
});
// const h1 = document.getElementById("h1");
// console.log(value);
// console.log(article.webTitle);
// console.log(isVisible);

// this.allHeadlines.forEach((headline) => {
// headline.toggle("hide", !isVisible);
// });
// });
});

// displaySearchedArticles() {
// this.clearFeed();
// this.searchArticlesFromModel.forEach((article) => {
// this.addImage(article);
// this.addHeadline(article);
// });
// }

---

MODEL CLASS

    // this.searchedArticles = [];

// getSearchedArticles() {
// return this.searchedArticles;
// }
// addSearchedArticles(article) {
// this.searchedArticles.push(article);
// }

// searchArticles(keyword) {
// this.articles.filter((article) => {
// if (article.webTitle.includes(keyword)) {
// this.searchedArticles.push(article);
// }
// });
// }

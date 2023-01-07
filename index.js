const NewsClient = require("./NewsClient");
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");

const client = new NewsClient();
const model = new NewsModel();
const view = new NewsView(model, client);

console.log(model.getNews());

// const newsItemOne = "Egypt says wreckage from flight found in Mediterranean";
// const newsItemTwo =
//   "Humans damaging planet faster than it can recover, report finds";
// model.addNewsItem(newsItemOne);
// model.addNewsItem(newsItemTwo);
// view.displayNewsItems();

// view.displayNewsFromApi();

// const getRepoInfo = (callback) => {
//   fetch(
//     "https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=d894a708-39c5-403d-a0f6-8790495e4851"
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       callback(data);
//     });
// };

// getRepoInfo((repoData) => {
//   console.log(repoData.response.results);
// });

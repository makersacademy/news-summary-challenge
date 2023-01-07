const NewsClient = require("./NewsClient");
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");

const client = new NewsClient();
const model = new NewsModel();
const view = new NewsView(model, client);

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

const newsItemOne = {
  webTitle:
    "At last, the inventors of modern skiing have something to cheer: Dave Ryding | Andy Bull",
  webUrl:
    "https://www.theguardian.com/sport/blog/2022/feb/02/at-last-the-inventors-of-modern-skiing-have-something-to-cheer-dave-ryding",
  fields: {
    thumbnail:
      "https://media.guim.co.uk/1e2ab1ced5da6ecf8d7fcca9f87d5398c1d22336/0_119_6480_3888/500.jpg",
  },
};
const newsItemTwo = {
  webTitle:
    "Ofgem to unveil new household energy bill price cap on Thursday morning – business live",
  webUrl:
    "https://www.theguardian.com/business/live/2022/feb/02/oil-prices-climb-seven-year-highs-opec-meeting-markets-await-eurozone-inflation",
  fields: {
    thumbnail:
      "https://media.guim.co.uk/aee3b3b05ea2a37acdadc91095c163fd381eba4a/0_24_3500_2100/500.jpg",
  },
};

model.addNewsItem(newsItemOne);
model.addNewsItem(newsItemTwo);
view.displayNewsItems();

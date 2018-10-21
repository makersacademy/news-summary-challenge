"use strict";

var _guardianApi = _interopRequireDefault(require("./guardianApi.js"));

var _domManip = _interopRequireDefault(require("./domManip.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ga = new _guardianApi.default();
let dm = new _domManip.default(document);

async function go() {
  const articles = await ga.getApi();

  for (let i = 1; i < articles.length; i++) {
    console.log(articles[i]);
    console.log(articles[i].id);
    console.log(articles[i].webTitle);

    if (articles[i].fields == null) {
      articles[i].fields = {
        thumbnail: null
      };
    }

    console.log(articles[i].fields.thumbnail);
    console.log(articles[i].webUrl);
    console.log(articles[i].apiUrl);
  }
}

console.log(dm.getIdByClass(".classname"));
"use strict";

var _articleBuilder = _interopRequireDefault(require("./articleBuilder.js"));

var _domManip = _interopRequireDefault(require("./domManip.js"));

var _guardianHandler = _interopRequireDefault(require("./guardianHandler.js"));

var _aylienHandler = _interopRequireDefault(require("./aylienHandler.js"));

var _articleHandler = _interopRequireDefault(require("./articleHandler.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let guardianApiKey = '7e76eab8-964f-422e-a865-435b10cd25a2';
let aylien = new _aylienHandler.default();
let dm = new _domManip.default(document);
let guardian = new _guardianHandler.default(guardianApiKey);
let ab;
let ah = new _articleHandler.default(guardian, aylien);

async function initialise() {
  let articles = await ah.getEverything();
  ab = new _articleBuilder.default(articles, dm);
  ab.renderArticles();
}

initialise();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class AylienHandler {
  constructor() {
    this.apiLink = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=";
  }

  async getSummary(articleUrl) {
    await fetch(link).then(data => data.json()).then(data => results = data);
    return results;
  }

}

var _default = AylienHandler;
exports.default = _default;
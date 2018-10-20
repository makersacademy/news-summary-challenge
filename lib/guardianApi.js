"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const key = '7e76eab8-964f-422e-a865-435b10cd25a2';

class guardianHandler {
  constructor(apiKey) {
    this.apiHeader = 'https://content.guardianapis.com/search?';
    this.apiKeyReq = "api-key=" + apiKey;
    let date = new Date();
    this.dateQuery = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  }

  homePageApi() {
    return apiHeader + queries.join("&");
  }

}

var _default = guardianHandler;
exports.default = _default;
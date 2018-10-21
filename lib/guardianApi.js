"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const key = '7e76eab8-964f-422e-a865-435b10cd25a2';

class GuardianHandler {
  constructor(apiKey) {
    this.apiLink = 'https://content.guardianapis.com/search?show-fields=thumbnail&api-key=7e76eab8-964f-422e-a865-435b10cd25a2';
  }

  async getApi() {
    let results;
    await fetch(this.apiLink).then(data => data.json()).then(data => {
      results = data.response.results;
    });
    return results;
  }

}

var _default = GuardianHandler;
exports.default = _default;
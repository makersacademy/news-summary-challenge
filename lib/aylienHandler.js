"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const key = 'bd22049cbba543c5518619c36aab7739'; // https://github.com/AYLIEN/aylien_textapi_ruby/blob/master/spec/fixtures/aylien_text_api/client/summarize_with_valid_url.yml
// http POST https://api.aylien.com/api/v1/summarize?url=http://techcrunch.com/2015/04/06/john-oliver-just-changed-the-surveillance-reform-debate X-AYLIEN-TextAPI-Application-Key:bd22049cbba543c5518619c36aab7739 X-AYLIEN-TextAPI-Application-ID:1e323be7 Content-Type:application/x-www-form-urlencoded

class AylienHandler {
  constructor(apiKey, appKey) {
    this.apiKey = apiKey;
    this.appKey = appKey;
    this.apiLink = "https://api.aylien.com/api/v1/summarize?";
  }

}

var _default = AylienHandler;
exports.default = _default;
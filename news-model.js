"use strict";

class NewsModel {
  constructor(request) {
    this._response = request["Response"];
  }

  getResponse() {
    return this._response;
  }

}
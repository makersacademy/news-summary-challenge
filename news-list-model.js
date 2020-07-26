"use strict";

class NewsListModel {
  constructor() {
    this._list = [];
    this._urls = [];
  }

  storeNews(newsModel) {
    this._list.push(newsModel._response[results]);
    return this._list;
  }

  getUrls() {
    this._list.forEach(result => this._urls.push(result[webUrl]));
    return this._urls;
  }
}
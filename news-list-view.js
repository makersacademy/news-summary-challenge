"use strict";

class NewsListView {
  constructor(newsListModel) {
    this._newsListModel = newsListModel;
  }

  toHtml() {
    this._newsListModel.forEach(element => console.log(element));
  } 
}
'use strict'

class ArticleListView {
  render(container, articleList) {
    let header = this._createHeader("News");
    container.appendChild(header);
    let list = this._createList();
    container.appendChild(list);
    for(var i=0; i<articleList.length; ++i) {
      let article = articleList[i];
      let li = new ArticleView().renderHeadline(article);
      list.append(li);
    }
  }

  _createHeader(title){
    let header = document.createElement("h1");
    let text = document.createTextNode(title);
    header.appendChild(text);
    return header;
  }

  _createList(id){
    let list = document.createElement("ul");
    return list;
  }
}
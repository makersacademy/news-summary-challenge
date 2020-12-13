class ArticleListView {
  constructor(articleList) {
    this.articleList = articleList;
  }

  getHTML() {
    let returnedHTML = `<ul style="list-style-type:none">`;
    for (var i = 0; i < this.articleList.getAllArticles().length; i++) {
      returnedHTML += `<li><div class="container"><img class="image" src="${this.articleList.getAllArticles()[i].getThumbnail()}" alt="${this.articleList.getAllArticles()[i].getHeadline().slice(0, 15)}"><br><a id="headline" href='#articles/${i}'>${this.articleList.getAllArticles()[i].getHeadline()}</a></div></li><br>`
    }
    returnedHTML += `</ul>`;
    return returnedHTML;
  }
}

// This is a better way to visualise the html returned above

// <ul style="list-style-type:none">
//   <li>
//     <div class="container">
//       <img class="image" src="${this.articleList.getAllArticles()[i].getThumbnail()}" alt="${this.articleList.getAllArticles()[i].getHeadline().slice(0, 15)}">
//       <br>
//       <a id="headline" href='#articles/${i}'>
//         ${this.articleList.getAllArticles()[i].getHeadline()}
//       </a>
//     </div>
//   </li>
//   <br>
// </ul>

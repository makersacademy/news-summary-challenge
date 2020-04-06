class Articlelistview {

  constructor() {
    this.articlelist = new Articlelist();
  }

  viewArticleListAsHTML() {
    console.log("count: " + this.articlelist.count)
    let x =  this.articlelist.list.map(article => {
        return (`<a href="${article.url}"><li><div>${article.headline}</div></li></a>`);
    });
       x = `<ul>${x.join('')}</ul>`;
       return x;
   }

}

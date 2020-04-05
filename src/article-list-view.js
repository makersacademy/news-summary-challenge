class Articlelistview {

  constructor() {
    this.articlelist = new Articlelist();
  }

  viewArticleListAsHTML() {
    console.log("count: " + this.articlelist.count)
    let x =  this.articlelist.list.map(article => {
        let y = article.url.substr(0,20);
        return (`<a href="${y}"><li><div>${article.headline}</div></li></a>`);
    });
       x = `<ul>${x.join('')}</ul>`;
       return x;
   }

}

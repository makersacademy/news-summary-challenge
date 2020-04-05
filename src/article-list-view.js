class Articlelistview {
  constructor() {
    this.articlelist = new Articlelist();
  }

  viewArticleListAsHTML() {
    console.log(this.articlelist.list);
      let x =  this.articlelist.list.map(article => {
         return (`<a href="${article.url}"><li><div>${article.headline}</div></li></a>`);
       });
       x = `<ul>${x.join('')}</ul>`;
       console.log(x);
       return x;
   }

}

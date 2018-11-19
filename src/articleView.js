class ArticleView{

  renderHeadline(article){
    let thumbnailDiv = this._createThumbnail(article);
    let headline = this._createHeader(article, "h3");
    let articlediv = this._createHeadlineArticleDiv();
    if(thumbnailDiv != null) articlediv.appendChild(thumbnailDiv);
    articlediv.appendChild(headline);
    let li = this._createHeadlineLI(article);
    li.appendChild(articlediv);
    return li;
  }

  renderArticleDetail(article){
    let thumbnailDiv = this._createThumbnail(article);
    let headline = this._createHeader(article, "h1");
    let content = this._createContent(article);
    let articlediv = this._createHeadlineArticleDiv();
    articlediv.appendChild(thumbnailDiv);
    articlediv.appendChild(headline);
    articlediv.appendChild(content);
    return articlediv;
  }

   _createContent(article){
    let p = document.createElement("P");
    let summary = article.getSummary();
    let text = createTextNode(summary);
    p.appendChild(text);
    return p;
   }

  _createHeadlineLI(article){
    let li = document.createElement("LI");
    let attribute = document.createAttribute("article-id");
    attribute.value = article.getId();
    li.setAttributeNode(attribute);
    return li;
  }
  _createHeadlineArticleDiv(){
    let div = document.createElement("div");
    let attribute = document.createAttribute("class");
    attribute.value = "article";
    div.setAttributeNode(attribute);
    return div;
  }

  _createThumbnail(article){
    if(! article.getThumbnail()) return null;

    let div = document.createElement("div");
    let attribute = document.createAttribute("class");
    attribute.value = "thumbnail";
    div.setAttributeNode(attribute);

    let img = document.createElement("img");
    let imgattribute = document.createAttribute("src");
    imgattribute.value = article.getThumbnail();
    img.setAttributeNode(imgattribute);

    div.appendChild(img);
    return div;
  }

  _createHeader(article, headersize){
    let header = document.createElement(headersize);
    let text = document.createTextNode(article.getTitle());
    header.appendChild(text);
    return header;
  }
}



{/* <li article-number="id">
  <div class="article">
    <div class="thumbnail">
      <img src="thumbnail"></img>
    </div>
    <h1>article title</h1>
    <p> text </p>
  </div>
</li> */}
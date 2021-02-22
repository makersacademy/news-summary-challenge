class News {
  constructor(newsData) {
    this.newsData = newsData;
  }

  eachNewsHeadline(index) {
    let headline = document.createElement('a');
    headline.href = '#' + index;
    headline.id = 'article' + index;
    headline.textContent = this.newsData.webTitle;
    return headline;
  }

  createImage() {
    let articleImage = document.createElement('img');
    let articleContent = document.createElement('p');
    articleContent.innerHTML = this.newsData.fields.body;
    let articleImages = articleContent.getElementsByTagName('img');
    let img;
    if (articleImages.length !== 0) {
      img = articleImages[0].getAttribute('src');
    } else {
      img = '';
    };

    articleImage.setAttribute('src', img);
    articleImage.setAttribute('style', 'width:40%');
    return articleImage;
  }

  articleSummary() {
    let articleContent = document.getElementById('list');
    articleContent.innerHTML = this.newsData.fields.body.substring(0, 2000);
    return articleContent;
  }

  headline() {
    let headline = document.getElementById('headline');
    console.log(headline);
    headline.innerHTML = this.newsData.webTitle;
    return headline;
  }

  headlineLink() {
    let headlineLink = document.getElementById('headline-link');
    headlineLink.href = this.newsData.webUrl;
    console.log(headlineLink.href);
    headlineLink.innerHTML = headlineLink.href;
    return headlineLink;
  }

  // headline.innerHTML = `<h1 id=headline > <a id='headline-link' href='#'> </a>${this.newsData.webTitle}</h1>`;

}

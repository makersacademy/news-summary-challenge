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
    articleImage.setAttribute('style', 'width:50%');
    return articleImage;
  }

  articleLink() {
    let articleContent = document.getElementById('body');
    articleContent.innerHTML = this.newsData.fields.body;
    return articleContent;
  }
}

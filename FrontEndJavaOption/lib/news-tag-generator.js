  function NewsTagGenerator(headline, articlebody, articlesummary, imageurl) {
    this._headline = headline
    this._articlebody = articlebody
    this._articlesummary = articlesummary
    this._imageurl = imageurl

    NewsTagGenerator.prototype.generateHeadline = function() {
      headlinetag = document.createElement('h1');
      headlinetag.textContent = this._headline;
      return headlinetag
    };

    NewsTagGenerator.prototype.generateArticleSummary = function() {
      articletag = document.createElement('body');
      articletag.textContent = this._articlesummary;
      return articletag
    };

    NewsTagGenerator.prototype.generateFullArticle = function() {
      fullarticletag = document.createElement('body');
      fullarticletag.textContent = this._articlebody;
      return fullarticletag
    };

    NewsTagGenerator.prototype.generateImageTag = function() {
      imagetag = document.createElement('img')
      imagetag.setAttribute('src', this._imageurl)
      return imagetag
    };

    NewsTagGenerator.prototype.generateLink = function(index) {
      linktag = document.createElement('a')
      linktag.appendChild(generateHeadline());
      linktag.setAttribute('id', index)
      return linktag
    };

  };

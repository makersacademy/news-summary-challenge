  function News(headline, articlebody, image) {
    this._headline = headline
    this._articlebody = articlebody
    this._image = image

    News.prototype.generateHeadline = function() {
      headlinetag = document.createElement('h1');
      headlinetag.textContent = this._headline;
      return headlinetag
    };

    News.prototype.generateArticleBody = function() {
      articletag = document.createElement('body');
      articletag.textContent = this._articlebody;
      return articletag
    }

  }

  function NewsTagGenerator(headline, articlebody, imageurl) {
    this._headline = headline
    this._articlebody = articlebody
    this._imageurl = imageurl

    NewsTagGenerator.prototype.generateHeadline = function(index) {
      headlinetag = document.createElement('h1');
      headlinetag.textContent = this._headline;
      return headlinetag
    };

    NewsTagGenerator.prototype.generateArticleBody = function(index) {
      articletag = document.createElement('body');
      articletag.textContent = this._articlebody;
      return articletag
    }

    NewsTagGenerator.prototype.generateImageTag = function(index) {
      imagetag = document.createElement('img')
      imagetag.setAttribute('src', this._imageurl)
      return imagetag
    }

    NewsTagGenerator.prototype.generateLink = function(index) {
      linktag = document.createElement('a')
      linktag.setAttribute('id', index)
      linktag.addEventListener('click', function() {
        showFullArticle(index)
      })
      linktag.textContent = this._headline
      return linktag
    }

  };

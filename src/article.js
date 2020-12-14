'use strict';

class Article {
    constructor(headline, thumbnail, summary, url) {
        this.headline = headline;
        this.thumbnail = thumbnail;
        this.url = url;
        this.summary = summary;
    }

    getHeadline() {
        return this.headline;
    }

    getThumbnail() {
        return this.thumbnail;
    }

    getURL() {
        return this.url;
    }

    getSummary() {
      return this.summary;
    }
}

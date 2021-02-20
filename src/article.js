'use strict';

class Article {
    static id = 1
    constructor(headline, thumbnail, summary, url) {
        this.headline = headline;
        this.thumbnail = thumbnail;
        this.summary = summary;
        this.url = url;
        this.id = Article.id;
        Article.id++;

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

    getId() {
      return this.id;
    }
    
}

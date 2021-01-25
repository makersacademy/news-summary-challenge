'use strict;'

class Article {
  constructor(headline, webUrl, thumbnail, webPublicationDate, body, id) {
    this.headline = headline
    this.webUrl = webUrl
    this.thumbnail = thumbnail
    this.webPublicationDate = webPublicationDate
    this.body = body
    this.id = id
    this.list = []
  }
}

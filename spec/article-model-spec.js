"use strict";
showOff("Article", function () {
  var myArticle = new Article();

  theThingy(".setTitle should set the title of an article, .getTitle should return it", function () {
    myArticle.setTitle("My article's Title");
    hope(myArticle.getTitle()).toEqual("My article's Title");
  });

  theThingy(".setBody should set the body of an article, .getBody should return it", function () {
    myArticle.setBody("My article's Body");
    hope(myArticle.getBody()).toEqual("My article's Body");
  });

  theThingy(".setThumbnail should set the image thumbnail of an article, .getThumbnail should return it", function () {
    myArticle.setThumbnail("http://example.com/thumb.jpg");
    hope(myArticle.getThumbnail()).toEqual("http://example.com/thumb.jpg");
  });

  theThingy(".setUrl should set the url of an article, .getUrl should return it", function () {
    myArticle.setUrl("http://example.com");
    hope(myArticle.getUrl()).toEqual("http://example.com");
  });

  theThingy(".extractDescription returns the first paragraph of an article", function () {
    myArticle.setBody("<p>My article's first paragaraph</p> <p> this is a second paragraph</p>");
    hope(myArticle.extractDescription()).toEqual("<p>My article's first paragaraph</p>");
  });

  theThingy(".extractDescription returns the no description available if the regexp matcher fails", function () {
    myArticle.setBody("My article's first paragaraph</p> < this is a second paragraph</p>");
    hope(myArticle.extractDescription()).toEqual("<p>No description available...</p>");
  });

});
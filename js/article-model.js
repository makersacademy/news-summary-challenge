"use strict";

(function(exports){
  exports.Article = function(){
    var _title;
    var _body;
    var _thumbnail;
    var _url;

    var setTitle = function(title){
      _title = title;
    }

    var setBody = function(body){
      _body = body;
    }

    var setThumbnail = function(thumbnail){
      _thumbnail = thumbnail;
    }

    var setUrl = function(url){
      _url = url;
    }

    var getTitle = function(){
      return _title;
    }

    var getBody = function(){
      return _body;
    }

    var getThumbnail = function(){
      return _thumbnail;
    }

    var getUrl = function(){
      return _url;
    }

    var extractDescription = function(){
      var firstParagraphRE = /<p>(.*?)<\/p>/y;
      var matches = _body.match(firstParagraphRE);
      if (matches !== null){
        return matches[0];
      } 
        return "<p>No description available...</p>"
    }
 
    return {  setTitle:setTitle,
              setBody:setBody,
              setThumbnail:setThumbnail,
              setUrl:setUrl,
              getTitle:getTitle,
              getBody:getBody,
              getThumbnail:getThumbnail,
              getUrl:getUrl,
              extractDescription:extractDescription }
  }

})(this);
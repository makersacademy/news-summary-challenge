"use strict";

(function (exports) {
  exports.JsonParser = function () {
    var _url = [];
    var _title = [];
    var _body = [];
    var _thumbnail = [];

    var _iterateThroughJson = function (out) {
      for (var i = 0; i < out.response.results.length; i++) {
        _url[i] = out.response.results[i].webUrl;
        _title[i] = out.response.results[i].webTitle;
        _body[i] = out.response.results[i].fields.body;
        _thumbnail[i] = out.response.results[i].fields.thumbnail;
      }
    }

    var parseJsonFromUrl = function (url, callback) {
      fetch(url).then(res => res.json()).then((out) => {
        
        _iterateThroughJson(out);
        callback();
      }).catch(err => {
        throw err
      });
    }

    var parseJsonFromVar = function (out, callback) {
      _iterateThroughJson(out);
      callback();
    }

    var getUrls = function () {
      return _url;
    }

    var getTitles = function () {
      return _title;
    }

    var getBodies = function () {
      return _body;
    }

    var getThumbnails = function () {
      return _thumbnail;
    }
    return {
      parseJsonFromVar:parseJsonFromVar,
      parseJsonFromUrl:parseJsonFromUrl,
      getUrls: getUrls,
      getTitles: getTitles,
      getBodies: getBodies,
      getThumbnails: getThumbnails
    }
  }
})(this);
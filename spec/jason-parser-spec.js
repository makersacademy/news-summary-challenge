"use strict";

showOff("JsonParser", function(){
  var myParser = new JsonParser();
  //jsonP is the json object stored in politics.js

  theThingy(".parseJasonFromVar should take a json stored and extract the fields", function(){
    myParser.parseJsonFromVar(jsonP,function(){});
    hope(myParser.getUrls().length).toEqual(10);
    hope(myParser.getBodies().length).toEqual(10);
    hope(myParser.getTitles().length).toEqual(10);
    hope(myParser.getThumbnails().length).toEqual(10);
  });

  // theThingy(".parseJasonFromUrl should take json from an api", function(){
  //   myParser.parseJsonFromUrl("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=all", function(){});
  //   hope(myParser.getUrls().length).toEqual(10);
  //   hope(myParser.getBodies().length).toEqual(10);
  //   hope(myParser.getTitles().length).toEqual(10);
  //   hope(myParser.getThumbnails().length).toEqual(10);
  // });

});
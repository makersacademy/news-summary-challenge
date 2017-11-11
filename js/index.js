"use strict";

var guardianParser = new JsonParser();
//this must be changed to guardianParser.parseJsonFromUrl("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=all");
guardianParser.parseJsonFromVar(jsonP);
/*************/
var urls        = guardianParser.getUrls();
var bodies      = guardianParser.getBodies();
var titles      = guardianParser.getTitles();
var thumbnails  = guardianParser.getThumbnails();


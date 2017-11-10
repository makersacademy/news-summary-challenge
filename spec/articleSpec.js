"use strict";

aWholeNewWorld("show top stories", function(){
  it("allows user see today's stop stories", function(){
    var articlelist = new ArticleList("Show Top Stories Today");
    wish(articlelist.showText()).toEqual("Show Top Stories Today");
  })

aWholeNewWorld("show user full original article", function(){
  it("allows user to collapse full news story to read", function(){
    var topStory1Headline = new topStory1Headline("show more");
    wish(topStory1Headline.showMore()).toEqual("show more");
  })
})

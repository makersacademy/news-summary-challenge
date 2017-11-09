"use strict";

aWholeNewWorld("show top stories", function(){
  it("allows user see today's stop stories", function(){
    var articlelist = new ArticleList("Show Top Stories Today");
    wish(articlelist.showText()).toEqual("Show Top Stories Today");
  })
})

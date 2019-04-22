(function(){

  var summary = new Summary({
    thumbnail: "the thumbnail",
    headline: "the headline",
    summary: "the summary"
  });

  (function(){
    var description = "A Summary object has a thumbnail"
    assert.isTrue(
      summary.getThumbnail() === "the thumbnail",
      description
    )
  })();

  (function(){
    var description = "A Summary object has a headline"
    assert.isTrue(
      summary.getHeadline() === "the headline",
      description
    )
  })();

  (function(){
    var description = "A Summary object has a summary"
    assert.isTrue(
      summary.getSummary() === "the summary",
      description
    )
  })();

})()

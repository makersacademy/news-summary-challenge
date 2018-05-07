var SINGLENEWSVIEWMODULE = (function(exports) {

  function testThatReturnNewsHeadLineRepresentation() {
    var news = new News(
      'Summer in London',
      'hhtps//summer_in_london',
      'Summer in London will be hot',
      'image here',
      1
    );
    var singleNewsView = new SingleNewsView(news);

    if (singleNewsView.HTMLSingleNewsHeadlineRepresentation() !==
      "<p><a href='#news/1'>Summer in London</a></p><img src=image here alt='Image' height='auto' width='300'>") {
      throw new Error ('Something went wrong!')
    }
    console.log('%c Single News View: test that method\
     HTMLSingleNewsHeadlineRepresentation returns right string is passing', 'color:green')
  };

  testThatReturnNewsHeadLineRepresentation();

  function testThatReturnNewsSummaryRepresentation() {
      var news = new News(
        'Summer in London',
        'hhtps//summer_in_london',
        'Summer in London will be hot',
        'image here',
        1
      );
    var singleNewsView = new SingleNewsView(news);
    if (singleNewsView.HTMLSingleNewsSummaryRepresentation() !== "<p>Summer in London will be hot</p><p><a href=hhtps//summer_in_london>hhtps//summer_in_london</a></p>") {
      throw new Error ('Something went wrong!')
    }
    console.log('%c Single News View: test that method\
     HTMLSingleNewsSummaryRepresentation returns right string is passing', 'color:green')
  };

  testThatReturnNewsSummaryRepresentation();
})(this);

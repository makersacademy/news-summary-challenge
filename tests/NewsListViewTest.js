var NEWSLISTVIEWMODULE = (function(exports) {
  function testThatReturnsRightRepresentation() {
    var newsSummerInLondon = new News(
      'Summer in London',
      'hhtps//summer_in_london',
      'Summer in London will be hot',
      'image here',
      1
    );

    var newsSummerInMoscow = new News(
      'Summer in Moscow',
      'hhtps//summer_in_Moscow',
      'Summer in London will be good',
      'image here',
      2
    );

    var news = [
      newsSummerInLondon,
      newsSummerInMoscow
    ];

    var newListView = new NewsListView(news)
    if(newListView.HTMLNewsListRepresentation() !== "<ul><li><div id='0'><p><a href='#news/1'>Summer in London</a></p><img src=image here alt='Image' height='auto' width='300'></div></li><li><div id='1'><p><a href='#news/2'>Summer in Moscow</a></p><img src=image here alt='Image' height='auto' width='300'></div></li></ul>") {
      throw new Error ('Something went wrong!')
    };
    console.log('%c News List View: test that method\
     HTMLNewsListRepresentation returns right string is passing', 'color:green')
  };

testThatReturnsRightRepresentation();

})(this);

var NEWSMODULE = (function(exports) {
  function testThatNewstakeParametrs() {
    var news = new News('Summer in London', 'hhtps//summer_in_london', 'Summer in London will be hot', 'image here', 1);

    if (news.title !== 'Summer in London') {
      throw new Error ('Something went wrong!')
    }
    console.log('%c News: test that function News takes title as a parameter is passing',
    'color:green')

    if (news.url !== 'hhtps//summer_in_london') {
      throw new Error ('Something went wrong!')
    }
    console.log('%c News: test that function News takes url as a parameter is passing',
    'color:green')

    if (news.summary !== 'Summer in London will be hot') {
      throw new Error ('Something went wrong!')
    }
    console.log('%c News: test that function News takes summary as a parameter is passing',
    'color:green')

    if (news.thumbnail !== 'image here') {
      throw new Error ('Something went wrong!')
    }
    console.log('%c News: test that function News takes thumbnail as a parameter is passing',
    'color:green')

    if (news.id !== 1) {
      throw new Error ('Something went wrong!')
    }
    console.log('%c News: test that function News takes id as a parameter is passing',
    'color:green')
  };

  testThatNewstakeParametrs();

})(this);

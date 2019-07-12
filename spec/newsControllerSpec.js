// creating some mocks
function NewsSummaryDouble(){};

function NewsSummaryViewDouble(){};




//tests......

(function (exports){
  newsController = new NewsController(NewsSummaryDouble, NewsSummaryViewDouble)
  assert.isTrue(newsController.constructor.name === "NewsController", "test to verify correct type is created")
})()




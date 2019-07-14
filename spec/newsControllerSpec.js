
var mockHeadlines = `<div>
<img src="https://i.guim.co.uk/img/media/a90fa420260d522e4d9bb2c4c4377ef2d5d6e062/0_290_1952_1171/500.jpg?quality=85&auto=format&fit=max&s=bafbd4582ff4ecefed077b1a669fb072">
<a href="#uk-news/2019/jul/12/teenager-cleared-of-of-yousef-makki-17-in-cheshire"><h1>Private school student cleared of murdering teenager Yousef Makki</h1></a>
</div>

<div>
<img src="https://i.guim.co.uk/img/media/37282115bec82009fe5c3bdf5c47a31cb91512a1/1004_854_4308_2586/500.jpg?quality=85&auto=format&fit=max&s=409d17aeb5b99edbed2e2169f78fac1d">
<a href="#world/2019/jul/12/iran-warns-western-powers-to-leave-region-amid-gulf-crisis"><h1>UK to step up military presence in Gulf</h1></a>
</div>
`

// creating some mocks

function NewsHeadlinesDouble(json){
  this.json = json
};

function NewsHeadlinesViewDouble(){};
NewsHeadlinesViewDouble.prototype.htmlAllHeadlines = function(){
  return mockHeadlines
}

var mockElement = {};
var exampleJson = {};





//tests......

(function (exports){
  newsController = new NewsController(NewsHeadlinesDouble, NewsHeadlinesViewDouble, exampleJson, mockElement)
  assert.isTrue(newsController.constructor.name === "NewsController", "test to verify correct type is created")
})();

(function (exports){
  newsController = new NewsController(NewsHeadlinesDouble, NewsHeadlinesViewDouble, exampleJson, mockElement)
  assert.isTrue(mockElement.innerHTML === mockHeadlines, 'test to verify controller can print headlines to element')
})();



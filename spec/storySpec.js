describe("Getting story from API", function() {

  var storyHash = {
    "id":"uk-news/2017/nov/12/daily-express-owner-said-to-be-mounting-bid-to-take-over-national-lottery",
    "type":"article",
    "sectionId":"uk-news",
    "sectionName":"UK news",
    "webPublicationDate":"2017-11-12T18:42:41Z",
    "webTitle":"Daily Express owner said to be mounting bid to take over National Lottery",
    "webUrl":"https://www.theguardian.com/uk-news/2017/nov/12/daily-express-owner-said-to-be-mounting-bid-to-take-over-national-lottery",
    "apiUrl":"https://content.guardianapis.com/uk-news/2017/nov/12/daily-express-owner-said-to-be-mounting-bid-to-take-over-national-lottery",
    "fields":{"thumbnail":"https://media.guim.co.uk/7f5503043c6fb78baeebad4240083d48b235fbee/0_69_3000_1800/500.jpg"},
    "isHosted":false
  };

  var story = new Story(storyHash);
  console.log(story);

  it('has a headline', function() {
    expect(story.getHeadline()).toEqual("Daily Express owner said to be mounting bid to take over National Lottery")
  });
  it('has a thumbnail', function() {
    expect(story.showThumbnail()).toEqual("https://media.guim.co.uk/7f5503043c6fb78baeebad4240083d48b235fbee/0_69_3000_1800/500.jpg")
  });

  it('has a webUrl', function(){
    expect(story.showWebUrl()).toEqual("https://www.theguardian.com/uk-news/2017/nov/12/daily-express-owner-said-to-be-mounting-bid-to-take-over-national-lottery")
  });

  it('is able to summarise a story', function(){
    expect(story.summarise()).toBeLessThan(250)
  });


})

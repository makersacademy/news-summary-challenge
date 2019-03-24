function testHeadlinesFeatures() {
  console.log("Headlines feature tests: "); 
  this.headlines;
  this.headlinesView;
}

testHeadlinesFeatures.prototype.basic = function() {
  console.log("On loading, the app shows the latest headlines");

  this.headlines = new HeadlinesModel();
  this.headlines.getHeadlines();
  this.headlinesView = new HeadlinesView(this.headlines);

  this.headlinesView.renderHTML();

  // console.log(this.headlines.storiesArray);

  // assert.isTrue(window.document.body.innerHTML.includes("TESTINGTESTING!!!!!!!"));
  // window.document.body.innerHTML += "TESTINGTESTING!!!!!!!";
  // assert.isTrue(window.document.body.innerHTML.includes("TESTINGTESTING!!!!!!!"));

  // console.log(window.document.body.innerHTML);
  console.log(this.headlinesView);

  // this.headlines.storiesArray.forEach(story => {
  //   console.log(story);
  //   assert.isTrue(window.document.body.innerHTML.includes("story.storyHeadline"));
  // });
};

testingHeadlinesFeatures = new testHeadlinesFeatures();
testingHeadlinesFeatures.basic();
function testHeadlinesModel() {
  console.log("\n\nTesting the HeadlinesModel:\n");
  this.headlines;
}

testHeadlinesModel.prototype = {
  canInstantiate: function() {
    console.log("\nHeadlinesModel object can be instantiated");
    this.headlines = new HeadlinesModel();
    assert.isTrue(this.headlines instanceof HeadlinesModel);
  },

  retrievesHeadlines: function() {
    console.log("\nHeadlinesModel retrieves latest headlines and stores in its array");
    this.headlines = new HeadlinesModel();
    this.headlines.getHeadlines();

    assert.isTrue(this.headlines.storiesArray.every((element) => {
      return element instanceof StoryModel;
    }));
  }
  
};

let testingHeadlinesModel = new testHeadlinesModel();

testingHeadlinesModel.canInstantiate();
// testingHeadlinesModel.retrievesHeadlines();
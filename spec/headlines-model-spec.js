function testHeadlinesModel() {
  console.log("\n\nTesting the HeadlinesModel:\n");
}

testHeadlinesModel.prototype = {
  testCanInstantiate: function() {
    console.log("\nHeadlinesModel object can be instantiated");
    
    let headlines = new HeadlinesModel;
    assert.isTrue(headlines instanceof HeadlinesModel);
    
  },
  
};

let testingHeadlinesModel = new testHeadlinesModel();

testingHeadlinesModel.testCanInstantiate();
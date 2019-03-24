var testjson = { "response": {
    "results": [
      {"webTitle": "something here",
        "fields": {
          "thumbnail": "thumbnail here",
          "body": "body here"
        }
      }
    ]
  }
}


function controllerIsInstanciated(){
  // function apiDouble() {};
  // apiDouble.prototype = {
  //   makeRequest: function(callback) {return testjson}
  // }
  //
  // var controller = new NewsController
  // controller.apiCall = new apiDouble()
  //
  // controller.refreshNewsData()
  // console.log(controller.newsData);
  // assert.isTrue(controller.newsData === testjson);
}
controllerIsInstanciated()

(function(){
  (function() {
    var description = "APIInterface.getHeadlines() gets stories from the API and passes them to a callback function"

    function HeadlineListMock () {
      this.list = []
      this.all = function () { return this.list }
      this.add = function (options) {
        this.list.push({
          getHeadline: function() {
            return this.headline
          },
          headline: options.headline
        })
      }
    }

    function callbackMock (headlineList) {
      var that = this
      that.headlineList = headlineList.list
    }

    var apiInterface = new APIInterface(HeadlineListMock)

    var headlineList = apiInterface.getHeadlines(callbackMock)

    assert.isTrue(
      this.headlineList[0].getHeadline() === "Sri Lanka attacks: several arrested after 207 killed at hotels and churches on Easter Sunday – live" &&
      this.headlineList.length === 10,
      description
    )

  })()
})()

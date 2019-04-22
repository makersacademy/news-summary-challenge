(function(){
  (function() {
    var description = "APIInterface.getHeadlines() gets stories from the API and passes them to a callback function. Resulting Headline objects should have a headline and a URL"

    function HeadlineListMock () {
      this.list = []
      this.all = function () { return this.list }
      this.add = function (options) {
        this.list.push({
          getHeadline: function() {
            return this.headline
          },
          getURL: function() {
            return this.url
          },
          headline: options.headline,
          url: options.url
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
      this.headlineList[0].getURL() === "https://www.theguardian.com/world/live/2019/apr/21/sri-lanka-explosions-dozens-killed-and-hundreds-injured-in-church-and-hotel-blasts" &&
      this.headlineList.length === 10,
      description
    )

  })()
})()

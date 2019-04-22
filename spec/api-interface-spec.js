(function(){
  (function() {
    var description = "APIInterface.getHeadlines() returns a HeadlineList of Guardian stories"

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

    var apiInterface = new APIInterface(HeadlineListMock)

    var headlineList = apiInterface.getHeadlines(exampleSearchResponse)
    var headlines = headlineList.all()

    assert.isTrue(
      headlines[0].getHeadline() === "Sri Lanka attacks: several arrested after 207 killed at hotels and churches on Easter Sunday – live" &&
      headlines.length === 10,
      description
    )

  })()
})()

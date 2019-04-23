(function(){
  (function() {
    var description = "APIInterface.getHeadlines() gets stories from the API and passes them to a callback function. Resulting Headline objects should have a headline, a URL and a thumbnail"

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
          getThumbnail: function() {
            return this.thumbnail
          },
          getID: function() {
            return this.id
          },
          headline: options.headline,
          url: options.url,
          thumbnail: options.thumbnail,
          id: options.id
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
      this.headlineList[0].getHeadline() === "Bolsonaro's motorbike escapade provokes helmet backlash" &&
      this.headlineList[0].getURL() === "https://www.theguardian.com/world/2019/apr/22/brazil-president-jair-bolsonaros-motorbike-video-may-backfire" &&
      this.headlineList[0].getThumbnail() === "https://media.guim.co.uk/9daa1ed862f91d0a99219d26b89282b0f90060c6/0_192_2000_1199/500.jpg" &&
      this.headlineList[0].getID() === "world/2019/apr/22/brazil-president-jair-bolsonaros-motorbike-video-may-backfire" &&
      this.headlineList.length === 10,
      description
    )

  })()
})()

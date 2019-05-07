(function(){
  describe("APIInterface", function() {
    describe(".getHeadlines()", function() {
      var that

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
        that = this
        that.headlineList = headlineList.list
      }

      var apiInterface = new APIInterface(HeadlineListMock)

      var headlineList = apiInterface.getHeadlines(callbackMock)

      console.log(headlineList)

      describe("gets stories from the API and passes them to a callback function. The resulting Headline objects should have...", function() {
        it("a headline", function() {
          expect(that.headlineList[0].getHeadline()).toBe("Bolsonaro's motorbike escapade provokes helmet backlash")
        })

        it("a URL", function() {
          expect(that.headlineList[0].getURL()).toBe("https://www.theguardian.com/world/2019/apr/22/brazil-president-jair-bolsonaros-motorbike-video-may-backfire")
        })

        it("a thumbnail", function() {
          expect(that.headlineList[0].getThumbnail()).toBe("https://media.guim.co.uk/9daa1ed862f91d0a99219d26b89282b0f90060c6/0_192_2000_1199/500.jpg")
        })

        it("an ID", function() {
          expect(that.headlineList[0].getID()).toBe("world/2019/apr/22/brazil-president-jair-bolsonaros-motorbike-video-may-backfire")
        })

        it("and there should be 10 of them", function() {
          expect(that.headlineList.length).toBe(10)
        })
      })
    })
  });
})()

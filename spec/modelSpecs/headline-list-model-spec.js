(function() {

  describe("HeadlineList", function() {
    describe(".add()", function() {
      it("passes options through to the Headline constructor", function() {
        var optionsReceived = []
        function HeadlineMock(options) {
          optionsReceived.push(options)
        }

        var options1 = {
          option1: "This is an option",
          option2: "This is another option"
        }

        var options2 = {
          option1: "This is a third option",
          option2: "Yet another option"
        }

        var headlineList = new HeadlineList(HeadlineMock)

        headlineList.add(options1)
        headlineList.add(options2)

        expect(optionsReceived).toContain(options1)
        expect(optionsReceived).toContain(options2)
      })
    })

    describe(".all()", function() {
      it("returns an array of Headline objects", function() {
        function HeadlineMock(options) {
          this.option = options.option
        }

        var headlineList = new HeadlineList(HeadlineMock)

        headlineList.add({option: "First headline"})
        headlineList.add({option: "Second headline"})

        var list = headlineList.all()

        expect(list[0].option).toBe("First headline")
        expect(list[1].option).toBe("Second headline")
        expect(list.length).toBe(2)
      })
    })
  })

})()

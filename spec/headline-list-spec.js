(function() {

  (function() {
    var description = "HeadlineList.add passes options through to Headline constructor"

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

    assert.isTrue(
      optionsReceived.includes(options1) && optionsReceived.includes(options2),
      description
    )
  })()

})()

(function() {

  var headlineList = new HeadlineList()
  headlineList.add({ headline: "This is the first headline" })
  headlineList.add({ headline: "This is the second headline" })
  var headlinesController = new HeadlinesController(headlineList)
  headlinesController.display()

})()

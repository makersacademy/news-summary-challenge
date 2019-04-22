// (function() {

//   (function() {
//     var description = "HeadlinesController.display gets the headlines from the Guardian API, applies HeadlineListView, and displays them"

//     function headlineListViewMock (headlineList) {
//       this.getHTML = function() {
//         return headlineList + " converted to HTML"
//       }
//     }

//     var headlinesController = new HeadlinesController(headlineListMock, headlineListViewMock)
//     var target = document.createElement('div')
//     headlinesController.display(target)
//     var contents = target.innerHTML
//     assert.isTrue(
//       contents === "headline list converted to HTML",
//       description
//     )

//   })()

// })()

function testController(){
  newsObject = {
    webTitle: "test article",
    webUrl: "https://www.theguardian.com/media/2018/jan/14/new-tabloid-observer-coming-next-week",
  };
  var list = new List();
  list.addStory(newsObject)
  var view = new View(list);
  var controller = new Controller(list, view)
  var div = controller.view.displayHeadlines();

  controller.listMaker("list");
  assert.isTrue(document.getElementById("list").innerHTML === div, "Controller")
}


testController();

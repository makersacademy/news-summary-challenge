function listViewTest1() {
    var articleObjectsArray = [new Article(0, "title 1", "url 1", "image", "body", "summary"), new Article(1, "title 2", "url 2", "image", "body", "summary"), new Article(2, "title 3", "url 3", "image", "body", "summary")]
    var listView = new ListView()
    var string1 = `<div class="container"><div class="row"></div><div class="row"><div class="col-sm"><a href='#0'><div class="headline">title 1</div><div><img src='image' class='pic'></div></a></div><div class="col-sm"><a href='#1'><div class="headline">title 2</div><div><img src='image' class='pic'></div></a></div><div class="col-sm"><a href='#2'><div class="headline">title 3</div><div><img src='image' class='pic'></div></a></div></div>`
    expect.isEqual(listView.createListView(articleObjectsArray) === string1, "Creates HTML view")
}

listViewTest1()
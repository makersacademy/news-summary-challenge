function listViewTest1() {
    var articleObjectsArray = [new Article(0, "title 1", "url 1"), new Article(1, "title 2", "url 2"), new Article(2, "title 3", "url 3")]
    var listView = new ListView(articleObjectsArray)
    var string1 = "<div class='card-panel'><div>title 1</div><br><form action='url 1'><input type=submit value='Go to Article'></form></div>"
    var string2 = "<div class='card-panel'><div>title 2</div><br><form action='url 2'><input type=submit value='Go to Article'></form></div>"
    var string3 = "<div class='card-panel'><div>title 3</div><br><form action='url 3'><input type=submit value='Go to Article'></form></div>"
    expect.isEqual(listView.createListView() === `${string1}${string2}${string3}`, "Creates HTML view")
}

listViewTest1()
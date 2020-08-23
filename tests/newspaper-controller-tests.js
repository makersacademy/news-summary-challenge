(function(exports){

  function NewspaperDouble() {
    this.content = [];
    this.articles = function () {
      return this.content;
    };
  };
  newspaper = new NewspaperDouble();

  function renderEmptyNewspaper() {
    let controller = new NewspaperController(newspaper);
    controller.renderHTML();
    assert.isTrue(document.getElementById('app').innerHTML === "<ul><li><div></div></li></ul>" )
  }
  renderEmptyNewspaper();

  /* function singleNoteViewTest() {
    var list = new NoteList();
    list.addNote('Favourite Drink: Seltzer');
    var controller = new NoteController(list);
    controller.makeUrlChangeShowCurrentNote(controller.view);
    window.location.hash = '#notes/0';
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    assert.isTrue(document.getElementById('app').innerHTML === "<div>Favourite Drink: Seltzer</div>");
  }
  singleNoteViewTest(); */
})(this);

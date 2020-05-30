(function () {
  class HeadlinesListViewDouble {
    constructor(list) {
      this.list = list;
    }
  }

  let headlinesListView = new HeadlinesListViewDouble();
  let controller = new Controller(headlinesListView);

  function testInstantiatesWithAHeadlinesListView() {
    assert.isTrue(controller.view === headlinesListView);
  }

  testInstantiatesWithAHeadlinesListView();
})();

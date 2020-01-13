describe(".HeadlineController", () => {

  headlineControllerTest = new HeadlineController();

  it("It should add a note", () => {
    headlineControllerTest.add("Testing 1 2 3");
    assert.isTrue(headlineControllerTest.returnHeadlines().includes("Testing 1 2 3"));
  });

});
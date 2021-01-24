describe("Newsify", function(){

  let newsify 

  beforeEach(function() {
    newsify = new Newsify();
  });

  describe("Newsify --> new: ", function () {
    it("can be instantiated", function(){
      expect(newsify).toBeInstanceOf(Newsify)
    })
  });

});

var headline;

describe('#Headline', function(){

  beforeEach(function(){
    headline = new Headline();
  })

  it("is a member of the Headlines class", function(){
    expect(headline instanceof Headline).toEqual(true)
  })
})

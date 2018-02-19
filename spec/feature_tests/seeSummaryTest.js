function seeSummaryTest(){
  it('should show a summary of one article', function() {
     clickButton('summary1')
     let summary = "Members of Ukip voted yesterday to sack Henry Bolton, who had been elected only last September as the crisis-hit party’s fourth leader in 18 months."
     let dontWant = "At this stage of the Brexit talks there seem to be few barriers to the Tory party dominating the outcome."
     assert.hasContent('summary', summary)
     assert.doesntHaveContent('summary', dontWant )
  })


  it('should show different text after several clicks a summary of one article', function() {
     clickButton('summary1')
     clickButton('summary2')
     clickButton('summary3')
     let expected = "Jeremy Corbyn has come under intense pressure to shift Labour’s position on Brexit after 20,000 members demanded a say over the issue and former leader Neil Kinnock backed halting Britain’s EU exit altogether."
     let dontWant = "Members of Ukip voted yesterday to sack Henry Bolton, who had been elected only last September as the crisis-hit party’s fourth leader in 18 months."
     assert.hasContent('summary', expected)
     assert.doesntHaveContent('summary', dontWant )
  })


}

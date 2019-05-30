(function() {
  describe('Feature test', function() {
    describe('On page, load the app', function () {
      var app = document.getElementById('app')
      var contents = app.innerHTML
      it('displays the headlines', function() {
        expect(contents).toContain("Bolsonaro's motorbike escapade provokes helmet backlash")
      })

      it('displays the thumbnails', function() {
        expect(contents).toContain("https://media.guim.co.uk/9daa1ed862f91d0a99219d26b89282b0f90060c6/0_192_2000_1199/500.jpg")
      })
    })
  })
})()

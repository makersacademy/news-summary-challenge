window.onload = function() {
  describe('Interface', function () {
    it('gets information from the api request and displays them individually', function () {
      expect(document.getElementById("index").contentDocument.getElementsByClassName("expand").length)
      .toEqual(list.getList().length)
    })
  })
}
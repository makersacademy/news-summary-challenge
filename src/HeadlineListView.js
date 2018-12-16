function Render () {

}

Render.prototype = {
  base: function () {
    return [
      "</div>",
        "<h2>Guardian news summary</h2>",
      "</div>",
      "<form>",
        "<button id='getNews'>Get Articles!</button>",
      "</form>"
    ].join('')
  }
}

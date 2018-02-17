function Note(body) {
  this.body = body
}

Note.prototype = {

  getBody: function() {
    return this.body
  }

}
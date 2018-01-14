var id = new ArticleID()

var testList = [

  function() {
    testEquals('Id initialises to 0',
    id.id,
    0
    )
  },

  function() {
    id.increment()
    testEquals('Id can be incremented',
    id.id,
    1
    )
  },

  function() {
    var id = new ArticleID()
    testEquals('It returns current id',
    id.getID(),
    0
    )
  }

]

voodoo(testList)

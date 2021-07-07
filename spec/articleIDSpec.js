ArticleID.prototype.init()

var testList = [

  function() {
    testEquals('Id can be initialises to 0',
    ArticleID.prototype.getID(),
    0
    )
  },

  function() {
    testEquals('It returns current id',
    ArticleID.prototype.getID(),
    0
    )
  },

  function() {
    ArticleID.prototype.increment()
    
    testEquals('Id can be incremented',
    ArticleID.prototype.getID(),
    1
    )
  },

]

voodoo(testList)

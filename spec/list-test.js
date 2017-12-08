// mock objects here:

function PostDouble () {
}

// describe tests here:

function listObjectExists () {
  var describe = 'List: List object exists'
  var list = new List
  assert.isTrue(describe, list instanceof List)
}

function addsNewPosts () {
  var describe = 'New post is created and added to the list'
  var list = new List (PostDouble)
  assert.isTrue(describe, list.addPost('Headline', 'Text') === 1)
}

function returnsList () {
  var describe = 'Returns all list headlines'
  var list = new List (PostDouble)
  list.addPost('headline', 'text')
  assert.isTrue(describe, list.list()[0] instanceof PostDouble) // does it return an array of strings?
}


// call all tests here :

listObjectExists()
addsNewPosts()
// returnsList()

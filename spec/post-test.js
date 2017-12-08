function newPostHasText () {
  var describe = 'New Post has text'
  var post = new Post ('test text')
  assert.isTrue(describe, post.text() === 'test text')
}

function newPostHasIdOfZero () {
  reset()
  var describe = 'New post has ID of 0'
  var post = new Post('Post 1')
  assert.isEqual(describe, post.id(), 0)
}

function secondPostHasIdOfOne () {
  reset()
  var describe = 'Second Post has ID of 1'
  var post = new Post('Post 1')
  var post2 = new Post('Post 2')
  assert.isEqual(describe, post2.id(), 1)
}

newPostHasText()
newPostHasIdOfZero()
secondPostHasIdOfOne()

function newPostHasTextAndHeadLine () {
  var describe = 'New Post has headline and text'
  var post = new Post ('test headline', 'test text')
  assert.isTrue(describe, post.text() === 'test text')
  assert.isTrue(describe, post.headline() === 'test headline')
}

function newPostHasIdOfZero () {
  reset()
  var describe = 'New post has ID of 0'
  var post = new Post('test headline', 'Post 1')
  assert.isEqual(describe, post.id(), 0)
}

function secondPostHasIdOfOne () {
  reset()
  var describe = 'Second Post has ID of 1'
  var post = new Post('test headline', 'Post 1')
  var post2 = new Post('test headline2', 'Post 2')
  assert.isEqual(describe, post2.id(), 1)
}

newPostHasTextAndHeadLine()
newPostHasIdOfZero()
secondPostHasIdOfOne()

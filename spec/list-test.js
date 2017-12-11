// mock objects here:

function postDouble () {
}
postDouble.prototype = {
  headline: function () {
    return ['h1'];
  }
};

// describe tests here:

function listObjectExists () {
  var describe = 'List: List object exists';
  var list = new List();
  assert.isTrue(describe, list instanceof List);
}

function addsNewPosts () {
  var describe = 'New post is created and added to the list';
  var list = new List (postDouble);
  assert.isTrue(describe, list.addPost('Headline', 'Text') === 1);
}

function returnsPostObjects () {
  var describe = 'Returns array of post objects';
  var list = new List (postDouble);
  list.addPost('headline', 'text');
  assert.isTrue(describe, list.list()[0] instanceof postDouble); // does it return an array of strings?
}

function returnsAllHeaders () {
  var describe = 'Returns array of list headers';
  var list = new List (postDouble);
  list.addPost('h1', 't1');
  assert.isEqual(describe, list.headers(), ['h1']); 
}



// call all tests here :

listObjectExists();
addsNewPosts();
returnsPostObjects();
//returnsAllHeaders();


// mock objects here:

function postDouble () {
}

function listDouble () {
}


// describe tests here:

function viewObjectExists () {
  var describe = 'ListView: object exists';
  var view = new View ();
  assert.isTrue(describe, view instanceof View);
}


// call functions here:

viewObjectExists();

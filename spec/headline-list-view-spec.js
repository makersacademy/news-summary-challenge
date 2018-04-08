describe('View', function() {
  it('takes a list and has a method that returns the list in a string of html', function() {

    var fakeList = {
      get: function() {
        return [
          {
            get: function() {
              return 'A test headline';
            }
          },
          {
            get: function() {
              return 'Another test headline';
            }
          }
        ]
      }
    }

    var view = new View(fakeList);

    return expect(view.render(fakeList)).toEqual('<ul><li><div>A test headline</div></li><li><div>Another test headline</div></li></ul>');
  });
});

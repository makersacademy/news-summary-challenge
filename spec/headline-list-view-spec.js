describe('View', function() {
  it('takes a list and has a method that returns the list in a string of html', function() {

    var fakeList = {
      get: function() {
        return [
          {
            get: function() {
              return {
                headline: 'A test headline',
                image: 'image'
              }
            }
          },
          {
            get: function() {
              return {
                headline: 'A test headline',
                image: 'image'
              }
            }
          }
        ]
      }
    }

    var view = new View(fakeList);
    return expect(view.render(fakeList)).toEqual('<ul><li><div><img src =image></img></div><div>A test headline</div></li><li><div><img src =image></img></div><div>A test headline</div></li></ul>');
  });
});

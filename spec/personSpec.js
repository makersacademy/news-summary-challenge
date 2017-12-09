var personModule = require('../src/person.js');
var Person = personModule.Person;

describe('Person object', function() {
  var person;

  beforeEach(function() {
    person = new Person(false);
  });

  describe('has isCool property', function() {
    it('is false', function() {
      expect(person.isCool).toBe(false);
    });
  });

  describe('#shouts', function() {
    beforeEach(function() {
      spyOn(person, 'says').and.returnValue('something');
    });

    it('calls #says in uppercase', function() {
      expect(person.shouts()).toEqual('SOMETHING');
    });

    describe('when #shouts called', function() {
      beforeEach(function() {
        person.shouts();
      });

      it('calls #says', function() {
        expect(person.says).toHaveBeenCalled();
      });
    });
  });

  describe('#says', function() {
    it('can say mvp', function() {
      expect(person.says()).toEqual('mvp');
    });
  });
});




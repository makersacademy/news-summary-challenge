"use strict";
// Write tests below:

// e.g.
describeClass('Arithmetic1', function() {
  describe('Sum', function(){
    it('3 + 4 equals 6', function() { 
      expect(sum(3,4)).toEqual(6);
    });

    it('3 + 4 equals 7', function() { 
      expect(sum(3,4)).toEqual(7);
    });
  });
});

describeClass('Arithmetic2', function() {
  describe('Multiply', function(){
    it('3 * 4 equals 12', function() { 
      expect(multiply(3,4)).toEqual(12);
    });

    it('3 * 4 equals 19', function() { 
      expect(multiply(3,4)).toEqual(19);
    });

    it("3 * 4 doesn't equal 19", function() { 
      expect(multiply(3,4)).notToEqual(19);
    });
  });
});

describeClass('Arithmetic3', function() {
  describe('Sum', function(){
    it("3 + 4 doesn't equal 6", function() { 
      expect(sum(3,4)).notToEqual(6);
    });

    it("3 + 4 doesn't equal 7", function() { 
      expect(sum(3,4)).notToEqual(7);
    });
  });

  describe('Multiply', function(){
    it('3 * 4 equals 12', function() { 
      expect(multiply(3,4)).toEqual(12);
    });

    it('3 * 4 equals 19', function() { 
      expect(multiply(3,4)).toEqual(19);
    });

    it("3 * 4 doesn't equal 19", function() { 
      expect(multiply(3,4)).notToEqual(19);
    });
  });
});

describeClass('Arithmetic4', function() {
  describe('toContain', function(){
    it('[3, 4] contains 6', function() { 
      expect([3, 4]).toContain(6);
    });

    it('[3, 4] contains 4', function() { 
      expect([3,4]).toContain(4);
    });
  });

  describe('toRaiseError', function(){
    it('sum(3,4) to throw error', function() { 
      expect(sum(3, 4)).toRaiseError();
    });
  });
});

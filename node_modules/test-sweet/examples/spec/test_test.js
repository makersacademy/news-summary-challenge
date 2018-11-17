require('../example.js')
require('chalk')
require('../../test-sweet.js')

  method('FizzBuzz knows when something is', function() {
    it('divisible by 3', function() {
      var fizzbuzz = new FizzBuzz();
        expect(fizzbuzz._isDivisibleBy(3, 3)).toEqual(true);
    });
    it('not divisible by 3', function() {
      var fizzbuzz = new FizzBuzz();
        expect(fizzbuzz._isDivisibleBy(4, 3)).toEqual(false);
    });
    it('divisible by 5', function() {
      var fizzbuzz = new FizzBuzz();
        expect(fizzbuzz._isDivisibleBy(5, 5)).toEqual(true);
    });
    it('not divisible by 5', function() {
      var fizzbuzz = new FizzBuzz();
        expect(fizzbuzz._isDivisibleBy(4, 5)).toEqual(false);
    });
    it('divisible by 15', function() {
      var fizzbuzz = new FizzBuzz();
        expect(fizzbuzz._isDivisibleBy(15, 15)).toEqual(true);
    });
    it('not divisible by 15', function() {
      var fizzbuzz = new FizzBuzz();
        expect(fizzbuzz._isDivisibleBy(4, 15)).toEqual(false);
    });

    method('says', function() {
      it('"Fizz" when a number is divisible by 3', function() {
        var fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.says(3)).toEqual('Fizz');
      });
      it('"Buzz" when a number is divisible by 5', function() {
        var fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.says(6)).toEqual('Buzz');
      });
      it('"FizzBuzz" when a number is divisible by 15', function() {
        var fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.says(15)).toEqual('FizzBuzz');
      });
      it('the number when a number is not divisible by 3 or 5', function() {
        var fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.says(4)).toEqual(4);
      });
    });
  });

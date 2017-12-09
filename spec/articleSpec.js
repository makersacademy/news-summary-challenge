var articleModule = require('../src/article.js');

describe('Article', function() {
  var article = new articleModule.Article("Breaking UK tech's gender divide", "Women now outnumber men at undergraduate level in medicine and the biological sciences. But in the physical sciences, the pattern is different: according to Ucas", "https://www.theguardian.com/break-into-tech/2017/oct/18/breaking-uk-techs-gender-divide","2017-10-18T13:42:39Z","thumbImg","mainImg");

  describe('#headline', function() {
    it('has text', function(){
      expect(article.headline()).toEqual("Breaking UK tech's gender divide");
    });
  });

  describe('#body', function() {
    it('has body', function() {
      expect(article.content()).toEqual("Women now outnumber men at undergraduate level in medicine and the biological sciences. But in the physical sciences, the pattern is different: according to Ucas");
    });
  });

  describe('#date', function() {
    it('has date', function() {
      expect(article.date()).toEqual("2017-10-18T13:42:39Z");
    });
  });

  describe('#url', function() {
    it('has url', function() {
      expect(article.addr()).toEqual("https://www.theguardian.com/break-into-tech/2017/oct/18/breaking-uk-techs-gender-divide");
    });
  });

  describe('#thumbImage', function() {
    it('thumbImage', function() {
      expect(article.thumbImage()).toEqual("thumbImg");
    });
  });

  describe('#url', function() {
    it('mainImage', function() {
      expect(article.mainImage()).toEqual("mainImg");
    });
  });
});

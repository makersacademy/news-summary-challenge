describe('Story', function() {
  var example;
  var proto;

  beforeEach(function(){
    example = new Story({
      "id": "careers\/2018\/mar\/06\/top-employers-uk-2018",
      "type": "article",
      "sectionId": "careers",
      "sectionName": "Guardian Careers",
      "webPublicationDate": "2018-03-06T11:04:34Z",
      "webTitle": "Top Employers UK 2018",
      "webUrl": "https:\/\/www.theguardian.com\/careers\/2018\/mar\/06\/top-employers-uk-2018",
      "apiUrl": "https:\/\/content.guardianapis.com\/careers\/2018\/mar\/06\/top-employers-uk-2018",
      "isHosted": false
    });
    proto = Object.getPrototypeOf(example);
  });

  describe('getTitle', function() {
    it('should return a title taken from the inputs id field', function() {
      expect(example.getTitle()).toEqual('top-employers-uk-2018');
      console.log(example.title)
    });
  });

  describe('removeHyphens', function() {
    it('should replace hypens with spaces', function() {
      var example = { title: 'accountability-and-uk-university-governance' };
      Object.setPrototypeOf(example, proto);
      expect(example.removeHyphens(example.title)).toEqual('accountability and uk university governance');
    });
  });
});
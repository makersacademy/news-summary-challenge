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
    });
  });

  describe('removeHyphens', function() {
    it('should replace hypens with spaces', function() {
      var example = { title: 'accountability-and-uk-university-governance' };
      Object.setPrototypeOf(example, proto);
      expect(example.removeHyphens(example.title)).toEqual('accountability and uk university governance');
    });
  });

  describe('getSummary', function() {
    it('should return the first 200 characters of a summary', function() {
      var example = { summary: 'The Top Employers Institute selects its top employers through a six-step certification process. This involves in-depth research into the company\u2019s HR process and an external audit of the research findings before awarding the companies final certification. Here are the employers that made its final cut:\n\nAbbott\n\nHealth technology company employing 94,000 staff to help people live the best life possible, through the power of health.\n\nAkzoNobel\n\nA major producer of specialty chemicals. Creating everyday essentials to make people\u2019s lives more liveable and inspiring.\n\nAlphabet (GB) Limited\n\nEurope\u2019s leading provider of Business Mobility services and the third largest' };
      Object.setPrototypeOf(example, proto);
      expect(example.getSummary(example.summary)).toEqual('The Top Employers Institute selects its top employers through a six-step certification process. This')
    });
  });
});
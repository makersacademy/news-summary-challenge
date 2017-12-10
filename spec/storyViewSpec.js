
var data = {
  'img': 'image',
  'desc': 'desc',
  'title': 'title',
  'preview': 'desc',
  'link': 'link',
  'date': 'date',
};

describe('storyView', function() {
  var storyModule = require('../views/storyView');
  var view;
  var story;

  beforeEach(function() {
    story = createSpyObj('story', data);
    view = storyModule.getStoryView(story);
  });

  describe('#title', function() {
    it('generates title div', function() {
      expect(view.title()).toEqual('<h2 class="story-title">title</h2>');
    });
  });

  describe('#link', function() {
    it('generates link a-element', function() {
      expect(view.link()).toEqual(
        '<a class="story-link" href=link>Go to article</a>'
      );
    });
  });

  describe('#date', function() {
    it('generates date span', function() {
      expect(view.date()).toEqual('<span class="story-date">date</span>');
    });
  });

  describe('#desc', function() {
    it('generates description div', function() {
      expect(view.desc()).toEqual('<div class="story-desc">desc</div>');
    });
  });

  describe('#img', function() {
    describe('when image present', function() {
      it('generates image tag', function() {
        expect(view.img()).toEqual('<img class="story-img" src=image>');
      });
    });

    describe('when image present', function() {
      beforeEach(function() {
        spy = spyOn(story, 'img').and.returnValue(undefined);
      });
      
      it('generates image tag', function() {
        expect(view.img()).toEqual('');
      });
    });
  });

  describe('#toHTML', function() {
    var html;

    beforeEach(function() {
      spyOn(view, 'title').and.returnValue('title');
      spyOn(view, 'link').and.returnValue('link');
      spyOn(view, 'date').and.returnValue('date');
      spyOn(view, 'img').and.returnValue('img');
      spyOn(view, 'desc').and.returnValue('desc');
      html = ('<div class="story">title<div class="information">linkdate' +
        '</div><div class="content">imgdesc</div></div>').replace(/\s/g, '');
    });

    it('returns HTML representing story', function() {
      expect(view.toHTML().replace(/\s/g, '')).toEqual(html);
    });
  });
});

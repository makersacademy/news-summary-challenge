describe('Story', function(){
   var headline = "headline",
       summary = "summary",
       image = "image url",
       fullStory = "original story url";
   var story = new Story(headline, summary, image, fullStory);
   it('has a headline', function(){
      expect(story.headline).toBe(headline);
   });

   it('has a summary', function(){
      expect(story.summary).toBe(summary);
   });

   it('image url', function(){
      expect(story.image).toBe(image);
   });

   it('contains a url to the full story', function(){
      expect(story.fullStory).toBe(fullStory);
   });

});

describe('StoriesFactory', function(){
   var summaryText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed " +
                           "do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                           "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
                           " nisi ut aliquip ex ea commodo consequat.";
    var guardianService = {
          getStoriesData: function() {
              return guardianData.response.results;
          }
   };

   var summaryService = {
       addSummaryToStory: function(story){
           story.summary = summaryText;
           return story;
       }
   };


   it('it can return a list of stories', function(){
      var storiesFactory = new StoriesFactory(guardianService, summaryService);
      var stories = storiesFactory.getStories();
      expect(stories.length).toBe(9);
      expect(stories[0]).toBeInstanceOf(Story);
   });

   it('can use the summary service to get a text summary', function() {
      var storiesFactory = new StoriesFactory(guardianService, summaryService);
      var stories = storiesFactory.getStories();
      console.log(stories);
      console.log(stories[0].summary);
      expect(stories[0].summary).toBe(summaryText);
   });
});

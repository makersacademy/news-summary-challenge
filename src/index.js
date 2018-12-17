(function(){
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
   var storiesFactory = new StoriesFactory(guardianService, summaryService);
   var stories = storiesFactory.getStories();
   var main = document.getElementById('main');

   stories.forEach(function(story){
       var image = document.createElement('img');
   });

})();

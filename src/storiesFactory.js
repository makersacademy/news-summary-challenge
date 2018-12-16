(function(exports){
    function StoriesFactory(guardianService, summaryService) {
        this.guardianService = guardianService;
        this.summaryService = summaryService;
        console.log(this.summaryService);
    }

    StoriesFactory.prototype.getStories = function() {
         var guardianData = this.guardianService.getStoriesData();
         var stories = [];
         var that = this;
         guardianData.forEach(function(dataItem){
             if(dataItem.type === "article") {
                 var headline = dataItem.webTitle;
                 var text = dataItem.blocks.requestedBodyBlocks['body:latest'][0].bodyTextSummary || "not found";
                 var imageUrl = getImageUrl(dataItem);
                 console.log(imageUrl);
                 stories.push(new Story(headline, 'pending', imageUrl, text));
             }
         });
         stories.forEach(function(story){
           console.log(this.summaryService);
           that.summaryService.addSummaryToStory(story);
         });

         return stories;
    }

    function getImageUrl(guardianDataItem) {
         var imageUrl = "no image available";
         try {
             var elements = guardianDataItem.blocks.requestedBodyBlocks['body:latest'][0].elements;
             elements.forEach(function(elem){
                if((elem.type === "image")) {
                    elem.assets.forEach(function(asset){
                       if(asset.typeData.isMaster === true) {
                          imageUrl = asset.file;
                       }
                    });
                }
             });
         } catch(e) {
           return "error in getting image url";
         }
       return imageUrl;
    }


    exports.StoriesFactory = StoriesFactory;

})(this);

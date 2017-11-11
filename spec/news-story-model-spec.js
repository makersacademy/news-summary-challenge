describe('News Story Model',
  assert('getHeadline() returns news story headline', function() {
      var newsStory = new NewsStoryModel();
      return (newsStory.getHeadline() === "Headline 1");
    }()
  )
);

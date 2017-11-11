var newsStory = new NewsStoryModel();

describe('News Story Model',
  assert('getHeadline() returns news story headline', function() {
      return (newsStory.getHeadline() === "Headline 1");
    }()
  ),
  assert('getSummary() returns story summary', function() {
      return (newsStory.getSummary() === "Summary 1");
    }()
  )
);

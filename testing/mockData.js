const myMockData = {
  response: {
    status: "ok",
    userTier: "developer",
    total: 1,
    content: {
      id:
        "politics/2021/feb/21/matt-hancock-ex-neighbour-alex-bourne-under-investigation-uk-medical-regulator",
      type: "article",
      sectionId: "politics",
      sectionName: "Politics",
      webPublicationDate: "2021-02-21T13:29:27Z",
      webTitle:
        "Matt Hancock's ex-neighbour under investigation by UK's medicine agency",
      webUrl:
        "https://www.theguardian.com/politics/2021/feb/21/matt-hancock-ex-neighbour-alex-bourne-under-investigation-uk-medical-regulator",
      apiUrl:
        "https://content.guardianapis.com/politics/2021/feb/21/matt-hancock-ex-neighbour-alex-bourne-under-investigation-uk-medical-regulator",
      fields: {
        thumbnail:
          "https://media.guim.co.uk/e5517000b6c4c991eff6fff9e496b1af7e52595a/0_330_2448_1469/500.jpg",
      },
      isHosted: false,
      pillarId: "pillar/news",
      pillarName: "News",
    },
  },
};

const mockFetch = () => {
  return {
    then: () => {
      return {
        then: (callback) => {
          callback(myMockData);
        },
      };
    },
  };
};

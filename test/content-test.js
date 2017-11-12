(function(exports){
  function viewShowContents() {
    var newsContent = new NewsContent();
    console.log(newsContent.showContents());
    assert.isTrue(newsContent.showContents() === [
      {"id":"books/2017/oct/29/the-inner-life-of-animals-peter-wohlleben-book-review-katharine-norbury","type":"article","sectionId":"books","sectionName":"Books","webPublicationDate":"2017-10-29T10:00:24Z","webTitle":"The Inner Life of Animals by Peter Wohlleben â€“ review","webUrl":"https://www.theguardian.com/books/2017/oct/29/the-inner-life-of-animals-peter-wohlleben-book-review-katharine-norbury","apiUrl":"https://content.guardianapis.com/books/2017/oct/29/the-inner-life-of-animals-peter-wohlleben-book-review-katharine-norbury","isHosted":false,"pillarId":"pillar/arts","pillarName":"Arts"},
      {"id":"books/2017/oct/29/the-unexpected-truth-about-animals-by-lucy-cooke-digested-read","type":"article","sectionId":"books","sectionName":"Books","webPublicationDate":"2017-10-29T17:00:32Z","webTitle":"The Unexpected Truth About Animals by Lucy Cooke â€“ digested read","webUrl":"https://www.theguardian.com/books/2017/oct/29/the-unexpected-truth-about-animals-by-lucy-cooke-digested-read","apiUrl":"https://content.guardianapis.com/books/2017/oct/29/the-unexpected-truth-about-animals-by-lucy-cooke-digested-read","isHosted":false,"pillarId":"pillar/arts","pillarName":"Arts"},
      {"id":"uk-news/2017/oct/19/stonehenge-builders-feasted-animals-scotland-feast-exhibition","type":"article","sectionId":"uk-news","sectionName":"UK news","webPublicationDate":"2017-10-19T06:00:15Z","webTitle":"Stonehenge builders feasted on animals brought from Scotland, study shows","webUrl":"https://www.theguardian.com/uk-news/2017/oct/19/stonehenge-builders-feasted-animals-scotland-feast-exhibition","apiUrl":"https://content.guardianapis.com/uk-news/2017/oct/19/stonehenge-builders-feasted-animals-scotland-feast-exhibition","isHosted":false},
      {"id":"lifeandstyle/shortcuts/2017/oct/15/50th-birthday-parties-overtaken-21sts","type":"article","sectionId":"lifeandstyle","sectionName":"Life and style","webPublicationDate":"2017-10-15T16:00:34Z","webTitle":"Party animals: why 50 is the new 21","webUrl":"https://www.theguardian.com/lifeandstyle/shortcuts/2017/oct/15/50th-birthday-parties-overtaken-21sts","apiUrl":"https://content.guardianapis.com/lifeandstyle/shortcuts/2017/oct/15/50th-birthday-parties-overtaken-21sts","isHosted":false,"pillarId":"pillar/lifestyle","pillarName":"Lifestyle"},
      {"id":"environment/2017/oct/05/farm-animals-can-eat-insects-algae-save-forests-water-energy","type":"article","sectionId":"environment","sectionName":"Environment","webPublicationDate":"2017-10-05T17:09:19Z","webTitle":"Farm animals can eat insects and algae to prevent deforestation","webUrl":"https://www.theguardian.com/environment/2017/oct/05/farm-animals-can-eat-insects-algae-save-forests-water-energy","apiUrl":"https://content.guardianapis.com/environment/2017/oct/05/farm-animals-can-eat-insects-algae-save-forests-water-energy","isHosted":false},
      {"id":"world/2017/sep/28/fresh-concerns-over-cumbrian-south-lakes-safari-zoo-where-500-animals-died","type":"article","sectionId":"world","sectionName":"World news","webPublicationDate":"2017-09-28T14:42:23Z","webTitle":"Fresh concerns over Cumbrian zoo where 500 animals died","webUrl":"https://www.theguardian.com/world/2017/sep/28/fresh-concerns-over-cumbrian-south-lakes-safari-zoo-where-500-animals-died","apiUrl":"https://content.guardianapis.com/world/2017/sep/28/fresh-concerns-over-cumbrian-south-lakes-safari-zoo-where-500-animals-died","isHosted":false},
      {"id":"lifeandstyle/2017/sep/20/hurricane-maria-irma-how-animals-birds-manage","type":"article","sectionId":"world","sectionName":"World news","webPublicationDate":"2017-09-20T11:48:26Z","webTitle":"How animals birds manage in hurricanes? | Notes and queries","webUrl":"https://www.theguardian.com/lifeandstyle/2017/sep/20/hurricane-maria-irma-how-animals-birds-manage","apiUrl":"https://content.guardianapis.com/lifeandstyle/2017/sep/20/hurricane-maria-irma-how-animals-birds-manage","isHosted":false},
      {"id":"travel/2017/sep/20/botanical-gardens-medellin-city-colombia-orchids","type":"article","sectionId":"travel","sectionName":"Travel","webPublicationDate":"2017-09-20T10:07:46Z","webTitle":"An oasis of orchids, animals and architecture in Medellan, Colombia","webUrl":"https://www.theguardian.com/travel/2017/sep/20/botanical-gardens-medellin-city-colombia-orchids","apiUrl":"https://content.guardianapis.com/travel/2017/sep/20/botanical-gardens-medellin-city-colombia-orchids","isHosted":false,"pillarId":"pillar/lifestyle","pillarName":"Lifestyle"},
      {"id":"lifeandstyle/shortcuts/2017/sep/13/are-peticures-fake-nails-for-animals-ever-a-good-idea","type":"article","sectionId":"lifeandstyle","sectionName":"Life and style","webPublicationDate":"2017-09-13T16:34:00Z","webTitle":"Are 'peticures' â€“ fake nails for animals â€“ ever a good idea?","webUrl":"https://www.theguardian.com/lifeandstyle/shortcuts/2017/sep/13/are-peticures-fake-nails-for-animals-ever-a-good-idea","apiUrl":"https://content.guardianapis.com/lifeandstyle/shortcuts/2017/sep/13/are-peticures-fake-nails-for-animals-ever-a-good-idea","isHosted":false,"pillarId":"pillar/lifestyle","pillarName":"Lifestyle"},
      {"id":"world/datablog/2017/jun/21/bestiality-animal-sex-laws-zoosexual-community","type":"article","sectionId":"world","sectionName":"World news","webPublicationDate":"2017-06-21T19:57:09Z","webTitle":"Bestiality: which animals are most at risk","webUrl":"https://www.theguardian.com/world/datablog/2017/jun/21/bestiality-animal-sex-laws-zoosexual-community","apiUrl":"https://content.guardianapis.com/world/datablog/2017/jun/21/bestiality-animal-sex-laws-zoosexual-community","isHosted":false}
    ]);
  }
  viewShowContents();

})(this);

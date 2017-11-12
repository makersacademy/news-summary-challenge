(function(exports){
  function viewGetWebTitles() {
    var storyData = new StoryData();
    assert.isTrue(storyData.getWebTitles().join(',') === "The Inner Life of Animals by Peter Wohlleben,The Unexpected Truth About Animals by Lucy Cooke,Stonehenge builders feasted on animals brought from Scotland,Party animals: why 50 is the new 21,Farm animals can eat insects and algae to prevent deforestation,Fresh concerns over Cumbrian zoo where 500 animals died,How animals birds manage in hurricanes? | Notes and queries,An oasis of orchids, animals and architecture in Medellan, Colombia,Are 'peticures' fake nails for animals ever a good idea?,Bestiality: which animals are most at risk");
  }

  viewGetWebTitles();

  function viewWebTitlesUlArray() {
    var storyData = new StoryData();
    assert.isTrue(storyData.webTitlesUlArray() === "<ul><li id=0><div>The Inner Life of Animals by Peter Wohlleben</div></li><li id=1><div>The Unexpected Truth About Animals by Lucy Cooke</div></li><li id=2><div>Stonehenge builders feasted on animals brought from Scotland</div></li><li id=3><div>Party animals: why 50 is the new 21</div></li><li id=4><div>Farm animals can eat insects and algae to prevent deforestation</div></li><li id=5><div>Fresh concerns over Cumbrian zoo where 500 animals died</div></li><li id=6><div>How animals birds manage in hurricanes? | Notes and queries</div></li><li id=7><div>An oasis of orchids, animals and architecture in Medellan, Colombia</div></li><li id=8><div>Are 'peticures' fake nails for animals ever a good idea?</div></li><li id=9><div>Bestiality: which animals are most at risk</div></li></ul>");
  }

  viewWebTitlesUlArray();


  function viewGetWebUrls() {
    var storyData = new StoryData();
    assert.isTrue(storyData.getWebUrls().join(',') === "https://www.theguardian.com/books/2017/oct/29/the-inner-life-of-animals-peter-wohlleben-book-review-katharine-norbury,https://www.theguardian.com/books/2017/oct/29/the-unexpected-truth-about-animals-by-lucy-cooke-digested-read,https://www.theguardian.com/uk-news/2017/oct/19/stonehenge-builders-feasted-animals-scotland-feast-exhibition,https://www.theguardian.com/lifeandstyle/shortcuts/2017/oct/15/50th-birthday-parties-overtaken-21sts,https://www.theguardian.com/environment/2017/oct/05/farm-animals-can-eat-insects-algae-save-forests-water-energy,https://www.theguardian.com/world/2017/sep/28/fresh-concerns-over-cumbrian-south-lakes-safari-zoo-where-500-animals-died,https://www.theguardian.com/lifeandstyle/2017/sep/20/hurricane-maria-irma-how-animals-birds-manage,https://www.theguardian.com/travel/2017/sep/20/botanical-gardens-medellin-city-colombia-orchids,https://www.theguardian.com/lifeandstyle/shortcuts/2017/sep/13/are-peticures-fake-nails-for-animals-ever-a-good-idea,https://www.theguardian.com/world/datablog/2017/jun/21/bestiality-animal-sex-laws-zoosexual-community");
  }

  viewGetWebUrls();
})(this);

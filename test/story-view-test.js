(function(exports){
  function viewGetWebTitles() {
    var storyData = new StoryData();
    assert.isTrue(storyData._getWebTitles().join(',') === "The Inner Life of Animals by Peter Wohlleben,The Unexpected Truth About Animals by Lucy Cooke,Stonehenge builders feasted on animals brought from Scotland,Party animals: why 50 is the new 21,Farm animals can eat insects and algae to prevent deforestation,Fresh concerns over Cumbrian zoo where 500 animals died,How animals birds manage in hurricanes? | Notes and queries,An oasis of orchids, animals and architecture in Medellan, Colombia,Are 'peticures' fake nails for animals ever a good idea?,Bestiality: which animals are most at risk");
  }

  viewGetWebTitles();

  function viewWebTitlesUlArray() {
    var storyData = new StoryData();
    assert.isTrue(storyData.webTitlesUlArray() === "<ul><li id=0><div>The Inner Life of Animals by Peter Wohlleben</div></li><li id=1><div>The Unexpected Truth About Animals by Lucy Cooke</div></li><li id=2><div>Stonehenge builders feasted on animals brought from Scotland</div></li><li id=3><div>Party animals: why 50 is the new 21</div></li><li id=4><div>Farm animals can eat insects and algae to prevent deforestation</div></li><li id=5><div>Fresh concerns over Cumbrian zoo where 500 animals died</div></li><li id=6><div>How animals birds manage in hurricanes? | Notes and queries</div></li><li id=7><div>An oasis of orchids, animals and architecture in Medellan, Colombia</div></li><li id=8><div>Are 'peticures' fake nails for animals ever a good idea?</div></li><li id=9><div>Bestiality: which animals are most at risk</div></li></ul>");
  }

  viewWebTitlesUlArray();


  function viewGetWebUrls() {
    var storyData = new StoryData();
    assert.isTrue(storyData.getWebUrlAtIndex(0) === "https://www.theguardian.com/books/2017/oct/29/the-inner-life-of-animals-peter-wohlleben-book-review-katharine-norbury");
  }

  viewGetWebUrls();
})(this);

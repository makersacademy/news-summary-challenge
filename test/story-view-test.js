(function(exports){
  function viewGetWebTitles() {
    var storyData = new StoryData();
    assert.isTrue(storyData._getWebTitles().join(',') === "The Inner Life of Animals by Peter Wohlleben,The Unexpected Truth About Animals by Lucy Cooke,Stonehenge builders feasted on animals brought from Scotland,Party animals: why 50 is the new 21,Farm animals can eat insects and algae to prevent deforestation,Fresh concerns over Cumbrian zoo where 500 animals died,How animals birds manage in hurricanes? | Notes and queries,An oasis of orchids, animals and architecture in Medellan, Colombia,Are 'peticures' fake nails for animals ever a good idea?,Bestiality: which animals are most at risk");
  }

  viewGetWebTitles();

  function viewWebTitlesUlArray() {
    var storyData = new StoryData();
    assert.isTrue(storyData.webTitlesUlArray() === "<a href=#0>The Inner Life of Animals by Peter Wohlleben</a><br><a href=#1>The Unexpected Truth About Animals by Lucy Cooke</a><br><a href=#2>Stonehenge builders feasted on animals brought from Scotland</a><br><a href=#3>Party animals: why 50 is the new 21</a><br><a href=#4>Farm animals can eat insects and algae to prevent deforestation</a><br><a href=#5>Fresh concerns over Cumbrian zoo where 500 animals died</a><br><a href=#6>How animals birds manage in hurricanes? | Notes and queries</a><br><a href=#7>An oasis of orchids, animals and architecture in Medellan, Colombia</a><br><a href=#8>Are 'peticures' fake nails for animals ever a good idea?</a><br><a href=#9>Bestiality: which animals are most at risk</a><br>");
  }

  viewWebTitlesUlArray();


  function viewGetWebUrls() {
    var storyData = new StoryData();
    assert.isTrue(storyData.getWebUrlAtIndex(0) === "https://www.theguardian.com/books/2017/oct/29/the-inner-life-of-animals-peter-wohlleben-book-review-katharine-norbury");
  }

  viewGetWebUrls();
})(this);

(function(exports){

  function viewHtmlInserter() {
    var storyController = new StoryController();
    storyController.htmlInserter();
    var element = document.getElementById('link').textContent;
    assert.isTrue(element === "The Inner Life of Animals by Peter WohllebenThe Unexpected Truth About Animals by Lucy CookeStonehenge builders feasted on animals brought from ScotlandParty animals: why 50 is the new 21Farm animals can eat insects and algae to prevent deforestationFresh concerns over Cumbrian zoo where 500 animals diedHow animals birds manage in hurricanes? | Notes and queriesAn oasis of orchids, animals and architecture in Medellan, ColombiaAre 'peticures' fake nails for animals ever a good idea?Bestiality: which animals are most at risk");
  }

  viewHtmlInserter();
})(this);

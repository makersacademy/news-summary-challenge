(function(exports) {

function displayStories() {
    document.getElementById('grid-container').innerHTML = ''
    var i;
    for (i=(storyList.stories.length-1); i>=0; i--) {
        var story = storyList.stories[i]

        var newdiv = document.createElement('DIV')
        document.getElementById('grid-container').appendChild(newdiv)
        newdiv.className = 'storyDiv'

        var link = document.createElement('A')
        newdiv.appendChild(link)
        link.setAttribute('href', '#stories/' + story.id)
        link.className = 'storyLink'

        var headlinep = document.createElement('P')
        link.appendChild(headlinep)
        headlinep.className = 'headline'
        headlinep.innerHTML = story.headline;

        var summaryp = document.createElement('P')
        link.appendChild(summaryp)
        summaryp.className = 'summary'
        summaryp.innerHTML = story.summary

        var img = document.createElement('IMG')
        link.insertBefore(img, headlinep)
        img.setAttribute('src', story.imgLoc)
        img.setAttribute('alt', 'Image for ' + story.headline)
    };
  };

  exports.displayStories = displayStories

})(this)

displayStories();

window.addEventListener('hashchange', function() {
    if (window.location.hash == '') {
        displayStories();
    } else {
        storyId = window.location.hash.slice(9)
        var focusStory = storyList.getStoryById(storyId);
        document.getElementById('centering-div').innerHTML = SingleStoryView.prototype.makeView(focusStory);
    }
});

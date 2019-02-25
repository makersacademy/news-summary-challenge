(function(exports) {

function displayStories(storylist) {
    document.getElementById('grid-container').innerHTML = ''
    var i;
    for (i=0; i<storylist.stories.length; i++) {
        var story = storylist.stories[i]
        console.log('i', i)
        console.log('i>=0', i>=0)
        console.log('length', storylist.stories.length)
        console.log('storylist in displayStories', storylist)

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

var real = true;

function getCorrectStoryList() {
    if (!real) {
        return storyList
    } else {
        return realStoryList
    }
}

displayStories(getCorrectStoryList());

window.addEventListener('hashchange', function() {
    if (window.location.hash == '') {
        displayStories(getCorrectStoryList());
    } else {
        storyId = window.location.hash.slice(9)
        var focusStory = getCorrectStoryList().getStoryById(storyId);
        document.getElementById('centering-div').innerHTML = SingleStoryView.prototype.makeView(focusStory);
    }
});

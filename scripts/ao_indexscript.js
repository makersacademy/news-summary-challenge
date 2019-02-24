function displayStories() {
    var i;
    for (i=0; i<storyList.stories.length; i++) {
        var story = storyList.stories[i]

        var link = document.createElement('A')
        document.getElementById('grid-container').appendChild(link)
        link.setAttribute('href', '#stories/' + story.id)

        var newdiv = document.createElement('DIV')
        link.appendChild(newdiv)
        newdiv.className = 'storyDiv'

        var headlinep = document.createElement('P')
        newdiv.appendChild(headlinep)
        headlinep.className = 'headline'
        headlinep.innerHTML = story.headline;

        var summaryp = document.createElement('P')
        newdiv.appendChild(summaryp)
        summaryp.className = 'summary'
        summaryp.innerHTML = story.summary

        var img = document.createElement('IMG')
        newdiv.insertBefore(img, headlinep)
        img.setAttribute('src', story.imgLoc)
        img.setAttribute('alt', 'Image for ' + story.headline)
    };
  };

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

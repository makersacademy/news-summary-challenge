var storyList = new StoryList;

function addExamples() {
    var story1 = new Story('Example Headline', 'Today Trump announced that he was stupid.', 'images/trump.jpg')
    var story2 = new Story('A Nother Headline', 'Today Sanders announced that he was stupid.', 'images/sanders.jpg')
    var story3 = new Story('One More Headline', 'Today John Mears announced that he was having lunch.', 'images/jmears.jpg')
    var story4 = new Story('This Old Headline', 'Putin agrees to have democracy', 'images/putin.jpg')
    var story5 = new Story('Compelling Headline', 'Obama today announced that he was running for President of the USA', 'images/obama.jpg')
    var story6 = new Story('Clickbait Headline', 'Brexit cancelled!', 'images/british.jpg')
    storyList.addStory(story1);
    storyList.addStory(story2);
    storyList.addStory(story3);
    storyList.addStory(story4);
    storyList.addStory(story5);
    storyList.addStory(story6);
}

addExamples();

var i;
for (i=0; i<storyList.stories.length; i++) {
    var link = document.createElement('A')
    document.getElementById('grid-container').appendChild(link)
    link.setAttribute('href', '#' + storyList.stories[i].id)

    var newdiv = document.createElement('DIV')
    link.appendChild(newdiv)
    newdiv.className = 'storyDiv'

    var headlinep = document.createElement('P')
    newdiv.appendChild(headlinep)
    headlinep.className = 'headline'
    headlinep.innerHTML = storyList.stories[i].headline;

    var img = document.createElement('IMG')
    newdiv.insertBefore(img, headlinep)
    img.setAttribute('src', storyList.stories[i].imgLoc)
    img.setAttribute('alt', 'Image for ' + storyList.stories[i].headline)
}

window.addEventListener('hashchange', function() {
    storyId = window.location.hash.slice(1)
    var focusStory = storyList.getStoryById(storyId);
    document.getElementById('centering-div').innerHTML = SingleStoryView.prototype.makeView(focusStory);
});

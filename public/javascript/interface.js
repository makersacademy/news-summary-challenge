function render(story) {
  var renderTarget = document.getElementById('story-list');
  var storyItem;
  var title;
  var body;

  (function setTitle() {
     title = document.createElement('a');
     title.classList.add('story-title');
     title.setAttribute('href', story.hotLink);
     title.innerHTML = story.title;
  })();

  (function setBody(){
    body = document.createElement('p');
    body.classList.add('story-body');
    body.innerHTML = story.getSummary(story.summary);
  })();

  (function buildStructure(){
    storyItem = document.createElement('article');
    storyItem.classList.add('story-item');
    storyItem.appendChild(title);
    storyItem.appendChild(body);
  })();

  renderTarget.appendChild(storyItem);
}

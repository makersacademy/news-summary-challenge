class NewsView {

  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector('#main-container');
 }

 displayNews() {
  const stories = this.model.getStoryData();
  
  stories.forEach(story => {
  const newHeadLine = document.createElement('h1');
  newHeadLine.textContent = story.fields.headline
  newHeadLine.id = 'story';
  this.mainContainerEl.append(newHeadLine);
  
  const imageElement = document.createElement('img');
  const imageUrl = story.fields.headline;   
  imageElement.src = imageUrl;
  this.mainContainerEl.append(imageElement);
  });

}


 displayStoriesFromApi() { 
  this.client.loadStoryData((storiesx) => {                                          
    this.model.setStoryData(storiesx); 
    this.displayNews(); 
  })
}



}

module.exports = NewsView;
## Important: 

This design document is not designing the app from scratch, but identifying what extentions to the existing app need to be made to accomodate the new feature 

## 1. User Story

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```
## 2. What needs to change to the client

> 1. The API request must now return an image URL 


## 3. What needs to change to the model

> 1. The model should expect to have objects added - ensure erorr if string is added 

## 4. What needs to change to the view 

> 1. displayStories:
>   1. Currently creates a headline element for each entry in model array, needs to be seperated out for story and image
> 2. DisplayStoriesFromApi:
>   1. Accomodate images
> 3. New method to build story objects so they each story can be added completely to model with our info 

## 5. New View Outline

```Javascript

class NewsView {

  constructor(client, model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container')
    this.client = client
  }

  displayStories() {

    // Get stories from model
    
    // For each story:

      // Create a story element by:
    
        // building the headline element with the new method 

        // Building  the image element with the new method 

    // append the new story element on the main container
    
  }
  buildHeadlineElement(story) {
    // Create a H2 element, not a div
    // Set the class to Headline
    // Set the innertext to the arg
    // Return the H2 Element
    }

  }
  buildImageElement() {
    // Create an image element
    // Set the class to thumbmnail
    // Set the src to the image URL

  }
  
  displayStoriesFromApi() {

    // Create an array for all the new stories
    const todaysStories = []

    //Call the fetchStories method on the client
    this.client.fetchStories((data) => {

    // Create an object containing headline and image and add to each story to the model
    data.response.results.forEach((story) => {
      const storyObject = {}
      storyObject.headline = (story.fields.headline)
      storyObject.thumnail = (story.fields.thumnail)
      todaysStories.push(storyObject)
    });

    this.model.setStories(todaysStories);
    
    this.displayStories();
    } );

  }
  
```


```
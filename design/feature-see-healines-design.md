## 1. User Story

```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

## 2. Model Class Methods 

```Javascript

class NewsModel{
  constructor() {
    // Initialize the stories array
  }

  allStories() {
    // Return list of all storries
  }

  add(story) {
    // Adds a story to the story array
  }
}

```

## 3. Tests for the Model Class methods 

```Javascript

// 1 - it displays the empty stories array 

// 2 - it adds a story and displays it 

// 3 - returns error if story is not a string or JS object 

```

## 4. View Class Methods 

```Javascript

class NewsView {
  constructor() {
    // Initialize view
  }

  displayStoriesFromApi() {

    // calls a client class method to make a GET request, then calls displayStories 
  }

  displayStories(model) {
    // Renders stories stored in model class to the DOM
    // Will likely need to be split into seperate models
    // Clears page before displaying
  }
}

```
## 3. Tests for the View Class methods 

```Javascript

// Using only Model class

  // 1 - it displays a single story on page 

  // 2 - it displays multiple stories on page 

// Using Client Class

  // 1 - Calls the client class method + dispplay stories method  

```

## 4. Client Class Methods 

```Javascript

class TaskClient {
  constructor() {
    // Initialize client
  }

fetchStories() {
    // Fetch the days stories from Guardian API
    // Headline + image + story URL
    // Has callback for us to interact
  }

}
```

## 4. Test for Client Class Method

```Javascript

// Fetches all Headlines for the current date

```
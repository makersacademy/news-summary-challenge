## 1. Describe the Problem

```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

```
As a busy politician
So I can get a few more details about an important story
I can click a news article title which links to the original article
```

```
As a busy politician
So I can search what I want to read about
I can specify a search query on the page and get articles matching this search
```

### Stretch user stories

```
As a busy politician
So I can quickly read through the essential of today's stories
I can see a summarised version of of the article 
```

To get a summary of an article's content, you'll need to use the [Aylien API
endpoint](https://docs.aylien.com/textapi/endpoints/#summarization), which means
integrating and calling another HTTP endpoint from a different API. This mean you'll need
to first fetch articles from the Guardian API, **then** use the Aylien API to summarise
the content — you'll need to use promises or callbacks to call both APIs and to handle the flow of
control.


```
As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone
```

```
As a busy politician
So I make my news reading more fun
I can see whizzy animations in the app
```

### Required MVP features:

* A page that makes GET requests to the guardian API for the Images and Headlines and article URL for each of the days article

* Each article headline must be clickable to view the original article 

* A search function that gets articles matching it 



## 2. Design the Data Model Class
This class should store and manage the data the server will hold.
Include the initializer and public methods with all parameters and return values.

```Javascript

class NewsModel{
  constructor() {
    // Initialize the stories array
  }

  all() {
    // Return list of all storries
  }

  add(task) {
    // Adds a story to the story array
  }

  get(searchTerm) {
    // Return storys that match the search term
  }
}


```

Check it against these rules:

* Does it manage the presentation of data to the user through the DOM?
* Does it have methods to:
* List out all items in the resource
* Does each method take only simple data types as arguments?
* Simple data types are: string, number, boolean.
* Methods can return lists, objects, and other data structures, but not take them as parameters.


## 3. Design the View Class

This class should manage the presentation of data to the user.
Include the initializer and public methods with all parameters and return values.

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

  findStories(searchTerm) {
    // calls a client class method to make the GET request for search term, then calls displayStories
    
  }
}


```

_Check it against these rules:_

> 1. Does it manage the presentation of data to the user through the DOM?
> 2. Does it have methods to:
>    1. List out all items in the resource
> 3. Does each method take only simple data types as arguments?  
>    Simple data types are: string, number, boolean.  
>    Methods can return lists, objects, and other data structures, but not take them as parameters.

## 4. Design the Client Class
This class should manage the communication between the server and the client.
Include the initializer and public methods with all parameters and return values.

```Javascript

class TaskClient {
  constructor() {
    // Initialize client
  }

  static async fetchTasks() {
    // Fetch tasks from server
  }

  static async createTask(task) {
    // Send request to create task on server
  }

  static async updateTask(task) {
    // Send request to update task on server
  }

  static async deleteTask(taskId) {
    // Send request to delete task on server
  }
}



```

Check it against these rules:

> 1. Does it manage the communication between the server and the client through HTTP requests?
> 2. Does it have methods to:
>    1. Get a list of all items in the resource (R)
>    2. Create a new item (C)
>    3. Update an existing item (U)
>    4. Delete an existing item (D)
> 3. Does each method take only simple data types as arguments?
> 4. Simple data types are: string, number, boolean.
> 5. Methods can return lists, objects, and other data structures, but not take them as parameters.

## 5. Design the Main Program (index.js)

This is the entry point to your application.
It should use the classes you've designed to fetch and display the data to the user.

```Javascript

document.addEventListener('DOMContentLoaded', () => {
  // Initialize data model and view classes
  // Add event listeners for user actions
  // Use data model and view classes to manipulate and display data
});

```
Check it against these rules:

> 1. Does it use the classes you've designed to fetch and display the data to the user?
> 2. Does it use event listeners to trigger actions in the app?
> 3. Does it use the data model and view classes to manipulate and display the data?
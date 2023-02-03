# News Summary Multi-Class Planned Design Recipe

## 1. Describe the Problem

As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place

As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines

As a busy politician
So I can get a few more details about an important story
I can click a news article title which links to the original article

As a busy politician
So I can search what I want to read about
I can specify a search query on the page and get articles matching this search

As a busy politician
So I can quickly read through the essential of today's stories
I can see a summarised version of of the article 

As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone

As a busy politician
So I make my news reading more fun
I can see whizzy animations in the app

## 2. Design the Class System

```
     │     ┌─────────────────┐ CLICK    ┌────────────────┐          ┌─────────────────┐
     │     │      VIEW       ├─────────►│    CLIENT      │ FETCH    │      API        │
     │     │                 │          │ Fetch all      ├─────────►│  The Guardian   │
     │     │ Display news    │          │                │          │                 │
     │     │                 │◄─────────┤ Fetch by topic │◄─────────┤                 │
TIME │     │ Search button   │  DATA    │                │  JSON    │                 │
     │     │                 │          └────────────────┘          │                 │
     │     │ Summaries       │                                      │                 │
     │     │  button         │  DATA    ┌────────────────┐          │                 │
     │     │                 ├─────────►│     MODEL      │          │                 │
     │     │                 │          │ Set articles   │          └─────────────────┘
     │     │                 │◄─────────┤                │
     │     │                 │  DATA    │ Summaries?     │
     ▼     └─────────────────┘          │                │
                                        └────────────────┘
```

```JavaScript
class View
  constructor(model, client) {

  }

  displayAllArticles() {
    //Which displays all artcles from the API on the page when loaded
  }

  displayTopicArticles(topic) {
    //Which displays all articles from the API on a specific topic
  }
  
end

class Client
  constructor() P{

  }

  fetch()
    //Return all articles from API

  fetch(topic)
    //Return all articles on a specific topic

end

class Model 
  constructor() {
    this.articles = []
  }

  setArticles(content) 
    //Set articles in the model 
  
  setArticlesWithSummaries(content)
    //This will add in the summaries? 

end
```

## 3. Create Examples as Integration Tests

```ruby
# EXAMPLE

# Gets all tracks
library = MusicLibrary.new
track_1 = Track.new("Carte Blanche", "Veracocha")
track_2 = Track.new("Synaesthesia", "The Thrillseekers")
library.add(track_1)
library.add(track_2)
library.all # => [track_1, track_2]
```

## 4. Create Examples as Unit Tests

_Create examples, where appropriate, of the behaviour of each relevant class at
a more granular level of detail._

```ruby
# EXAMPLE

# Constructs a track
track = Track.new("Carte Blanche", "Veracocha")
track.title # => "Carte Blanche"
```

_Encode each example as a test. You can add to the above list as you go._

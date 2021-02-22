Desired User Flow
-------

* User visits home page
  * has list of headlines with pictures
  * headlines are clickable links
* User clicks a headline
  * expands article to give summary of it
  * clickable link to original article
  * still has photo on it
  * minimises article again when finished
  * clicking a different article minimises the current one
* potentially have next page button


User Stories
------
>As a busy politician  
So I know what the big stories of the day are  
I can see all of today's headlines in one place
>


>As a busy politician  
So I know what the big stories of the day are  
I can see all of today's headlines in one place
>

### Implementation

##### HTML
* Each article in own div
  * div has class of "article"
  * each article has numeric id (simple numbers)
    * same id as from results set
  * each article div has a headline
  * each article div has an image

##### JS
* `callAPI(url, fetchFunc = fetch, options {})`
  * Calls `fetch()` to the url given, and with options converted into a query string `?option1=val1&option2=val2...`
  * returns a promise object
  * pass in fetch method to allow stubbing of the API
* `getLatestArticles(fetchMethod = fetch)` brings back all articles for day
  * pass in fetchMethod to allow for stubbing of testing
  * called on going to home page, _or hash changing with different page number_
  * hits guardian API via `http://news-summary-api.herokuapp.com/guardian`
  * uses `fetch()` via `callAPI()`
  * pass `show-fields=thumbnail` to the API request to get link to the pictures
  <!-- * _potentially could use page number from hash of URL_ -->
  * iterate through results set using `.then()`
    * add results to `articles` array

* `displayResults()`
  * iterate through `articles` array
  * create new div with id dependent on index in `articles` array

#### Testing
* Use Pedigree (from group challenge)
* Added `Dup` class which can create doubles _- may not be needed_
* To test `getLatestArticles()`, stub the behaviour of the API by passing in a different fetchMethod
* To test `callAPI()` pass in a different fetchMethod

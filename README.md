News Reader App
===============================

A single page application that displays images and headlines for three news stories from the Guardian published on the day of visiting. Clicking on the headline shows a summary of the story.

## Technologies Used

* JavaScript - business logic, testing
* HTML, CSS - interface

* APIs: [Guardian newspaper API](http://open-platform.theguardian.com/documentation/), [Aylien text summary API](http://docs.aylien.com/docs/summarize)

## Directory Structure

|-- news-summary-challenge
    |-- README.md
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- images
    |   |-- news-summary-project-article-page-mockup.png
    |   |-- news-summary-project-headlines-page-mockup.png
    |-- script
    |   |-- index.js
    |   |-- news-controller-model.js
    |   |-- news-list-model.js
    |   |-- news-list-view.js
    |   |-- news-story-model.js
    |-- spec
    |   |-- news-controller-spec.js
    |   |-- news-list-model-spec.js
    |   |-- news-list-view-spec.js
    |   |-- news-story-model-spec.js
    |   |-- test-framework-spec.js
    |   |-- test-framework.js
    |   |-- test-runner.html
    |-- styles
    |   |-- index.css
    |-- unfinished
        |-- api-request.js

## Instructions

```
$ git clone git@github.com:jonsanders101/news-summary-challenge.git
$ cd news-summary-challenge
$ open index.html
```

### Running the Test Suite

As above, then:

```
$ open spec/test-runner.html
```

Inspect the console in your browser.

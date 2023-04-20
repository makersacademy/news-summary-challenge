## Project overview

Guardian Digest is a single-page application built with JavaScript that provides users with a digest of the latest news articles from the Guardian newspaper. This application uses the Guardian API to fetch the latest news articles and displays them in an easy-to-read format.

## Installation

To install and run Guardian Digest on your local machine, follow these steps:

Clone this repository by running the following command in your terminal:

```
git clone https://github.com/Perspicacity11/Guardian-Digest.git
```

Navigate to the project directory:

```
cd Guardian-Digest
```

Install the dependencies:

```
npm install
```

Start the application:

```
npm start
```

Open your web browser and go to http://localhost:3000 to view the application.

### Technologies

This is a single page web app written in frontend JavaScript, CSS and HTML, as well as:

 * Jest for testing
 * The [`jest-fetch-mock`](https://www.npmjs.com/package/jest-fetch-mock) module (or
   similar) to mock `fetch` requests
 * ESBuild to bundle files

## User Stories

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

### Future user stories to build into features:

```
As a busy politician
So I can search what I want to read about
I can specify a search query on the page and get articles matching this search
```

```
As a busy politician
So I can quickly read through the essential of today's stories
I can see a summarised version of of the article 
```

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

## Contribution

If you would like to contribute to Guardian Digest, please follow these steps:

Fork this repository.

Clone the forked repository to your local machine.

Install the dependencies:

```
npm install
```

Create a new branch for your changes:

```
git checkout -b my-new-feature
```

Make your changes and test them.

Commit your changes:

```
git commit -am 'Added new feature'
```


Push the changes to your forked repository:

```
git push origin my-new-feature
```
Create a pull request from your forked repository to the original repository.

Wait for feedback and address any comments or feedback received.

Once your changes are accepted, your code will be merged into the main branch.

## Resources

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* cURL [man page](https://curl.haxx.se/docs/manpage.html)
* [Postman](https://www.postman.com/downloads/?utm_source=postman-home), a program to send and test HTTP requests

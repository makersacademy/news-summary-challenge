# News Summary challenge

An app that summarises the news.
The app will grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article.

### Technologies

- a single page web app.  
- code in frontend JavaScript, CSS and HTML.  
- no Ruby or backend JavaScript.  
- no libraries or frameworks.  
- test framework from team challenge has been used and adapted for this project
- A static web server
- requests to an API to get data from the Guardian and to summarise text.


## User Stories

Some of these stories will need decomposing if they seem too large.

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can see a relevant picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```

```
As a busy politician
I can click a news headline to see a summary and a photo of the news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can see click a news article summary title which links to the original article
So I can get a few more details about an important story
```

```
As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks
```

```
As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
```

## To-do:
[x] print headlines of news stories in a div
[x] print image of each headline to same div
[ ] click event assigned to each headline, clickable to view a summary and photo of story
[ ] click event assigned to summary which links to original article
[ ] site is responsive for desktop and phone
[ ] animations to make the page more engaging
  -> [ ] animate the clicking of stories
  -> [x] css to news page
[ ] host on a server (surge)


## Resources

#### api:
* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)

#### guidance:
*


* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
* cURL [man page](https://curl.haxx.se/docs/manpage.html)
* [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests

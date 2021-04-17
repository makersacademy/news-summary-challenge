# News Summary challenge

![headlines](images/headlines.png)
![summary](images/summary.png)

View working app at: http://aware-metal.surge.sh/


An app that summarises the news.
The app will grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article.

### Technologies

[x] a single page web app.  
[x] code in frontend JavaScript, CSS and HTML.  
[x] no Ruby or backend JavaScript.  
[x] no libraries or frameworks.  
[x] test framework from team challenge has been used and adapted for this project
[x] A static web server (surge)
[x] requests to an API to get data from the Guardian and to summarise text.

-----

## User Stories


```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can see a relevant picture to illustrate each news article when I browse headlines
So that I have something nice to look at
````

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

-----

### Done
[x] print headlines of news stories in a div  
[x] print image of each headline to same div  
[x] click event assigned to each headline, clickable to view a summary and photo of story  
[x] web url on summary which links to original article  
[x] css  

### To-Do
[ ] site is responsive for desktop and phone  
[ ] animations to make the page more engaging  
  -> [ ] animate the clicking of stories  
[ ] host on a server (surge)  


### NOTES:
- API key is currently accessible in code, based API type not an issue here. Would usually set up a dotenv to set up environment variables.


## Resources

#### api:
* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)  
* [Surge hosting](https://surge.sh/)

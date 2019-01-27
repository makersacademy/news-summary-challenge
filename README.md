# News Summary challenge
------------------------
## Project overview

This app will grab all the headlines from the Guardian newspaper [API](https://open-platform.theguardian.com/documentation/) and display them on a page.  Clicking on a headline will take you to the article.

### Technologies

Single page web app written in pure frontend JavaScript, CSS and HTML.  
Testing done with custom framework available [FooBar 1.0](https://github.com/learningtocode101/custom_framework)

### Serving your app

Static web server (e.g. [http-server](https://www.npmjs.com/package/http-server)) used to serve HTML, CSS and JavaScript files. Requests sent to an API to get data from the Guardian.

### How to use
```
git clone https://github.com/learningtocode101/news-summary-challenge
cd news-summary-challenge
install node & npm ([Get npm!](https://www.npmjs.com/get-npm))
start local server 'http-server ./'
run app in browser using available server and port given (e.g. 192.168.0.77:8080)
hit ctrl-c to stop the sever
```

## User Stories

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story
```

```
As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at
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

## Mockups

### Headlines & Articles page
![Headlines & articles page mockup](https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C7ffb35d05c2e41edaf8e6a67f82eab02/projects/Mc64316e809079116af5ac6334f6b46e51547045656488/pages/D921b927239690a24a4ce7044dfba830c/image/D921b927239690a24a4ce7044dfba830c.png)
### Headlines & Articles screenshot
![Headlines main page](/images/app.png)

### API authentication

API key hidden in config file for privacy

## Resources

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Tania Racscia](https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/)

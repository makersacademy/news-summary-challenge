# News Summary JavaScript Frontend Web App

This is a small news summary app, built to demonstrate my JavaScript frontend web app skills. It is my solution to Makers Academy's week 7 weekend challenge.

I've created an app that shows the latest news using the Guardian API.

My app grabs all the headlines from the Guardian newspaper API and displays them on a
page. Clicking on a headline will link the user to the actual article page on the Guardian's website.

It's a single page web app, written in frontend JavaScript, CSS and HTML.

## Getting started

1. Clone the code: `git clone https://github.com/almorcrette/news-summary-challenge.git`
2. Run `npm run build` to bundle the code.

## Usage

Open app locally in browser: `open index.html`

## Running tests

`jest`

## Approach to developing the project

1. Initially focused on a minimum viable product version of the app, as follows:

![](/assets/NewsSummaryApp_v1.excalidraw.png)

You can take a look at this version of the app at this commit:

`TBC`

2. Next I extended the features to include pictures for each story, and a basis search function (working with single words)

![](/assets/NewsSummaryApp_v2.excalidraw.png)

3. Next steps, not yet implemented, will be as follows:

* Implement a reset button to recover the top stories after completing a search
* Implement multi-word search
* Deliver the following user stories:

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
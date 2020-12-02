# News Summary Challenge

A news summary application made for the week 7 end of unit challenge at Makers.

Uses the Guardian API to list out the biggest headlines of the day, and allows you to click on each one to fetch the body of the article.

This is a one page JS web app which uses dynamic HTTP requests.

No frameworks were used to make this app, except for http-server. All the files in /lib/ were created for the challenge.

![News Summary Screenshot](blob:https://imgur.com/18d9b519-ec75-40bb-8e05-7f3ee2d67107)

## To install and run

Prerequisites:
- node
- npm
- http-server

```shell
git clone https://github.com/dan-holmes/news-summary-challenge.git
npm install
npm start
```

Then navigate to localhost:8080/index.html in your browser.

## To run tests

Navigate to localhost:8080/SpecRunner.html in your browser and view the console.

Please take a moment to check out my home made testing library in /lib!

## User stories

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story
```

```
As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
```
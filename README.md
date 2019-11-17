# News Summary Weekend Challenge

## First Thoughts
This project comes with some limitations. We are not allowed to use any libraries and therefore have to create our own test environment from scratch as well as avoiding the use of jQuery. Everything should be built in front end JS.

I will need to start by creating my test environment. I would like to build on what I learnt in the week by adding proper matchers as well as a nice display to my specRunner.

After this I will play around with the Guardian API to ensure that I'm aware of the actual information which will be supplied. This could probably be done mainly in feature testing.

Looking through the user stories I have a vague idea of how I would like my models to look. I will have news and newsManager classes. Most of the work could probably be done in the dom but I would like to make it easier to test drive my product as well as give me more opportunities for extension.

News will store information taken from the API. I will need to make use of a headline, the full article and a headline picture.

Newsmanager will store all of the News objects as well as being responsible for displaying them all. Newsmanager can switch between displaying a single article or all of the headlines. This is a new way of approaching the issue as we simply hid all of the items we were not using in my previous project, notes.

Once I have the above models set up then I should be at the state that Use stories 1 through 4 should be solved. At that point I can attempt to improve the styling to be comfortably viewed on a phone as well as adding some animations.



## User Stories

### US1
```
As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story
```

### US2
```
As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```

### US3
```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

### US4
```
As a busy politician
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story
```

### US5
```
As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks
```

### US6
```
As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
```

## Review
I learn't a lot from this weekend challenge, it was probably the moment I felt comfortable working in JS. My favourite part to work on was my test suite, setting up the expect statements to look like tests I have seen in jest or rubocop was a particular highlight. One challenge I faced was making API requests and looking back on the challenge I ended up doing some pretty janky things with setTimeouts. If I redid this exercise I would use callbacks or then statements to deal with asynchronicity.

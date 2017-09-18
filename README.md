# News Summary challenge
How to run the app
-----------------
All you have to do is clone the repo and run the server using a service like 'http-server'. To clone the server:

````
$ git clone git@github.com:stephengeller/news-summary-challenge.git
$ cd news-summary-challenge

````

Technologies used
----------------
  - TDD: Custom-built library, run using 'run()' in the Chrome Dev Tools
  - Server: http-server
  - Design: CSS, HTML
  - Views: HTML
  - Functionality: Javascript

  Difficulties
  ---------
  The unique difficulty of this challenge was due to not being able to use any library for our single-page app development. This meant I was not allowed to use familiar JavaScript testing frameworks (such as Jasmine, Mocha / Chai) nor server-side tools and packages that would make development more efficient.

Approach to solving the challenge
---------
As I had no testing framework available, I first developed some simple functions to act as a bare-bones true/false testers for functionality. This allowed me to pass Boolean statements checking whether elements were on the page, what type of elements they were and what kind of purpose they had. For most of the project, this proved useful for basic tests.

However, problems emerged when trying to test asynchronous behavior, which was normally made easy when using Mocha / Chat and ZombieJS. Unfortunately, these issues were not able to be resolved during the weekend challenge, and so some tests would fail despite the actual thing being tested being successful.

The program itself was developed using basic JavaScript, having elements created and pushed into other elements (like list items within an unordered list) in this newsSummary.js file. Counters were used to dictate how many article titles were rendered on the page, and buttons were used to render more. The Guardian's API was used to source articles and their appropriate details (such as their url and title), and Aylien API was used to summarize each story.

Future Developments
------------------
  1. Adding relevant images to each story
  2. More styling (css)
  3. Improve the testing framework to test asynchronous behaviour
  4. Explore more available information provided by the Guardian API

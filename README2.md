# PROJECT JOURNAL

## Step 1

- step 1 was initial setup, I initially had to decide which testing framework to use. I initially considered using Cthulhu, my own testing framework, but as this has very limited functionality and the importance of mocking API's I decided to use a pre-existing one which has these capabilities.
    - I attempted to use Jest with Babel but after the babel installation my test would not run (a simple expect 1 toBe 1 test to ensure everything was setup correctly.)
    - I then thought of using Jasmine but having not used it before and seeing the requirments for setting up were quite large I decided against it.
    - I settled on using just pure Jest and dealing with its few limits on ES6 syntax as they arise.

## Step 2

  - Step 2 will be the first feature test. Something I do not know how to even approach right now with Javascript, my understanding from Alice being it is not possible in the way I think. I will attempt to use commands and expectations of the index.html to see the front change. Otherwise I will follow advice from Alice to simply hand write my feature tests and tick them off as I go. These would be uploaded as a pic file as we go.

  - Step 2 was a disaster - Upon attempting to begin to test the app it all went wrong indeed. Realising I have no knowledge on what an API is or what a request would return I was unable to test any functions. In the end I decided to research API's further and found the studio Ghibli API designed for learning developers. Following a walkthrough I managed to connect to the API and retrieve data from it. Also parsing it via JSON.parse to be readable.
  - The walkthrough also gave me a good understanding of creating and adding HTML elements to a page in a way I have not done before.
  - I have now decided to implement the API requests and response functions with out testing. As despite my better understanding of the calls and responses I still do not fully see how this would be tested.
  - I will test other functions which use these functions and test their output but these two seem like the most important functions to and therefore I feel lost not test driving them.
  - I partly feel currently that this weekend challenge may be slightly too much for me, but will press on, I simply wish we had more of an introduction to API's and how to work with them than we did.

  ## Step 3 - Begin again

  - throughout step 2 my code has become a mess of poor functions, untested code and API requests and response dealing. This led to a piece of code that could draw out headlines from the API and display them nicely.
  - Re-Reading the project requirements has led me to restart the project on Sunday morning, removing all frameworks used previously. I will now begin to complete the project in a methodical manner but without any form of TDD as my only test framework does not have the capability to mock anything and only has 3 matchers with which to work. Therefore I decided to focus on learning how to handle API responses, transform the data received and get it to display.

  - As of now my goals for this project are as follows:
    ```
            1 - Get headlines to display on Page.
            2 - Get each headline to have a lick to original ariticle
            3 - Get a picture to load from each article.
            4 - Implement the Aylien API to create a summary
    ```



    - Steps 1 - 3 I feel are necessary for my learning and step 4 is something I will implement if I have both the time and the necessary understanding.

# summaREAD

[Introduction](#introduction) | [Running the App](#running-the-app) | [Approach](#approach) | [Challenges](#challenges)

## Introduction

summaREAD is my implementation of the Makers Academy Week 7 weekend challenge. The full specification for the project can be found [here](https://github.com/peterwdj/news-summary-challenge/blob/master/instructions.md). In short, the goal of this project was to create a news reader application using [The Guardian's API](http://open-platform.theguardian.com/documentation/), without the use of any external frameworks or libraries.

** Nb. in its current form, this application is unfinished.  **


## Running the App

In its current form, this application is not yet complete and can not be run.


## Approach

This challenge was the first I had done that made use of APIs at the core of the application; as such, I began building this application by learning how to load data from The Guardian via their API, first in the command line using curl, and then in the console. As things stand, the application loads this data, and renders headlines from it in HTML elements on the page. Learning how to work with APIs has been my main takeaway from working on this project.  


## Challenges

As with [oh-note!](https://github.com/SuzanneHuldt/oh-note), not being allowed to use external libraries and frameworks was part of the challenge of this project. However, after oh-note!, this merely took a little longer, and was not technically challenging. The main challenge from this challenge came through the asynchronicity of JavaScript, and being able to properly test and run code at the right time, rather than before data had been loaded from The Guardian API. Another challenge from this project was in crafting well-written code following design conventions in JavaScript. Both the asynchronicity of JavaScript, and its design patterns, are still things that I feel uncomfortable with at the time of writing, and are definitely things to come back to and experiment with further.

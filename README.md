# News Summary Project

A mobile-responsive web application pulls the latest stories from The Guardian's API, including headline, link and image. <br>

Includes search functionality, allowing the user to search for stories on a topic of their choice; those stories will load and replace the latest stories. 

[Read the design plan for this program.](./docs/design-recipe.md)

## Technologies
<div align="center">
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png" alt="Jest" title="Jest" /></code>
</div>

## How to Run
1. Clone this repo
2. ```npm run install```
3. Generate an API key at [The Guardian News API](https://open-platform.theguardian.com/)
4. Save your api key in file named apiKey.js and module export. Add apiKey.js to your .gitignore file
5. ```npm run build```
6. ```open index.html```

## In Action
![Gif of app in action](./docs/News%20Summary%20Challenge.gif)

## Yet to do
* Appealing design!
* Adding a home button to return the user to the latest stories of the day
* Improving test coverage

## > 95% Test Coverage
![Test coverage screenshot](./docs/Screenshot%202023-02-26%20at%2013.09.10.png)

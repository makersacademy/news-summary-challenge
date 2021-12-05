## Introduction

This repo contains the code I wrote for the News Summary Challenge, the Makers Academy Week 7 end-of-week challenge. The goal of this challenge was to create a simple single-page app (SPA) that utilised API requests.

## Setup

I began with the following setup process

1. Performed a global install of http-server ("npm install http-server -g") and then ran the following console commands in the repository:

```
npm install http-server --save
npm -y init
npm install jest
```

2. Add the following lines to the package.json file:

```
"build": "esbuild index.js --bundle  --outfile=bundle.js",
"buildw": "esbuild index.js --bundle  --outfile=bundle.js --watch",
```

3. Added a .gitignore file and include "node_modules/" inside it

4. Created index.html and index.js files. Initiated a pre-built HTML boiler plate by entering "!" and clicking the construction icon. Then added script dependencies to th HTML file:

```
<script src="bundle.js" type="text/javascript"></script>
```

# Approach

This challenged involved using a Makers API to request information from the Guardian API and Aylien API. Unfortunately, I was unable to retrieve any information using the Makers API. Believing this was an error in how I had set up the project, I began a debugging process of researching the causes of the error. After several hours, I was surprised to discover the Makers API was malfunctioning due to the API request limit having been reached, presumably as a result of other users accessing the same API.

Unable to proceed with the Makers API, I retrieved by own API key for the Guardian. I was unable to retrieve one for Aylien as this required creation of an account. I was therefore unable to complete this weekend's challenge.

Rather than waste the weekend, I decided to explore the Guardian API instead. I had some success estalishing an API connection and creating a search field that users could use to search for today's news articles that matched search criteria that the user could input. With more time, I would have fleshed this out to include css elements, jest tests, and exported functions.

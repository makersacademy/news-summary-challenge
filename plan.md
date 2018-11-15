* Setup http-server with a server.js pointing to an index.html
* START WITH THIS ALL IN ONE OR TWO FILES, THEN REFACTOR
  * get headlines from guardian api and store it as `response` or equivalent
    - http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics
    - response.results.each
      - headline = result.webtitle
      - url = result.webUrl
  * Render the headlines all onto the page as links that change the hash to [SOMETHING RELATED TO THE URL]
  * On hash change, send an ajax request to the makers api for the Aylien API with the link to the guardian article for that headline-->and then get the content, and render that into a new view inside a div

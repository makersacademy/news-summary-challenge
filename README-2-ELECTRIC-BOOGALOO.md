# News Summary App

Really basic right now, it simply fetches headlines from the guardian and adds a link and a category and lists them.

No frameworks only basic JS, the api key is hidden via a workaround ENV variable stored in file called env.js which has (for obvious reasons) not been uploaded to github.

To get it working simply make a file called env.js in the project directory and define a variable `SUPER_SECRET_API_KEY` as your key and it should start working.

Tests were stubbed with a copied version of the guardian api's output to avoid making unnecessary api requests. Not everything is tested since my homegrown testing framework (Carbonara) is severely lacking in front-end testing features. 

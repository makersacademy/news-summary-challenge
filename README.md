          __________
         |DAILY NEWS|
         |&&& ======|
         |=== ======|
         |=== == %%$|
         |[_] ======|
         |=== ===!##|
         |__________|


# Guardian Tech News Summary

This one page web-app allows you to search the Guardian's tech section and display the top 20 articles that are most relevant to your search. You can see a short summary of each article and click on a link to read the full piece on the Guardian's own website. 

The app uses responsive design principles to ensure it remains accesible and functional on mobile devices.

## Installation

The latest version of the web-app is deployed at http://new-summary.surge.sh.

If the link isn't working, or you would like to deploy your own version, follow the below steps:

```
$ git clone https://github.com/rednblack99/news-summary-challenge
$ cd news-summary-challenge
$ touch config.js
$ open config.js (in a text editor of your choice)
```
Add the following to your config.js file, subbing API-KEY for your own Guardian API key.
`var config = { GUARDIAN_KEY : "d8192ef6-d691-4b48-a954-a8a734b62cff"}`

```
$ open index.html
```

# Next Steps

There is a large amount of refactoring required in this code. It isn't properly tested, and there is too much happening in Interface.js that should be refactored into classes. The CSS is currently a little janky and could be smartened up. 

## Images

![Guardian Tech News Summary Screenshot](https://i.imgur.com/xzulgaL.png)

## Credits

Big thanks to Tania Rascia (https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/) for providing an excellent guide to connecting an API. Although adapted, the primary CSS behind the site has been drawn from her excellent design.

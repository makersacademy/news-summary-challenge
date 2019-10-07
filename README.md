Status
- implemented tests and code for retrieving overview, pictures and (partially) details
- mock data is currently stored in variables and is loaded from variables after pinging the webserver
- pending: setting date to today
- pending: implementing server ping/data download from API
- pending: hooking summary API call in - rate exceed when I attempted, so built functionality with mock data
- pending: mocking the ping results correctly when testing
- pending: was not able to get thumbnails in manual ping via heruko app - got data via manual ping using own API key
- pending - move to page 2
- postponed for now: animations, mobile view

Usage
- serve the index.html via webserver on port 8080
- navigate browser to http;//localhost:8080
- needs to be hosted on port 8080 to enable test ping

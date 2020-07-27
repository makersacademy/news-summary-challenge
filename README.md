# News Summary challenge

This program is designed to help busy Business users keep themselves informed. The application provides Business users with an immediate opportunity to see the latest news, as reported by the Guardian, and then access the information themselves.

## Running the program
Open the index.html file in the client.


## Structure
The application is designed as a single page aplication without a database or controller. This setup is built in <javascript>, with a custom testing framework. 
  
This setup is run directly from the index.html file; which calls an interface.js file and the Article.js class.

### Program User Flow
1. User visits homepage
2. Homepage executes to fetch articles
3. Articles retrieved and created
4. Articles printed to homepage with url links

  
## Testing
The application has a custom testing framework. Unfortunately, due to the async nature I couldn't get this to work. On reflection, to get this to work I would have needed to create an asynchronous function that waits for the creation of news articles before it let's any next steps happen.

## Issues that I'd like help with
1. How to work APIs correctly;
* I could not get the Guardian API to return to a class variable; this made it difficult to modify the data. 
* I could not get the Aylien API to work correctly - I got stuck on a 422 error, where my Application key was rejected even though it matched the system

2. Asynchronous function
* How to use callbacks effectively to extract information.

# News summary challenge

*[Exercise instructions](instructions.md)*

## Running it

You will need a Guardian API key to make this work! [You can sign up for one for free here.](https://open-platform.theguardian.com/access/)

1. Fork/clone this repo
2. Copy `src/helpers/guardian-api-key-EXAMPLE.js` to `src/helpers/guardian-api-key.js` and put your Guardian API key in there.
3. `open index.html`

## Testing

The tests do not use the Guardian API so you can run them without entering an API key.

I made a basic test framework which you can run in the browser with this command:

1. `open SpecRunner.html`

All objects are unit tested, tests are made independent with mocking and dependency injection, and I've got a feature test which checks that everything is working together.

## What I did

I completed three user stories - showing the headlines, including a link to the article, and showing a thumbnail.

If I was going to continue I would work on displaying the article summary. I would do that like this:

1. Add a `view summary` link underneath each headline on the main page
2. The link target is "#id", where the id is the index number of the `Headline` object in the `HeadlineList` array
3. Add an event handler on `window.onhashchange` which retrieves the `Headline` object from the `HeadlineList` via the id in the link's href, sends the url to the Aylien text summary API, and then replaces the contents of `#app` with the story's headline, the thumbnail image, and the text summary returned from Ayelian.

I would also love to develop my test framework, implementing `it`, `describe` and `context` blocks, and more advanced matchers.

## Reflection

Completing the first user story took a very long time. This was because of the complexity involved in making my tests independent. I have a hierarchy of objects - a headline model, a headline list model, a headline view, a headline list view, a headline controller, an API interface and an app runner, which all interact, and I wanted to be sure I was only testing the specific responsibility of each module. This meant I had to create a lot of doubles which were only mocking the minimal amount of functionality of the other objects in order for the tests to run, which was quite time consuming to set up.

But on the other hand, once I'd completed that, it was very simple to update my tests to drive the second two user stories. This seems to prove the point that TDD allows you to modify a system quickly and confidently at the expense of taking longer to get going initially.

My `HeadlineController` has very little responsibility, and therefore possibly shouldn't exist. When I started I didn't anticipate that the API interface would return its response asynchronously, forcing me to pass a callback function through to display the fetched data. When I got to implementing this part it broke my design as I'd conceived it, with the result that the headline controller was almost redundant. If I was going to continue I might merge those two objects into one.

Making the test framework was a lot of fun, and I'd love to develop that further.

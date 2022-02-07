About
=====

This is the node.js client library for AYLIEN's APIs. If you haven't already done so, you will need to [sign up](https://developer.aylien.com/signup).

Installation
============

To install, simply use `npm`:

```bash
$ npm install aylien_textapi
```

See the [Developers Guide](https://developer.aylien.com/docs) for additional documentation.

Example
=======

```node
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "YourApplicationId",
  application_key: "YourApplicationKey"
});
textapi.sentiment({'text': 'John is a very good football player!'}, function(error, response) {
  if (error === null) {
    console.log(response);
  }
});
```

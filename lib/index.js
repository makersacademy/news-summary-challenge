var express = require("express");
var crossDomainRequestMiddleware = require("./cross-domain-request-middleware");
var routeHandlers = require("./route-handlers");

function createApp() {
  return express();
};

function addRoutes(app) {
  return app
    .get("/", routeHandlers.index)
    .get("/guardian", routeHandlers.guardian)
    .get("/aylien", routeHandlers.aylien);
};

function addMiddleware(app) {
  // allow cross domain JS requests
  return app.use(crossDomainRequestMiddleware);
};

function startApp(app) {
  return app
    .set("port", process.env.PORT || 5000)
    .listen(app.get("port"), function() {
      console.log("Node app is running on port", app.get("port"));
    });
};

startApp(addRoutes(addMiddleware(createApp())));

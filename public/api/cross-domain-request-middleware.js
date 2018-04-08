// middleware to allow cross domain requests

module.exports = function allowCrossDomain(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers",
             "Content-Type, Authorization, Content-Length, X-Requested-With");
  next();
};

const reqGuardian = require("../public/api/guardian-get-request.js")
const reqAylien = require("../public/api/aylien-get-request.js")

let url = "https://content.guardianapis.com//uk?show-editors-picks=true&api-key=test"
reqGuardian.authenticateUrl(url)

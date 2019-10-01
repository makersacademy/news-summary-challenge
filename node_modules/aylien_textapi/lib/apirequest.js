/**
 * Copyright 2016 Aylien, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var http = require('http'),
    https = require('https'),
    util = require('./util'),
    querystring = require('querystring');

var VERSION = "0.5.0";

function getMissingParams(params, required) {
  if (typeof required === 'string') {
    required = [required];
  }
  required = required.concat(['endpointPath', 'application_id', 'application_key']);
  var missing = [];
  required.forEach(function(param) {
    if (param instanceof Array) {
      var oneOfThese = [];
      param.forEach(function(p) {
        if (!params[p]) { oneOfThese.push(p); }
      });
      if (oneOfThese.length > 1) {
        missing = missing.concat(oneOfThese);
      }
    } else {
      if (!params[param]) {
        missing.push(param);
      }
    }
  });

  return missing.length > 0 ? missing : null;
}

function createAPIRequest(parameters, required, callback) {
  var missingParams = getMissingParams(parameters, required);
  if (missingParams) {
    callback(new Error('Missing required parameters: ' + missingParams.join(', '), null));

    return null;
  }

  var postParams = parameters;
  var applicationId = postParams.application_id;
  var applicationKey = postParams.application_key;
  var endpointPath = postParams.endpointPath;
  var protocol = https;
  if (parameters.https === false) {
    protocol = http;
  }
  delete(postParams.application_id);
  delete(postParams.application_key);
  delete(postParams.endpointPath);
  delete(postParams.https);
  var postData = querystring.stringify(postParams);

  var request = protocol.request({
    host: 'api.aylien.com',
    path: '/api/v1/' + endpointPath,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Aylien Text API Node.js ' + VERSION,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData, 'utf8'),
      'X-AYLIEN-TextAPI-Application-ID': applicationId,
      'X-AYLIEN-TextAPI-Application-Key': applicationKey,
    },
  }, function(response) {
    var data = "";
    response.on('data', function(chunk) {
      data += chunk;
    });
    response.on('end', function() {
      var rateLimits = {};
      ['limit', 'remaining', 'reset'].forEach(function(r) {
        rateLimits[r] = parseInt(response.headers['x-ratelimit-' + r] || '0', 10);
      });
      if (response.statusCode == 200) {
        callback(null, JSON.parse(data), rateLimits);
      } else {
        var errorString = data;
        try {
          var tmp = JSON.parse(data);
          if (tmp.error) { errorString = tmp.error; }
        } catch(e) {}
        callback(new Error(errorString), null, rateLimits);
      }
    });
  });
  request.write(postData);
  request.end();
}

module.exports = createAPIRequest;

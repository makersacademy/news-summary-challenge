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

var util = require('./lib/util.js'),
    createAPIRequest = require('./lib/apirequest');

/**
 * AYLIEN Text API
 *
 * @classdesc AYLIEN Text API is a package of eight different
 *  Natural Language Processing, Information Retrieval and Machine Learning
 *  tools that allow developers to extract meaning and insights from documents
 *  with ease.
 * @namespace aylien_textapi
 * @version v1
 * @variation v1
 * @this AYLIENTextAPI
 * @param   {object}    options - Options for Text API
 * @param   {string}    options.application_id - Application ID
 * @param   {string}    options.application_key - Application Key
 * @param   {boolean=}  [options.https=true] - Whether use HTTPS for requests
 */
function AYLIENTextAPI(options) {
  this._options = options || {};

  this.normalizeParams = function(param) {
    if (typeof param === 'string') {
      if (param.match('^https?://')) {
        return util.extend({ url: param }, this._options);
      } else {
        return util.extend({ text: param }, this._options);
      }
    }

    return util.extend(param, this._options);
  };

  /**
   * textapi.sentiment
   *
   * @desc Detects sentiment of a body of text in terms of
   *    polarity ("positive" or "negative") and
   *    subjectivity ("subjective" or "objective")
   *
   * @memberof! aylien_textapi(v1)
   * @instance
   *
   * @param     {object}    params - Parameters for request
   * @param     {string}    params.text - Text to analyze
   * @param     {string}    params.url - URL to analyze
   * @param     {string=}   [params.mode=tweet] - Analyze mode. tweet or
   *    document
   * @param     {callback}  callback - The callback that handles the response
   */
  this.sentiment = function(params, callback) {
    params = util.extend({endpointPath: 'sentiment'}, this.normalizeParams(params));
    createAPIRequest(params, [['text', 'url']], callback);
  };

  /**
   * textapi.entityLevelSentiment
   *
   * @desc Returns the sentiment towards entities on given text.
   *
   * @memberof! aylien_textapi(v1)
   * @instance
   *
   * @param     {object}    params - Parameters for request
   * @param     {string}    params.text - Text to analyze
   * @param     {string}    params.url - URL to analyze
   * @param     {callback}  callback - The callback that handles the response
   */

  this.entityLevelSentiment = function(params, callback) {
      params = util.extend({endpointPath: 'elsa'}, this.normalizeParams(params));
      createAPIRequest(params, [['text', 'url']], callback);
  };

  /**
   * textapi.aspectBasedSentiment
   *
   * @desc  Given a review for a product or service, analyzes the sentiment of
   *    the review towards each of the aspects of the product or review that
   *    are mentioned in it.
   *
   * @memberof! aylien_textapi(v1)
   * @instance
   *
   * @param     {object}    params - Parameters for request
   * @param     {string}    params.text - Text
   * @param     {string}    params.url - URL
   * @param     {string}    params.domain - Domain review belongs to.
   * @param     {callback}  callback - The callback that handles the response
   */
  this.aspectBasedSentiment = function(params, callback) {
    if (!params.domain) {
      callback(new Error('You must specify a domain'));
    } else {
      var domain = params.domain;
      delete params.domain;
      params = util.extend({endpointPath: 'absa/' + domain}, this.normalizeParams(params));
      createAPIRequest(params, [['text', 'url']], callback);
    }
  };

  /**
   * textapi.extract
   *
   * @desc  Extracts the main body of article, including embedded media such
   *    as images & videos from a URL and removes all the surrounding clutter
   *
   * @memberof! aylien_textapi(v1)
   * @instance
   *
   * @param     {object}    params - Parameters for request
   * @param     {string}    params.url  - URL
   * @param     {string}    params.html - Raw HTML to extract from
   * @param     {boolean=}  [params.best_image=false] - Whether to extract the
   *    best image of the article
   * @param     {callback}  callback - The callback that handles the response
   */
  this.extract = function(params, callback) {
    params = util.extend({endpointPath: 'extract'}, this.normalizeParams(params));
    if (params.text && !params.html) { params.html = params.text; delete(params.text); }
    createAPIRequest(params, [['url', 'html']], callback);
  };

  /**
   * textapi.language
   *
   * @desc  Detects the main language of a document is written in from among
   *    62 different languages
   *
   * @memberof! aylien_textapi(v1)
   * @instance
   *
   * @param     {object}    params - Parameters for request
   * @param     {string}    params.text - Text
   * @param     {string}    params.url - URL
   * @param     {callback}  callback - The callback that handles the response
   */
  this.language = function(params, callback) {
    params = util.extend({endpointPath: 'language'}, this.normalizeParams(params));
    createAPIRequest(params, [['text', 'url']], callback);
  };

  /**
   * textapi.classify
   *
   * @desc  Classifies a body of text according to IPTC NewsCode standard into
   *    more than 500 categories.
   *
   * @memberof! aylien_textapi(v1)
   * @instance
   *
   * @param     {object}        params - Parameters for request
   * @param     {string}        params.text - Text
   * @param     {string}        params.url - URL
   * @param     {string=}       [params.language=en] - Language of text
   * @param     {callback}      callback - The callback that handles the response
   */
  this.classify = function(params, callback) {
    params = util.extend({endpointPath: 'classify'}, this.normalizeParams(params));
    createAPIRequest(params, [['text', 'url']], callback);
  };

  /**
   * textapi.classifyByTaxonomy
   *
   * @desc  Classifies a body of text according to the specified taxonomy.
   *
   * @memberof! aylien_textapi(v1)
   * @instance
   *
   * @param     {object}    params - Parameters for request
   * @param     {string}    params.text - Text
   * @param     {string}    params.url - URL
   * @param     {string}    params.taxonomy - Taxonomy to classify according to
   * @param     {string=}   [params.language=en] - Language of text
   * @param     {callback}  callback - The callback that handles the response
   */
  this.classifyByTaxonomy = function(params, callback) {
    if (!params.taxonomy) {
      callback(new Error('You must specify a taxonomy'));
    } else {
      var taxonomy = params.taxonomy;
      delete params.taxonomy;
      params = util.extend({endpointPath: 'classify/' + taxonomy}, this.normalizeParams(params));
      createAPIRequest(params, [['text', 'url']], callback);
    }
  };

  /**
   * textapi.combined
   *
   * @desc  Runs multiple analysis operations in one API call.
   *
   * @memberof! aylien_textapi(v1)
   * @instance
   *
   * @param     {object}    params - Parameters for request
   * @param     {string}    params.text - Text
   * @param     {string}    params.url - URL
   * @param     {array}     params.endpoint - List of endpoints to call
   * @param     {callback}  callback - The callback that handles the response
   */
  this.combined = function(params, callback) {
    params = util.extend({endpointPath: 'combined'}, this.normalizeParams(params));
    createAPIRequest(params, [['text', 'url'], 'endpoint'], callback);
  };

  /**
   * textapi.concepts
   *
   * @desc  Extracts named entities mentioned in a document, disambiguates and
   *    cross link them to DBPedia and Linked Data entities, along with their
   *    semantic types (including DBPedia and schema.org)
   *
   * @memberof! aylien_textapi(v1)
   * @instance
   *
   * @param     {object}    params - Parameters for request
   * @param     {string}    params.text - Text
   * @param     {string}    params.url - URL
   * @param     {string=}   [params.language=en] - Language of text
   * @param     {callback}  callback - The callback that handles the response
   */
  this.concepts = function(params, callback) {
    params = util.extend({endpointPath: 'concepts'}, this.normalizeParams(params));
    createAPIRequest(params, [['text', 'url']], callback);
  };

  /**
   * textapi.entities
   *
   * @desc  Extracts named entities (people, organizations and locations) and
   *    values (URLs, emails, telephone numbers, currency amounts and percentags)
   *    mentioned in a body of text
   *
   * @memberof! aylien_textapi(v1)
   * @instance
   *
   * @param     {object}    params - Parameters for request
   * @param     {string}    params.text - Text
   * @param     {string}    params.url - URL
   * @param     {callback}  callback - The callback that handles the response
   */
  this.entities = function(params, callback) {
    params = util.extend({endpointPath: 'entities'}, this.normalizeParams(params));
    createAPIRequest(params, [['text', 'url']], callback);
  };

  /**
   * textapi.hashtags
   *
   * @desc  Suggests hashtags describing the document
   *
   * @memberof! aylien_textapi(v1)
   * @instance
   *
   * @param     {object}    params - Parameters for request
   * @param     {string}    params.text - Text
   * @param     {string}    params.url  - URL
   * @param     {string=}   [params.language=en] - Language of text
   * @param     {callback}  callback - The callback that handles the response
   */
  this.hashtags = function(params, callback) {
    params = util.extend({endpointPath: 'hashtags'}, this.normalizeParams(params));
    createAPIRequest(params, [['text', 'url']], callback);
  };

  /**
   * textapi.summarize
   *
   * @desc  Summarizes an article into a few key sentences
   *
   * @memberof! aylien_textapi(v1)
   * @instance
   *
   * @param     {object}    params - Parameters for request
   * @param     {string}    params.title - Title
   * @param     {string}    params.text - Text
   * @param     {string}    params.url - URL
   * @param     {string=}   [params.mode=default] - Summarize mode. Either
   *    default or short.
   * @param     {integer=}  [params.sentences_number=5] - Number of sentences
   *    to be returned in default mode (not applicable to short mode)
   * @param     {integer=}  params.sentences_percentage - Percentage of
   *    sentences to be returned in default mode (not applicable to short mode)
   * @param     {callback}  callback - The callback that handles the response
   */
  this.summarize = function(params, callback) {
    params = util.extend({endpointPath: 'summarize'}, this.normalizeParams(params));
    if (!params.url && (!params.text || !params.title)) {
      callback(new Error('You must either provide url, or pair of text and title'));
    } else {
      createAPIRequest(params, [], callback);
    }
  };

 /**
   * textapi.imageTags
   *
   * @desc  Assigns relevant tags to an image
   *
   * @memberof! aylien_textapi(v1)
   * @instance
   *
   * @param     {object}    params - Parameters for request
   * @param     {string}    params.url - Image URL to be tagged
   * @param     {callback}  callback - The callback that handles the response
   */
  this.imageTags = function(params, callback) {
    params = util.extend({endpointPath: 'image-tags'}, this.normalizeParams(params));
    createAPIRequest(params, 'url', callback);
  };
}

/**
 * Exports AYLIENTextAPI object
 * @type AYLIENTextAPI
 */
module.exports = AYLIENTextAPI;

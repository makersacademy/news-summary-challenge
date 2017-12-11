'use strict';

(function(exports) {
  function storyView(story) {
    this._story = story;
  };

  storyView.prototype.title = function() {
    return `<h2 class="story-title">${this._story.title()}</h2>`;
  };

  storyView.prototype.date = function() {
    return `<span class="story-date">${this._story.date()}</span>`;
  };
  
  storyView.prototype.img = function() {
    if (this._story.img()) {
      return `<img class="story-img" src=${this._story.img()}>`;
    } else {
      return '';
    };
  };

  storyView.prototype.desc = function() {
    return `<div class="story-desc">${this._story.preview()}</div>`;
  };

  storyView.prototype.link = function() {
    return `<a class="story-link" href=${this._story.link()}>Go to article</a>`;
  };

  storyView.prototype.toHTML = function() {
    return `<div class="story">
        ${this.title()}
        <div class="information">
          ${this.link()}
          ${this.date()}
        </div>
        <div class="content">
          ${this.img()}${this.desc()}
        </div>
      </div>`;   
  };

  storyView.prototype.toFullPage = function() {
    return `<div class="full-story story">
        ${this.title()}
        <div class="information">
          ${this.link()}
          ${this.date()}
        </div>
        <div class="content full-content">
          ${this.img()}${this.desc()}
        </div>
      </div>`;   
  };


  function getStoryView(story) {
    return new storyView(story);
  };

  exports.getStoryView = getStoryView;
})(this);

'use strict';

var itemModel = require('../models/itemModel');

describe('Item', function() {
  var item;

  beforeEach(function() {
    item = new itemModel.Item('title', 'desc', 'img');
  });

  describe('#title', function() {
    it('returns title', function() {
      expect(item.title()).toEqual('title');
    });
  });

  describe('#desc', function() {
    it('returns description', function() {
      expect(item.desc()).toEqual('desc');
    });
  });

  describe('#img', function() {
    it('has image', function() {
      expect(item.img()).toEqual('img');
    });
  }); 
});

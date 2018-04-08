'use strict';

describe('News page', function(){
  var news = new News('title', 'url', 'imageUrl', 'summary')

  it('with the title', function(){
    expect(news.title).toEqual('title')
  })

  it('with a url', function(){
    expect(news.url).toEqual('url')
  })

  it('with an imageUrl', function(){
    expect(news.imageUrl).toEqual('imageUrl')
  })

  it('with a summary', function(){
    expect(news.summary).toEqual('summary')
  })
})

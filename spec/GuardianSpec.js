'use strict'
/* global describe, it */

describe('Guardian', () => {
  describe('#getHeadlines', () => {
    it('gets the headlines', () => {
      let guardian = new Guardian
      let requestMock = { open: () => {}, send: () => {} }

      guardian.getHeadlines(requestMock)
      guardian.headlines.push(mockResponse.response.results)

      expect(guardian.headlines[0].length).toEqual(10)
    })
  })

  describe('After the headlines have been fetched', () => {
    let guardian = new Guardian
    guardian.headlines.push(mockResponse.response.results)

    describe('renderArticles', () => {
      it('returns a div containing all the headlines', () => {
        expect(guardian.renderArticles().tagName).toEqual('DIV')
      })
    })

    describe('renderArticle', () => {
      it('returns a paragraph containing one headline', () => {
        let article = guardian.headlines[0]

        expect(guardian.renderArticle(article).tagName).toEqual('P')
      })
    })
  })
})

'use strict'
/* global describe, it */

describe('Guardian', () => {
  describe('#getHeadlines', () => {
    it('gets the headlines', () => {
      let guardian = new Guardian
      let requestMock = {
        open: () => {},
        send: () => { guardian.headlines.push(mockResponse.response.results) }
      }
      guardian.getHeadlines(requestMock)

      expect(guardian.headlines[0].length).toEqual(10)
    })
  })

  describe('After the headlines have been fetched', () => {
    let guardian = new Guardian
    guardian.headlines.push(mockResponse.response.results)

    describe('#renderArticles', () => {
      it('returns a div containing all the headlines', () => {
        expect(guardian.renderArticles().tagName).toEqual('DIV')
      })
    })

    describe('#renderArticle', () => {
      it('returns a paragraph containing one headline', () => {
        let article = guardian.headlines[0][0]
        expect(guardian.renderArticle(article).tagName).toEqual('P')
      })
    })

    describe('#createHyperlink', () => {
      it('returns a link to one headline', () => {
        let article = guardian.headlines[0][0]
        expect(guardian.createHyperlink(article).tagName).toEqual('A')
      })
    })

    describe('#fetchImage', () => {
      it('fetches an image', () => {
        let article = guardian.headlines[0][0]
        expect(guardian.fetchImage(article).tagName).toEqual('IMG')
      })
    })
  })
})

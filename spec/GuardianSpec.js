'use strict'
/* global describe, it, expect, Guardian, mockResponse */

describe('Guardian', () => {
  describe('#getHeadlines', () => {
    it('gets the headlines', () => {
      let guardian = new Guardian()
      let requestMock = {
        open: () => {},
        send: () => { guardian.headlines.push(mockResponse.response.results) }
      }
      guardian.getHeadlines(requestMock)

      expect(guardian.headlines[0].length).toEqual(10)
    })
  })

  describe('#getSummary', () => {
    it('gets a summary of a headline', () => {
      let guardian = new Guardian()
      let headlineMock = { webUrl: '' }
      let requestMock = {
        open: () => {},
        send: () => { guardian.summary = 'Test summary' }
      }
      guardian.getSummary(headlineMock, requestMock)

      expect(guardian.summary).toEqual('Test summary')
    })
  })


  describe('After the headlines have been fetched', () => {
    let guardian = new Guardian()
    guardian.headlines.push(mockResponse.response.results)

    describe('#renderArticles', () => {
      it('returns a div containing all the headlines', () => {
        expect(guardian.renderArticles().tagName).toEqual('DIV')
      })
    })

    describe('#renderArticle', () => {
      it('returns a paragraph', () => {
        let article = guardian.headlines[0][0]
        expect(guardian.renderArticle(article).tagName).toEqual('P')
      })
    })

    describe('#createHyperlink', () => {
      it('returns a link', () => {
        let article = guardian.headlines[0][0]
        expect(guardian.createHyperlink(article).tagName).toEqual('A')
      })
    })

    describe('#linkToOriginalArticle', () => {
      it('returns a link', () => {
        let article = guardian.headlines[0][0]
        expect(guardian.linkToOriginalArticle(article).tagName).toEqual('A')
      })

      it('returns a link to the original article', () => {
        let article = guardian.headlines[0][0]
        expect(guardian.linkToOriginalArticle(article).getAttribute('href'))
          .toEqual(article.webUrl)
      })
    })

    describe('#fetchImage', () => {
      it('fetches an image', () => {
        let article = guardian.headlines[0][0]
        expect(guardian.fetchImage(article).tagName).toEqual('IMG')
      })

      it('fetches the thumbnail of the article', () => {
        let article = guardian.headlines[0][0]
        expect(guardian.fetchImage(article).getAttribute('src'))
          .toEqual(article.fields.thumbnail)
      })
    })
  })
})

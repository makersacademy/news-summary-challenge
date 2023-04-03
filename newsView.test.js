/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const { NewsView } = require('./newsView')

describe('class NewsView', () => {

  describe('displayArticles() method', () => {
    it('should, by default, load all headlines', async () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const client = { loadArticles: jest.fn() }
      const mockData = {
        response: {
          results: [{
            webUrl: 'test',
            webTitle: 'test',
            fields: {
              thumbnail: 'test',
              bodyText: 'test'
            }
          }]
        }
      }
      client.loadArticles.mockImplementationOnce((callback) => callback(mockData))
      const view = new NewsView(client)
      
      await view.displayArticles()
      
      const url = document.querySelector('a.article-link')
      const thumbnail = document.querySelector('img.article-img')
      const title = document.querySelector('h2.article-title')
      expect(url.getAttribute('href')).toBe('test')
      expect(thumbnail.getAttribute('src')).toBe('test')
      expect(title.textContent).toBe('test')
    })
  })
})
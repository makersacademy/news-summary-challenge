/**
 * @jest-environment jsdom
 */

const NewsModel = require('./newsModel');
const NewsView = require('./newsView');
const fs = require('fs');

describe('NewsView', () => {
    it('should display a headline on the page', () => {
        // Arrange
        document.body.innerHTML = fs.readFileSync('./index.html')
        const model = new NewsModel();
        const view = new NewsView(model)
        model.addHeadlines('BREAKING NEWS!');

        // Act
        view.displayHeadlines()

        // Assert
        const headlineElement = document.querySelectorAll('div.headline');
        expect(headlineElement.length).toBe(1);
    })
})
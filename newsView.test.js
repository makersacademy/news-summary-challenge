/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsView = require('./newsView')
const NewsModel = require('./newsModel')
const NewsClient = require('./newsClient')

///

describe('NewsView', () => {

    it('instantiates the view and tests for presence of title element', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        let model = new NewsModel;
        let client = new NewsClient;
        let view = new NewsView(model, client)

        expect(document.body.querySelector('h1').innerHTML).toBe("Guardian Digest");
    })

    it('')
})
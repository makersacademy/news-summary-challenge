/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const { isTypedArray } = require('util/types');
const NewsApi = require('./newsApi');
const NewsModel = require('./newsModel');
const NewsView = require('./newsView');
require('jest-fetch-mock').enableMocks();

describe('News View', () => {
    it('displays the news', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new NewsModel();
        const api = new NewsApi();
        const view = new NewsView(model, api);

        view.displayNews({
            response: {
                results: [
                    {
                        webTitle: 'This is a mock title'
                    }],
            }
        });
        expect(document.querySelectorAll('.news-article').length).toBe(1);
    });
});
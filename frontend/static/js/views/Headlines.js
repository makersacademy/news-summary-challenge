import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Headlines');
        this.stories = [];
        this.summary = "Summary empty";
    }

    async getAylien(url) {
        return fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${url}`).then(res => res.json())
    }

    async getHtml() {
        return fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search')
        .then(res => res.json())
        .then(data => {console.log(data);return data.response.results})
        .then(stories => {
            stories.forEach(story => {

                this.stories.push(
                    {headLine: story.webTitle,
                        webUrl: story.webUrl,
                        storySummary: this.getAylien(story.webUrl).then(data => {return data.sentences[0]})
                    }
                );
            });
            return this.stories})
        .then(data => {
            let htmlData = '';
            data.forEach(story => {
                htmlData = htmlData + `<h3><a href="${story.webUrl}">${story.headLine}</a></h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita iure error et. Maiores quo aliquid corporis. Quasi expedita magni cupiditate culpa, praesentium quod consectetur cum quia, dolorem veritatis, est in!</p>`
            })
            return htmlData;
        })
    };
};
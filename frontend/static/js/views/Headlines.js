import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Headlines');
    }

    async getHtml() {
            return `
                <h1>News Headlines</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minus, ab dolore ut doloremque dolorem excepturi repellat maxime est, hic sit error ratione. Tempora accusamus minus ipsam earum hic a illum sapiente esse doloremque ipsum accusantium exercitationem ut eligendi veniam saepe id, suscipit facere ducimus aperiam, amet quos natus itaque!</p>
                </p>
                    <a href="/headlines" data-link>View headlines</a>
                </p>
            `;
    };
};
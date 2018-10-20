// import { App } from '../src/app';

import App from '../src/app.js'; // eslint-disable-line

Barracuda.describe('The Application Starts', () => {
  Barracuda.it('works', () => {
    const app = new App();
    Barracuda.expect(typeof app).toEqual('object');
  });
});

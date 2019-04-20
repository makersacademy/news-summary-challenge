'use strict';

import { Home, ArticleShow, Error404 } from './views/pages/pages.mjs';
import Navbar from './views/components/navbar.mjs';
import Utils from './services/helper-methods.mjs';

//Module
const routes = {
  '/': Home,
  '/articles/:id': ArticleShow
};

const router = function() {
  //Lazy loading of view element
  const header = null || document.getElementById('header_container');
  const content = null || document.getElementById('page_container');

  //Get the request object : {resource, id} elements
  let request = Utils.parseRequestURL();

  //Parse url - if it has id route to resource/id
  let parsedURL =
    (request.resource ? '/' + request.resource : '/') +
    (request.id ? '/:id' : '');

  //Get the page from the routes
  //If parsed page is not in the routes - select 404 page

  let page = routes[parsedURL] ? routes[parsedURL] : Error404;

  content.innerHTML = page.render();
  page.after_render(); // add event listener to button / links - use bubbling later

  header.innerHTML = Navbar.render();
  Navbar.after_render();
  return parsedURL;
};

window.addEventListener('load', router);

window.addEventListener('hashchange', router);

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const NewsApi = __webpack_require__(/*! ./src/newsApi */ \"./src/newsApi.js\")\nconst NewsModel = __webpack_require__(/*! ./src/newsModel */ \"./src/newsModel.js\")\nconst NewsView = __webpack_require__(/*! ./src/newsView */ \"./src/newsView.js\")\n\nlet api = new NewsApi();\nlet model = new NewsModel();\nlet view = new NewsView()\n\nview.displayNews((data)=>{\n\tmodel.updateNews(data)\n\tconsole.log(model.getNews());\n})\n\n\n//# sourceURL=webpack://news-summary-challenge/./app.js?");

/***/ }),

/***/ "./src/newsApi.js":
/*!************************!*\
  !*** ./src/newsApi.js ***!
  \************************/
/***/ ((module) => {

eval("\nclass NewsApi{\n\tconstructor(){\n\t\tthis.apiKey = {\"MANPATH\":\"/opt/homebrew/share/man::\",\"npm_config_legacy_peer_deps\":\"true\",\"rvm_use_flag\":\"\",\"rvm_bin_path\":\"/Users/giorgigutsaevi/.rvm/bin\",\"TERM_PROGRAM\":\"iTerm.app\",\"NODE\":\"/opt/homebrew/Cellar/node/17.3.0/bin/node\",\"INIT_CWD\":\"/Users/giorgigutsaevi/Projects/news-summary-challenge\",\"rvm_quiet_flag\":\"\",\"GEM_HOME\":\"/Users/giorgigutsaevi/.rvm/gems/ruby-3.0.0\",\"_P9K_TTY\":\"/dev/ttys000\",\"rvm_gemstone_url\":\"\",\"TERM\":\"xterm-256color\",\"SHELL\":\"/bin/zsh\",\"npm_config_metrics_registry\":\"https://registry.npmjs.org/\",\"rvm_docs_type\":\"\",\"IRBRC\":\"/Users/giorgigutsaevi/.rvm/rubies/ruby-3.0.0/.irbrc\",\"HOMEBREW_REPOSITORY\":\"/opt/homebrew\",\"TMPDIR\":\"/var/folders/7b/5q6rp90j28jb7__9n6l0chlc0000gn/T/\",\"npm_config_global_prefix\":\"/opt/homebrew\",\"TERM_PROGRAM_VERSION\":\"3.4.14\",\"COLOR\":\"1\",\"rvm_hook\":\"\",\"MY_RUBY_HOME\":\"/Users/giorgigutsaevi/.rvm/rubies/ruby-3.0.0\",\"TERM_SESSION_ID\":\"w0t0p0:7DBED006-16DA-484A-B448-51BC8D792AA8\",\"npm_config_noproxy\":\"\",\"npm_config_local_prefix\":\"/Users/giorgigutsaevi/Projects/news-summary-challenge\",\"ZSH\":\"/Users/giorgigutsaevi/.oh-my-zsh\",\"USER\":\"giorgigutsaevi\",\"rvm_gemstone_package_file\":\"\",\"COMMAND_MODE\":\"unix2003\",\"npm_config_globalconfig\":\"/opt/homebrew/etc/npmrc\",\"rvm_path\":\"/Users/giorgigutsaevi/.rvm\",\"SSH_AUTH_SOCK\":\"/private/tmp/com.apple.launchd.hw4QzOjUUT/Listeners\",\"__CF_USER_TEXT_ENCODING\":\"0x1F5:0x0:0x2\",\"npm_execpath\":\"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js\",\"rvm_proxy\":\"\",\"rvm_ruby_file\":\"\",\"PAGER\":\"less\",\"LSCOLORS\":\"Gxfxcxdxbxegedabagacad\",\"rvm_silent_flag\":\"\",\"rvm_prefix\":\"/Users/giorgigutsaevi\",\"rvm_ruby_make\":\"\",\"PATH\":\"/Users/giorgigutsaevi/Projects/news-summary-challenge/node_modules/.bin:/Users/giorgigutsaevi/Projects/node_modules/.bin:/Users/giorgigutsaevi/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/giorgigutsaevi/.rvm/gems/ruby-3.0.0/bin:/Users/giorgigutsaevi/.rvm/gems/ruby-3.0.0@global/bin:/Users/giorgigutsaevi/.rvm/rubies/ruby-3.0.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/giorgigutsaevi/.rvm/bin\",\"npm_package_json\":\"/Users/giorgigutsaevi/Projects/news-summary-challenge/package.json\",\"_\":\"/Users/giorgigutsaevi/Projects/news-summary-challenge/node_modules/.bin/webpack\",\"npm_config_userconfig\":\"/Users/giorgigutsaevi/.npmrc\",\"npm_config_init_module\":\"/Users/giorgigutsaevi/.npm-init.js\",\"__CFBundleIdentifier\":\"com.googlecode.iterm2\",\"npm_command\":\"run-script\",\"PWD\":\"/Users/giorgigutsaevi/Projects/news-summary-challenge\",\"npm_lifecycle_event\":\"build\",\"EDITOR\":\"vi\",\"P9K_SSH\":\"0\",\"npm_package_name\":\"news-summary-challenge\",\"rvm_sdk\":\"\",\"P9K_TTY\":\"old\",\"LANG\":\"en_GB.UTF-8\",\"ITERM_PROFILE\":\"Starship\",\"XPC_FLAGS\":\"0x0\",\"npm_config_node_gyp\":\"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js\",\"npm_package_version\":\"1.0.0\",\"XPC_SERVICE_NAME\":\"0\",\"rvm_version\":\"1.29.12 (latest)\",\"rvm_script_name\":\"\",\"rvm_pretty_print_flag\":\"\",\"SHLVL\":\"2\",\"HOME\":\"/Users/giorgigutsaevi\",\"COLORFGBG\":\"15;0\",\"rvm_ruby_mode\":\"\",\"LC_TERMINAL_VERSION\":\"3.4.14\",\"HOMEBREW_PREFIX\":\"/opt/homebrew\",\"ITERM_SESSION_ID\":\"w0t0p0:7DBED006-16DA-484A-B448-51BC8D792AA8\",\"npm_config_cache\":\"/Users/giorgigutsaevi/.npm\",\"LESS\":\"-R\",\"LOGNAME\":\"giorgigutsaevi\",\"npm_lifecycle_script\":\"webpack --watch\",\"rvm_alias_expanded\":\"\",\"GEM_PATH\":\"/Users/giorgigutsaevi/.rvm/gems/ruby-3.0.0:/Users/giorgigutsaevi/.rvm/gems/ruby-3.0.0@global\",\"npm_config_user_agent\":\"npm/8.3.0 node/v17.3.0 darwin arm64 workspaces/false\",\"rvm_nightly_flag\":\"\",\"rvm_ruby_make_install\":\"\",\"INFOPATH\":\"/opt/homebrew/share/info:\",\"HOMEBREW_CELLAR\":\"/opt/homebrew/Cellar\",\"rvm_niceness\":\"\",\"LC_TERMINAL\":\"iTerm2\",\"rvm_ruby_bits\":\"\",\"rvm_bin_flag\":\"\",\"rvm_only_path_flag\":\"\",\"RUBY_VERSION\":\"ruby-3.0.0\",\"npm_node_execpath\":\"/opt/homebrew/Cellar/node/17.3.0/bin/node\",\"npm_config_prefix\":\"/opt/homebrew\",\"COLORTERM\":\"truecolor\",\"API_KEY\":\"7060cf70-7ba3-4c88-9143-af6ba88668ec\"}.API_KEY\n\t}\n\n\tfetchNews(callback){\n\t\tconsole.log('fetching the news...');\n\t\tfetch(`https://content.guardianapis.com/search?page-size=12&show-fields=thumbnail&api-key=${\n\t\t\tthis.apiKey}`)\n\t\t.then(res => res.json())\n\t\t.then(data => {\n\t\t\tcallback(data.response.results)\n\t\t\tconsole.log(data.response);\n\t\t\tconsole.log(data.response.results[0].fields.thumbnail);\n\t\t})\n\t\t.catch(err => null)\n\t}\n}\n\n\nmodule.exports = NewsApi;\n\n//# sourceURL=webpack://news-summary-challenge/./src/newsApi.js?");

/***/ }),

/***/ "./src/newsModel.js":
/*!**************************!*\
  !*** ./src/newsModel.js ***!
  \**************************/
/***/ ((module) => {

eval("\nclass NewsModel{\n\t\n\tconstructor(){\n\t\tthis.newsArr = [];\n\t}\n\n\tgetNews(){\n\t\treturn this.newsArr\n\t}\n\n\tupdateNews(news){\n\t\tthis.newsArr = news\n\t}\n\n\n}\n\n\nmodule.exports = NewsModel;\n\n//# sourceURL=webpack://news-summary-challenge/./src/newsModel.js?");

/***/ }),

/***/ "./src/newsView.js":
/*!*************************!*\
  !*** ./src/newsView.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const NewsApi = __webpack_require__(/*! ./newsApi */ \"./src/newsApi.js\")\nconst NewsModel = __webpack_require__(/*! ./newsModel */ \"./src/newsModel.js\")\n\nclass NewsView{\n\t\n\tconstructor(model = new NewsModel(), api = new NewsApi()){\n\t\tthis.model = model;\n\t\tthis.api = api;\n\t\tthis.newsBlock = document.querySelector('.news-block');\n\t\t\n\n\t\t(()=>{\n\t\t\tthis.load(()=>{\n\t\t\t\tlet btn = document.querySelectorAll('.my-btn');\n\t\t\t\tthis.newsSlot = document.querySelector('#news-slot');\n\t\t\t\twindow.addEventListener('hashchange', (e) => this.routechange(e))\n\t\t\t\tbtn.forEach(el =>{\n\t\t\t\t\tel.addEventListener('click', ()=>{\n\t\t\t\t\t\t// this.newsSlot.style.display = 'flex'\n\t\t\t\t\t\tthis.newsSlot.style.height = '320px'\n\t\t\t\t\t\tthis.newsSlot.style.opacity = 1\n\t\t\t\t\t\tconsole.log('button clicked');\n\t\t\t\t\t})\n\t\t\t\t})\n\t\t\t})\n\t\t})();\n\n\t}\n\n\troutechange(e){\n\t\tconst hashLocation = window.location.hash.substring(1);\n\t\tconsole.log(hashLocation);\n\t\tthis.loadPopUp(hashLocation)\n\t}\n\n\tloadPopUp(url){\n\t\tthis.api.fetchNews((data)=>{\n\t\t\tlet result = data[url - 1].webTitle;\n\t\t\tthis.newsSlot.innerHTML = result\n\t\t\tthis.imgEl = document.createElement('img');\n\t\t\tthis.imgEl.classList.add('thumb')\n\t\t\tconsole.log(data[url - 1].fields.thumbnail);\n\t\t\tthis.imgEl.src = data[url - 1].fields.thumbnail\n\t\t\tthis.newsSlot.append(this.imgEl)\n\t\t\tthis.btn = document.createElement('button')\n\t\t\tthis.btn.innerHTML = 'close'\n\t\t\tthis.btn.classList.add('pop-btn')\n\t\t\tthis.newsSlot.append(this.btn)\n\t\t\tthis.btn.addEventListener('click', ()=>{\n\t\t\t\t// this.newsSlot.style.display = 'none'\n\t\t\t\tthis.newsSlot.style.height = '320px'\n\t\t\t\tthis.newsSlot.style.opacity = 1\n\t\t\t})\n\t\t})\n\n\t}\t\n\n\n\n\tdisplayNews(){\n\t\tthis.news = this.model.getNews();\n\t\t// console.log(this.news);\n\t\tthis.news.forEach((news, index)=>{\n\t\t\t// console.log(news.webTitle);\n\t\t\tlet html = `\n\t\t\t<div class=\"card\" style=\"width: 18rem;\">›\n\t\t\t\t<img src=${news.fields.thumbnail} class=\"card-img-top\" alt=\"...\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h6 class=\"card-title\">${news.webTitle}</h6>\n\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t<a href=\"#${index + 1}\" class=\"btn my-btn\">View More</a>\n\t\t\t\t\t\t<a target=\"_blank\" href=\"${news.webUrl}\" class=\"btn my-btn\">View Full News</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t`\n\t\t\tthis.newsBlock.insertAdjacentHTML('beforebegin', html)\n\t\t})\n\t}\n\n\tload(callback){\n\t\tthis.api.fetchNews(news => {\n\t\t\tthis.model.updateNews(news)\n\t\t\tthis.displayNews()\n\t\t\tcallback()\n\t\t})\n\t}\n}\n\n\nmodule.exports = NewsView;\n\n//# sourceURL=webpack://news-summary-challenge/./src/newsView.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;
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

eval("// import NewsApi from \"./lib/newsApi\";\nconst NewsApi = __webpack_require__(/*! ./src/newsApi */ \"./src/newsApi.js\")\n\nlet api = new NewsApi();\napi.fetchNews((data)=>{\n\tconsole.log(data);\n})\nconsole.log('hello');\nconsole.log('this is a test to see if --watch works');\n\n//# sourceURL=webpack://news-summary-challenge/./app.js?");

/***/ }),

/***/ "./src/newsApi.js":
/*!************************!*\
  !*** ./src/newsApi.js ***!
  \************************/
/***/ ((module) => {

eval("\nclass NewsApi{\n\tconstructor(){\n\t\tthis.apiKey = {\"MANPATH\":\"/opt/homebrew/share/man::\",\"npm_config_legacy_peer_deps\":\"true\",\"rvm_use_flag\":\"\",\"rvm_bin_path\":\"/Users/giorgigutsaevi/.rvm/bin\",\"TERM_PROGRAM\":\"iTerm.app\",\"NODE\":\"/opt/homebrew/Cellar/node/17.3.0/bin/node\",\"INIT_CWD\":\"/Users/giorgigutsaevi/Projects/news-summary-challenge\",\"rvm_quiet_flag\":\"\",\"GEM_HOME\":\"/Users/giorgigutsaevi/.rvm/gems/ruby-3.0.0\",\"_P9K_TTY\":\"/dev/ttys001\",\"rvm_gemstone_url\":\"\",\"TERM\":\"xterm-256color\",\"SHELL\":\"/bin/zsh\",\"npm_config_metrics_registry\":\"https://registry.npmjs.org/\",\"rvm_docs_type\":\"\",\"IRBRC\":\"/Users/giorgigutsaevi/.rvm/rubies/ruby-3.0.0/.irbrc\",\"HOMEBREW_REPOSITORY\":\"/opt/homebrew\",\"TMPDIR\":\"/var/folders/7b/5q6rp90j28jb7__9n6l0chlc0000gn/T/\",\"npm_config_global_prefix\":\"/opt/homebrew\",\"TERM_PROGRAM_VERSION\":\"3.4.14\",\"COLOR\":\"1\",\"rvm_hook\":\"\",\"MY_RUBY_HOME\":\"/Users/giorgigutsaevi/.rvm/rubies/ruby-3.0.0\",\"TERM_SESSION_ID\":\"w0t1p0:3B6B3FE0-4C0D-4181-BC56-6F72E47B035C\",\"npm_config_noproxy\":\"\",\"npm_config_local_prefix\":\"/Users/giorgigutsaevi/Projects/news-summary-challenge\",\"ZSH\":\"/Users/giorgigutsaevi/.oh-my-zsh\",\"USER\":\"giorgigutsaevi\",\"rvm_gemstone_package_file\":\"\",\"COMMAND_MODE\":\"unix2003\",\"npm_config_globalconfig\":\"/opt/homebrew/etc/npmrc\",\"rvm_path\":\"/Users/giorgigutsaevi/.rvm\",\"SSH_AUTH_SOCK\":\"/private/tmp/com.apple.launchd.hw4QzOjUUT/Listeners\",\"__CF_USER_TEXT_ENCODING\":\"0x1F5:0x0:0x2\",\"npm_execpath\":\"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js\",\"rvm_proxy\":\"\",\"rvm_ruby_file\":\"\",\"PAGER\":\"less\",\"LSCOLORS\":\"Gxfxcxdxbxegedabagacad\",\"rvm_silent_flag\":\"\",\"rvm_prefix\":\"/Users/giorgigutsaevi\",\"rvm_ruby_make\":\"\",\"PATH\":\"/Users/giorgigutsaevi/Projects/news-summary-challenge/node_modules/.bin:/Users/giorgigutsaevi/Projects/node_modules/.bin:/Users/giorgigutsaevi/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/giorgigutsaevi/.rvm/gems/ruby-3.0.0/bin:/Users/giorgigutsaevi/.rvm/gems/ruby-3.0.0@global/bin:/Users/giorgigutsaevi/.rvm/rubies/ruby-3.0.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/giorgigutsaevi/.rvm/bin\",\"npm_package_json\":\"/Users/giorgigutsaevi/Projects/news-summary-challenge/package.json\",\"_\":\"/Users/giorgigutsaevi/Projects/news-summary-challenge/node_modules/.bin/webpack\",\"npm_config_userconfig\":\"/Users/giorgigutsaevi/.npmrc\",\"npm_config_init_module\":\"/Users/giorgigutsaevi/.npm-init.js\",\"__CFBundleIdentifier\":\"com.googlecode.iterm2\",\"npm_command\":\"run-script\",\"PWD\":\"/Users/giorgigutsaevi/Projects/news-summary-challenge\",\"npm_lifecycle_event\":\"build\",\"EDITOR\":\"vi\",\"P9K_SSH\":\"0\",\"npm_package_name\":\"news-summary-challenge\",\"rvm_sdk\":\"\",\"P9K_TTY\":\"old\",\"LANG\":\"en_GB.UTF-8\",\"ITERM_PROFILE\":\"Starship\",\"XPC_FLAGS\":\"0x0\",\"npm_config_node_gyp\":\"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js\",\"npm_package_version\":\"1.0.0\",\"XPC_SERVICE_NAME\":\"0\",\"rvm_version\":\"1.29.12 (latest)\",\"rvm_script_name\":\"\",\"rvm_pretty_print_flag\":\"\",\"SHLVL\":\"2\",\"HOME\":\"/Users/giorgigutsaevi\",\"COLORFGBG\":\"15;0\",\"rvm_ruby_mode\":\"\",\"LC_TERMINAL_VERSION\":\"3.4.14\",\"HOMEBREW_PREFIX\":\"/opt/homebrew\",\"ITERM_SESSION_ID\":\"w0t1p0:3B6B3FE0-4C0D-4181-BC56-6F72E47B035C\",\"npm_config_cache\":\"/Users/giorgigutsaevi/.npm\",\"LESS\":\"-R\",\"LOGNAME\":\"giorgigutsaevi\",\"npm_lifecycle_script\":\"webpack --watch\",\"rvm_alias_expanded\":\"\",\"GEM_PATH\":\"/Users/giorgigutsaevi/.rvm/gems/ruby-3.0.0:/Users/giorgigutsaevi/.rvm/gems/ruby-3.0.0@global\",\"npm_config_user_agent\":\"npm/8.3.0 node/v17.3.0 darwin arm64 workspaces/false\",\"rvm_nightly_flag\":\"\",\"rvm_ruby_make_install\":\"\",\"INFOPATH\":\"/opt/homebrew/share/info:\",\"HOMEBREW_CELLAR\":\"/opt/homebrew/Cellar\",\"rvm_niceness\":\"\",\"LC_TERMINAL\":\"iTerm2\",\"rvm_ruby_bits\":\"\",\"rvm_bin_flag\":\"\",\"rvm_only_path_flag\":\"\",\"RUBY_VERSION\":\"ruby-3.0.0\",\"npm_node_execpath\":\"/opt/homebrew/Cellar/node/17.3.0/bin/node\",\"npm_config_prefix\":\"/opt/homebrew\",\"COLORTERM\":\"truecolor\",\"API_KEY\":\"7060cf70-7ba3-4c88-9143-af6ba88668ec\"}.API_KEY\n\t}\n\n\tasync fetchNews(){\n\t\tconsole.log('fetching the news...');\n\t\tlet response = await fetch(`https://content.guardianapis.com/search?api-key=${this.apiKey}`)\n\t\tlet data = await response.json()\n\t\tconsole.log(data.response.results);\n\t}\n}\n\n\nmodule.exports = NewsApi;\n\n//# sourceURL=webpack://news-summary-challenge/./src/newsApi.js?");

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
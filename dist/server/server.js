/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nconst CardsList_1 = __webpack_require__(/*! ./shared/CardsList/CardsList */ \"./src/shared/CardsList/CardsList.tsx\");\r\nconst Content_1 = __webpack_require__(/*! ./shared/Content/Content */ \"./src/shared/Content/Content.tsx\");\r\nconst Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\r\nconst Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\r\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nconst reducer_1 = __webpack_require__(/*! ./store/reducer */ \"./src/store/reducer.ts\");\r\nconst redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nconst actions_1 = __webpack_require__(/*! ./store/me/actions */ \"./src/store/me/actions.ts\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst Post_1 = __webpack_require__(/*! ./shared/Post/Post */ \"./src/shared/Post/Post.tsx\");\r\nconst PostCommentsBlock_1 = __webpack_require__(/*! ./shared/PostCommentsBlock/PostCommentsBlock */ \"./src/shared/PostCommentsBlock/PostCommentsBlock.tsx\");\r\nconst store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\r\nfunction AppComponent() {\r\n    const [mounted, setMounted] = (0, react_1.useState)(false);\r\n    (0, react_1.useEffect)(() => {\r\n        setMounted(true);\r\n    }, []);\r\n    (0, react_1.useEffect)(() => {\r\n        store.dispatch((0, actions_1.saveTokenThunk)());\r\n    });\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\r\n        react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(Content_1.Content, null,\r\n                react_1.default.createElement(react_router_dom_1.Switch, null,\r\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/posts\", component: CardsList_1.CardsList }),\r\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/auth\", component: () => react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/posts\" }) }),\r\n                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: \"/\", component: () => react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/posts\" }) }),\r\n                    react_1.default.createElement(react_router_dom_1.Route, { component: () => react_1.default.createElement(\"div\", { style: { textAlign: \"center\" } }, \"404 \\u2014 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\") })),\r\n                react_1.default.createElement(react_router_dom_1.Route, { path: \"/posts/post/:id\" },\r\n                    react_1.default.createElement(Post_1.Post, null)),\r\n                react_1.default.createElement(react_router_dom_1.Route, { path: \"/posts/comment/:id\" },\r\n                    react_1.default.createElement(PostCommentsBlock_1.PostCommentsBlock, null))))))));\r\n}\r\nexports.App = (0, root_1.hot)(() => react_1.default.createElement(AppComponent, null));\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/usePostCommentsData.ts":
/*!******************************************!*\
  !*** ./src/hooks/usePostCommentsData.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostCommentsData = void 0;\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction usePostCommentsData() {\r\n    const [dataArray, setData] = (0, react_1.useState)({});\r\n    const commentId = (0, react_redux_1.useSelector)(state => state.commentId);\r\n    let commentLink = '';\r\n    const postsRedux = (0, react_redux_1.useSelector)(state => state.posts);\r\n    if (postsRedux[commentId]) {\r\n        commentLink = postsRedux[commentId].data.permalink;\r\n    }\r\n    ;\r\n    (0, react_1.useEffect)(() => {\r\n        if (commentLink) {\r\n            axios_1.default.get(`https://api.reddit.com${commentLink}?sr_detail=true`)\r\n                .then((resp) => {\r\n                const postUser = resp.data[0].data.children[0].data;\r\n                const postComments = resp.data[1].data.children.map((item) => ({ author: item.data.author, body: item.data.body, replies: item.data.replies }));\r\n                const postUserData = { author: postUser.author, title: postUser.title, text: postUser.selftext };\r\n                setData({ user: postUserData, comments: postComments });\r\n            })\r\n                .catch(console.log);\r\n        }\r\n        ;\r\n    }, []);\r\n    return [dataArray];\r\n}\r\nexports.usePostCommentsData = usePostCommentsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostCommentsData.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nfunction useUserData() {\r\n    const data = (0, react_redux_1.useSelector)(state => state.me.data);\r\n    const loading = (0, react_redux_1.useSelector)(state => state.me.loading);\r\n    const token = (0, react_redux_1.useSelector)(state => state.token);\r\n    const dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(() => {\r\n        if (token) {\r\n            dispatch((0, actions_1.meRequestAsync)());\r\n        }\r\n    }, [token]);\r\n    return { data, loading };\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n  --black:          #000000;\\n  --orange:         #CC6633;\\n  --green:          #A4CC33;\\n  --whiteLightness: 100%;\\n  --white:          hsl(0, 0%, var(--whiteLightness));\\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n}\\n\\nbody {  \\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--grayF4);\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', serif;\\n}\\n\\n* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nconst indexTemplate = (content, token) => `\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">    \r\n    <title>Reddit</title>    \r\n</head>\r\n<body>\r\n    <div id=\"react_root\">${content}</div>\r\n    <div id=\"menu_dots\"></div>\r\n    <div id=\"modal_root\"></div>\r\n    <script defer src=\"/static/client.js\" type=\"application/javascript\"></script>\r\n    <script defer>   \r\n       window.__token__ = '${token}';    \r\n    </script>    \r\n</body>\r\n</html> `;\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nconst App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nconst indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nconst app = (0, express_1.default)();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/auth', (req, res) => {\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://reddit-best.onrender.com/auth`, {\r\n        auth: { username: '7R23OczqsJYAo4tovu8AcQ', password: 'hpZEsQlTK5IQobZd8rSJy54oL9R7AQ' },\r\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\r\n    })\r\n        .then(({ data }) => {\r\n        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)()), data['access_token']));\r\n    })\r\n        .catch((error) => {\r\n        console.log(error);\r\n    });\r\n});\r\napp.get('*', (req, res) => {\r\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\r\n});\r\napp.listen(3000, () => {\r\n    console.log('Server started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Break = void 0;\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/Break/break.css\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\n;\r\nfunction Break(props) {\r\n    const { inline = false, top = false, size, mobileSize, tabletSize, desktopSize } = props;\r\n    return (React.createElement(\"div\", { className: (0, classnames_1.default)(break_css_1.default[`s${size}`], { [break_css_1.default.inline]: inline }, { [break_css_1.default.top]: top }, { [break_css_1.default[`mobile_s${mobileSize}`]]: mobileSize }, { [break_css_1.default[`tablet_s${tabletSize}`]]: tabletSize }, { [break_css_1.default[`desktop_s${desktopSize}`]]: desktopSize }) }));\r\n}\r\nexports.Break = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/Break/break.css":
/*!************************************!*\
  !*** ./src/shared/Break/break.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s2\": \"break__s2--P6Sfk\",\n\t\"s4\": \"break__s4--rnbuA\",\n\t\"s6\": \"break__s6--1qNzt\",\n\t\"s8\": \"break__s8--2ubV4\",\n\t\"s10\": \"break__s10--1fag3\",\n\t\"s12\": \"break__s12--3dSW2\",\n\t\"top\": \"break__top--25ISJ\",\n\t\"inline\": \"break__inline--22pcx\",\n\t\"mobile_s2\": \"break__mobile_s2--ICbna\",\n\t\"mobile_s4\": \"break__mobile_s4--LrEFY\",\n\t\"mobile_s6\": \"break__mobile_s6--3EqqC\",\n\t\"mobile_s8\": \"break__mobile_s8--1Tmgm\",\n\t\"mobile_s10\": \"break__mobile_s10--3HZZ-\",\n\t\"mobile_s12\": \"break__mobile_s12--2En9X\",\n\t\"tablet_s2\": \"break__tablet_s2--1MckN\",\n\t\"tablet_s4\": \"break__tablet_s4--2nTnL\",\n\t\"tablet_s6\": \"break__tablet_s6--1gEga\",\n\t\"tablet_s8\": \"break__tablet_s8--7zEhs\",\n\t\"tablet_s10\": \"break__tablet_s10--3PkBq\",\n\t\"tablet_s12\": \"break__tablet_s12--3Y-kT\",\n\t\"desktop_s2\": \"break__desktop_s2--2RF6K\",\n\t\"desktop_s4\": \"break__desktop_s4--3mFLY\",\n\t\"desktop_s6\": \"break__desktop_s6--1X3TK\",\n\t\"desktop_s8\": \"break__desktop_s8--2uQYJ\",\n\t\"desktop_s10\": \"break__desktop_s10--1rMwX\",\n\t\"desktop_s12\": \"break__desktop_s12--1-0wy\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Break/break.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nconst TextContent_1 = __webpack_require__(/*! ./TextContent/TextContent */ \"./src/shared/CardsList/Card/TextContent/TextContent.tsx\");\r\nconst Preview_1 = __webpack_require__(/*! ./Preview/Preview */ \"./src/shared/CardsList/Card/Preview/Preview.tsx\");\r\nconst Menu_1 = __webpack_require__(/*! ./Menu/Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\");\r\nconst Controls_1 = __webpack_require__(/*! ./Controls/Controls */ \"./src/shared/CardsList/Card/Controls/Controls.tsx\");\r\nfunction Card({ param }) {\r\n    return (React.createElement(\"li\", { className: card_css_1.default.card },\r\n        React.createElement(TextContent_1.TextContent, { param: param }),\r\n        React.createElement(Menu_1.Menu, { param: param }),\r\n        React.createElement(Preview_1.Preview, { param: param }),\r\n        React.createElement(Controls_1.Controls, { param: param })));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/Actions.js":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/Actions.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {\r\n    if (k2 === undefined)\r\n        k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n        desc = { enumerable: true, get: function () { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function (o, m, k, k2) {\r\n    if (k2 === undefined)\r\n        k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function (o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule)\r\n        return mod;\r\n    var result = {};\r\n    if (mod != null)\r\n        for (var k in mod)\r\n            if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k))\r\n                __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Actions = void 0;\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst controls_css_1 = __importDefault(__webpack_require__(/*! ../controls.css */ \"./src/shared/CardsList/Card/Controls/controls.css\"));\r\nconst shareButton_css_1 = __importDefault(__webpack_require__(/*! ./shareButton.css */ \"./src/shared/CardsList/Card/Controls/Actions/shareButton.css\"));\r\nconst saveButton_css_1 = __importDefault(__webpack_require__(/*! ./saveButton.css */ \"./src/shared/CardsList/Card/Controls/Actions/saveButton.css\"));\r\nfunction Actions() {\r\n    return (React.createElement(\"div\", { className: controls_css_1.default.actions }, React.createElement(\"button\", { className: shareButton_css_1.default.shareButton }, React.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, React.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }), React.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))), React.createElement(\"button\", { className: saveButton_css_1.default.saveButton }, React.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" }, React.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }), React.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" })))));\r\n}\r\nexports.Actions = Actions;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/Actions.js?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/saveButton.css":
/*!*******************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/saveButton.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"saveButton\": \"saveButton__saveButton--34ZAR\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/saveButton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/shareButton.css":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/shareButton.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"shareButton\": \"shareButton__shareButton--yQs7y\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/shareButton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Comment/Comment.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Comment/Comment.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comment = void 0;\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst commentButton_css_1 = __importDefault(__webpack_require__(/*! ./commentButton.css */ \"./src/shared/CardsList/Card/Controls/Comment/commentButton.css\"));\r\nfunction Comment() {\r\n    return (React.createElement(\"button\", { className: commentButton_css_1.default.commentsButton },\r\n        React.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            React.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#CC6633\" }))));\r\n}\r\nexports.Comment = Comment;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Comment/Comment.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Comment/commentButton.css":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Comment/commentButton.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsButton\": \"commentButton__commentsButton--3PprN\",\n\t\"commentsNumber\": \"commentButton__commentsNumber--3Bqi1\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Comment/commentButton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/CardsList/Card/Controls/controls.css\"));\r\nconst Karma_1 = __webpack_require__(/*! ./Karma/Karma */ \"./src/shared/CardsList/Card/Controls/Karma/Karma.tsx\");\r\nconst Comment_1 = __webpack_require__(/*! ./Comment/Comment */ \"./src/shared/CardsList/Card/Controls/Comment/Comment.tsx\");\r\nconst Actions_1 = __webpack_require__(/*! ./Actions/Actions */ \"./src/shared/CardsList/Card/Controls/Actions/Actions.js\");\r\nfunction Controls({ param }) {\r\n    return (React.createElement(\"div\", { className: controls_css_1.default.controls },\r\n        React.createElement(Karma_1.Karma, { param: param }),\r\n        React.createElement(Comment_1.Comment, null),\r\n        React.createElement(Actions_1.Actions, null)));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Karma/Karma.tsx":
/*!************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Karma/Karma.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Karma = void 0;\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst karmaCounter_css_1 = __importDefault(__webpack_require__(/*! ./karmaCounter.css */ \"./src/shared/CardsList/Card/Controls/Karma/karmaCounter.css\"));\r\nfunction Karma({ param }) {\r\n    return (React.createElement(\"div\", { className: karmaCounter_css_1.default.karmaCounter },\r\n        React.createElement(\"button\", { className: karmaCounter_css_1.default.up },\r\n            React.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                React.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" }))),\r\n        React.createElement(\"span\", { className: karmaCounter_css_1.default.karmaValue }, param.score),\r\n        React.createElement(\"button\", { className: karmaCounter_css_1.default.down },\r\n            React.createElement(\"svg\", { className: karmaCounter_css_1.default.down, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                React.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" })))));\r\n}\r\nexports.Karma = Karma;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Karma/Karma.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Karma/karmaCounter.css":
/*!*******************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Karma/karmaCounter.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaCounter\": \"karmaCounter__karmaCounter--3etnM\",\n\t\"karmaValue\": \"karmaCounter__karmaValue--2JtOF\",\n\t\"down\": \"karmaCounter__down--19H9E\",\n\t\"up\": \"karmaCounter__up--33tzE\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Karma/karmaCounter.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/controls.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/controls.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--1pbuI\",\n\t\"actions\": \"controls__actions--1iXY3\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\r\nconst Dropdown_1 = __webpack_require__(/*! ../../../Dropdown/Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\");\r\nconst MenuIcon_1 = __webpack_require__(/*! ../../../Icons/MenuIcon */ \"./src/shared/Icons/MenuIcon.tsx\");\r\nfunction Menu(param) {\r\n    return (React.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        React.createElement(Dropdown_1.Dropdown, { param: param, onClose: () => console.log('closed'), onOpen: () => console.log('opened'), button: React.createElement(\"button\", { className: menu_css_1.default.menuButton },\r\n                React.createElement(MenuIcon_1.MenuIcon, null)) })));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/menu.css":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/menu.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--22Yos\",\n\t\"menuButton\": \"menu__menuButton--2RzAb\",\n\t\"dropdown\": \"menu__dropdown--2v5tI\",\n\t\"closeButton\": \"menu__closeButton--1Vmbj\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/CardsList/Card/Preview/preview.css\"));\r\nfunction Preview({ param }) {\r\n    return (React.createElement(\"div\", { className: preview_css_1.default.preview },\r\n        React.createElement(\"img\", { className: preview_css_1.default.previewImg, src: param.thumbnail, alt: \"... no image\" })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/preview.css":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/preview.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--1Nukb\",\n\t\"previewImg\": \"preview__previewImg--3kTAV\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst textContent_css_1 = __importDefault(__webpack_require__(/*! ./textContent.css */ \"./src/shared/CardsList/Card/TextContent/textContent.css\"));\r\nconst userLink_css_1 = __importDefault(__webpack_require__(/*! ./userLink.css */ \"./src/shared/CardsList/Card/TextContent/userLink.css\"));\r\nconst title_css_1 = __importDefault(__webpack_require__(/*! ./title.css */ \"./src/shared/CardsList/Card/TextContent/title.css\"));\r\nconst grishin_jpg_1 = __importDefault(__webpack_require__(/*! ../img/grishin.jpg */ \"./src/shared/CardsList/Card/img/grishin.jpg\"));\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction TextContent({ param }) {\r\n    return (React.createElement(\"div\", { className: textContent_css_1.default.textContent },\r\n        React.createElement(\"div\", { className: textContent_css_1.default.metaData },\r\n            React.createElement(\"div\", { className: userLink_css_1.default.userLink },\r\n                React.createElement(\"img\", { className: userLink_css_1.default.avatar, src: grishin_jpg_1.default, alt: \"avatar\" }),\r\n                React.createElement(\"a\", { href: \"#user-url\", className: userLink_css_1.default.username }, param.author)),\r\n            React.createElement(\"span\", { className: textContent_css_1.default.createdAt },\r\n                React.createElement(\"span\", { className: textContent_css_1.default.publishedLabel }, \"Posted\"),\r\n                Math.round((Math.trunc(Number(new Date()) / 1000) - Number(param.created)) / 3600),\r\n                \" hours ago\")),\r\n        React.createElement(\"h2\", { className: title_css_1.default.title },\r\n            React.createElement(react_router_dom_1.Link, { to: `/posts/post/${param.id}`, className: title_css_1.default.postLink }, param.title))));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/textContent.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/textContent.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textContent__textContent--397Re\",\n\t\"metaData\": \"textContent__metaData--1ow-t\",\n\t\"publishedLabel\": \"textContent__publishedLabel--3wKcO\",\n\t\"createdAt\": \"textContent__createdAt--ATk4X\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/textContent.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/title.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/title.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"title__title--1gjL-\",\n\t\"postLink\": \"title__postLink--3QPD7\",\n\t\"textContent\": \"title__textContent--3UXkx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/title.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/userLink.css":
/*!************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/userLink.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userLink\": \"userLink__userLink--2NfnE\",\n\t\"avatar\": \"userLink__avatar--17V2F\",\n\t\"username\": \"userLink__username--3Khvf\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/userLink.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--7bN6-\",\n\t\"textContent\": \"card__textContent--3Ki_7\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/img/grishin.jpg":
/*!***************************************************!*\
  !*** ./src/shared/CardsList/Card/img/grishin.jpg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"static/img/grishin.jpg\");\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/img/grishin.jpg?");

/***/ }),

/***/ "./src/shared/CardsList/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nconst Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst reducer_1 = __webpack_require__(/*! ../../store/reducer */ \"./src/store/reducer.ts\");\r\nconst GenerateRandomindex_1 = __webpack_require__(/*! ../../utils/react/GenerateRandomindex */ \"./src/utils/react/GenerateRandomindex.ts\");\r\nconst Break_1 = __webpack_require__(/*! ../Break/Break */ \"./src/shared/Break/Break.tsx\");\r\nfunction CardsList() {\r\n    const numberOfAutoLoad = 2;\r\n    const token = (0, react_redux_1.useSelector)(state => state.token);\r\n    const [posts, setPosts] = (0, react_1.useState)([]);\r\n    const [loading, setLoading] = (0, react_1.useState)(false);\r\n    const [loadingButton, setLoadingButton] = (0, react_1.useState)(false);\r\n    const [errorLoading, setErrorLoading] = (0, react_1.useState)('');\r\n    const bottomOfList = (0, react_1.useRef)(null);\r\n    const [nextAfter, setNextAfter] = (0, react_1.useState)('');\r\n    const [countLoads, setCountLoads] = (0, react_1.useState)(0);\r\n    const [loadMoreN, setLoadMoreN] = (0, react_1.useState)(0);\r\n    const dispatch = (0, react_redux_1.useDispatch)();\r\n    let postsDispatch = new Array;\r\n    (0, react_1.useEffect)(() => {\r\n        if (postsDispatch) {\r\n            dispatch((0, reducer_1.setPostsRedux)(postsDispatch));\r\n        }\r\n    }, [postsDispatch]);\r\n    function clickLoadMore() {\r\n        setCountLoads(0);\r\n        setLoadMoreN(loadMoreN + 1);\r\n    }\r\n    (0, react_1.useEffect)(() => {\r\n        if (!token)\r\n            return;\r\n        if (nextAfter === null)\r\n            return;\r\n        function load() {\r\n            return __awaiter(this, void 0, void 0, function* () {\r\n                if (countLoads <= numberOfAutoLoad) {\r\n                    setErrorLoading('');\r\n                    try {\r\n                        const { data: { data: { after, children } } } = yield axios_1.default.get('https://oauth.reddit.com/best', {\r\n                            headers: { Authorization: `bearer ${token}` },\r\n                            params: { after: nextAfter, limit: 10 }\r\n                        });\r\n                        setNextAfter(after);\r\n                        setPosts(prevChildren => prevChildren.concat(...children));\r\n                    }\r\n                    catch (error) {\r\n                        setErrorLoading(String(error));\r\n                    }\r\n                    ;\r\n                    setLoading(false);\r\n                }\r\n            });\r\n        }\r\n        ;\r\n        const observer = new IntersectionObserver((entries) => {\r\n            if (entries[0].isIntersecting) {\r\n                if (countLoads > numberOfAutoLoad) {\r\n                    setLoading(false);\r\n                    setLoadingButton(true);\r\n                }\r\n                else {\r\n                    setLoadingButton(false);\r\n                    setLoading(true);\r\n                    setCountLoads(countLoads + 1);\r\n                }\r\n                ;\r\n                load();\r\n            }\r\n        }, { rootMargin: '5px' });\r\n        if (bottomOfList.current) {\r\n            observer.observe(bottomOfList.current);\r\n        }\r\n        return () => {\r\n            if (bottomOfList.current) {\r\n                observer.unobserve(bottomOfList.current);\r\n            }\r\n        };\r\n    }, [token, nextAfter, loadMoreN]);\r\n    postsDispatch = posts;\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\r\n        posts.length === 0 && !loading && !errorLoading &&\r\n            react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"No posts\"),\r\n        posts.map((post, index) => react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Card_1.Card, { key: (0, GenerateRandomindex_1.generateRandomString)(), param: {\r\n                    id: index,\r\n                    title: post.data.title,\r\n                    author: post.data.author,\r\n                    created: post.data.created,\r\n                    num_comments: post.data.num_comments,\r\n                    score: post.data.score,\r\n                    thumbnail: post.data.thumbnail,\r\n                    url: post.data.url\r\n                } }),\r\n            react_1.default.createElement(Break_1.Break, { top: true, size: 10 }))),\r\n        react_1.default.createElement(\"div\", { ref: bottomOfList }),\r\n        loading && react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"Loading...\"),\r\n        loadingButton && react_1.default.createElement(\"div\", { style: { textAlign: 'center' } },\r\n            react_1.default.createElement(\"button\", { style: { padding: '10px 30px', border: '1px', color: 'white', backgroundColor: 'grey' }, onClick: clickLoadMore }, \"More posts\")),\r\n        errorLoading && react_1.default.createElement(\"div\", { role: 'alert', style: { textAlign: 'center' } }, errorLoading)));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--1DoiZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst formik_1 = __webpack_require__(/*! formik */ \"formik\");\r\nconst commentForm_css_1 = __importDefault(__webpack_require__(/*! ./commentForm.css */ \"./src/shared/CommentForm/commentForm.css\"));\r\nfunction CommentForm({ value, onChange }) {\r\n    function handleOnChange(event) {\r\n        onChange(event);\r\n    }\r\n    function validateValue(value) {\r\n        if (value.length <= 3)\r\n            return 'input more than 3 characters';\r\n        return '';\r\n    }\r\n    return (react_1.default.createElement(formik_1.Formik, { initialValues: {\r\n            comment: value\r\n        }, onSubmit: (values) => {\r\n            alert(`Форма отправлена ${values.comment}`);\r\n        } }, ({ errors, touched, setFieldValue }) => (react_1.default.createElement(formik_1.Form, { className: commentForm_css_1.default.form },\r\n        react_1.default.createElement(formik_1.Field, { as: 'textarea', className: commentForm_css_1.default.input, name: \"comment\", onChange: (e) => {\r\n                setFieldValue('comment', e.target.value);\r\n                handleOnChange(e);\r\n            }, validate: validateValue, \"aria-invalid\": errors.comment ? 'true' : undefined }),\r\n        errors.comment && touched.comment && react_1.default.createElement(\"div\", null, errors.comment),\r\n        react_1.default.createElement(\"button\", { className: commentForm_css_1.default.button, disabled: !!errors.comment, type: \"submit\" }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")))));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentForm.css":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/commentForm.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentForm__form--1-Qyk\",\n\t\"input\": \"commentForm__input--3sIbl\",\n\t\"button\": \"commentForm__button--2efFm\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentForm.css?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst CommentForm_1 = __webpack_require__(/*! ../CommentForm/CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\");\r\nconst core_1 = __webpack_require__(/*! @hookstate/core */ \"@hookstate/core\");\r\nfunction CommentFormContainer({ author }) {\r\n    const Comment = (0, core_1.createState)(`Hello ${author} ,`);\r\n    const value = (0, core_1.useState)(Comment);\r\n    function handleChange(event) {\r\n        value.set(event.target.value);\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n    }\r\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { value: value.get(), onChange: handleChange }));\r\n}\r\nexports.CommentFormContainer = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nfunction Content({ children }) {\r\n    return (React.createElement(\"main\", { className: content_css_1.default.content }, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\r\nconst GenerateRandomindex_1 = __webpack_require__(/*! ../../utils/react/GenerateRandomindex */ \"./src/utils/react/GenerateRandomindex.ts\");\r\nconst GenericList_1 = __webpack_require__(/*! ../GenericList/GenericList */ \"./src/shared/GenericList/GenericList.tsx\");\r\nconst MenuImg1_1 = __webpack_require__(/*! ../Icons/MenuImg1 */ \"./src/shared/Icons/MenuImg1.tsx\");\r\nconst MenuImg3_1 = __webpack_require__(/*! ../Icons/MenuImg3 */ \"./src/shared/Icons/MenuImg3.tsx\");\r\nconst MenuImg4_1 = __webpack_require__(/*! ../Icons/MenuImg4 */ \"./src/shared/Icons/MenuImg4.tsx\");\r\nconst MenuImg5_1 = __webpack_require__(/*! ../Icons/MenuImg5 */ \"./src/shared/Icons/MenuImg5.tsx\");\r\nconst MenuImg2_1 = __webpack_require__(/*! ../Icons/MenuImg2 */ \"./src/shared/Icons/MenuImg2.tsx\");\r\nconst PostCommentsBlock_1 = __webpack_require__(/*! ../PostCommentsBlock/PostCommentsBlock */ \"./src/shared/PostCommentsBlock/PostCommentsBlock.tsx\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst reducer_1 = __webpack_require__(/*! ../../store/reducer */ \"./src/store/reducer.ts\");\r\nconst NOOP = () => { };\r\nconst menuImg1 = (0, MenuImg1_1.MenuImg1)();\r\nconst menuImg2 = (0, MenuImg2_1.MenuImg2)();\r\nconst menuImg3 = (0, MenuImg3_1.MenuImg3)();\r\nconst menuImg4 = (0, MenuImg4_1.MenuImg4)();\r\nconst menuImg5 = (0, MenuImg5_1.MenuImg5)();\r\nfunction Dropdown({ button, isOpen, onOpen = NOOP, onClose = NOOP, param }) {\r\n    const [isDropdownOpen, setIsDropdownOpen] = (0, react_1.useState)(isOpen);\r\n    const [buttonDots, setButtonDots] = (0, react_1.useState)();\r\n    const [showComments, setShowComments] = (0, react_1.useState)(false);\r\n    const dispatch = (0, react_redux_1.useDispatch)();\r\n    react_1.default.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);\r\n    react_1.default.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);\r\n    const LIST = [\r\n        {\r\n            As: 'li', className: 'menuItem', text: 'Comments',\r\n            img: menuImg1, onClick: NOOP\r\n        },\r\n        {\r\n            As: 'li', className: 'menuItem', text: 'Share',\r\n            img: menuImg2, onClick: NOOP\r\n        },\r\n        {\r\n            As: 'li', className: 'menuItem', text: 'Hide',\r\n            img: menuImg3, onClick: NOOP\r\n        },\r\n        {\r\n            As: 'li', className: 'menuItem', text: 'Save',\r\n            img: menuImg4, onClick: NOOP\r\n        },\r\n        {\r\n            As: 'li', className: 'menuItem', text: 'Complain',\r\n            img: menuImg5, onClick: NOOP\r\n        },\r\n        { As: 'li', className: 'menuItem', text: 'Close', onClick: NOOP }\r\n    ].map(GenerateRandomindex_1.generateId);\r\n    LIST.map((el) => el.onClick = () => console.log(el.id));\r\n    LIST[0].onClick = () => {\r\n        setShowComments(true);\r\n        dispatch((0, reducer_1.setCommentId)(Number(param.param.id)));\r\n    };\r\n    LIST[LIST.length - 1].onClick = () => setIsDropdownOpen(false);\r\n    const handleOpen = (e) => {\r\n        if (isOpen === undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n            setButtonDots(e.currentTarget);\r\n        }\r\n        ;\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\r\n        isDropdownOpen && react_1.default.createElement(GenericList_1.GenericList, { list: LIST, buttonDots: buttonDots }),\r\n        showComments && react_1.default.createElement(PostCommentsBlock_1.PostCommentsBlock, null)));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--a5Jzh\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/GenericList/GenericList.tsx":
/*!************************************************!*\
  !*** ./src/shared/GenericList/GenericList.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericList = void 0;\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst menuItem_css_1 = __importDefault(__webpack_require__(/*! ./menuItem.css */ \"./src/shared/GenericList/menuItem.css\"));\r\nconst Break_1 = __webpack_require__(/*! ../Break/Break */ \"./src/shared/Break/Break.tsx\");\r\nconst Text_1 = __webpack_require__(/*! ../Text/Text */ \"./src/shared/Text/Text.tsx\");\r\nconst Icon_1 = __webpack_require__(/*! ../Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\r\nconst react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nconst noop = () => { };\r\nfunction GenericList({ list, buttonDots }) {\r\n    const leftInit = buttonDots === null || buttonDots === void 0 ? void 0 : buttonDots.getBoundingClientRect().left;\r\n    const [left, setLeft] = React.useState(leftInit ? leftInit - 120 : leftInit);\r\n    const node = document.querySelector(\"#menu_dots\");\r\n    if (!node)\r\n        return null;\r\n    function setSize() {\r\n        const leftInit = buttonDots === null || buttonDots === void 0 ? void 0 : buttonDots.getBoundingClientRect().left;\r\n        setLeft(c => c ? leftInit ? leftInit - 120 : leftInit : c);\r\n    }\r\n    window.addEventListener(\"resize\", setSize);\r\n    return react_dom_1.default.createPortal((React.createElement(\"ul\", { className: menuItem_css_1.default.list, style: { left } }, list.map(({ As = 'div', text, img, className, onClick, id, href }, ind) => (React.createElement(As, { className: menuItem_css_1.default.menuList, onClick: onClick, key: id, href: href },\r\n        React.createElement(\"div\", { className: menuItem_css_1.default.menuItem },\r\n            (list.length - ind) > 1 && React.createElement(Icon_1.Icon, { size: 16, mobileSize: 14 },\r\n                \" \",\r\n                img,\r\n                \" \"),\r\n            React.createElement(Break_1.Break, { size: 6 }),\r\n            React.createElement(Text_1.Text, { size: 14, mobileSize: 12 },\r\n                \" \",\r\n                text,\r\n                \" \"))))))), node);\r\n}\r\nexports.GenericList = GenericList;\r\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/GenericList.tsx?");

/***/ }),

/***/ "./src/shared/GenericList/menuItem.css":
/*!*********************************************!*\
  !*** ./src/shared/GenericList/menuItem.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"list\": \"menuItem__list--2YOAE\",\n\t\"menuList\": \"menuItem__menuList--_js9W\",\n\t\"menuItem\": \"menuItem__menuItem--2wEPt\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/menuItem.css?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nconst SearchBlock_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\r\nconst ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle/ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.js\");\r\nconst SortBlock_1 = __webpack_require__(/*! ./SortBlock/SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.js\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nconst UserBlock_1 = __webpack_require__(/*! ./UserBlock/UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\");\r\nconst useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nfunction SearchBlock() {\r\n    const { data, loading } = (0, useUserData_1.useUserData)();\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Break_1 = __webpack_require__(/*! ../../../Break/Break */ \"./src/shared/Break/Break.tsx\");\r\nconst Text_1 = __webpack_require__(/*! ../../../Text/Text */ \"./src/shared/Text/Text.tsx\");\r\nconst userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\r\nconst IconAnon_1 = __webpack_require__(/*! ../../../Icons/IconAnon */ \"./src/shared/Icons/IconAnon.tsx\");\r\nfunction UserBlock({ avatarSrc, username, loading }) {\r\n    return (react_1.default.createElement(\"a\", { href: `https://www.reddit.com/api/v1/authorize?client_id=${'7R23OczqsJYAo4tovu8AcQ'}&response_type=code&state=RANDOM_STRING&redirect_uri=https://reddit-best.onrender.com/auth&duration=temporary&scope=identity read submit` },\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.userBox },\r\n            react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\r\n                ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_css_1.default.avatarImage })\r\n                : react_1.default.createElement(IconAnon_1.IconAnon, null)),\r\n            react_1.default.createElement(\"div\", { className: userblock_css_1.default.username },\r\n                react_1.default.createElement(Break_1.Break, { size: 10 }),\r\n                loading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: Text_1.EColor.grey99 }, \"Loading...\"))\r\n                    : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || 'Log in'))))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--24rEF\",\n\t\"avatarBox\": \"userblock__avatarBox--2OTfi\",\n\t\"avatarImage\": \"userblock__avatarImage--2ryXC\",\n\t\"username\": \"userblock__username--3bLc0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3aDPv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.js":
/*!**************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {\r\n    if (k2 === undefined)\r\n        k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n        desc = { enumerable: true, get: function () { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function (o, m, k, k2) {\r\n    if (k2 === undefined)\r\n        k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function (o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule)\r\n        return mod;\r\n    var result = {};\r\n    if (mod != null)\r\n        for (var k in mod)\r\n            if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k))\r\n                __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\r\nfunction SortBlock() {\r\n    return (React.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"sorting dropdown\"));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.js?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--141aZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.js":
/*!******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {\r\n    if (k2 === undefined)\r\n        k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n        desc = { enumerable: true, get: function () { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function (o, m, k, k2) {\r\n    if (k2 === undefined)\r\n        k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function (o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule)\r\n        return mod;\r\n    var result = {};\r\n    if (mod != null)\r\n        for (var k in mod)\r\n            if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k))\r\n                __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\r\nfunction ThreadTitle() {\r\n    return (React.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Header\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.js?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--oxugx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = void 0;\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\n;\r\nfunction Icon(props) {\r\n    const { As = 'div', children, size, mobileSize, tabletSize, desktopSize } = props;\r\n    const classes = (0, classnames_1.default)(icon_css_1.default[`s${size}`], { [icon_css_1.default[`m${mobileSize}`]]: mobileSize }, { [icon_css_1.default[`t${tabletSize}`]]: tabletSize }, { [icon_css_1.default[`d${desktopSize}`]]: desktopSize });\r\n    return (React.createElement(As, { className: classes },\r\n        \" \",\r\n        children,\r\n        \" \"));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/icon.css":
/*!**********************************!*\
  !*** ./src/shared/Icon/icon.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s12\": \"icon__s12--LuYYL\",\n\t\"s14\": \"icon__s14--m4nyp\",\n\t\"s16\": \"icon__s16--NYdak\",\n\t\"m12\": \"icon__m12--1-U0b\",\n\t\"m14\": \"icon__m14--Pdbj_\",\n\t\"m16\": \"icon__m16--1W2nF\",\n\t\"t12\": \"icon__t12--3KfvD\",\n\t\"t14\": \"icon__t14--1aldr\",\n\t\"t16\": \"icon__t16--2OInr\",\n\t\"d12\": \"icon__d12--29ZTk\",\n\t\"d14\": \"icon__d14--2AAv4\",\n\t\"d16\": \"icon__d16--3Gdce\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icon/icon.css?");

/***/ }),

/***/ "./src/shared/Icons/IconAnon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconAnon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconAnon = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconAnon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.IconAnon = IconAnon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconAnon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/MenuIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuIcon = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.MenuIcon = MenuIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MenuImg1.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/MenuImg1.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuImg1 = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuImg1() {\r\n    return (react_1.default.createElement(\"svg\", { viewBox: \"0 0 16 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\r\n}\r\nexports.MenuImg1 = MenuImg1;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MenuImg1.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MenuImg2.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/MenuImg2.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuImg2 = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuImg2() {\r\n    return (react_1.default.createElement(\"svg\", { viewBox: \"0 0 16 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\r\n}\r\nexports.MenuImg2 = MenuImg2;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MenuImg2.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MenuImg3.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/MenuImg3.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuImg3 = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuImg3() {\r\n    return (react_1.default.createElement(\"svg\", { viewBox: \"0 0 16 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })));\r\n}\r\nexports.MenuImg3 = MenuImg3;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MenuImg3.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MenuImg4.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/MenuImg4.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuImg4 = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuImg4() {\r\n    return (react_1.default.createElement(\"svg\", { viewBox: \"0 0 16 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n}\r\nexports.MenuImg4 = MenuImg4;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MenuImg4.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MenuImg5.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/MenuImg5.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuImg5 = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuImg5() {\r\n    return (react_1.default.createElement(\"svg\", { viewBox: \"0 0 16 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\r\n}\r\nexports.MenuImg5 = MenuImg5;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MenuImg5.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\n//import {hot} from 'react-hot-loader/root';\r\nconst layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout({ children }) {\r\n    return (React.createElement(\"div\", { className: layout_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\r\nconst react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nconst CommentFormContainer_1 = __webpack_require__(/*! ../CommentFormContainer/CommentFormContainer */ \"./src/shared/CommentFormContainer/CommentFormContainer.tsx\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst Break_1 = __webpack_require__(/*! ../Break/Break */ \"./src/shared/Break/Break.tsx\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction Post() {\r\n    const ref = (0, react_1.useRef)(null);\r\n    const history = (0, react_router_dom_1.useHistory)();\r\n    const postID = (0, react_router_dom_1.useParams)();\r\n    const postsCurrent = (0, react_redux_1.useSelector)(state => state.posts);\r\n    (0, react_1.useEffect)(() => {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                history.push('/posts');\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return () => {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    const node = document.querySelector('#modal_root');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"h2\", { className: post_css_1.default.title }, postsCurrent[Number(postID.id)].data.title),\r\n        react_1.default.createElement(\"a\", { href: postsCurrent[Number(postID.id)].data.url, target: \"_blank\", className: post_css_1.default.content }, postsCurrent[Number(postID.id)].data.url),\r\n        react_1.default.createElement(Break_1.Break, { top: true, size: 10 }),\r\n        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, { author: postsCurrent[Number(postID.id)].data.author }))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/post.css":
/*!**********************************!*\
  !*** ./src/shared/Post/post.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"post__modal--yRo-c\",\n\t\"title\": \"post__title--xhpd2\",\n\t\"content\": \"post__content--2gFMc\",\n\t\"close\": \"post__close--1HSqz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/post.css?");

/***/ }),

/***/ "./src/shared/PostCommentsBlock/PostCommentsBlock.tsx":
/*!************************************************************!*\
  !*** ./src/shared/PostCommentsBlock/PostCommentsBlock.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostCommentsBlock = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst postCommentsBlock_css_1 = __importDefault(__webpack_require__(/*! ./postCommentsBlock.css */ \"./src/shared/PostCommentsBlock/postCommentsBlock.css\"));\r\nconst Icon_1 = __webpack_require__(/*! ../Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\r\nconst Text_1 = __webpack_require__(/*! ../Text/Text */ \"./src/shared/Text/Text.tsx\");\r\nconst MenuImg1_1 = __webpack_require__(/*! ../Icons/MenuImg1 */ \"./src/shared/Icons/MenuImg1.tsx\");\r\nconst Break_1 = __webpack_require__(/*! ../Break/Break */ \"./src/shared/Break/Break.tsx\");\r\nconst ReplyForm_1 = __webpack_require__(/*! ../ReplyForm/ReplyForm */ \"./src/shared/ReplyForm/ReplyForm.tsx\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst usePostCommentsData_1 = __webpack_require__(/*! ../../hooks/usePostCommentsData */ \"./src/hooks/usePostCommentsData.ts\");\r\nfunction PostCommentsBlock() {\r\n    var _a, _b, _c, _d, _e;\r\n    const [loading, setLoading] = (0, react_1.useState)(true);\r\n    const ref = (0, react_1.useRef)(null);\r\n    const history = (0, react_router_dom_1.useHistory)();\r\n    const commentId = (0, react_redux_1.useSelector)(state => state.commentId);\r\n    const [dataArray] = (0, usePostCommentsData_1.usePostCommentsData)();\r\n    const pad = 10;\r\n    const img = (0, MenuImg1_1.MenuImg1)();\r\n    const copyArr = [false];\r\n    (_a = dataArray.comments) === null || _a === void 0 ? void 0 : _a.map((comment, ind) => copyArr[ind] = false);\r\n    const [isCommentFormOpen, setIsCommentFormOpen] = (0, react_1.useState)([false]);\r\n    (0, react_1.useEffect)(() => {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                history.push('/posts');\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return () => {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    const node = document.querySelector('#modal_root');\r\n    if (!node)\r\n        return null;\r\n    function reply(e) {\r\n        e.preventDefault();\r\n        copyArr[Number(e.currentTarget.id)] = !isCommentFormOpen[Number(e.currentTarget.id)];\r\n        setIsCommentFormOpen(copyArr);\r\n    }\r\n    if (JSON.stringify(dataArray) !== '{}') {\r\n        return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: postCommentsBlock_css_1.default.modal, ref: ref },\r\n            react_1.default.createElement(\"div\", { className: postCommentsBlock_css_1.default.modalBodyWrapper },\r\n                react_1.default.createElement(\"p\", null,\r\n                    \" author: \", (_b = dataArray.user) === null || _b === void 0 ? void 0 :\r\n                    _b.author),\r\n                react_1.default.createElement(\"p\", { style: { fontSize: 20 } },\r\n                    \"  \", (_c = dataArray.user) === null || _c === void 0 ? void 0 :\r\n                    _c.title),\r\n                react_1.default.createElement(\"p\", { style: { fontSize: 16 } },\r\n                    \"  \", (_d = dataArray.user) === null || _d === void 0 ? void 0 :\r\n                    _d.text),\r\n                react_1.default.createElement(\"p\", { style: { textAlign: \"center\", backgroundColor: \"grey\" } }, \"===============================\"),\r\n                react_1.default.createElement(\"ul\", null, (_e = dataArray.comments) === null || _e === void 0 ? void 0 : _e.map((comment, ind) => react_1.default.createElement(\"li\", { style: { paddingLeft: pad }, key: ind },\r\n                    react_1.default.createElement(\"p\", null,\r\n                        \"  author: \",\r\n                        comment.author),\r\n                    react_1.default.createElement(\"p\", { style: { fontSize: 16 } },\r\n                        \" \",\r\n                        comment.body),\r\n                    isCommentFormOpen[ind] && react_1.default.createElement(ReplyForm_1.ReplyForm, { name: comment.author }),\r\n                    react_1.default.createElement(\"div\", { onClick: reply, id: ind.toString(), style: {\r\n                            display: \"flex\", backgroundColor: \"lightBlue\",\r\n                            width: 100, cursor: \"pointer\"\r\n                        } },\r\n                        react_1.default.createElement(Icon_1.Icon, { size: 16, mobileSize: 14 },\r\n                            \" \",\r\n                            img,\r\n                            \" \"),\r\n                        react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n                        react_1.default.createElement(\"button\", null,\r\n                            react_1.default.createElement(Text_1.Text, { size: 10, color: Text_1.EColor.black, mobileSize: 10 }, \"Reply\"))),\r\n                    react_1.default.createElement(\"div\", { style: { textAlign: \"center\", backgroundColor: \"grey\", width: \"100%\", height: \"1px\" } }))))))), node);\r\n    }\r\n    else\r\n        return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: postCommentsBlock_css_1.default.modal }, loading && react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"Loading...\"))), node);\r\n}\r\nexports.PostCommentsBlock = PostCommentsBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/PostCommentsBlock/PostCommentsBlock.tsx?");

/***/ }),

/***/ "./src/shared/PostCommentsBlock/postCommentsBlock.css":
/*!************************************************************!*\
  !*** ./src/shared/PostCommentsBlock/postCommentsBlock.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"postCommentsBlock__modal--2cfXO\",\n\t\"modalBodyWrapper\": \"postCommentsBlock__modalBodyWrapper--2OQOf\",\n\t\"title\": \"postCommentsBlock__title--1c86d\",\n\t\"content\": \"postCommentsBlock__content--Su0Hc\",\n\t\"close\": \"postCommentsBlock__close--3c2P1\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/PostCommentsBlock/postCommentsBlock.css?");

/***/ }),

/***/ "./src/shared/ReplyForm/ReplyForm.tsx":
/*!********************************************!*\
  !*** ./src/shared/ReplyForm/ReplyForm.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ReplyForm = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst replyForm_css_1 = __importDefault(__webpack_require__(/*! ./replyForm.css */ \"./src/shared/ReplyForm/replyForm.css\"));\r\nfunction ReplyForm(props) {\r\n    const [value, setValue] = (0, react_1.useState)(`Dear ${props.name}, `);\r\n    const ref = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(() => {\r\n        if (ref.current) {\r\n            ref.current.focus();\r\n            ref.current.setSelectionRange(value.length, value.length);\r\n        }\r\n    }, []);\r\n    function handleChange(event) {\r\n        setValue(event.target.value);\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        alert(`Форма отправлена ${value}`);\r\n    }\r\n    return (react_1.default.createElement(\"form\", { className: replyForm_css_1.default.form, onSubmit: handleSubmit },\r\n        react_1.default.createElement(\"textarea\", { className: replyForm_css_1.default.input, value: value, onChange: handleChange, ref: ref }),\r\n        react_1.default.createElement(\"button\", { type: \"submit\", className: replyForm_css_1.default.button }, \"Send\")));\r\n}\r\nexports.ReplyForm = ReplyForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/ReplyForm/ReplyForm.tsx?");

/***/ }),

/***/ "./src/shared/ReplyForm/replyForm.css":
/*!********************************************!*\
  !*** ./src/shared/ReplyForm/replyForm.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"replyForm__form--2aNof\",\n\t\"input\": \"replyForm__input--2wTmC\",\n\t\"button\": \"replyForm__button--3NNRc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ReplyForm/replyForm.css?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColor = void 0;\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar EColor;\r\n(function (EColor) {\r\n    EColor[\"black\"] = \"black\";\r\n    EColor[\"orange\"] = \"orange\";\r\n    EColor[\"green\"] = \"green\";\r\n    EColor[\"white\"] = \"white\";\r\n    EColor[\"greyF4\"] = \"greyF4\";\r\n    EColor[\"greyF3\"] = \"greyF3\";\r\n    EColor[\"greyD9\"] = \"greyD9\";\r\n    EColor[\"greyC4\"] = \"greyC4\";\r\n    EColor[\"grey99\"] = \"grey99\";\r\n    EColor[\"grey66\"] = \"grey66\";\r\n})(EColor = exports.EColor || (exports.EColor = {}));\r\n;\r\nfunction Text(props) {\r\n    const { As = 'span', color = EColor.black, bold = false, children, size, mobileSize, tabletSize, desktopSize } = props;\r\n    const classes = (0, classnames_1.default)(text_css_1.default[`s${size}`], text_css_1.default[color], { [text_css_1.default.bold]: bold }, { [text_css_1.default[`m${mobileSize}`]]: mobileSize }, { [text_css_1.default[`t${tabletSize}`]]: tabletSize }, { [text_css_1.default[`d${desktopSize}`]]: desktopSize });\r\n    return (React.createElement(As, { className: classes }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s12\": \"text__s12--2S2T2\",\n\t\"s14\": \"text__s14--jvCoO\",\n\t\"s16\": \"text__s16--G_lUr\",\n\t\"bold\": \"text__bold--gb02H\",\n\t\"black\": \"text__black--1zchg\",\n\t\"orange\": \"text__orange--1RyAM\",\n\t\"green\": \"text__green--3mYQn\",\n\t\"white\": \"text__white--13JGE\",\n\t\"greyF4\": \"text__greyF4--V0fR0\",\n\t\"greyF3\": \"text__greyF3--2Lfsi\",\n\t\"greyD9\": \"text__greyD9--7iRFr\",\n\t\"greyC4\": \"text__greyC4--3oiNM\",\n\t\"grey99\": \"text__grey99--35u3B\",\n\t\"grey66\": \"text__grey66--373uw\",\n\t\"m12\": \"text__m12--1W0av\",\n\t\"m14\": \"text__m14--s6pnr\",\n\t\"m16\": \"text__m16--cSY4u\",\n\t\"t12\": \"text__t12--7txjW\",\n\t\"t14\": \"text__t14--1Rj72\",\n\t\"t16\": \"text__t16--nkVMz\",\n\t\"d12\": \"text__d12--5X_qc\",\n\t\"d14\": \"text__d14--3Futo\",\n\t\"d16\": \"text__d16--1Pwd1\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ }),

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveTokenThunk = exports.saveToken = exports.SAVE_TOKEN = exports.meRequestAsync = exports.MeRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nconst meRequest = () => ({\r\n    type: exports.ME_REQUEST\r\n});\r\nexports.meRequest = meRequest;\r\n;\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nconst meRequestSuccess = (data) => ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data\r\n});\r\nexports.meRequestSuccess = meRequestSuccess;\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nconst MeRequestError = (error) => ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error\r\n});\r\nexports.MeRequestError = MeRequestError;\r\nconst meRequestAsync = () => (dispatch, getState) => {\r\n    dispatch((0, exports.meRequest)());\r\n    axios_1.default.get('https://oauth.reddit.com/api/v1/me?raw_json=1', { headers: { Authorization: `bearer ${getState().token}` } })\r\n        .then((resp) => {\r\n        const userData = resp.data;\r\n        dispatch((0, exports.meRequestSuccess)({ name: userData.name, iconImg: userData.icon_img }));\r\n    })\r\n        .catch((error) => {\r\n        console.log(error);\r\n        dispatch((0, exports.MeRequestError)(error));\r\n    });\r\n};\r\nexports.meRequestAsync = meRequestAsync;\r\nexports.SAVE_TOKEN = 'SAVE_TOKEN';\r\nconst saveToken = (token) => ({\r\n    type: exports.SAVE_TOKEN,\r\n    token: token\r\n});\r\nexports.saveToken = saveToken;\r\nconst saveTokenThunk = () => (dispatch) => {\r\n    const token = typeof window !== \"undefined\" ? window.__token__ : '';\r\n    dispatch((0, exports.saveToken)(token));\r\n};\r\nexports.saveTokenThunk = saveTokenThunk;\r\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ }),

/***/ "./src/store/me/reducer.ts":
/*!*********************************!*\
  !*** ./src/store/me/reducer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nconst actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/me/actions.ts\");\r\nconst meReducer = (state, action) => {\r\n    switch (action.type) {\r\n        case actions_1.ME_REQUEST:\r\n            return Object.assign(Object.assign({}, state), { loading: true });\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return Object.assign(Object.assign({}, state), { error: action.error, loading: false });\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n            return Object.assign(Object.assign({}, state), { data: action.data, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/me/reducer.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.updateComment = exports.setPostsRedux = exports.setCommentId = void 0;\r\nconst actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\r\nconst reducer_1 = __webpack_require__(/*! ./me/reducer */ \"./src/store/me/reducer.ts\");\r\nconst initialState = {\r\n    commentText: 'Hello Skillbox!',\r\n    token: '',\r\n    me: { loading: false, error: '', data: {} },\r\n    posts: [],\r\n    commentId: -1\r\n};\r\nconst SET_COMMENT_ID = 'SET_COMMENT_ID';\r\nconst setCommentId = (commentId) => ({\r\n    type: SET_COMMENT_ID,\r\n    commentId: commentId\r\n});\r\nexports.setCommentId = setCommentId;\r\nconst SET_POSTS = 'SET_POSTS';\r\nconst setPostsRedux = (posts) => ({\r\n    type: SET_POSTS,\r\n    posts: posts\r\n});\r\nexports.setPostsRedux = setPostsRedux;\r\nconst UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nconst updateComment = (text) => ({\r\n    type: UPDATE_COMMENT,\r\n    text\r\n});\r\nexports.updateComment = updateComment;\r\nconst rootReducer = (state = initialState, action) => {\r\n    switch (action.type) {\r\n        case SET_COMMENT_ID:\r\n            return Object.assign(Object.assign({}, state), { commentId: action.commentId });\r\n        case SET_POSTS:\r\n            return Object.assign(Object.assign({}, state), { posts: action.posts });\r\n        case UPDATE_COMMENT:\r\n            return Object.assign(Object.assign({}, state), { commentText: action.text });\r\n        case actions_1.SAVE_TOKEN:\r\n            return Object.assign(Object.assign({}, state), { token: action.token });\r\n        case actions_1.ME_REQUEST:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return Object.assign(Object.assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.assoc = void 0;\r\nfunction assoc(key, value) {\r\n    return (obj) => (Object.assign(Object.assign({}, obj), { [key]: value }));\r\n}\r\nexports.assoc = assoc;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/react/GenerateRandomindex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/GenerateRandomindex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.generateRandomString = void 0;\r\nconst assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\r\nconst generateRandomString = () => Math.random().toString(36).substring(2, 15);\r\nexports.generateRandomString = generateRandomString;\r\nconst generateId = (obj) => (0, assoc_1.assoc)('id', (0, exports.generateRandomString)())(obj);\r\nexports.generateId = generateId;\r\n/*\r\nconst LIST = [\r\n    { value: 'some' },\r\n    { value: 'other some' },\r\n    { value: 'some' }\r\n].map(generateId);*/\r\n//map ((item: {value:string}) => ({...item, id: generateRandomString()}));\r\n\n\n//# sourceURL=webpack:///./src/utils/react/GenerateRandomindex.ts?");

/***/ }),

/***/ "@hookstate/core":
/*!**********************************!*\
  !*** external "@hookstate/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@hookstate/core\");\n\n//# sourceURL=webpack:///external_%22@hookstate/core%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formik\");\n\n//# sourceURL=webpack:///external_%22formik%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });
// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-int32array@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int32-max@v0.3.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int32-min@v0.2.2-esm/index.mjs";var r="function"==typeof Int32Array?Int32Array:null;function i(){var i,e;if("function"!=typeof r)return!1;try{e=new r([1,3.14,-3.14,n+1]),i=t(e)&&1===e[0]&&3===e[1]&&-3===e[2]&&e[3]===s}catch(t){i=!1}return i}export{i as default};
//# sourceMappingURL=index.mjs.map

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../resources/whiteclose.svg */ "./resources/whiteclose.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../resources/edit.svg */ "./resources/edit.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../resources/close.svg */ "./resources/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.roboto-thin {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: normal;
}

.roboto-thin-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: italic;
}

.roboto-light {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.roboto-light-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: italic;
}

.roboto-regular {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.roboto-regular-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.roboto-medium {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.roboto-medium-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: italic;
}

.roboto-bold {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.roboto-bold-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: italic;
}

.roboto-black {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.roboto-black-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: italic;
}

:root {
  --sidebar-color: #003c5f;
  --sidebar-color-light: #015484;
  --light-grey: #f1f1f1;
  --box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
}

body {
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 3fr 5fr;
  grid-template-columns: minmax(300px, 1fr) 3fr 2fr;
  font-family: "Roboto", sans-serif;
}

#header {
  background-color: var(--light-grey);
  grid-row: 1 / span 1;
  grid-column: 2 / span 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2vw;
  padding-right: 2vw;
}

.searchIcon {
  height: 25px;
  width: 25px;
  margin-left: auto;
  margin-right: 10px;
}

#listSearch {
  width: 25vw;
  height: 35px;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
}

#sidebar {
  grid-column: 1 / span 1;
  grid-row: 1 / span 3;
  background-color: var(--sidebar-color);
  display: flex;
  flex-flow: column;
}

#sidebar h1,
#sidebar h2 {
  padding-left: 30px;
  color: white;
  font-weight: 400;
}

#projectList {
  display: flex;
  flex-flow: column;
}

#projectList > div {
  display: flex;
  margin-left: -40px;
  align-items: center;
}

.projectDelete {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  height: 20px;
  padding-right: 20px;
}

#projectList button {
  border: none;
  background: transparent;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  width: 100%;
  height: 40px;
  text-align: start;
  padding-left: 30px;
}

#projectList > div:hover {
  background-color: var(--sidebar-color-light);
}

.select {
  background-color: var(--sidebar-color-light);
}

#addProject {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  align-self: flex-start;
  margin-top: auto;
  margin-bottom: 2vh;
  margin-left: 2vh;
}

#addProjectPopup {
  position: absolute;
  background-color: var(--light-grey);
  width: 230px;
  height: 100px;
  align-self: center;
  display: none;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  bottom: 8vh;
  border-radius: 5px;
  padding: 15px;
  font-weight: 500;
  box-shadow: var(--box-shadow);
}

#addProjectPopup > div {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

#addProjectPopup > button {
  align-self: end;
  width: 20%;
  height: 25px;
  color: white;
  background-color: var(--sidebar-color);
  border-radius: 5px;
  border: none;
  font-size: 0.9em;
  font-weight: 600;
}

#addProjectPopup > button:hover {
  background-color: var(--sidebar-color-light);
}

#addProjectPopup > input {
  width: 90%;
  height: 25%;
  border-radius: 10px;
  padding-left: 10px;
}

#projectTitle {
  font-weight: 500;
}

.titleList {
  display: grid;
  grid-template-columns: 1fr 10fr 3fr 3fr 2fr;
  align-items: center;
  justify-items: start;
  background-color: var(--light-grey);
  border-radius: 10px;
  font-weight: 500;
  height: 40px;
}

.titleList > img {
  height: 30px;
  justify-self: center;
}

#addList {
  height: 35px;
  justify-self: end;
  padding-right: 15px;
}

.titleList > button {
  border: none;
}

#toDoList {
  margin: 30px;
  display: flex;
  flex-flow: column;
  gap: 5px;
  grid-row: 2 / 4;
}

#list {
  list-style: none;
}

#list > div {
  display: grid;
  grid-template-columns: 1fr 10fr 3fr 3fr 1fr 1fr;
  margin-bottom: 5px;
  margin-top: 5px;
  align-items: center;
  justify-items: start;
  border: solid 1px var(--light-grey);
  height: 35px;
  border-radius: 10px;
}

#list > div:hover {
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
}

#list > div > input[type="checkbox"] {
  justify-self: center;
}

.date {
  justify-self: center;
}

.low {
  width: 80px;
  height: 20px;
  background-color: rgb(98, 255, 93);
  text-align: center;
  border-radius: 5px;
  justify-self: center;
}

.low::before {
  content: "low";
  color: white;
}

.medium {
  width: 80px;
  height: 20px;
  background-color: rgba(255, 235, 51, 0.877);
  text-align: center;
  border-radius: 5px;
  justify-self: center;
}

.medium::before {
  content: "medium";
  color: white;
}

.high {
  width: 80px;
  height: 20px;
  background-color: rgb(255, 57, 57);
  text-align: center;
  border-radius: 5px;
  justify-self: center;
}

.high::before {
  content: "high";
  color: white;
}

#editList {
  background-color: var(--light-grey);
  display: none;
  flex-flow: column;
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  padding: 20px;
  gap: 5px;
  margin: 10px;
  border-radius: 5px;
  margin-bottom: 0px;
  font-weight: 500;
  box-shadow: var(--box-shadow);
}

.editUpper {
  display: flex;
  justify-content: space-between;
}

#editLower {
  display: flex;
  justify-content: space-between;
  text-align: end;
  align-items: center;
}

#editList > button,
#details > button {
  width: 20%;
  height: 30px;
  align-self: flex-end;
  color: white;
  background-color: var(--sidebar-color);
  border-radius: 5px;
  border: none;
  font-size: 0.9em;
  font-weight: 600;
}

#editList > button:hover,
#details > button:hover {
  background-color: var(--sidebar-color-light);
}

#details {
  grid-column: 3 / 4;
  grid-row: 2 / 4;
  background-color: var(--light-grey);
  margin: 10px;
  border-radius: 5px;
  display: none;
  flex-flow: column;
  padding: 20px;
  gap: 5px;
  font-weight: 500;
  box-shadow: var(--box-shadow);
}

.detailsUpper {
  display: flex;
  justify-content: space-between;
}

#detailsLower {
  display: flex;
  justify-content: space-between;
  text-align: end;
  align-items: center;
}

.edit {
  height: 25px;
  content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.delete {
  height: 25px;
  content: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

#editList input,
#details input,
#projectInput {
  border-radius: 10px;
  height: 25px;
  font-family: "Roboto", sans-serif;
  border: none;
  padding: 5px;
  font-size: 0.9em;
  font-weight: 300;
}

#editList textarea,
#details textarea {
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  border: none;
  padding: 10px;
  font-size: 0.9em;
  font-weight: 300;
}

select {
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  border: none;
  font-size: 1em;
  padding: 5px;
  font-weight: 300;
}

#popupClose,
#closeEdit,
#closeDetails {
  border: none;
  height: 25px;
  width: 25px;
  color: white;
  background-color: var(--sidebar-color);
  border-radius: 5px;
}

#popupClose:hover,
#closeEdit:hover,
#closeDetails:hover {
  background-color: var(--sidebar-color-light);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[".roboto-thin {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 100;\n  font-style: normal;\n}\n\n.roboto-thin-italic {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 100;\n  font-style: italic;\n}\n\n.roboto-light {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.roboto-light-italic {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n  font-style: italic;\n}\n\n.roboto-regular {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n.roboto-regular-italic {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-style: italic;\n}\n\n.roboto-medium {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  font-style: normal;\n}\n\n.roboto-medium-italic {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  font-style: italic;\n}\n\n.roboto-bold {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  font-style: normal;\n}\n\n.roboto-bold-italic {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  font-style: italic;\n}\n\n.roboto-black {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 900;\n  font-style: normal;\n}\n\n.roboto-black-italic {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 900;\n  font-style: italic;\n}\n\n:root {\n  --sidebar-color: #003c5f;\n  --sidebar-color-light: #015484;\n  --light-grey: #f1f1f1;\n  --box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,\n    rgba(17, 17, 26, 0.1) 0px 0px 8px;\n}\n\nbody {\n  height: 100vh;\n  margin: 0;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-rows: 1fr 3fr 5fr;\n  grid-template-columns: minmax(300px, 1fr) 3fr 2fr;\n  font-family: \"Roboto\", sans-serif;\n}\n\n#header {\n  background-color: var(--light-grey);\n  grid-row: 1 / span 1;\n  grid-column: 2 / span 2;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 2vw;\n  padding-right: 2vw;\n}\n\n.searchIcon {\n  height: 25px;\n  width: 25px;\n  margin-left: auto;\n  margin-right: 10px;\n}\n\n#listSearch {\n  width: 25vw;\n  height: 35px;\n  border-radius: 10px;\n  border: none;\n  padding-left: 10px;\n}\n\n#sidebar {\n  grid-column: 1 / span 1;\n  grid-row: 1 / span 3;\n  background-color: var(--sidebar-color);\n  display: flex;\n  flex-flow: column;\n}\n\n#sidebar h1,\n#sidebar h2 {\n  padding-left: 30px;\n  color: white;\n  font-weight: 400;\n}\n\n#projectList {\n  display: flex;\n  flex-flow: column;\n}\n\n#projectList > div {\n  display: flex;\n  margin-left: -40px;\n  align-items: center;\n}\n\n.projectDelete {\n  content: url(../resources/whiteclose.svg);\n  height: 20px;\n  padding-right: 20px;\n}\n\n#projectList button {\n  border: none;\n  background: transparent;\n  color: white;\n  font-size: 1.1rem;\n  font-weight: 500;\n  width: 100%;\n  height: 40px;\n  text-align: start;\n  padding-left: 30px;\n}\n\n#projectList > div:hover {\n  background-color: var(--sidebar-color-light);\n}\n\n.select {\n  background-color: var(--sidebar-color-light);\n}\n\n#addProject {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  align-self: flex-start;\n  margin-top: auto;\n  margin-bottom: 2vh;\n  margin-left: 2vh;\n}\n\n#addProjectPopup {\n  position: absolute;\n  background-color: var(--light-grey);\n  width: 230px;\n  height: 100px;\n  align-self: center;\n  display: none;\n  flex-flow: column;\n  justify-content: space-between;\n  align-items: center;\n  bottom: 8vh;\n  border-radius: 5px;\n  padding: 15px;\n  font-weight: 500;\n  box-shadow: var(--box-shadow);\n}\n\n#addProjectPopup > div {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n#addProjectPopup > button {\n  align-self: end;\n  width: 20%;\n  height: 25px;\n  color: white;\n  background-color: var(--sidebar-color);\n  border-radius: 5px;\n  border: none;\n  font-size: 0.9em;\n  font-weight: 600;\n}\n\n#addProjectPopup > button:hover {\n  background-color: var(--sidebar-color-light);\n}\n\n#addProjectPopup > input {\n  width: 90%;\n  height: 25%;\n  border-radius: 10px;\n  padding-left: 10px;\n}\n\n#projectTitle {\n  font-weight: 500;\n}\n\n.titleList {\n  display: grid;\n  grid-template-columns: 1fr 10fr 3fr 3fr 2fr;\n  align-items: center;\n  justify-items: start;\n  background-color: var(--light-grey);\n  border-radius: 10px;\n  font-weight: 500;\n  height: 40px;\n}\n\n.titleList > img {\n  height: 30px;\n  justify-self: center;\n}\n\n#addList {\n  height: 35px;\n  justify-self: end;\n  padding-right: 15px;\n}\n\n.titleList > button {\n  border: none;\n}\n\n#toDoList {\n  margin: 30px;\n  display: flex;\n  flex-flow: column;\n  gap: 5px;\n  grid-row: 2 / 4;\n}\n\n#list {\n  list-style: none;\n}\n\n#list > div {\n  display: grid;\n  grid-template-columns: 1fr 10fr 3fr 3fr 1fr 1fr;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  align-items: center;\n  justify-items: start;\n  border: solid 1px var(--light-grey);\n  height: 35px;\n  border-radius: 10px;\n}\n\n#list > div:hover {\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;\n}\n\n#list > div > input[type=\"checkbox\"] {\n  justify-self: center;\n}\n\n.date {\n  justify-self: center;\n}\n\n.low {\n  width: 80px;\n  height: 20px;\n  background-color: rgb(98, 255, 93);\n  text-align: center;\n  border-radius: 5px;\n  justify-self: center;\n}\n\n.low::before {\n  content: \"low\";\n  color: white;\n}\n\n.medium {\n  width: 80px;\n  height: 20px;\n  background-color: rgba(255, 235, 51, 0.877);\n  text-align: center;\n  border-radius: 5px;\n  justify-self: center;\n}\n\n.medium::before {\n  content: \"medium\";\n  color: white;\n}\n\n.high {\n  width: 80px;\n  height: 20px;\n  background-color: rgb(255, 57, 57);\n  text-align: center;\n  border-radius: 5px;\n  justify-self: center;\n}\n\n.high::before {\n  content: \"high\";\n  color: white;\n}\n\n#editList {\n  background-color: var(--light-grey);\n  display: none;\n  flex-flow: column;\n  grid-column: 3 / 4;\n  grid-row: 2 / 3;\n  padding: 20px;\n  gap: 5px;\n  margin: 10px;\n  border-radius: 5px;\n  margin-bottom: 0px;\n  font-weight: 500;\n  box-shadow: var(--box-shadow);\n}\n\n.editUpper {\n  display: flex;\n  justify-content: space-between;\n}\n\n#editLower {\n  display: flex;\n  justify-content: space-between;\n  text-align: end;\n  align-items: center;\n}\n\n#editList > button,\n#details > button {\n  width: 20%;\n  height: 30px;\n  align-self: flex-end;\n  color: white;\n  background-color: var(--sidebar-color);\n  border-radius: 5px;\n  border: none;\n  font-size: 0.9em;\n  font-weight: 600;\n}\n\n#editList > button:hover,\n#details > button:hover {\n  background-color: var(--sidebar-color-light);\n}\n\n#details {\n  grid-column: 3 / 4;\n  grid-row: 2 / 4;\n  background-color: var(--light-grey);\n  margin: 10px;\n  border-radius: 5px;\n  display: none;\n  flex-flow: column;\n  padding: 20px;\n  gap: 5px;\n  font-weight: 500;\n  box-shadow: var(--box-shadow);\n}\n\n.detailsUpper {\n  display: flex;\n  justify-content: space-between;\n}\n\n#detailsLower {\n  display: flex;\n  justify-content: space-between;\n  text-align: end;\n  align-items: center;\n}\n\n.edit {\n  height: 25px;\n  content: url(../resources/edit.svg);\n}\n\n.delete {\n  height: 25px;\n  content: url(../resources/close.svg);\n}\n\n#editList input,\n#details input,\n#projectInput {\n  border-radius: 10px;\n  height: 25px;\n  font-family: \"Roboto\", sans-serif;\n  border: none;\n  padding: 5px;\n  font-size: 0.9em;\n  font-weight: 300;\n}\n\n#editList textarea,\n#details textarea {\n  border-radius: 10px;\n  font-family: \"Roboto\", sans-serif;\n  border: none;\n  padding: 10px;\n  font-size: 0.9em;\n  font-weight: 300;\n}\n\nselect {\n  border-radius: 10px;\n  font-family: \"Roboto\", sans-serif;\n  border: none;\n  font-size: 1em;\n  padding: 5px;\n  font-weight: 300;\n}\n\n#popupClose,\n#closeEdit,\n#closeDetails {\n  border: none;\n  height: 25px;\n  width: 25px;\n  color: white;\n  background-color: var(--sidebar-color);\n  border-radius: 5px;\n}\n\n#popupClose:hover,\n#closeEdit:hover,\n#closeDetails:hover {\n  background-color: var(--sidebar-color-light);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/project.js */ "./src/project.js");


let newList

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newList = class List {
    constructor(name, urgency, note, date, complete) {
        this.name = name;
        this.urgency = urgency;
        this.note = note;
        this.date = date;
        this.complete = false;
    }
    get name() {
        return this.item;
    }
    set name(newName) {
        this.item = newName;
    }
    set newUrgency(urgency) {
        this.urgency = urgency;
    }
});

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/list.js */ "./src/list.js");


let newProject

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProject = class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.toDoList = [];
    }
    get name() {
        return this.projectName;
    }
    set name(newName) {
        this.projectName = newName;
    }
    addToList(name, urgency, note, date, complete) {
        let addList = new _src_list_js__WEBPACK_IMPORTED_MODULE_0__["default"](name, urgency, note, date, complete);
        this.toDoList.push(addList);
    }
});



/***/ }),

/***/ "./resources/close.svg":
/*!*****************************!*\
  !*** ./resources/close.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a817d6f0f1ce81b7e93.svg";

/***/ }),

/***/ "./resources/edit.svg":
/*!****************************!*\
  !*** ./resources/edit.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eecf65e02cd3cefefc50.svg";

/***/ }),

/***/ "./resources/whiteclose.svg":
/*!**********************************!*\
  !*** ./resources/whiteclose.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f81e984d946de7d9cc81.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ "./src/style.css");
/* harmony import */ var _src_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/project.js */ "./src/project.js");



const sidebar = document.getElementById("projectList");
const projectInputWindow = document.getElementById("addProjectPopup");
const projectInput = document.getElementById("projectInput");
const addButton = document.getElementById("submit");
const popupCloseButton = document.getElementById("popupClose");
const showInputButton = document.getElementById("addProject");
const projectTitle = document.getElementById("projectTitle");
const taskName = document.getElementById("taskName");
const taskDesc = document.getElementById("taskDesc");
const deadline = document.getElementById("deadline");
const priority = document.getElementById("urgency");
const submitButton = document.getElementById("submitList");
const editTaskName = document.getElementById("editTaskName");
const editTaskDesc = document.getElementById("editTaskDesc");
const editDeadline = document.getElementById("editDeadline");
const editPriority = document.getElementById("editUrgency");
const editPopup = document.getElementById("editList");
const closeEditButton = document.getElementById("closeEdit");
const addListPopup = document.getElementById("details");
const addListButton = document.getElementById("addList");
const closeAddButton = document.getElementById("closeDetails");
const searchBar = document.getElementById("listSearch");

const listMain = document.getElementById("list");

let projectList = [];

let currentProject;

const updateStorage = function () {
    localStorage.setItem("projectStorage", JSON.stringify(projectList))
}

const getStorage = function () {
    JSON.parse(localStorage.getItem("projectStorage"))
}

if (localStorage.projectStorage === undefined) {
    let today = new _src_project_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Today");
    let thisWeek = new _src_project_js__WEBPACK_IMPORTED_MODULE_1__["default"]("This Week");
    thisWeek.addToList("Mum's birthday", "medium", "Remember to buy her a gift", "2024-04-29");
    thisWeek.addToList("Work meeting", "high", "Bring draft proposal", "2024-04-30");
    today.addToList("Meet friends for lunch", "low", "Call her 10 minutes before");
    today.addToList("Go shopping", "medium", "Buy apples");
    today.addToList("Make dinner", "low", "Look up pie recipe");
    projectList.push(today);
    projectList.push(thisWeek);
} else {
    projectList = JSON.parse(localStorage.getItem("projectStorage"));
}

let render = new class RenderClass {

    renderList(project, value) {
        let newDiv = document.createElement("div");
        let deleteButton = document.createElement("img");
        let editButton = document.createElement("img");
        let checkBox = document.createElement("input")
        checkBox.type = "checkbox";
        projectTitle.textContent = project.name;
        listMain.appendChild(newDiv);
        listMain.lastChild.classList.add(value);
        newDiv.appendChild(checkBox);
        newDiv.appendChild(document.createElement("li")).textContent = project.toDoList[value].item;
        newDiv.appendChild(document.createElement("li")).textContent = project.toDoList[value].date;
        newDiv.lastChild.classList.add("date");
        newDiv.appendChild(document.createElement("div"))
        newDiv.lastChild.classList.add(project.toDoList[value].urgency);
        newDiv.appendChild(editButton);
        editButton.classList.add("edit");
        editButton.addEventListener("click", () => {
            editEventListener(project, value);
        })
        newDiv.appendChild(deleteButton);
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", () => {
            deleteEventListener(listMain, newDiv, project, value);
        })
    }

    newListButton() {
        if (currentProject === undefined) {
            return alert("Please Select a List");
        } if (taskName.value === "") {
            alert("Please Enter a Task Name");
        } else {
            console.log(currentProject);
            currentProject.toDoList.push({ item: taskName.value, urgency: priority.value, note: taskDesc.value, date: deadline.value });
            taskName.value = "";
            priority.value = "low";
            taskDesc.value = "";
            deadline.value = "";
            render.refreshList(currentProject);
            updateStorage();
        }
    }

    projectButtons() {
        this.clearButtons();
        for (let x = 0; x < projectList.length; x++) {
            getStorage();
            this.newProjectButton(x);
        }
    }

    newProjectButton(value) {
        let newDiv = document.createElement("div");
        let newButton = document.createElement("button");
        let deleteButton = document.createElement("img");
        sidebar.appendChild(newDiv);
        newDiv.appendChild(newButton).textContent = projectList[value].projectName;
        newDiv.appendChild(deleteButton);
        deleteButton.classList.add("projectDelete")
        projectEventListeners(newDiv, value);
    }

    deleteProject(value) {
        projectList.splice(value, 1);
        render.projectButtons();
    }

    refreshList(project) {
        this.clearList();
        for (let x = 0; x < project.toDoList.length; x++) {
            render.renderList(project, x);
        }
    }

    clearList() {
        while (listMain.firstChild) {
            listMain.removeChild(listMain.lastChild);
        }
    }

    clearButtons() {
        while (sidebar.firstChild) {
            sidebar.removeChild(sidebar.lastChild);
        }
    }

}

searchBar.addEventListener("input", e => {
    render.clearList();
    const value = e.target.value.toLowerCase();
    console.log(currentProject);
    for (let x = 0; x < currentProject.toDoList.length; x++) {
        if (currentProject.toDoList[x].item.toLowerCase().includes(value)) {
            render.renderList(currentProject, x);
        }
    }
})

closeEditButton.addEventListener("click", () => {
    editPopup.style.display = "none";
    addListPopup.style.gridRow = "2 / 4";
})

closeAddButton.addEventListener("click", () => {
    addListPopup.style.display = "none";
})

addListButton.addEventListener("click", () => {
    if (addListPopup.style.display === "flex") {
        addListPopup.style.display = "none";
    } else {
        addListPopup.style.display = "flex";
    }
})

submitButton.addEventListener("click", render.newListButton);

// add project popup window
showInputButton.addEventListener("click", () => {
    if (projectInputWindow.style.display === "flex") {
        projectInputWindow.style.display = "none";
    } else {
        projectInputWindow.style.display = "flex";
    }
})

popupCloseButton.addEventListener("click", () => {
    projectInputWindow.style.display = "none";
})

// add a new project to list
addButton.addEventListener("click", () => {
    if (projectInput.value === "") {
        alert("Please Enter a Project Name");
    } else {
        projectList.push(new _src_project_js__WEBPACK_IMPORTED_MODULE_1__["default"](projectInput.value));
        updateStorage();
        render.projectButtons();
        projectInput.value = "";
    }
})

function projectEventListeners(element, value) {
    element.firstChild.addEventListener("click", () => {
        document.querySelector(".select")?.classList.remove("select");
        element.classList.add("select");
        render.refreshList(projectList[value]);
        currentProject = projectList[value];
    });
    element.lastChild.addEventListener("click", () => {
        render.deleteProject(value)
    });
}

function editEventListener(project, value) {
    editPopup.removeChild(editPopup.lastChild);
    editPopup.appendChild(document.createElement("button")).textContent = "Edit";
    editPopup.style.display = "flex";
    editPopup.style.gridRow = "2 / 3";
    editPopup.style.gridColumn = "3 / 4";
    addListPopup.style.gridRow = "3 / 4";
    editTaskName.value = project.toDoList[value].item;
    editTaskDesc.value = project.toDoList[value].note;
    editDeadline.value = project.toDoList[value].date;
    editPriority.value = project.toDoList[value].urgency;
    editPopup.lastChild.addEventListener('click', () => {
        editButtonListener(project, value)
    });
}

function editButtonListener(project, value) {
    if (editTaskName.value === "") {
        alert("Please Enter a Task Name");
    } else {
        project.toDoList[value].item = editTaskName.value;
        project.toDoList[value].note = editTaskDesc.value;
        project.toDoList[value].date = editDeadline.value;
        project.toDoList[value].urgency = editPriority.value;
        editPopup.style.display = "none";
        addListPopup.style.gridRow = "2 / 4";
        render.refreshList(currentProject);
    }
}
function deleteEventListener(element, element2, project, value) {
    element.removeChild(element2);
    project.toDoList.splice(value, 1);
    render.refreshList(project);
}

render.projectButtons();
console.log(projectList);
})();

/******/ })()
;
//# sourceMappingURL=bundle938a348559992550644a.js.map
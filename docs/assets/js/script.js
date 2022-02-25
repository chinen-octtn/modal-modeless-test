/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/assets/js/script.ts":
/*!************************************!*\
  !*** ./src/js/assets/js/script.ts ***!
  \************************************/
/***/ (function() {

eval("\nconst modal = () => {\n    const toggle = document.querySelectorAll('.toggle');\n    toggle.forEach((element) => {\n        element.addEventListener('click', () => {\n            const id = element.getAttribute('data-modal');\n            const modal = document.querySelector(`#${id}`);\n            modal?.setAttribute('aria-hidden', 'false');\n        });\n    });\n};\nconst closeModal = () => {\n    const close = document.querySelectorAll('.close');\n    close.forEach((element) => {\n        element.addEventListener('click', () => {\n            const modal = document.querySelectorAll('.modal');\n            modal.forEach((element) => {\n                element?.setAttribute('aria-hidden', 'true');\n            });\n        });\n    });\n};\nconst toast = () => {\n    const start = document.querySelectorAll('.start');\n    start.forEach((element) => {\n        element.addEventListener('click', () => {\n            const toast = document.querySelector('.toast');\n            toast?.setAttribute('aria-hidden', 'false');\n            setTimeout(() => {\n                toast?.setAttribute('aria-hidden', 'true');\n            }, 6000);\n        });\n    });\n};\nmodal();\ncloseModal();\ntoast();\n\n\n//# sourceURL=webpack://gulp-sample/./src/js/assets/js/script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/assets/js/script.ts"]();
/******/ 	
/******/ })()
;
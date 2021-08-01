/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\n  const activeClass = 'ativo';\n  \n  function activeAccordion() {\n    this.classList.toggle(activeClass);\n    this.nextElementSibling.classList.toggle(activeClass);\n  }\n\n  if(accordionList.length) {\n    accordionList[0].classList.add(activeClass);\n    accordionList[0].nextElementSibling.classList.add(activeClass);\n    \n    accordionList.forEach((item) => {\n      item.addEventListener('click', activeAccordion);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros(){\r\n  function animaNumeros(){\r\n    const numeros = document.querySelectorAll('[data-numero]');\r\n  \r\n    numeros.forEach(numero => {\r\n      const total = +numero.innerText;\r\n      const incremento = Math.floor(total / 100);\r\n    \r\n      let start = 0;\r\n      const timer = setInterval(() => {\r\n        start += incremento;\r\n        numero.innerText = start;\r\n        if(start > total){\r\n          numero.innerText = total;\r\n          clearInterval(timer);\r\n        }\r\n      }, 25);\r\n    });\r\n  }\r\n  \r\n  \r\n  \r\n  function handleMutation(mutation){\r\n    if(mutation[0].target.classList.contains('ativo')){\r\n      observer.disconnect();\r\n      animaNumeros();\r\n    }\r\n  }\r\n  \r\n  const observerTarget = document.querySelector('.numeros');\r\n  const observer = new MutationObserver(handleMutation);\r\n  \r\n  observer.observe(observerTarget, {attributes: true});\r\n}\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento(){\r\n  const now = new Date();\r\n  const funcionamento = document.querySelector('[data-semana]');\r\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);\r\n  const horario = funcionamento.dataset.horario.split(',').map(Number);\r\n\r\n  const nowDayWeek = now.getDay();\r\n  const nowHour = now.getHours();\r\n\r\n  const weekOpen = diasSemana.indexOf(nowDayWeek) !== -1;\r\n\r\n  const hourOpen = (nowHour >= horario[0] && nowHour < horario[1]);\r\n\r\n  if(hourOpen === true && weekOpen === true){\r\n    funcionamento.classList.remove('fechado');\r\n    funcionamento.classList.add('aberto');\r\n  }\r\n  else{\r\n    funcionamento.classList.remove('aberto');\r\n    funcionamento.classList.add('fechado');\r\n  }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-dropdown.js":
/*!*************************************!*\
  !*** ./js/modules/menu-dropdown.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\n\r\nfunction initDropdownMenu() {\r\n\r\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\r\n  dropdownMenus.forEach(menu => {\r\n    ['touchstart', 'click'].forEach(userEvent => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    });\r\n  });\r\n\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    this.classList.add('active');\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__.default)(this, ['touchstart', 'click'], () =>{\r\n      this.classList.remove('active');\r\n    });\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-dropdown.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nfunction initMenuMobile(){\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n  const eventos = ['touchstart', 'click'];\r\n  \r\n  function openMenu(){\r\n    menuList.classList.add('active');\r\n    menuButton.classList.add('active');\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__.default)(menuList, eventos, () => {\r\n      menuList.classList.remove('active');\r\n      menuButton.classList.remove('active');\r\n    })\r\n  }\r\n\r\n  if(menuButton){  \r\n    eventos.forEach(evento => menuButton.addEventListener(evento, openMenu))\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal(){\r\n  const btnAbrir = document.querySelector('[data-modal=\"abrir\"]');\r\n  const btnFechar = document.querySelector('[data-modal=\"fechar\"]');\r\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\r\n\r\n  function toogleModal(event){\r\n    console.log('modal teste')\r\n    event.preventDefault();\r\n    containerModal.classList.toggle('ativo');\r\n  }\r\n\r\n  function fecharModal(event){\r\n    if(event.target === this){\r\n      toogleModal(event);\r\n    }\r\n  }\r\n\r\n  btnAbrir.addEventListener('click', toogleModal);\r\n  btnFechar.addEventListener('click', toogleModal);\r\n  containerModal.addEventListener('click', fecharModal)\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = 'data-outside';\r\n\r\n  if(!element.hasAttribute(outside)) {\r\n    events.forEach(userEvent => {\r\n      setTimeout(()=> html.addEventListener(userEvent, handleOutsideClick));\r\n    });\r\n    element.setAttribute(outside, '');\r\n  }\r\n  function handleOutsideClick(event) {\r\n    if(!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach(userEvent => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      })\r\n      callback();\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n  const windowMetade = window.innerHeight * 0.6;\n\n    function animaScroll() {\n      sections.forEach((section) => {\n        const sectionTop = section.getBoundingClientRect().top;\n        const isSectionVisible = (sectionTop - windowMetade) < 0;\n        if(isSectionVisible)\n          section.classList.add('ativo');\n        else \n          section.classList.remove('ativo');\n      })\n    }\n  \n  if(sections.length) {\n    animaScroll();\n    window.addEventListener('scroll', animaScroll);\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\n  const linksInternos = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]');\n\n  function scrollToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n    section.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start',\n    });\n\n    // forma alternativa\n    // const topo = section.offsetTop;\n    // window.scrollTo({\n    //   top: topo,\n    //   behavior: 'smooth',\n    // });\n  }\n\n  linksInternos.forEach((link) => {\n    link.addEventListener('click', scrollToSection);\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\n\n  function activeTab(index) {\n    tabContent.forEach((section) => {\n      section.classList.remove('ativo');\n    });\n    const direcao = tabContent[index].dataset.anime;\n    tabContent[index].classList.add('ativo', direcao);\n  }\n\n  if(tabMenu.length && tabContent.length) {\n    tabContent[0].classList.add('ativo');\n    \n    tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => {\n        activeTab(index);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip(){\r\n  const tooltip = document.querySelectorAll('[data-tooltip]');\r\n  tooltip.forEach((item) => item.addEventListener('mouseover', onMouseOver));\r\n\r\n  function onMouseOver(event){\r\n    const tooltipBox = createTooltip(this);\r\n   \r\n    tooltipBox.style.top = event.pageY + 'px';\r\n    tooltipBox.style.left = event.pageX + 'px';\r\n   \r\n    onMouseMove.tooltipBox = tooltipBox;\r\n    this.addEventListener('mousemove', onMouseMove);\r\n  \r\n    onMouseLeave.tooltipBox = tooltipBox;\r\n    this.addEventListener('mouseleave', onMouseLeave);\r\n  \r\n    onMouseLeave.element = this;\r\n    \r\n  }\r\n  \r\n  const onMouseMove = {\r\n    handleEvent(event){\r\n      this.tooltipBox.style.top = event.pageY + 20 +'px';\r\n      this.tooltipBox.style.left = event.pageX + 20 +'px';\r\n    }\r\n  }\r\n  \r\n  const onMouseLeave = {\r\n    handleEvent(){\r\n      this.tooltipBox.remove();\r\n      this.element.removeEventListener('mouseleave', onMouseLeave);\r\n      this.element.removeEventListener('mousemove', onMouseMove);\r\n    }\r\n  }\r\n  \r\n  \r\n  \r\n  function createTooltip(element){\r\n    const tooltipBox = document.createElement('div');\r\n    const text = element.getAttribute('aria-label');\r\n    tooltipBox.classList.add('tooltip');\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    return tooltipBox;\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu-dropdown.js */ \"./js/modules/menu-dropdown.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_anima_numeros_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_7__.default)();\r\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_6__.default)();\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_5__.default)();\r\n(0,_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_8__.default)();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_9__.default)();\r\n(0,_modules_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n(0,_modules_anima_numeros_js__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_4__.default)();\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;
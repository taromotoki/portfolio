/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("let mySwiper = new Swiper('.swiper-container', {\n  navigation: {  //ナビゲーションのオプション（矢印ボタンの要素を指定）\n    nextEl: '.swiper-button-next',\n    prevEl: '.swiper-button-prev',\n  }\n});\n\n//マウスストーカー用のdivを取得\nconst pointer = document.querySelector('.stalker__pointer'); \nconst circle = document.querySelector('.stalker__circle');\nconst text = document.querySelector('.stalker__text');\n\n//上記のdivタグをマウスに追従させる処理\ndocument.addEventListener('mousemove', function (e) {\n  circle.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';\n  pointer.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';\n  text.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';\n});\n\nconst stalker = document.querySelector('.stalker');\nconst next = document.querySelector('.swiper-button-next');\nconst prev = document.querySelector('.swiper-button-prev');\nconst slide = document.querySelectorAll('.swiper-slide');\n\nnext.addEventListener('mouseover', function () {\n  stalker.classList.add('next');\n});\nnext.addEventListener('mouseout', function () {\n  stalker.classList.remove('next');\n});\nprev.addEventListener('mouseover', function () {\n  stalker.classList.add('prev');\n});\nprev.addEventListener('mouseout', function () {\n  stalker.classList.remove('prev');\n});\n\nfor(let i = 0; i < slide.length; i++) {\n  slide[i].addEventListener('mouseover', function () {\n    stalker.classList.add('slide-hover');\n  });\n  slide[i].addEventListener('mouseout', function () {\n    stalker.classList.remove('slide-hover');\n  });\n}\n\nif (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {\n  document.querySelector('.stalker').style.display = \"none\";\n}\n\ndocument.body.addEventListener(\"mouseleave\", () => {\n    document.querySelector('.stalker').style.opacity = 0;\n});\n\ndocument.body.addEventListener(\"mouseenter\", () => {\n  document.querySelector('.stalker').style.opacity = 1;\n});\n\n//# sourceURL=webpack://portfolio2021/./src/js/main.js?");

/***/ }),

/***/ "./src/js/noise.js":
/*!*************************!*\
  !*** ./src/js/noise.js ***!
  \*************************/
/***/ (function() {

"use strict";
eval("\nconst noise = () => {\n    let canvas, ctx;\n\n    let wWidth, wHeight;\n\n    let noiseData = [];\n    let frame = 0;\n\n    let loopTimeout;\n\n\n    // Create Noise\n    const createNoise = () => {\n        const idata = ctx.createImageData(wWidth, wHeight);\n        const buffer32 = new Uint32Array(idata.data.buffer);\n        const len = buffer32.length;\n\n        for (let i = 0; i < len; i++) {\n            if (Math.random() < 0.5) {\n                buffer32[i] = 0xff292929;\n            }\n        }\n\n        noiseData.push(idata);\n    };\n\n\n    // Play Noise\n    const paintNoise = () => {\n        if (frame === 9) {\n            frame = 0;\n        } else {\n            frame++;\n        }\n\n        ctx.putImageData(noiseData[frame], 0, 0);\n    };\n\n\n    // Loop\n    const loop = () => {\n        paintNoise(frame);\n\n        loopTimeout = window.setTimeout(() => {\n            window.requestAnimationFrame(loop);\n        }, (1000 / 25));\n    };\n\n\n    // Setup\n    const setup = () => {\n        wWidth = window.innerWidth;\n        wHeight = window.innerHeight;\n\n        canvas.width = wWidth;\n        canvas.height = wHeight;\n\n        for (let i = 0; i < 10; i++) {\n            createNoise();\n        }\n\n        loop();\n    };\n\n\n    // Reset\n    let resizeThrottle;\n    const reset = () => {\n        window.addEventListener('resize', () => {\n            window.clearTimeout(resizeThrottle);\n\n            resizeThrottle = window.setTimeout(() => {\n                window.clearTimeout(loopTimeout);\n                setup();\n            }, 200);\n        }, false);\n    };\n\n\n    // Init\n    const init = (() => {\n        canvas = document.getElementById('noise');\n        ctx = canvas.getContext('2d');\n\n        setup();\n    })();\n};\n\nnoise();\n\n//# sourceURL=webpack://portfolio2021/./src/js/noise.js?");

/***/ }),

/***/ "./src/js/spanWrap.js":
/*!****************************!*\
  !*** ./src/js/spanWrap.js ***!
  \****************************/
/***/ (function() {

eval("function spanWrap() {\n  const target = document.querySelectorAll('.js-span-wrap-text');\n\n  for (let i = 0; i < target.length; i++) {\n    const nodes = target[i].childNodes;\n    let convert = [];\n    for (let node of nodes) {\n      if (node.nodeType == 3) {//テキストの場合\n        let text = node.textContent.replace(/\\s+/g, '');\n        text.split('').forEach((v) => {\n          convert.push(\"<span>\" + v + \"</span>\");\n        });\n  \n      } else {//テキスト以外\n        convert.push(node.outerHTML);\n      }\n    }\n    target[i].innerHTML = convert.join(\"\");\n  }\n}\n\nspanWrap();\n\n//# sourceURL=webpack://portfolio2021/./src/js/spanWrap.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	__webpack_modules__["./src/js/noise.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/spanWrap.js"]();
/******/ 	
/******/ })()
;
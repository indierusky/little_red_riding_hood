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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/bees.png":
/*!*************************!*\
  !*** ./public/bees.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/bees.png");

/***/ }),

/***/ "./public/collide.png":
/*!****************************!*\
  !*** ./public/collide.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/collide.png");

/***/ }),

/***/ "./public/lilredhood.jpg":
/*!*******************************!*\
  !*** ./public/lilredhood.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/lilredhood.jpg");

/***/ }),

/***/ "./public/newlilr.png":
/*!****************************!*\
  !*** ./public/newlilr.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/newlilr.png");

/***/ }),

/***/ "./public/wolves.png":
/*!***************************!*\
  !*** ./public/wolves.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/wolves.png");

/***/ }),

/***/ "./src/barrier.js":
/*!************************!*\
  !*** ./src/barrier.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Barrier = /*#__PURE__*/function () {
  function Barrier(canvas1, ctx, x, y, width, height, speed, gameSpeed, img, type) {
    _classCallCheck(this, Barrier);

    this.canvas1 = canvas1;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.type = type;
    this.frameX = 0;
    this.frameY = 0;
    this.ctx = ctx;
    this.gameSpeed = gameSpeed;
    this.image = img;
  }

  _createClass(Barrier, [{
    key: "draw",
    value: function draw() {
      if (this.type === 'wolf') {
        this.frameY = 1;
        this.frameX = 0;
        if (this.frameX > 2) this.frameX = 0;else this.frameX++;
        this.ctx.drawImage(this.image, this.frameX * 288.5, this.frameY * 100, 47, 48, this.x, this.y, this.width, this.height); // this.ctx.drawImage(this.image,this.frameX*145, this.frameY*65, 47,48, this.x , this.y, this.width, this.height)
      }

      if (this.type === 'wolfl') {
        this.frameX = 0;
        this.frameY = 1;
        if (this.frameX > 2) this.frameX = 0;else this.frameX++;
        this.ctx.drawImage(this.image, this.frameX * 145, this.frameY * 65, 47, 48, this.x + 800, this.y + 100, this.width, this.height);
      }

      if (this.type === 'bee') {
        this.frameX = 0;
        this.frameY = 1;
        if (this.frameX > 5) this.frameX = 0;else this.frameX++;
        this.ctx.drawImage(this.image, this.frameX, this.frameY, 71, 71, this.x + 800, this.y + 100, this.width, this.height);
      } // ctx1.fillStyle = "red";
      // ctx1.fillRect(this.x, this.y, this.width, this.height)

    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.speed * this.gameSpeed;

      if (this.x > this.canvas1.width * this.width) {
        this.x = 0 - this.width;
      }
    }
  }]);

  return Barrier;
}();

/* harmony default export */ __webpack_exports__["default"] = (Barrier);

/***/ }),

/***/ "./src/character.js":
/*!**************************!*\
  !*** ./src/character.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Character = /*#__PURE__*/function () {
  function Character(ctx, img, keys, score, gameSpeed) {
    _classCallCheck(this, Character);

    this.width = 48;
    this.height = 48;
    this.frameX = 0;
    this.frameY = 2;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height - this.height - 40 + 50;
    this.speed = Math.random() * 1.5 + 3.5;
    this.moving = false;
    this.image = img;
    this.ctx = ctx;
    this.keys = keys;
    this.score = score;
    this.gameSpeed = gameSpeed;
  }

  _createClass(Character, [{
    key: "drawSprite",
    value: function drawSprite() {
      this.ctx.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.height, this.width, this.x, this.y, this.width, this.height + 15);
    } // draw(){
    //     drawSprite( this.ctx, this.image, this.width * this.frameX, this.height * this.frameY, this.width, this.height,this.x, this.y, this.width, this.height+15);
    // }

  }, {
    key: "movePlayer",
    value: function movePlayer() {
      if (this.keys['ArrowUp'] && this.y >= 100) {
        this.y -= this.speed;
        this.frameY = 3;
        this.moving = true;
      }

      if (this.keys['ArrowLeft'] && this.x > 0) {
        this.x -= this.speed;
        this.frameY = 1;
        this.width = 48;
        this.height = 48;
        this.moving = true;
      }

      if (this.keys['ArrowDown'] && this.y < canvas.height - this.height) {
        this.y += this.speed;
        this.frameY = 0;
        this.moving = true;
      }

      if (this.keys['ArrowRight'] && this.x < canvas.width - this.width) {
        this.x += this.speed;
        this.frameY = 2;
        this.moving = true;
      } //  if(this.y <= 600  && this.x >= 1350){
      // const scoringPositionY =  parseFloat(ridingHood.y / window.innerHeight).toFixed(2);
      // const scoringPositionX = parseFloat(ridingHood.x / window.innerWidth).toFixed(2);
      // console.log(`posx: '${scoringPositionX}`);
      // console.log(`posy: '${scoringPositionY}`);
      //  if( ( scoringPositionY <= parseFloat(".79").toFixed(2)) && ( scoringPositionX >= parseFloat(".71").toFixed(2)) ) {
      //   if( ((window.innerHeight - ridingHood.y) < 300)  && ((window.innerWidth - ridingHood.x) < 500)  )
      // {     
      //       this.score++;
      //       this.gameSpeed += .5;
      //    }

    }
  }, {
    key: "handlePlayerFrame",
    value: function handlePlayerFrame() {
      if (this.frameY < 2) {
        if (this.frameX < 8 && this.moving) this.frameX++;else this.frameX = 0;
      } else if (this.frameY === 2) {
        if (this.frameX < 5 && this.moving) this.frameX++;else this.frameX = 0;
      } else if (this.frameY > 2 && this.frameY < 5) {
        if (this.frameX < 3 && this.moving) this.frameX++;else this.frameX = 0;
      } else if (this.frameY === 5) {
        if (this.frameX < 2 && this.moving) this.frameX++;else this.frameX = 0;
      }
    }
  }]);

  return Character;
}();

/* harmony default export */ __webpack_exports__["default"] = (Character);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ "./src/character.js");
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./particle */ "./src/particle.js");
/* harmony import */ var _barrier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./barrier */ "./src/barrier.js");
/* harmony import */ var _public_newlilr_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/newlilr.png */ "./public/newlilr.png");
/* harmony import */ var _public_collide_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/collide.png */ "./public/collide.png");
/* harmony import */ var _public_wolves_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/wolves.png */ "./public/wolves.png");
/* harmony import */ var _public_bees_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/bees.png */ "./public/bees.png");
/* harmony import */ var _public_lilredhood_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/lilredhood.jpg */ "./public/lilredhood.jpg");



 // import back from '../public/grandma3.jpg';





var unit = 80;
var score = 0;
var collissions = 0;
var frame = 0;
var gameSpeed = 1; //made image changes

var wolvesArray = [];
var particlesArray = [];
var barriersArray = [];
var maxParticles = 100;
var maxWolves = 5;
var maxLives = 5;
var keys = [];
var mode = 0;
window.barriersArray = barriersArray;
window.wolvesArray = wolvesArray;
document.addEventListener('DOMContentLoaded', function () {
  var canvas1 = document.getElementById("canvas");
  canvas1.width = 650;
  canvas1.height = 650;
  window.canvas1Height = canvas1.height;
  window.canvas1Width = canvas1.width;
  var ctx1 = canvas1.getContext("2d");
  ctx1.fillStyle = 'black';
  ctx1.strokeStyle = 'red';
  ctx1.font = '18px Verdana';
  ctx1.strokeText('Use Arrow Keys to move. ', 225, 125);
  ctx1.strokeText('Follow Path to get to grandmas house.', 225, 165);
  ctx1.strokeText('PRESS ENTER TO START', 225, 205);

  var drawSprite = function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx1.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  };

  var htp = document.getElementById("htp");
  var db = document.getElementById("directions-background");

  htp.onclick = function () {
    db.style.display = "block";
  };

  window.onclick = function (e) {
    if (e.target === db) {
      db.style.display = "none";
    }
  };

  var images = {}; // const topimg = document.createElement("img");
  // topimg.src = buildAssetPath(topimg);
  // topimg.classList.add("top");

  var disp = document.createElement("div");
  disp.classList.add("disp", "top", "top-img");
  document.body.append(disp); // document.body.appendChild(topimg);

  images.player = new Image();
  images.player.src = buildAssetPath(_public_newlilr_png__WEBPACK_IMPORTED_MODULE_3__["default"]); // images.back = new Image();
  // images.back.src = buildAssetPath(back);

  images.collide = new Image();
  images.collide.src = buildAssetPath(_public_collide_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
  images.wolf = new Image();
  images.wolf.src = buildAssetPath(_public_wolves_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
  images.bee = new Image();
  images.bee.src = buildAssetPath(_public_bees_png__WEBPACK_IMPORTED_MODULE_6__["default"]);

  function buildAssetPath(imgSrc) {
    return "./dist/".concat(imgSrc);
  }

  images.bee.onload = function () {
    var ridingHood = new _character__WEBPACK_IMPORTED_MODULE_0__["default"](ctx1, images.player, keys, score, gameSpeed); // wolfimg.onload = function() {

    var initBarriers = function initBarriers() {
      for (var i = 0; i < 2; i++) {
        var x = i * 350;
        wolvesArray.push(new _barrier__WEBPACK_IMPORTED_MODULE_2__["default"](canvas1, ctx1, x, canvas1.height - unit * 2 - 20, unit, unit, 1, gameSpeed, images.wolf, 'wolf'));
      }

      for (var _i = 0; _i < 2; _i++) {
        var _x = _i * 300;

        wolvesArray.push(new _barrier__WEBPACK_IMPORTED_MODULE_2__["default"](canvas1, ctx1, _x, canvas1.height - unit * 3 - 20, unit * 2, unit, -2, gameSpeed, images.wolf, 'wolfl'));
      }

      for (var _i2 = 0; _i2 < 2; _i2++) {
        var _x2 = _i2 * 350;

        wolvesArray.push(new _barrier__WEBPACK_IMPORTED_MODULE_2__["default"](canvas1, ctx1, _x2, canvas1.height - unit * 4 - 20, unit, unit, 2, gameSpeed, images.wolf, 'wolf'));
      }

      for (var _i3 = 0; _i3 < 2; _i3++) {
        var _x3 = _i3 * 400;

        barriersArray.push(new _barrier__WEBPACK_IMPORTED_MODULE_2__["default"](canvas1, ctx1, _x3, canvas1.height - unit * 5 - 20, unit * 2, unit, -2, gameSpeed, images.bee, 'bee'));
      } // beeimg.onload = function() {


      for (var _i4 = 0; _i4 < 3; _i4++) {
        var _x4 = _i4 * 200;

        barriersArray.push(new _barrier__WEBPACK_IMPORTED_MODULE_2__["default"](canvas1, ctx1, _x4, canvas1.height - unit * 6 - 20, unit * 2, unit, 1, gameSpeed, images.bee, 'bee'));
      } // }

    };

    initBarriers();

    function handleBarriers() {
      for (var i = 0; i < wolvesArray.length; i++) {
        wolvesArray[i].update();
        wolvesArray[i].draw();
      }

      for (var _i5 = 0; _i5 < barriersArray.length; _i5++) {
        barriersArray[_i5].update();

        barriersArray[_i5].draw();
      }

      for (var _i6 = 0; _i6 < wolvesArray.length; _i6++) {
        if (collide(ridingHood, wolvesArray[_i6])) {
          // destroy(wolvesArray[i]);
          drawSprite(images.collide, 0, 0, 81, 80, ridingHood.x, ridingHood.y, ridingHood.width, ridingHood.height);
          resetGame();
        }
      }

      for (var _i7 = 0; _i7 < barriersArray.length; _i7++) {
        if (collide(ridingHood, barriersArray[_i7])) {
          // destroy(barriersArray[i]);
          drawSprite(images.collide, 0, 0, 81, 80, ridingHood.x, ridingHood.y, ridingHood.width, ridingHood.height);
          resetGame();
        }
      }
    }

    function handleParticles() {
      for (var i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      if (particlesArray.length > maxParticles) {
        for (var _i8 = 0; _i8 < particlesArray.length; _i8++) {
          particlesArray.pop();
        }
      }

      if ((keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight']) && ridingHood.y > 100 && particlesArray.length < maxParticles + 10) {
        for (var _i9 = 0; _i9 < 10; _i9++) {
          var pt = new _particle__WEBPACK_IMPORTED_MODULE_1__["default"](ctx1, ridingHood.x, ridingHood.y);
          particlesArray.unshift(pt);
        }
      }
    }

    function scores() {
      score++;
      gameSpeed += .5;
      ridingHood.x = canvas1.width / 2 - ridingHood.width / 2;
      ridingHood.y = canvas1.height - ridingHood.height - 40;
      initBarriers();
    }

    window.addEventListener("keydown", function (e) {
      keys[e.code] = true;
      if (e.code === 'Enter') startAnimating(20);
      ridingHood.moving = true;
      var scoringPositionY = parseFloat(ridingHood.y / window.innnerHeight).toFixed(2);
      var scoringPositionX = parseFloat(ridingHood.x / window.innerWidth).toFixed(2);
      if (window.innerHeight > ridingHood.y && window.innerHeight - ridingHood.y < 318 && (window.innnerWidth > ridingHood.x)(window.innerWidth - ridingHood.x < 202)) scores();
    });
    window.addEventListener("keyup", function (e) {
      delete keys[e.code];
      ridingHood.moving = false;
      if (canvas1.height > ridingHood.y && canvas1.height - ridingHood.y < 318 && canvas1.width - ridingHood.x < 202) scores();
    });
    window.ridingHood = ridingHood; // window.onload = setInterval(animate, 1000/30);
    // window.addEventListener('resize', function() {
    // canvas1.height = window.innerHeight;
    // canvas1.width = window.innerWidth;
    // })

    function scoreBoard() {
      ctx1.fillStyle = 'black';
      ctx1.strokeStyle = 'black';
      ctx1.font = '18px Verdana';
      ctx1.strokeText('Score', 370, 65);
      ctx1.font = '60px Verdana';
      ctx1.fillText(score, 370, 110);
      ctx1.font = '18px Verdana';
      ctx1.strokeText('Lives:' + collissions, 10, 175);
      ctx1.strokeText('Game Speed:' + gameSpeed, 10, 195);
    }

    function collide(first, second) {
      return !(first.x > second.x + second.width || first.x + first.width < second.x || first.y > second.y + second.height || first.y + first.height < second.y);
    }

    function resetGame() {
      ridingHood.x = canvas1.width / 2 - ridingHood.width / 2;
      ridingHood.y = canvas1.height - ridingHood.height - 40;
      score = 0;
      collissions++;
      gameSpeed = 1;
    }

    var fps, fpsInterval, startTime, now, then, elapsed;

    function startAnimating(fps) {
      // document.body.remove(disp);
      fpsInterval = 1000 / fps;
      then = Date.now();
      startTime = then;
      animate();
    }

    var animate = function animate() {
      requestAnimationFrame(animate);
      now = Date.now();
      elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - elapsed % fpsInterval;
        ctx1.clearRect(0, 0, canvas1.width, canvas1.height); // ctx1.drawImage(images.back, 100, 100, canvas1.width, canvas1.height);

        handleParticles();
        ridingHood.drawSprite();
        ridingHood.movePlayer();
        ridingHood.handlePlayerFrame();
        scoreBoard();
        handleBarriers();
      } // }

    };
  };
});

/***/ }),

/***/ "./src/particle.js":
/*!*************************!*\
  !*** ./src/particle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Particle = /*#__PURE__*/function () {
  function Particle(ctx, x, y) {
    _classCallCheck(this, Particle);

    this.x = x + 25;
    this.y = y + 80;
    this.radius = Math.random() * 20 + 1;
    this.opacity = .5;
    this.directX = Math.random() * 1 - 0.5;
    this.directY = Math.random() * 1 - 0.5;
    this.ctx1 = ctx;
  }

  _createClass(Particle, [{
    key: "draw",
    value: function draw() {
      this.ctx1.fillStyle = 'rgba(255,128,0,' + this.opacity + ')';
      this.ctx1.beginPath();
      this.ctx1.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      this.ctx1.fill();
      this.ctx1.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.directX;
      this.y += this.directY;

      if (this.opacity > .1) {
        this.opacity -= .4;
      }

      if (this.radius > .15) {
        this.radius -= .14;
      }
    }
  }]);

  return Particle;
}();

/* harmony default export */ __webpack_exports__["default"] = (Particle);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2JlZXMucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9jb2xsaWRlLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbGlscmVkaG9vZC5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25ld2xpbHIucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy93b2x2ZXMucG5nIiwid2VicGFjazovLy8uL3NyYy9iYXJyaWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYXJ0aWNsZS5qcyJdLCJuYW1lcyI6WyJCYXJyaWVyIiwiY2FudmFzMSIsImN0eCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJzcGVlZCIsImdhbWVTcGVlZCIsImltZyIsInR5cGUiLCJmcmFtZVgiLCJmcmFtZVkiLCJpbWFnZSIsImRyYXdJbWFnZSIsIkNoYXJhY3RlciIsImtleXMiLCJzY29yZSIsImNhbnZhcyIsIk1hdGgiLCJyYW5kb20iLCJtb3ZpbmciLCJ1bml0IiwiY29sbGlzc2lvbnMiLCJmcmFtZSIsIndvbHZlc0FycmF5IiwicGFydGljbGVzQXJyYXkiLCJiYXJyaWVyc0FycmF5IiwibWF4UGFydGljbGVzIiwibWF4V29sdmVzIiwibWF4TGl2ZXMiLCJtb2RlIiwid2luZG93IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW52YXMxSGVpZ2h0IiwiY2FudmFzMVdpZHRoIiwiY3R4MSIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImZvbnQiLCJzdHJva2VUZXh0IiwiZHJhd1Nwcml0ZSIsInNYIiwic1kiLCJzVyIsInNIIiwiZFgiLCJkWSIsImRXIiwiZEgiLCJodHAiLCJkYiIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJlIiwidGFyZ2V0IiwiaW1hZ2VzIiwiZGlzcCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwiYXBwZW5kIiwicGxheWVyIiwiSW1hZ2UiLCJzcmMiLCJidWlsZEFzc2V0UGF0aCIsInJpZGVyIiwiY29sbGlkZSIsIndvbGYiLCJiZWUiLCJpbWdTcmMiLCJvbmxvYWQiLCJyaWRpbmdIb29kIiwiaW5pdEJhcnJpZXJzIiwiaSIsInB1c2giLCJoYW5kbGVCYXJyaWVycyIsImxlbmd0aCIsInVwZGF0ZSIsImRyYXciLCJyZXNldEdhbWUiLCJoYW5kbGVQYXJ0aWNsZXMiLCJwb3AiLCJwdCIsIlBhcnRpY2xlIiwidW5zaGlmdCIsInNjb3JlcyIsImNvZGUiLCJzdGFydEFuaW1hdGluZyIsInNjb3JpbmdQb3NpdGlvblkiLCJwYXJzZUZsb2F0IiwiaW5ubmVySGVpZ2h0IiwidG9GaXhlZCIsInNjb3JpbmdQb3NpdGlvblgiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJpbm5uZXJXaWR0aCIsInNjb3JlQm9hcmQiLCJmaWxsVGV4dCIsImZpcnN0Iiwic2Vjb25kIiwiZnBzIiwiZnBzSW50ZXJ2YWwiLCJzdGFydFRpbWUiLCJub3ciLCJ0aGVuIiwiZWxhcHNlZCIsIkRhdGUiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0IiwibW92ZVBsYXllciIsImhhbmRsZVBsYXllckZyYW1lIiwicmFkaXVzIiwib3BhY2l0eSIsImRpcmVjdFgiLCJkaXJlY3RZIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsIiwiY2xvc2VQYXRoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FB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T0FBTCxHQUFlLEVBQWxCLEVBQXFCO0FBRWpCLGFBQUtBLE9BQUwsSUFBZ0IsRUFBaEI7QUFDSDs7QUFFRCxVQUFHLEtBQUtELE1BQUwsR0FBYyxHQUFqQixFQUFxQjtBQUVqQixhQUFLQSxNQUFMLElBQWUsR0FBZjtBQUNIO0FBQ0o7Ozs7OztBQUtjN0IsdUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9iZWVzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2NvbGxpZGUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvbGlscmVkaG9vZC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9uZXdsaWxyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvbHZlcy5wbmdcIjsiLCJjbGFzcyBCYXJyaWVyIHtcblxuY29uc3RydWN0b3IoY2FudmFzMSxjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHNwZWVkLCBnYW1lU3BlZWQsaW1nLHR5cGUpe1xuXG50aGlzLmNhbnZhczEgPSBjYW52YXMxO1xudGhpcy54ID0geDtcbnRoaXMueSA9IHk7XG50aGlzLndpZHRoID0gd2lkdGg7XG50aGlzLmhlaWdodCA9IGhlaWdodDtcbnRoaXMuc3BlZWQgPSBzcGVlZDtcbnRoaXMudHlwZSA9IHR5cGU7XG50aGlzLmZyYW1lWCA9IDA7XG50aGlzLmZyYW1lWSA9IDA7XG50aGlzLmN0eCA9IGN0eDtcbnRoaXMuZ2FtZVNwZWVkID0gZ2FtZVNwZWVkO1xudGhpcy5pbWFnZSA9IGltZztcbn1cblxuXG5kcmF3KCl7XG5cblxuaWYodGhpcy50eXBlID09PSAnd29sZicpe1xuICAgIFxudGhpcy5mcmFtZVkgPSAxO1xudGhpcy5mcmFtZVggPTA7XG5pZiAodGhpcy5mcmFtZVggPiAyKSB0aGlzLmZyYW1lWCA9IDA7XG5lbHNlIHRoaXMuZnJhbWVYKys7XG50aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLmZyYW1lWCoyODguNSwgdGhpcy5mcmFtZVkqMTAwLCA0Nyw0OCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuLy8gdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5mcmFtZVgqMTQ1LCB0aGlzLmZyYW1lWSo2NSwgNDcsNDgsIHRoaXMueCAsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG59XG5cblxuXG5pZih0aGlzLnR5cGUgPT09ICd3b2xmbCcpe1xuICAgICBcbnRoaXMuZnJhbWVYID0gMDtcbnRoaXMuZnJhbWVZID0gMTtcbmlmICh0aGlzLmZyYW1lWCA+IDIpIHRoaXMuZnJhbWVYID0gMDtcbmVsc2UgdGhpcy5mcmFtZVgrKztcblxudGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5mcmFtZVgqMTQ1LCB0aGlzLmZyYW1lWSo2NSwgNDcsNDgsIHRoaXMueCArIDgwMCwgdGhpcy55ICsgMTAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcblxufVxuXG5cblxuXG5pZih0aGlzLnR5cGUgPT09ICdiZWUnKXtcbnRoaXMuZnJhbWVYID0gMDtcbnRoaXMuZnJhbWVZID0gMTsgICAgXG4gXG5pZiAodGhpcy5mcmFtZVggPiA1KSB0aGlzLmZyYW1lWCA9IDA7XG5lbHNlIHRoaXMuZnJhbWVYKys7XG50aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLmZyYW1lWCwgdGhpcy5mcmFtZVksIDcxLDcxLCB0aGlzLnggKyA4MDAsIHRoaXMueSArMTAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcblxufVxuXG4vLyBjdHgxLmZpbGxTdHlsZSA9IFwicmVkXCI7XG4vLyBjdHgxLmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcblxufVxuXG51cGRhdGUoKXtcblxuICAgIFxuICAgIFxuICAgIHRoaXMueCArPSB0aGlzLnNwZWVkICogdGhpcy5nYW1lU3BlZWQ7XG4gICAgXG5cblxuICAgIGlmKHRoaXMueCA+IHRoaXMuY2FudmFzMS53aWR0aCAqIHRoaXMud2lkdGgpe1xuXG4gICAgICAgICAgICB0aGlzLnggPSAwIC0gdGhpcy53aWR0aDtcblxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5cbn1cblxuXG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBCYXJyaWVyO1xuIiwiXG5jbGFzcyBDaGFyYWN0ZXIge1xuXG5jb25zdHJ1Y3RvcihjdHgsIGltZywga2V5cywgc2NvcmUsIGdhbWVTcGVlZCl7XG5cbnRoaXMud2lkdGggPSA0ODtcbnRoaXMuaGVpZ2h0ID0gNDg7XG50aGlzLmZyYW1lWCA9IDA7XG50aGlzLmZyYW1lWSA9IDI7XG50aGlzLnggPSBjYW52YXMud2lkdGgvMiAtIHRoaXMud2lkdGgvMjtcbnRoaXMueSA9IChjYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSA0MCkgKyA1MDtcbnRoaXMuc3BlZWQgPSAoTWF0aC5yYW5kb20oKSAqIDEuNSkgKyAzLjU7XG50aGlzLm1vdmluZyA9IGZhbHNlO1xudGhpcy5pbWFnZSA9IGltZztcbnRoaXMuY3R4ID0gY3R4O1xudGhpcy5rZXlzID0ga2V5cztcbnRoaXMuc2NvcmUgPSBzY29yZTtcbnRoaXMuZ2FtZVNwZWVkID0gZ2FtZVNwZWVkO1xuXG59XG5cblxuXG5kcmF3U3ByaXRlKCl7XG5cbnRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLmZyYW1lWCp0aGlzLndpZHRoLCB0aGlzLmZyYW1lWSp0aGlzLmhlaWdodCwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCsxNSApO1xuXG59XG5cblxuLy8gZHJhdygpe1xuXG4vLyAgICAgZHJhd1Nwcml0ZSggdGhpcy5jdHgsIHRoaXMuaW1hZ2UsIHRoaXMud2lkdGggKiB0aGlzLmZyYW1lWCwgdGhpcy5oZWlnaHQgKiB0aGlzLmZyYW1lWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KzE1KTtcbiAgIFxuXG4vLyB9XG5cblxuXG5cbiBtb3ZlUGxheWVyKCl7XG5cbiAgaWYodGhpcy5rZXlzWydBcnJvd1VwJ10gJiYgdGhpcy55ID49IDEwMCApe1xuICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkOyAgIFxuICAgIHRoaXMuZnJhbWVZID0gMztcbiAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgXG4gIH1cblxuICBpZih0aGlzLmtleXNbJ0Fycm93TGVmdCddICYmIHRoaXMueCA+IDAgKXtcbiAgICB0aGlzLnggLT0gdGhpcy5zcGVlZDsgICBcbiAgICB0aGlzLmZyYW1lWSA9IDE7XG4gICAgdGhpcy53aWR0aCA9IDQ4O1xuICAgIHRoaXMuaGVpZ2h0ID0gNDg7XG4gICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuXG5cbiAgfVxuXG4gIGlmKHRoaXMua2V5c1snQXJyb3dEb3duJ10gJiYgdGhpcy55IDwgKGNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCkpe1xuICAgIHRoaXMueSArPSB0aGlzLnNwZWVkOyAgIFxuICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICB0aGlzLm1vdmluZyA9IHRydWU7XG5cblxuICB9XG5cbiAgaWYodGhpcy5rZXlzWydBcnJvd1JpZ2h0J10gJiYgdGhpcy54IDwgKGNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGgpICl7XG4gICAgdGhpcy54ICs9IHRoaXMuc3BlZWQ7ICAgXG4gICAgdGhpcy5mcmFtZVkgPSAyO1xuICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcblxuXG4gIH1cbiAgLy8gIGlmKHRoaXMueSA8PSA2MDAgICYmIHRoaXMueCA+PSAxMzUwKXtcblxuICAgIC8vIGNvbnN0IHNjb3JpbmdQb3NpdGlvblkgPSAgcGFyc2VGbG9hdChyaWRpbmdIb29kLnkgLyB3aW5kb3cuaW5uZXJIZWlnaHQpLnRvRml4ZWQoMik7XG4gICAgLy8gY29uc3Qgc2NvcmluZ1Bvc2l0aW9uWCA9IHBhcnNlRmxvYXQocmlkaW5nSG9vZC54IC8gd2luZG93LmlubmVyV2lkdGgpLnRvRml4ZWQoMik7XG4gIFxuICAgIC8vIGNvbnNvbGUubG9nKGBwb3N4OiAnJHtzY29yaW5nUG9zaXRpb25YfWApO1xuICAgIC8vIGNvbnNvbGUubG9nKGBwb3N5OiAnJHtzY29yaW5nUG9zaXRpb25ZfWApO1xuXG4gIC8vICBpZiggKCBzY29yaW5nUG9zaXRpb25ZIDw9IHBhcnNlRmxvYXQoXCIuNzlcIikudG9GaXhlZCgyKSkgJiYgKCBzY29yaW5nUG9zaXRpb25YID49IHBhcnNlRmxvYXQoXCIuNzFcIikudG9GaXhlZCgyKSkgKSB7XG5cblxuLy8gICBpZiggKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSByaWRpbmdIb29kLnkpIDwgMzAwKSAgJiYgKCh3aW5kb3cuaW5uZXJXaWR0aCAtIHJpZGluZ0hvb2QueCkgPCA1MDApICApXG4vLyB7ICAgICBcbi8vICAgICAgIHRoaXMuc2NvcmUrKztcbi8vICAgICAgIHRoaXMuZ2FtZVNwZWVkICs9IC41O1xuLy8gICAgfVxuXG5cbn1cblxuIGhhbmRsZVBsYXllckZyYW1lKCl7IFxuXG4gIGlmKHRoaXMuZnJhbWVZIDwgMil7XG5cbiAgICBpZih0aGlzLmZyYW1lWCA8IDggICYmIHRoaXMubW92aW5nKSB0aGlzLmZyYW1lWCsrXG4gICAgICAgZWxzZSB0aGlzLmZyYW1lWCA9IDA7XG4gfWVsc2UgaWYgKHRoaXMuZnJhbWVZID09PSAyKXtcblxuICBpZih0aGlzLmZyYW1lWCA8IDUgICYmIHRoaXMubW92aW5nKSB0aGlzLmZyYW1lWCsrXG4gICAgICAgZWxzZSB0aGlzLmZyYW1lWCA9IDA7XG5cbiB9ZWxzZSBpZih0aGlzLmZyYW1lWSA+IDIgJiYgdGhpcy5mcmFtZVkgPCA1KXtcbiAgICBpZih0aGlzLmZyYW1lWCA8IDMgICYmIHRoaXMubW92aW5nKSB0aGlzLmZyYW1lWCsrXG4gICAgICAgZWxzZSB0aGlzLmZyYW1lWCA9IDA7XG4gIFxuXG4gfWVsc2UgaWYodGhpcy5mcmFtZVkgPT09IDUpe1xuICAgIGlmKHRoaXMuZnJhbWVYIDwgMiAgJiYgdGhpcy5tb3ZpbmcpIHRoaXMuZnJhbWVYKytcbiAgICAgICBlbHNlIHRoaXMuZnJhbWVYID0gMDtcbiAgXG5cbiB9XG5cbn1cblxuXG5cblxuXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7IiwiaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL2NoYXJhY3Rlcic7XG5pbXBvcnQgUGFydGljbGUgZnJvbSAnLi9wYXJ0aWNsZSc7XG5pbXBvcnQgQmFycmllciBmcm9tICcuL2JhcnJpZXInO1xuaW1wb3J0IHJpZGVyIGZyb20gJy4uL3B1YmxpYy9uZXdsaWxyLnBuZyc7XG4vLyBpbXBvcnQgYmFjayBmcm9tICcuLi9wdWJsaWMvZ3JhbmRtYTMuanBnJztcbmltcG9ydCBjb2xsaWRlIGZyb20gJy4uL3B1YmxpYy9jb2xsaWRlLnBuZyc7XG5pbXBvcnQgd29sZiBmcm9tICcuLi9wdWJsaWMvd29sdmVzLnBuZyc7XG5pbXBvcnQgYmVlIGZyb20gJy4uL3B1YmxpYy9iZWVzLnBuZyc7XG5pbXBvcnQgdG9waW1nIGZyb20gJy4uL3B1YmxpYy9saWxyZWRob29kLmpwZyc7XG5cbmNvbnN0IHVuaXQgPSA4MDtcbmxldCBzY29yZSA9IDA7XG5sZXQgY29sbGlzc2lvbnMgID0gMDtcbmxldCBmcmFtZSA9IDA7XG5sZXQgZ2FtZVNwZWVkID0gMTtcblxuLy9tYWRlIGltYWdlIGNoYW5nZXNcbmxldCB3b2x2ZXNBcnJheSAgPSBbXTtcbmxldCBwYXJ0aWNsZXNBcnJheSA9IFtdO1xubGV0IGJhcnJpZXJzQXJyYXkgPSBbXTtcbmNvbnN0IG1heFBhcnRpY2xlcyA9IDEwMDtcbmNvbnN0IG1heFdvbHZlcyA9IDU7XG5jb25zdCBtYXhMaXZlcyA9IDU7XG5jb25zdCAga2V5cyA9IFtdO1xuY29uc3QgbW9kZSA9IDA7XG5cbndpbmRvdy5iYXJyaWVyc0FycmF5ID0gYmFycmllcnNBcnJheTtcbndpbmRvdy53b2x2ZXNBcnJheSA9IHdvbHZlc0FycmF5O1xuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBcbiAgY29uc3QgY2FudmFzMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjYW52YXMxLndpZHRoID0gNjUwO1xuICBjYW52YXMxLmhlaWdodCA9IDY1MDtcblxuXG4gd2luZG93LmNhbnZhczFIZWlnaHQgPSBjYW52YXMxLmhlaWdodDtcbiB3aW5kb3cuY2FudmFzMVdpZHRoID0gY2FudmFzMS53aWR0aDtcbiBcbiAgY29uc3QgY3R4MSA9IGNhbnZhczEuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jdHgxLmZpbGxTdHlsZSA9J2JsYWNrJztcbmN0eDEuc3Ryb2tlU3R5bGUgPSAncmVkJztcbmN0eDEuZm9udCA9ICcxOHB4IFZlcmRhbmEnO1xuY3R4MS5zdHJva2VUZXh0KCdVc2UgQXJyb3cgS2V5cyB0byBtb3ZlLiAnLCAyMjUsIDEyNSk7XG5jdHgxLnN0cm9rZVRleHQoJ0ZvbGxvdyBQYXRoIHRvIGdldCB0byBncmFuZG1hcyBob3VzZS4nLCAyMjUsMTY1KTtcbmN0eDEuc3Ryb2tlVGV4dCgnUFJFU1MgRU5URVIgVE8gU1RBUlQnLCAyMjUsMjA1KTtcblxuXG5cblxuY29uc3QgZHJhd1Nwcml0ZSA9IChpbWcsIHNYLCBzWSwgc1csIHNILCBkWCwgZFksIGRXLCBkSCkgPT4ge1xuXG5jdHgxLmRyYXdJbWFnZShpbWcsIHNYLCBzWSwgc1csIHNILCBkWCwgZFksIGRXLCBkSCApO1xuXG59XG5cblxubGV0IGh0cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHRwXCIpO1xubGV0IGRiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXJlY3Rpb25zLWJhY2tncm91bmRcIilcblxuaHRwLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGRiLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiBcbiAgaWYgKGUudGFyZ2V0ID09PSBkYikge1xuICAgIGRiLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuXG5cblxuY29uc3QgaW1hZ2VzID0ge307XG5cbi8vIGNvbnN0IHRvcGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbi8vIHRvcGltZy5zcmMgPSBidWlsZEFzc2V0UGF0aCh0b3BpbWcpO1xuLy8gdG9waW1nLmNsYXNzTGlzdC5hZGQoXCJ0b3BcIik7XG5jb25zdCBkaXNwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpc3AuY2xhc3NMaXN0LmFkZChcImRpc3BcIiwgXCJ0b3BcIiwgXCJ0b3AtaW1nXCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoZGlzcCk7XG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvcGltZyk7XG5cbmltYWdlcy5wbGF5ZXIgPSBuZXcgSW1hZ2UoKTtcbmltYWdlcy5wbGF5ZXIuc3JjID0gYnVpbGRBc3NldFBhdGgocmlkZXIpO1xuXG4vLyBpbWFnZXMuYmFjayA9IG5ldyBJbWFnZSgpO1xuLy8gaW1hZ2VzLmJhY2suc3JjID0gYnVpbGRBc3NldFBhdGgoYmFjayk7XG5cbmltYWdlcy5jb2xsaWRlID0gbmV3IEltYWdlKCk7XG5pbWFnZXMuY29sbGlkZS5zcmMgPSBidWlsZEFzc2V0UGF0aChjb2xsaWRlKTtcblxuaW1hZ2VzLndvbGYgPSBuZXcgSW1hZ2UoKTtcbmltYWdlcy53b2xmLnNyYyA9IGJ1aWxkQXNzZXRQYXRoKHdvbGYpO1xuXG5cblxuaW1hZ2VzLmJlZSA9IG5ldyBJbWFnZSgpO1xuaW1hZ2VzLmJlZS5zcmMgPSBidWlsZEFzc2V0UGF0aChiZWUpO1xuXG5cbmZ1bmN0aW9uIGJ1aWxkQXNzZXRQYXRoKGltZ1NyYykge1xuICByZXR1cm4gYC4vZGlzdC8ke2ltZ1NyY31gO1xufVxuXG5cblxuIGltYWdlcy5iZWUub25sb2FkID0gZnVuY3Rpb24gKCl7XG4gICBcbmxldCByaWRpbmdIb29kID0gbmV3IENoYXJhY3RlcihjdHgxLGltYWdlcy5wbGF5ZXIsIGtleXMsIHNjb3JlLCBnYW1lU3BlZWQpXG5cbi8vIHdvbGZpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblxuXG5jb25zdCBpbml0QmFycmllcnMgPSAoKSA9PiB7XG5cbmZvcihsZXQgaSA9IDA7IGkgPCAyOyBpKyspe1xuXG5sZXQgeCA9IGkgKiAzNTA7XG5cbndvbHZlc0FycmF5LnB1c2goIG5ldyBCYXJyaWVyKGNhbnZhczEsIGN0eDEsIHgsIGNhbnZhczEuaGVpZ2h0LXVuaXQgKjIgLSAyMCwgdW5pdCwgdW5pdCwgMSwgZ2FtZVNwZWVkLGltYWdlcy53b2xmLCAnd29sZicpKVxuXG5cbn1cblxuZm9yKGxldCBpID0gMDsgaSA8IDI7IGkrKyl7XG5cbmxldCB4ID0gaSAqIDMwMDtcblxud29sdmVzQXJyYXkucHVzaCggbmV3IEJhcnJpZXIoY2FudmFzMSwgY3R4MSwgeCwgY2FudmFzMS5oZWlnaHQtdW5pdCAqMyAgLSAyMCwgdW5pdCAqMiwgdW5pdCwgLTIsIGdhbWVTcGVlZCxpbWFnZXMud29sZiwnd29sZmwnKSlcblxuXG59XG5cbmZvcihsZXQgaSA9IDA7IGkgPCAyOyBpKyspe1xuXG5sZXQgeCA9IGkgKiAzNTA7XG5cbndvbHZlc0FycmF5LnB1c2goIG5ldyBCYXJyaWVyKGNhbnZhczEsIGN0eDEsIHgsIGNhbnZhczEuaGVpZ2h0LXVuaXQgKjQgLSAyMCwgdW5pdCwgdW5pdCwgMiwgZ2FtZVNwZWVkLGltYWdlcy53b2xmLCAnd29sZicpKVxuXG5cbn1cblxuZm9yKGxldCBpID0gMDsgaSA8IDI7IGkrKyl7XG5cbmxldCB4ID0gaSAqIDQwMDtcblxuYmFycmllcnNBcnJheS5wdXNoKCBuZXcgQmFycmllcihjYW52YXMxLCBjdHgxLCB4LCBjYW52YXMxLmhlaWdodC11bml0ICo1IC0gMjAsIHVuaXQgKiAyLCB1bml0LCAtMiwgZ2FtZVNwZWVkLGltYWdlcy5iZWUsICdiZWUnKSlcblxuXG59XG5cblxuLy8gYmVlaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG5mb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKXtcblxubGV0IHggPSBpICogMjAwO1xuXG5iYXJyaWVyc0FycmF5LnB1c2goIG5ldyBCYXJyaWVyKGNhbnZhczEsIGN0eDEsIHgsIGNhbnZhczEuaGVpZ2h0LXVuaXQgKjYgLSAyMCwgdW5pdCAqIDIsIHVuaXQsIDEsZ2FtZVNwZWVkLGltYWdlcy5iZWUsICdiZWUnKSlcbn1cbi8vIH1cblxuXG5cbn1cblxuXG5pbml0QmFycmllcnMoKTtcblxuXG5cbmZ1bmN0aW9uIGhhbmRsZUJhcnJpZXJzKCl7XG5cblxuZm9yKGxldCBpPTA7IGkgPCB3b2x2ZXNBcnJheS5sZW5ndGg7IGkrKyl7XG5cbiAgICAgICAgd29sdmVzQXJyYXlbaV0udXBkYXRlKCk7XG4gICAgICAgIHdvbHZlc0FycmF5W2ldLmRyYXcoKTtcblxufVxuXG5mb3IobGV0IGk9MDsgaSA8IGJhcnJpZXJzQXJyYXkubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgIGJhcnJpZXJzQXJyYXlbaV0udXBkYXRlKCk7XG4gICAgICAgIGJhcnJpZXJzQXJyYXlbaV0uZHJhdygpO1xuXG59XG5cbmZvcihsZXQgaSA9MDsgaSA8IHdvbHZlc0FycmF5Lmxlbmd0aDsgaSsrKXtcblxuICAgICAgICBpZihjb2xsaWRlKHJpZGluZ0hvb2QsIHdvbHZlc0FycmF5W2ldKSl7XG5cbiAgICAgICAgICAgICAgICAvLyBkZXN0cm95KHdvbHZlc0FycmF5W2ldKTtcbiAgICAgICAgICAgICAgICBkcmF3U3ByaXRlKGltYWdlcy5jb2xsaWRlLCAwLCAwLCA4MSwgODAsIHJpZGluZ0hvb2QueCwgcmlkaW5nSG9vZC55LCByaWRpbmdIb29kLndpZHRoLCByaWRpbmdIb29kLmhlaWdodCApXG4gICAgICAgICAgICAgICAgcmVzZXRHYW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICBcbn1cblxuZm9yKGxldCBpID0wOyBpIDwgYmFycmllcnNBcnJheS5sZW5ndGg7IGkrKyl7XG5cbmlmKGNvbGxpZGUocmlkaW5nSG9vZCwgYmFycmllcnNBcnJheVtpXSkpe1xuXG4gICAgICAgICAgICAgICAgLy8gZGVzdHJveShiYXJyaWVyc0FycmF5W2ldKTtcbiAgICAgICAgICAgICAgICBkcmF3U3ByaXRlKGltYWdlcy5jb2xsaWRlLCAwLCAwLCA4MSwgODAsIHJpZGluZ0hvb2QueCwgcmlkaW5nSG9vZC55LCByaWRpbmdIb29kLndpZHRoLCByaWRpbmdIb29kLmhlaWdodCApXG4gICAgICAgICAgICAgICAgcmVzZXRHYW1lKCk7XG4gICAgICAgIH1cbn1cblxufVxuXG5cbmZ1bmN0aW9uIGhhbmRsZVBhcnRpY2xlcygpe1xuZm9yKGxldCBpID0wOyBpIDwgcGFydGljbGVzQXJyYXkubGVuZ3RoOyBpKysgKXtcblxuICAgIHBhcnRpY2xlc0FycmF5W2ldLnVwZGF0ZSgpO1xuICAgIHBhcnRpY2xlc0FycmF5W2ldLmRyYXcoKTtcbn1cblxuXG5cbmlmKHBhcnRpY2xlc0FycmF5Lmxlbmd0aCA+IG1heFBhcnRpY2xlcyl7XG5cbiAgICBmb3IobGV0IGk9MDsgaSA8IHBhcnRpY2xlc0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgcGFydGljbGVzQXJyYXkucG9wKCk7XG4gICAgfVxuXG59XG5cbmlmKCgoa2V5c1snQXJyb3dVcCddIHx8IGtleXNbJ0Fycm93RG93biddIHx8IGtleXNbJ0Fycm93TGVmdCddIHx8IGtleXNbJ0Fycm93UmlnaHQnXSkpICYmIHJpZGluZ0hvb2QueSA+IDEwMCAmJiAocGFydGljbGVzQXJyYXkubGVuZ3RoIDwgbWF4UGFydGljbGVzICsgMTApKXtcblxuICAgIGZvcihsZXQgaT0wOyBpIDwgMTA7IGkrKyl7XG5cbiAgICAgICAgICAgIGxldCBwdCA9IG5ldyBQYXJ0aWNsZShjdHgxLCByaWRpbmdIb29kLngsIHJpZGluZ0hvb2QueSk7XG4gICAgICAgICAgICBwYXJ0aWNsZXNBcnJheS51bnNoaWZ0KHB0KTtcblxuXG4gICAgfVxufVxufVxuXG5cbmZ1bmN0aW9uIHNjb3Jlcygpe1xuXG5zY29yZSsrO1xuZ2FtZVNwZWVkICs9IC41O1xucmlkaW5nSG9vZC54ID0gY2FudmFzMS53aWR0aC8yIC0gcmlkaW5nSG9vZC53aWR0aC8yO1xucmlkaW5nSG9vZC55ID0gY2FudmFzMS5oZWlnaHQgLSByaWRpbmdIb29kLmhlaWdodC00MDtcbmluaXRCYXJyaWVycygpO1xufVxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKXtcblxuICBrZXlzW2UuY29kZV0gPSB0cnVlO1xuICBpZihlLmNvZGUgPT09ICdFbnRlcicpIHN0YXJ0QW5pbWF0aW5nKDIwKTtcbiAgcmlkaW5nSG9vZC5tb3ZpbmcgPSB0cnVlO1xuXG4gIGNvbnN0IHNjb3JpbmdQb3NpdGlvblkgPSAgcGFyc2VGbG9hdChyaWRpbmdIb29kLnkgLyB3aW5kb3cuaW5ubmVySGVpZ2h0KS50b0ZpeGVkKDIpO1xuICBjb25zdCBzY29yaW5nUG9zaXRpb25YID0gcGFyc2VGbG9hdChyaWRpbmdIb29kLnggLyB3aW5kb3cuaW5uZXJXaWR0aCkudG9GaXhlZCgyKTtcblxuICAgIGlmKCAoICAod2luZG93LmlubmVySGVpZ2h0ID4gcmlkaW5nSG9vZC55KSAmJiAod2luZG93LmlubmVySGVpZ2h0IC0gcmlkaW5nSG9vZC55KSA8IDMxOCkgICYmICh3aW5kb3cuaW5ubmVyV2lkdGggPiByaWRpbmdIb29kLngpICgod2luZG93LmlubmVyV2lkdGggLSByaWRpbmdIb29kLngpIDwgMjAyKSAgKXNjb3JlcygpO1xuXG4gIFxufSk7XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKXtcblxuXG5kZWxldGUga2V5c1tlLmNvZGVdO1xucmlkaW5nSG9vZC5tb3ZpbmcgPSBmYWxzZTtcblxuaWYoICggIChjYW52YXMxLmhlaWdodCA+IHJpZGluZ0hvb2QueSkgJiYgKGNhbnZhczEuaGVpZ2h0IC0gcmlkaW5nSG9vZC55KSA8IDMxOCkgICYmICgoY2FudmFzMS53aWR0aCAtIHJpZGluZ0hvb2QueCkgPCAyMDIpICApc2NvcmVzKCk7XG5cblxuXG59KTtcblxud2luZG93LnJpZGluZ0hvb2QgPSByaWRpbmdIb29kO1xuXG5cblxuLy8gd2luZG93Lm9ubG9hZCA9IHNldEludGVydmFsKGFuaW1hdGUsIDEwMDAvMzApO1xuXG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcblxuLy8gY2FudmFzMS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4vLyBjYW52YXMxLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbi8vIH0pXG5cblxuXG5cblxuXG5cblxuZnVuY3Rpb24gc2NvcmVCb2FyZCgpIHtcbmN0eDEuZmlsbFN0eWxlID0nYmxhY2snO1xuY3R4MS5zdHJva2VTdHlsZSA9J2JsYWNrJztcbmN0eDEuZm9udCA9ICcxOHB4IFZlcmRhbmEnO1xuY3R4MS5zdHJva2VUZXh0KCdTY29yZScsIDM3MCwgNjUpO1xuY3R4MS5mb250ID0gJzYwcHggVmVyZGFuYSc7XG5jdHgxLmZpbGxUZXh0KHNjb3JlLCAzNzAsIDExMCApXG5jdHgxLmZvbnQgPSAnMThweCBWZXJkYW5hJztcbmN0eDEuc3Ryb2tlVGV4dCgnTGl2ZXM6JyArIGNvbGxpc3Npb25zLCAxMCwgMTc1KTtcbmN0eDEuc3Ryb2tlVGV4dCgnR2FtZSBTcGVlZDonICsgZ2FtZVNwZWVkLCAxMCwgMTk1KTtcblxuXG59XG5cbmZ1bmN0aW9uIGNvbGxpZGUoZmlyc3QsIHNlY29uZCl7XG5cbnJldHVybiAhKGZpcnN0LnggPiAoc2Vjb25kLnggKyBzZWNvbmQud2lkdGgpIHx8IFxuICAgICAgICAoZmlyc3QueCArIGZpcnN0LndpZHRoKSA8IHNlY29uZC54IHx8IFxuICAgICAgICBmaXJzdC55ID4gKHNlY29uZC55ICsgc2Vjb25kLmhlaWdodCkgfHxcbiAgICAgICAgKGZpcnN0LnkgKyBmaXJzdC5oZWlnaHQpIDwgc2Vjb25kLnkpO1xuXG5cbn1cblxuZnVuY3Rpb24gcmVzZXRHYW1lKCl7XG5cbnJpZGluZ0hvb2QueCA9IGNhbnZhczEud2lkdGgvMiAtIHJpZGluZ0hvb2Qud2lkdGgvMjtcbnJpZGluZ0hvb2QueSA9IGNhbnZhczEuaGVpZ2h0IC0gcmlkaW5nSG9vZC5oZWlnaHQtNDA7XG5zY29yZSA9IDA7XG5jb2xsaXNzaW9ucysrIFxuZ2FtZVNwZWVkID0gMTtcblxufVxuXG5cbmxldCBmcHMsIGZwc0ludGVydmFsLCBzdGFydFRpbWUsIG5vdywgdGhlbiwgZWxhcHNlZDsgICBcblxuZnVuY3Rpb24gc3RhcnRBbmltYXRpbmcoZnBzKXtcblxuLy8gZG9jdW1lbnQuYm9keS5yZW1vdmUoZGlzcCk7XG5cblxuZnBzSW50ZXJ2YWwgPSAxMDAwL2ZwczsgIFxuXG50aGVuID0gRGF0ZS5ub3coKTtcblxuc3RhcnRUaW1lID0gdGhlbjtcblxuIGFuaW1hdGUoKTtcblxuXG59XG5cbmNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG5cbnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblxubm93ID0gRGF0ZS5ub3coKTtcbmVsYXBzZWQgPSBub3cgLSB0aGVuO1xuaWYgKGVsYXBzZWQgPiBmcHNJbnRlcnZhbCl7XG5cbiAgdGhlbiA9IG5vdyAtIChlbGFwc2VkICUgZnBzSW50ZXJ2YWwpXG4gIGN0eDEuY2xlYXJSZWN0KDAsIDAsIGNhbnZhczEud2lkdGgsIGNhbnZhczEuaGVpZ2h0KTtcbiAgXG4gIC8vIGN0eDEuZHJhd0ltYWdlKGltYWdlcy5iYWNrLCAxMDAsIDEwMCwgY2FudmFzMS53aWR0aCwgY2FudmFzMS5oZWlnaHQpO1xuICAgIGhhbmRsZVBhcnRpY2xlcygpO1xuICAgIHJpZGluZ0hvb2QuZHJhd1Nwcml0ZSgpO1xuXG4gICAgcmlkaW5nSG9vZC5tb3ZlUGxheWVyKCk7XG4gICAgcmlkaW5nSG9vZC5oYW5kbGVQbGF5ZXJGcmFtZSgpO1xuICAgIHNjb3JlQm9hcmQoKTtcbiAgICBoYW5kbGVCYXJyaWVycygpO1xuICAgIFxuXG59XG5cblxuXG4vLyB9XG5cblxuXG59XG5cblxuXG59XG5cblxufSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJjbGFzcyBQYXJ0aWNsZSB7XG5cbmNvbnN0cnVjdG9yKGN0eCx4LHkpe1xudGhpcy54ID0geCArIDI1O1xudGhpcy55ID0geSArIDgwIDtcbnRoaXMucmFkaXVzID0gTWF0aC5yYW5kb20oKSAqIDIwICsgMTtcbnRoaXMub3BhY2l0eSA9IC41O1xudGhpcy5kaXJlY3RYID0gTWF0aC5yYW5kb20oKSAqIDEgLSAwLjU7XG50aGlzLmRpcmVjdFkgPSBNYXRoLnJhbmRvbSgpICogMSAtIDAuNTtcbnRoaXMuY3R4MSA9IGN0eDtcblxuXG59XG5cbmRyYXcoKSB7XG50aGlzLmN0eDEuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDEyOCwwLCcgKyB0aGlzLm9wYWNpdHkgKyAnKSc7XG50aGlzLmN0eDEuYmVnaW5QYXRoKCk7XG50aGlzLmN0eDEuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xudGhpcy5jdHgxLmZpbGwoKTtcbnRoaXMuY3R4MS5jbG9zZVBhdGgoKTtcblxufVxuXG51cGRhdGUoKXtcblxuICAgIHRoaXMueCArPSB0aGlzLmRpcmVjdFg7XG4gICAgdGhpcy55ICs9IHRoaXMuZGlyZWN0WTtcblxuICAgIGlmKHRoaXMub3BhY2l0eSA+IC4xKXtcblxuICAgICAgICB0aGlzLm9wYWNpdHkgLT0gLjQ7XG4gICAgfVxuXG4gICAgaWYodGhpcy5yYWRpdXMgPiAuMTUpe1xuXG4gICAgICAgIHRoaXMucmFkaXVzIC09IC4xNDtcbiAgICB9XG59XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQYXJ0aWNsZTtcbiAgICBcblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==
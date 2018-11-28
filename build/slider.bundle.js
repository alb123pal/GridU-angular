"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var tmpl = document.createElement('template');
tmpl.innerHTML = "\n<link rel=\"stylesheet\" type=\"text/css\" href=\"../styles/css/product_customer.css\">\n\n<div class=\"panel-slider\">\n<span id=\"leftArrow\" class=\"panel-slider__arrow arrow--left\"></span>\n<span id=\"rightArrow\" class=\"panel-slider__arrow arrow--right\"></span>\n</div>\n<div class=\"panel-slider__slides\">\n<div class=\"panel-slider__slides-element active\">\n    <img src='../assets/items/1.jpg'>\n</div>\n</div>\n<div class=\"panel-slider__zoom\">\n</div>\n";

var Slider =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(Slider, _HTMLElement);

  function Slider() {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this));
    var currentSlide = 1,
        maxSlideElement = 3,
        shadowRoot,
        leftArrow,
        rightArrow,
        image,
        resultImage,
        lens,
        watermak,
        cx,
        cy;
    shadowRoot = _this.attachShadow({
      mode: 'open'
    });
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
    leftArrow = shadowRoot.querySelector('.arrow--left'), rightArrow = shadowRoot.querySelector('.arrow--right');
    image = shadowRoot.querySelector('.panel-slider__slides-element').children[0];
    resultImage = shadowRoot.querySelector('.panel-slider__zoom');
    addLenseToDOM();
    addWatermark();
    invokeEventListener();

    function invokeEventListener() {
      image.addEventListener('mousemove', moveLensCallback);
      lens.addEventListener('mousemove', moveLensCallback);
      image.addEventListener('mouseout', moveoutLenseCallback);
      lens.addEventListener('mouseout', moveoutLenseCallback);
      leftArrow.addEventListener('click', previousImage);
      rightArrow.addEventListener('click', nextImage);
    }

    function addLenseToDOM() {
      lens = document.createElement("div");
      lens.setAttribute("class", "img-zoom-lens");
      image.parentElement.insertBefore(lens, image);
    }

    function addWatermark() {
      watermak = document.createElement("span");
      watermak.setAttribute("class", "img-watermark");
      watermak.innerHTML += 'Demo Shop';
      shadowRoot.querySelector('.panel-slider').appendChild(watermak);
    }

    function nextImage() {
      if (currentSlide == maxSlideElement) {
        currentSlide = 1;
      } else {
        currentSlide++;
      }

      shadowRoot.querySelector('.panel-slider__slides-element').children[1].src = "../assets/items/".concat(currentSlide, ".jpg");
    }

    function previousImage() {
      if (currentSlide == 1) {
        currentSlide = maxSlideElement;
      } else {
        currentSlide--;
      }

      shadowRoot.querySelector('.panel-slider__slides-element').children[1].src = "../assets/items/".concat(currentSlide, ".jpg");
    }

    function moveLensCallback(e) {
      var pos, x, y;
      shadowRoot.querySelector('.panel-slider__zoom').style.display = 'block';
      shadowRoot.querySelector('.img-zoom-lens').style.display = 'block';
      cx = resultImage.offsetWidth / lens.offsetWidth;
      cy = resultImage.offsetHeight / lens.offsetHeight;
      resultImage.style.backgroundImage = "url('" + image.src + "')";
      resultImage.style.backgroundSize = image.width * cx + "px " + image.height * cy + "px";
      pos = getCursorPosition(e);
      x = pos.x - lens.offsetWidth / 2;
      y = pos.y - lens.offsetHeight / 2;

      if (x > image.width - lens.offsetWidth) {
        x = image.width - lens.offsetWidth;
      }

      if (x < 0) {
        x = 0;
      }

      if (y > image.height - lens.offsetHeight) {
        y = image.height - lens.offsetHeight;
      }

      if (y < 0) {
        y = 0;
      }

      lens.style.left = x + "px";
      lens.style.top = y + "px";
      resultImage.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
    }

    function moveoutLenseCallback(e) {
      shadowRoot.querySelector('.panel-slider__zoom').style.display = 'none';
      shadowRoot.querySelector('.img-zoom-lens').style.display = 'none';
    }

    function getCursorPosition(e) {
      var imageReactangle,
          x = 0,
          y = 0;
      e = e || window.event;
      imageReactangle = image.getBoundingClientRect();
      x = e.pageX - imageReactangle.left;
      y = e.pageY - imageReactangle.top;
      return {
        x: x,
        y: y
      };
    }

    return _this;
  }

  return Slider;
}(_wrapNativeSuper(HTMLElement));

window.customElements.define('app-slider', Slider);

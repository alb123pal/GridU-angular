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
tmpl.innerHTML = "\n<link rel=\"stylesheet\" type=\"text/css\" href=\"../styles/css/product_customer.css\">\n\n<div class=\"panel-slider\">\n<span id=\"leftArrow\" class=\"panel-slider__arrow arrow--left\"></span>\n<span id=\"rightArrow\" class=\"panel-slider__arrow arrow--right\"></span>\n</div>\n<div class=\"panel-slider__slides\">\n<div class=\"panel-slider__slides-element active\">\n        <img src='../assets/items/1.jpg'>\n        <div>\n                <span class=\"slider-text\">Lorem Ipsum 1</span>\n        </div>\n</div>\n</div>\n";

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
        panelSlideNode = document.getElementsByClassName("panel-slider__slides");

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    shadowRoot.appendChild(tmpl.content.cloneNode(true));
    var leftArrow = shadowRoot.querySelector('.arrow--left'),
        rightArrow = shadowRoot.querySelector('.arrow--right');
    leftArrow.addEventListener('click', function () {
      if (currentSlide == 1) {
        currentSlide = maxSlideElement;
      } else {
        currentSlide--;
      }

      shadowRoot.querySelector('.panel-slider__slides-element').children[0].src = "../assets/items/".concat(currentSlide, ".jpg");
    });
    rightArrow.addEventListener('click', function () {
      if (currentSlide == maxSlideElement) {
        currentSlide = 1;
      } else {
        currentSlide++;
      }

      shadowRoot.querySelector('.panel-slider__slides-element').children[0].src = "../assets/items/".concat(currentSlide, ".jpg");
    });
    return _this;
  }

  return Slider;
}(_wrapNativeSuper(HTMLElement));

window.customElements.define('app-slider', Slider);

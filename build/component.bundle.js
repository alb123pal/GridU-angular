"use strict";

var currentSlide = 0,
    maxSlideElement = 2,
    panelSlideNode = document.getElementsByClassName("panel-slider__slides");

var nextImage = function nextImage() {
  panelSlideNode[0].children[currentSlide].classList.remove('active');

  if (currentSlide == maxSlideElement) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  panelSlideNode[0].children[currentSlide].classList.add('active');
};

var previousImage = function previousImage() {
  panelSlideNode[0].children[currentSlide].classList.remove('active');

  if (currentSlide == 0) {
    currentSlide = maxSlideElement;
  } else {
    currentSlide--;
  }

  panelSlideNode[0].children[currentSlide].classList.add('active');
};
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

var tmplReview = document.createElement('template');
tmplReview.innerHTML = "\n<link rel=\"stylesheet\" type=\"text/css\" href=\"../styles/css/review.css\">\n\n<div class=\"add-review-wrapper\">\n    <div class=\"upper-layer\">\n        <div class=\"upper-layer__background\"></div>\n        <div class=\"review-main-info\">\n            <p>By <span id=\"userName\" class=\"review-main-info__user-name\">Your Name </span><span id=\"actuallDate\"> August 1, 2017</span></p>    \n            <div id=\"displayStars\" class=\"panel-stars\">\n                <span class=\"star\"></span>\n                <span class=\"star\"></span>\n                <span class=\"star\"></span>\n                <span class=\"star\"></span>\n                <span class=\"star\"></span>\n            </div>\n        </div>\n        <div class=\"review-content\">\n            <div id=\"userImage\">\n                <img src='../assets/icon_file-yellow.svg' />\n            </div>\n            <div>\n                <p id=\"displayReview\">Start typing and your test will appear here ...</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"bottom-layer\">\n        <aside class=\"create-review-panel-left\">\n            <label>\n                <p>Edit your name:</p>\n                <input id=\"name\" type=\"text\" name=\"user\" placeholder=\"Type your name\"/>\n            </label>\n            <label class=\"create-review-panel-left__input-file\">\n                <p>Choose your avatar:</p>\n                <input type=\"file\" id=\"avatar\" name=\"avatar\"/>\n                <div class=\"create-review-panel-left__file-select\">\n                    <span>Select Image</span>\n                    <img id=\"selectedImage\" src=\"../assets/icon_file.svg\" />\n                </div>\n            </label>\n        </aside>\n        <main class=\"create-review-panel-right\">\n            <div class=\"panel-review-upper\">\n                <span>Write your review:</span>\n                <div class=\"panel-review-upper__rating\">\n                    <span class=\"panel-review-upper__rating-text\">Rate produkt: </span>\n                    <div id=\"inputStars\" class=\"panel-stars\">\n                        <span class=\"star\"></span>\n                        <span class=\"star\"></span>\n                        <span class=\"star\"></span>\n                        <span class=\"star\"></span>\n                        <span class=\"star\"></span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-review-comment\">\n                <textarea id=\"reviewInput\" name=\"comment\"></textarea>\n            </div>\n            <footer class=\"panel-buttons\">\n                <div class=\"panel-buttons__left\">\n                    <button id=\"boldButton\" class=\"button button--grey\">Bold</button>\n                    <button id=\"emphasizeButton\" class=\"button button--grey\">Emphasize</button>\n                    <button id=\"quoteButton\" class=\"button button--grey\">Quote</button>\n                </div>\n                <div class=\"panel-buttons__right\">\n                    <button id=\"cancelButton\" class=\"button button--grey\">Cancel</button>\n                    <button id=\"submitButton\" class=\"button button--green \">Submit</button>\n                </div>\n            </footer>\n        </main>\n    </div>\n</div>\n";

var Review =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(Review, _HTMLElement);

  function Review() {
    var _this;

    _classCallCheck(this, Review);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Review).call(this));
    var shadowRoot,
        openReviewButton = document.getElementById('dynamicReviewParagraph'),
        inputName,
        displayName,
        inputReview,
        displayReview,
        inputAvatar,
        userImage,
        selectedImage,
        inputStars,
        displayStars,
        emphasizeButton,
        quoteButton,
        boldButton,
        cancelButton,
        submitButton;
    shadowRoot = _this.attachShadow({
      mode: 'open'
    });
    shadowRoot.appendChild(tmplReview.content.cloneNode(true));
    getDOMReferenceElements();
    invokeEventListeners();

    function getDOMReferenceElements() {
      inputName = shadowRoot.getElementById('name');
      displayName = shadowRoot.getElementById('userName');
      inputReview = shadowRoot.getElementById('reviewInput');
      displayReview = shadowRoot.getElementById('displayReview');
      userImage = shadowRoot.getElementById('userImage');
      selectedImage = shadowRoot.getElementById('selectedImage');
      inputAvatar = shadowRoot.getElementById('avatar');
      inputStars = shadowRoot.getElementById('inputStars');
      displayStars = shadowRoot.getElementById('displayStars');
      boldButton = shadowRoot.getElementById('boldButton');
      emphasizeButton = shadowRoot.getElementById('emphasizeButton');
      quoteButton = shadowRoot.getElementById('quoteButton');
      cancelButton = shadowRoot.getElementById('cancelButton');
      submitButton = shadowRoot.getElementById('submitButton');
    }

    function invokeEventListeners() {
      openReviewButton.addEventListener('click', openReview);
      inputName.addEventListener('input', changeContentElement.bind(null, displayName, inputName));
      inputReview.addEventListener('input', changeContentElement.bind(null, displayReview, inputReview));
      inputStars.addEventListener('click', addRating);
      inputAvatar.addEventListener('change', loadFile);
      boldButton.addEventListener('click', changeSelectedText.bind(null, 'bold'));
      emphasizeButton.addEventListener('click', changeSelectedText.bind(null, 'emphasize'));
      quoteButton.addEventListener('click', changeSelectedText.bind(null, 'quote'));
      cancelButton.addEventListener('click', cancelReview);
      submitButton.addEventListener('click', saveReview);
    }

    function changeSelectedText(action) {
      if (inputReview.selectionStart == inputReview.selectionEnd) {
        return;
      }

      var updateValue, markup, closedMarkup, contentToWrapIndexStart, contentToWrapIndexEnd;

      switch (action) {
        case 'bold':
          markup = "<strong>";
          closedMarkup = "</strong>";
          break;

        case 'emphasize':
          markup = "<i>";
          closedMarkup = "</i>";
          break;

        case 'quote':
          markup = "<q>";
          closedMarkup = "</q>";
          break;

        default:
          break;
      }

      contentToWrapIndexStart = inputReview.selectionStart;
      contentToWrapIndexEnd = inputReview.selectionEnd;
      updateValue = inputReview.value.substring(0, contentToWrapIndexStart);
      updateValue += markup + inputReview.value.substring(contentToWrapIndexStart, contentToWrapIndexEnd) + closedMarkup;
      updateValue += inputReview.value.substring(contentToWrapIndexEnd);
      inputReview.value = updateValue;
      displayReview.innerHTML = updateValue;
    }

    function addRating(event) {
      var isActiveStar = true;
      displayStars.style.display = 'flex';

      for (var i = 0; i < inputStars.children.length; i++) {
        if (isActiveStar) {
          inputStars.children[i].classList.add('star--active');
          displayStars.children[i].classList.add('star--active');
        } else {
          inputStars.children[i].classList.remove('star--active');
          displayStars.children[i].classList.remove('star--active');
        }

        if (inputStars.children[i] == event.target) {
          isActiveStar = false;
        }

        ;
      }
    }

    function loadFile(event) {
      var reader = new FileReader();

      reader.onload = function () {
        selectedImage.src = reader.result;
        userImage.children[0].src = reader.result;
      };

      selectedImage.style.opacity = '1';
      reader.readAsDataURL(event.target.files[0]);
    }

    function changeContentElement(display, input) {
      display.innerHTML = input.value;
    }

    function openReview() {
      openReviewButton.textContent = 'Share your thoughts with other customers';
      shadowRoot.querySelector('.add-review-wrapper').style.display = 'grid';
    }

    function cancelReview() {
      shadowRoot.querySelector('.add-review-wrapper').style.display = 'none';
      alert('Your review has been removed');
    }

    function saveReview() {
      shadowRoot.querySelector('.add-review-wrapper').style.display = 'none';
      alert('Your review has been added');
    }

    return _this;
  }

  return Review;
}(_wrapNativeSuper(HTMLElement));

window.customElements.define('app-review', Review);
"use strict";

var isHiddenListArticles = true;
var isHiddenFilterOptions = true;

function showDialog() {
  var listArticlesNode = document.getElementsByClassName('list-articles')[0];
  isHiddenListArticles = !isHiddenListArticles;

  if (!isHiddenListArticles) {
    listArticlesNode.style.display = 'grid';
    document.getElementsByClassName('page-wrapper-content__modal-button')[0].remove();
  }
}

var showHideFilterOptions = function showHideFilterOptions() {
  isHiddenFilterOptions = !isHiddenFilterOptions;

  if (isHiddenFilterOptions) {
    document.getElementsByClassName('filters-panel-wrapper-advanced')[0].style.display = 'none';
  } else {
    document.getElementsByClassName('filters-panel-wrapper-advanced')[0].style.display = 'block';
  }
};

var checkValidation = function checkValidation(ref) {
  if (ref.type === "text") {
    if (ref.value.length > 5) {
      ref.parentElement.classList.add('error');
      ref.parentElement.children[2].src = '../assets/login-invalid.svg';
    } else {
      ref.parentElement.classList.remove('error');
      ref.parentElement.children[2].src = '../assets/login-inactive.svg';
    }
  } else {
    if (ref.value.length > 5) {
      ref.parentElement.classList.add('error');
      ref.parentElement.children[2].src = '../assets/password-invalid.svg';
    } else {
      ref.parentElement.classList.remove('error');
      ref.parentElement.children[2].src = '../assets/password-inactive.svg';
    }
  }
};

var deleteItem = function deleteItem() {
  document.getElementsByClassName('modal-items')[0].style.display = 'block';
  document.getElementsByClassName('modal-item-delete')[0].style.display = 'grid';
};

var confirmDelete = function confirmDelete() {
  document.getElementsByClassName('modal-items')[0].style.display = 'none';
  document.getElementsByClassName('modal-item-delete')[0].style.display = 'none';
};

var cancelDelete = function cancelDelete() {
  document.getElementsByClassName('modal-items')[0].style.display = 'none';
  document.getElementsByClassName('modal-item-delete')[0].style.display = 'none';
};

var editItem = function editItem() {
  document.getElementsByClassName('modal-items')[0].style.display = 'block';
  document.getElementsByClassName('modal-item-edit')[0].style.display = 'grid';
};

var confirmEditItem = function confirmEditItem() {
  document.getElementsByClassName('modal-items')[0].style.display = 'none';
  document.getElementsByClassName('modal-item-edit')[0].style.display = 'none';
};

var cancelEditItem = function cancelEditItem() {
  document.getElementsByClassName('modal-items')[0].style.display = 'none';
  document.getElementsByClassName('modal-item-edit')[0].style.display = 'none';
};
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

var tmplSlider = document.createElement('template');
tmplSlider.innerHTML = "\n<link rel=\"stylesheet\" type=\"text/css\" href=\"../styles/css/product_customer.css\">\n\n<div class=\"panel-slider\">\n<span id=\"leftArrow\" class=\"panel-slider__arrow arrow--left\"></span>\n<span id=\"rightArrow\" class=\"panel-slider__arrow arrow--right\"></span>\n</div>\n<div class=\"panel-slider__slides\">\n<div class=\"panel-slider__slides-element active\">\n    <img src='../assets/items/1.jpg'>\n</div>\n</div>\n<div class=\"panel-slider__zoom\">\n</div>\n";

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
    shadowRoot.appendChild(tmplSlider.content.cloneNode(true));
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

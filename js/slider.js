let tmplSlider = document.createElement('template');
tmplSlider.innerHTML = `
<link rel="stylesheet" type="text/css" href="../styles/css/product_customer.css">

<div class="panel-slider">
<span id="leftArrow" class="panel-slider__arrow arrow--left"></span>
<span id="rightArrow" class="panel-slider__arrow arrow--right"></span>
</div>
<div class="panel-slider__slides">
<div class="panel-slider__slides-element active">
    <img src='../assets/items/1.jpg'>
</div>
</div>
<div class="panel-slider__zoom">
</div>
`;

class Slider extends HTMLElement {
    constructor() {
        super();
        var currentSlide = 1,
            maxSlideElement = 3,
            shadowRoot, leftArrow, rightArrow, image, resultImage, lens, watermak, cx, cy;
            
        shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmplSlider.content.cloneNode(true));

        leftArrow = shadowRoot.querySelector('.arrow--left'),
        rightArrow = shadowRoot.querySelector('.arrow--right');

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
                currentSlide = 1
            } else {
                currentSlide++;
            }
            shadowRoot.querySelector('.panel-slider__slides-element').children[1].src = `../assets/items/${currentSlide}.jpg`;
        }

        function previousImage() {
            if (currentSlide == 1) {
                currentSlide = maxSlideElement
            } else {
                currentSlide--;
            }
            shadowRoot.querySelector('.panel-slider__slides-element').children[1].src = `../assets/items/${currentSlide}.jpg`;
        }

        function moveLensCallback(e) {
            let pos, x, y;
            shadowRoot.querySelector('.panel-slider__zoom').style.display = 'block';
            shadowRoot.querySelector('.img-zoom-lens').style.display = 'block';

            cx = resultImage.offsetWidth / lens.offsetWidth;
            cy = resultImage.offsetHeight / lens.offsetHeight;

            resultImage.style.backgroundImage = "url('" + image.src + "')";
            resultImage.style.backgroundSize = (image.width * cx) + "px " + (image.height * cy) + "px";
            pos = getCursorPosition(e);

            x = pos.x - (lens.offsetWidth / 2);
            y = pos.y - (lens.offsetHeight / 2);

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
            resultImage.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
        }

        function moveoutLenseCallback(e) {
            shadowRoot.querySelector('.panel-slider__zoom').style.display = 'none';
            shadowRoot.querySelector('.img-zoom-lens').style.display = 'none';
        }

        function getCursorPosition(e) {
            let imageReactangle, x = 0, y = 0;
            e = e || window.event;
            imageReactangle = image.getBoundingClientRect();
            x = e.pageX - imageReactangle.left;
            y = e.pageY - imageReactangle.top;

            return {
                x: x,
                y: y
            }
        }
    } 
}

window.customElements.define('app-slider', Slider);
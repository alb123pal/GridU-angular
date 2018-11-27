let tmpl = document.createElement('template');
tmpl.innerHTML = `
<link rel="stylesheet" type="text/css" href="../styles/css/product_customer.css">

<div class="panel-slider">
<span id="leftArrow" class="panel-slider__arrow arrow--left"></span>
<span id="rightArrow" class="panel-slider__arrow arrow--right"></span>
</div>
<div class="panel-slider__slides">
<div class="panel-slider__slides-element active">
        <img src='../assets/items/1.jpg'>
        <div>
                <span class="slider-text">Lorem Ipsum 1</span>
        </div>
</div>
</div>
`;

class Slider extends HTMLElement {
    constructor() {
        super();
        var currentSlide = 1,
            maxSlideElement = 3,
            panelSlideNode = document.getElementsByClassName("panel-slider__slides");

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));

        let leftArrow = shadowRoot.querySelector('.arrow--left'),
            rightArrow = shadowRoot.querySelector('.arrow--right');
            
        leftArrow.addEventListener('click', () => {
            if (currentSlide == 1) {
                currentSlide = maxSlideElement
            } else {
                currentSlide--;
            }
            shadowRoot.querySelector('.panel-slider__slides-element').children[0].src = `../assets/items/${currentSlide}.jpg`;
        });

        rightArrow.addEventListener('click', () => {
            if (currentSlide == maxSlideElement) {
                currentSlide = 1
            } else {
                currentSlide++;
            }
            shadowRoot.querySelector('.panel-slider__slides-element').children[0].src = `../assets/items/${currentSlide}.jpg`;
        });
    } 
}

window.customElements.define('app-slider', Slider);
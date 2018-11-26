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
<div class="panel-slider__slides-element">
        <img src='../assets/items/2.jpg'>
        <span class="slider-text">Lorem Ipsum 2</span>
</div>
<div class="panel-slider__slides-element">
       <img src='../assets/items/3.jpg'>
       <span class="slider-text">Lorem Ipsum 3</span>
</div>
</div>
`;

class Slider extends HTMLElement {
    constructor() {
        super();
        var currentSlide = 0,
            maxSlideElement = 2,
            panelSlideNode = document.getElementsByClassName("panel-slider__slides");

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));

        let leftArrow = shadowRoot.querySelector('.arrow--left'),
            rightArrow = shadowRoot.querySelector('.arrow--right');

        leftArrow.addEventListener('click', this.nextImage.bind());
        rightArrow.addEventListener('click', this.nextImage.bind());
    }

    nextImage() {
        // panelSlideNode[0].children[currentSlide].classList.remove('active');panel-slider__slides
        if (currentSlide == maxSlideElement) {

            currentSlide = 0
        } else {
            currentSlide++;
        }
        console.log(currentSlide);
    
        // panelSlideNode[0].children[currentSlide].classList.add('active');
    }

    previousImage() {
        // panelSlideNode[0].children[currentSlide].classList.remove('active');
        console.log('maxSlideElement: ', maxSlideElement);
    
        if (currentSlide == 0) {
            currentSlide = maxSlideElement
        } else {
            currentSlide--;
        }
        console.log(currentSlide);
        // panelSlideNode[0].children[currentSlide].classList.add('active');
    };  
}

window.customElements.define('app-slider', Slider);
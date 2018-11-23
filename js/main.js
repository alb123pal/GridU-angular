var currentSlide = 0,
    maxSlideElement = 2,
    panelSlideNode = document.getElementsByClassName("panel-slider__slides");

let nextImage = function () {
    panelSlideNode[0].children[currentSlide].classList.remove('active');

    if (currentSlide == maxSlideElement) {
        currentSlide = 0
    } else {
        currentSlide++;
    }

    panelSlideNode[0].children[currentSlide].classList.add('active');
};

let previousImage = function () {
    panelSlideNode[0].children[currentSlide].classList.remove('active');

    if (currentSlide == 0) {
        currentSlide = maxSlideElement
    } else {
        currentSlide--;
    }
    
    panelSlideNode[0].children[currentSlide].classList.add('active');
};

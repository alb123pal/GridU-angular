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

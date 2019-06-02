const sliderEl = document.getElementsByClassName('preview-canvas__slider')[0];

sliderEl.addEventListener('mousemove', (event) => {
  document.getElementsByClassName('preview-canvas__slider__value')[0].innerHTML = event.target.value;
});

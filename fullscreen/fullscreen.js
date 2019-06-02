const btn = document.getElementsByClassName('fullscreen')[0];

const openFullScreen = () => {
  const fullscreenCanvas = document.getElementById('cnvs');
  if (fullscreenCanvas) {
    fullscreenCanvas.requestFullscreen();
  }
};

btn.addEventListener('click', () => {
  openFullScreen();
});

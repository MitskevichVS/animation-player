const canvas = document.getElementById('cnvs');
if (canvas.getContext) {
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#bdbdbd';
  ctx.fillRect(0, 0, 300, 300);
}

const animateArr = [];
let auxArray = [];

const draw = (array) => {
  const ctx = canvas.getContext('2d');
  for (let i = 0; i <= 6; i += 3) {
    for (let j = 1; j <= 3; j += 1) {
      ctx.fillStyle = array[i + j];

      const x = (j - 1) * 100;
      const y = (i / 3) * 100;
      const width = j * 100;
      const height = ((i / 3) * 100) + 100;

      ctx.fillRect(x, y, width, height);
    }
  }
};

const divEvent = document.getElementsByClassName('main-container__canvas')[0];

divEvent.addEventListener('click', (event) => {
  const verifyingArray = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
  const targetClick = event.target.id;
  const targetArray = [];
  setTimeout(() => {
    if (verifyingArray.includes(targetClick)) {
      for (let i = 0; i <= 6; i += 3) {
        for (let j = 1; j <= 3; j += 1) {
          const itemsBgCol = document.getElementById(`item${i + j}`).style.backgroundColor;
          targetArray[i + j] = itemsBgCol;
        }
      }
      draw(targetArray);
      auxArray.length = 0;
      auxArray = targetArray.slice();
    }
  }, 20);
});

let animateCount = 0;

const animate = () => {
  const frameRate = document.getElementsByClassName('preview-canvas__slider')[0].value;
  if (+frameRate === 0) {
    draw(auxArray);
  } else if (animateCount < animateArr.length) {
    const frame = animateArr[animateCount];
    draw(frame);
    animateCount += 1;
  } else {
    animateCount = 0;
  }
  setTimeout(animate, 1000 / frameRate);
};

const createFrameBut = document.getElementsByClassName('frames__next-frame-button')[0];

createFrameBut.addEventListener('click', () => {
  animateArr.push(auxArray.slice());

  animate();
});

document.addEventListener('click', (event) => {
  let currentNumber;
  const targetClick = event.target.classList[1];
  const targetEl = event.path[2];
  const elementId = event.path[2].id;
  const parent = document.getElementsByClassName('frames__inner-container')[0];

  if (targetClick === 'fa-trash-alt') {
    for (let i = 0; i < parent.children.length; i += 1) {
      if (parent.children[i] === targetEl) {
        currentNumber = i;
      }
    }
    const wrapper = document.getElementById(elementId);
    wrapper.parentNode.removeChild(wrapper);
    animateArr.reverse().splice(currentNumber, 1).reverse();
  }

  if (targetClick === 'fa-copy') {
    for (let i = 0; i < parent.children.length; i += 1) {
      if (parent.children[i] === targetEl) {
        currentNumber = i;
      }
    }
    console.log(animateArr);
    animateArr.reverse();
    const addSlide = animateArr[currentNumber];
    animateArr.reverse().push(addSlide);
    console.log(animateArr);
  }
});

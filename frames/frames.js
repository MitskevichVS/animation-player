const newFrame = document.getElementsByClassName('frames__next-frame-button')[0];
const copyFrame = document.getElementsByClassName('frames__inner-container')[0];
let count = 1;
const drawLitCanvas = (litTargetArray) => {
  const litCanvas = document.getElementsByClassName('litCanvas')[0];
  litCanvas.width = 150;
  litCanvas.height = 100;
  const litCnvs = litCanvas.getContext('2d');

  for (let i = 0; i <= 6; i += 3) {
    for (let j = 1; j <= 3; j += 1) {
      litCnvs.fillStyle = litTargetArray[i + j];

      const x = (j - 1) * 52;
      const y = ((i / 3) * 33);
      const width = (j * 52);
      const height = ((i / 3) * 33) + 33;

      litCnvs.fillRect(x, y, width, height);
    }
  }
};

newFrame.addEventListener('click', () => {
  const container = document.createElement('div');
  container.classList.add('wrapper');
  container.id = `wrapper${count}`;
  document.getElementsByClassName('frames__inner-container')[0].insertBefore(container, document.getElementsByClassName('frames__inner-container')[0].firstChild);

  const canvas = document.createElement('canvas');
  canvas.classList.add('litCanvas');
  canvas.style.width = '100%';
  canvas.style.height = '100px';


  const countView = document.createElement('div');
  countView.innerHTML = `${count}`;
  countView.classList.add('count');
  count += 1;

  const deleteBut = document.createElement('div');
  deleteBut.classList.add('deleteBut');
  const trashIcon = document.createElement('i');
  trashIcon.classList.add('fas', 'fa-trash-alt');
  deleteBut.appendChild(trashIcon);

  const copyBut = document.createElement('div');
  copyBut.classList.add('copyBut');
  const copyIcon = document.createElement('i');
  copyIcon.classList.add('fas', 'fa-copy');
  copyBut.appendChild(copyIcon);

  container.appendChild(canvas);
  container.appendChild(countView);
  container.appendChild(deleteBut);
  container.appendChild(copyBut);

  const litTargetArray = [];
  for (let i = 0; i <= 6; i += 3) {
    for (let j = 1; j <= 3; j += 1) {
      const itemsBgCol = document.getElementById(`item${i + j}`).style.backgroundColor;
      litTargetArray[i + j] = itemsBgCol;
    }
  }
  drawLitCanvas(litTargetArray);
});

copyFrame.addEventListener('click', (event) => {
  const targetClick = event.target.classList[1];
  const firstCanvas = event.path[2].firstChild;
  const parent = document.getElementsByClassName('frames__inner-container')[0];

  if (targetClick === 'fa-copy') {
    const container = document.createElement('div');
    container.classList.add('wrapper');
    container.id = `wrapper${count}`;
    parent.insertBefore(container, document.getElementsByClassName('frames__inner-container')[0].firstChild);

    const canvas = document.createElement('canvas');
    canvas.classList.add('litCanvas');
    canvas.style.width = '100%';
    canvas.style.height = '100px';

    const countView = document.createElement('div');
    countView.innerHTML = `${count}`;
    countView.classList.add('count');
    count += 1;

    const deleteBut = document.createElement('div');
    deleteBut.classList.add('deleteBut');
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fas', 'fa-trash-alt');
    deleteBut.appendChild(trashIcon);

    const copyBut = document.createElement('div');
    copyBut.classList.add('copyBut');
    const copyIcon = document.createElement('i');
    copyIcon.classList.add('fas', 'fa-copy');
    copyBut.appendChild(copyIcon);

    container.appendChild(canvas);
    container.appendChild(countView);
    container.appendChild(deleteBut);
    container.appendChild(copyBut);

    const litCanvas = document.getElementsByClassName('litCanvas')[0];
    const litCnvs = litCanvas.getContext('2d');
    litCnvs.drawImage(firstCanvas, 0, 0, 300, 150);
  }
});

window.onload = () => {
  const state = {
    currentTool: 'none',
  };
  let color;
  let selectedItem;

  const ColorPickerEl = document.getElementById('Choose_color');
  const PaintBucketEl = document.getElementById('Paint_bucket');

  document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyA') {
      state.currentTool = 'PaintBucket';
      PaintBucketEl.style.backgroundColor = '#bdbdbd';
      ColorPickerEl.style.backgroundColor = '';
    } else if (event.code === 'KeyS') {
      state.currentTool = 'ColorPicker';
      ColorPickerEl.style.backgroundColor = '#bdbdbd';
      PaintBucketEl.style.backgroundColor = '';
    }
  });

  PaintBucketEl.addEventListener('click', (event) => {
    state.currentTool = 'PaintBucket';
    PaintBucketEl.style.backgroundColor = '#bdbdbd';
    ColorPickerEl.style.backgroundColor = '';
    event.stopImmediatePropagation();
  });

  ColorPickerEl.addEventListener('click', (event) => {
    state.currentTool = 'ColorPicker';
    ColorPickerEl.style.backgroundColor = '#bdbdbd';
    PaintBucketEl.style.backgroundColor = '';
    event.stopImmediatePropagation();
  });

  document.addEventListener('click', (event) => {
    if (state.currentTool === 'ColorPicker') {
      color = window.getComputedStyle(event.target).backgroundColor;
      if (state.currentColor === color) {
        return;
      }
      state.previousColor = state.currentColor;
      state.currentColor = color;

      const currentColor = document.getElementById('tools_current_color');
      currentColor.style.backgroundColor = state.currentColor;

      const prevColor = document.getElementById('tools_prev_color');
      prevColor.style.backgroundColor = state.previousColor;
    }

    if (state.currentTool === 'PaintBucket') {
      selectedItem = event.target.id;
      if (selectedItem === 'Paint_bucket') {
        return;
      }
      document.getElementById(selectedItem).style.backgroundColor = state.currentColor;
    }
  });
};

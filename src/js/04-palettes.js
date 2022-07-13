'use strict';

const allInputsRadio = document.querySelectorAll('.js_inputRadio');
const previewBox = document.querySelector('.js_previewBox');

function paintPalette(palette) {
  previewBox.classList.remove('palette-1', 'palette-2', 'palette-3');
  previewBox.classList.add(`palette-${palette}`);
}

function handleRadio(ev) {
  const palette = parseInt(ev.currentTarget.value);
  dataInput.palette = palette;
  paintPalette(palette);
}

for (const oneRadio of allInputsRadio) {
  oneRadio.addEventListener('click', handleRadio);
}

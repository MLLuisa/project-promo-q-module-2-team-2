const iconsColor = document.querySelectorAll(".js_icons");
const rectangleColor = document.querySelector(".js_preview__rectangle");
const circleColor = document.querySelectorAll(".js_preview_icon");

//Traer de DesingHTML los value del input con el target

//RESTRUCTURAR

function changeColor1() {
  previewName.style.color = "#114e4e";
  iconsColor.style.color = "#114e4e";
  rectangleColor.style.backgroundColor = "#438792";
  circleColor.style.borderColor = "#a2deaf";
  //Hacer for para cada uno
}

function changeColor2() {
  previewName.style.color = "#420101";
  iconsColor.style.color = "#420101";
  rectangleColor.style.backgroundColor = "#bd1010";
  circleColor.style.borderColor = "#e95626";
}

function changeColor3() {
  previewName.style.color = "#3e5b65";
  iconsColor.style.color = "#3e5b65";
  rectangleColor.style.backgroundColor = "#eab052";
  circleColor.style.borderColor = "#a0c0cf";
}
console.log(Array.isArray(circleColor));
console.log(circleColor);

'use strict';

const inputName = document.querySelector ('.js_inputName');
const inputJob = document.querySelector ('.js_inputJob');
const inputEmail = document.querySelector ('.js_inputEmail');
const inputPhone = document.querySelector ('.js_inputPhone');
const inputLinkedin = document.querySelector ('.js_inputLinkedin');
const inputGithub = document.querySelector ('.js_inputGithub');
const previewName = document.querySelector ('.js_previewName');
const previewJob = document.querySelector ('.js_previewJob');
const previewPhone = document.querySelector ('.js_previewPhone');
const previewEmail = document.querySelector ('.js_previewEmail');
const previewLinkedin = document.querySelector ('.js_previewLinkedin');
const previewGithub = document.querySelector ('.js_previewGithub');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');
const allInputs = document.querySelector('.js_allInputs');

const dataInput = {
  palette: 1,
  name:'',
  job: '',
  phone:'',
  email: '',
  linkedin: '',
  github: '',
  photo: ''
};
const previewData ={
  name: previewName,
  job: previewJob,
  phone: previewPhone,
  email: previewEmail,
  linkedin: previewLinkedin,
  github: previewGithub,
};
/* const handleInput = () =>{
  const valueInput = inputName.value;
  dataInput.name = valueInput;
  previewName.innerHTML = dataInput.name;
};
inputName.addEventListener('keyup', handleInput);
 */
const handleInput = (ev) =>{
  const nameInput = ev.target.name;
  const valueInput = ev.target.value;
  dataInput[nameInput] =valueInput;
console.log(dataInput);
previewData[nameInput].innerHTML = valueInput;
};

allInputs.addEventListener('keyup', handleInput);

//Capturar imagen y visualizar
const fr = new FileReader();
/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que 
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e 
 */
function getImage(e){
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}


/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener('change', getImage);
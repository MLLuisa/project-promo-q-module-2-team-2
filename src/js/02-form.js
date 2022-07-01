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
const previewLinkedine = document.querySelector ('.js_previewLinkedin');
const previewGithub = document.querySelector ('.js_previewGithub');

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
const handleInput = () =>{
  const valueInput = inputName.value;
  dataInput.name = valueInput;
  previewName.innerHTML = dataInput.name;
};
inputName.addEventListener('keyup', handleInput);
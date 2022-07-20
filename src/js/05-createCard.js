'use strict';

const sectionUrl = document.querySelector('.js_url');
const pMsg = document.querySelector('.js_msj');
const shareTwitter = document.querySelector('.js_shareTwitter');

const renderInputsLS = () => {
  inputName.value = dataInput.name;
  inputJob.value = dataInput.job;
  inputPhone.value = dataInput.phone;
  inputEmail.value = dataInput.email;
  inputPhone.value = dataInput.phone;
  inputLinkedin.value = dataInput.linkedin;
  inputGithub.value = dataInput.github;
  if (dataInput.photo === '') {
    dataInput.photo =
      profilePreview.style.backgroundImage = `url(../images/img-preview.jpg)`;
  } else {
    profilePreview.style.backgroundImage = `url( ${dataInput.photo})`;
  }
  profileImage.style.backgroundImage = `url( ${dataInput.photo})`;
};

function createCard() {
  //expresiones regulares ---> validar email, validar contraseñas--> BONUS
  ///Guardar en local storage

  //Envío al Servidor
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataInput),
  })
    .then((response) => response.json())
    .then((serverResp) => {
      console.log(serverResp);
      pMsg.innerHTML = 'La tarjeta ha sido creada';
      if (serverResp.success) {
        sectionUrl.innerHTML = serverResp.cardURL;
        sectionUrl.href = serverResp.cardURL;
        shareTwitter.href = `https://twitter.com/intent/tweet?text= adalab&url=${serverResp.cardURL}`;
      } else {
        pMsg.innerHTML = 'Todos los campos deben estar llenos.';
      }
    });
}

function handleClickButtonShare(ev) {
  ev.preventDefault();
  createCard();
  cardShare.classList.remove('collapsed');
}

buttonShare.addEventListener('click', handleClickButtonShare);

const loadPage = () => {
  let localCardBicha = JSON.parse(localStorage.getItem('localStorageCard'));
  if (localCardBicha) {
    dataInput = localCardBicha;
    renderInputsLS();
    renderPreview();
  }
};
loadPage();

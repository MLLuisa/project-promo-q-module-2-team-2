'use strict';

const sectionUrl = document.querySelector('.js_url');
const pMsg = document.querySelector('.js_msj');
const shareTwitter = document.querySelector('.js_shareTwitter');

function createCard() {
  //expresiones regulares ---> validar email, validar contraseñas--> BONUS

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

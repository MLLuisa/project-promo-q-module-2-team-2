'use strict';

const sectionUrl = document.querySelector('.js_url');
const pMsg = document.querySelector('.js_msj');

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
  
      if (serverResp.success) {
        sectionUrl.innerHTML = serverResp.cardURL;
        sectionUrl.href = serverResp.cardURL;
      } else {
        pMsg.innerHTML = 'Todos los campos deben estar llenos.';
      }
    });
}

function handleClickButtonShare (ev) {
    ev.preventDefault();
    createCard();
    cardShare.classList.remove("collapsed");
}

buttonShare.addEventListener("click", (handleClickButtonShare));


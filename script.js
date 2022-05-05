const email = document.querySelector('.login-email');
const senha = document.querySelector('.login-senha');
const botao = document.querySelector('#botao');
const desc = document.querySelector('#textarea');
const cont = document.querySelector('#counter');
const submitBtn = document.querySelector('#submit-btn');
const checkboxAgreement = document.querySelector('#agreement');
botao.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

desc.addEventListener('keypress', () => {
  const tam = desc.value.length + 1;
  cont.innerHTML = 500 - tam;
  console.log(tam);
});
checkboxAgreement.addEventListener('click', () => {
  if (checkboxAgreement.value === true) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});
window.onload = () => {
  submitBtn.disabled = true;
};

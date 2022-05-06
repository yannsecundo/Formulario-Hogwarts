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

desc.addEventListener('keyup', () => {
  const calculo = desc.value.length;
  if ((desc.value.length) < cont.value) {
    cont.innerHTML = cont.value + calculo + 1;
    console.log(cont.value);
  } else {
    cont.innerHTML = 500 - calculo;
  }
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

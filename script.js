const email = document.querySelector('.login-email');
const senha = document.querySelector('.login-senha');
const botao = document.querySelector('#botao');
const submitBtn = document.querySelector('#submit-btn');
const checkboxAgreement = document.querySelector('#agreement');
window.onload = () => {
  submitBtn.disabled = true;
};
botao.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkboxAgreement.addEventListener('click', () => {
  if (checkboxAgreement.value === true) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});

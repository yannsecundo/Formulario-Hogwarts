const email = document.querySelector('.login-email');
const senha = document.querySelector('.login-senha');
const botao = document.querySelector('#botao');
botao.addEventListener('click', function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

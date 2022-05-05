const email = document.querySelector('.login-email');
const senha = document.querySelector('.login-senha');
const botao = document.querySelector('#botao');
const desc = document.querySelector('#textarea');
const cont = document.querySelector('#counter');
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

const email = document.querySelector('.login-email').value;
const senha = document.querySelector('.login-senha').value;
function login() {
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
login();

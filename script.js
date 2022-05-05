let email = document.querySelector('.login-email');
let senha = document.querySelector('.login-senha');
function login() {
    if (email.value === "tryber@teste.com" & senha.value === "123456") {
        alert("Olá, Tryber!")
    } else {
        alert("Email ou senha inválidos.")
    }
}
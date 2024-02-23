const imput = document.querySelector('.login__input');
const button = document.querySelector('.login__buttom');
const form = document.querySelector('.login__form');

const handleSubmit = (event) => {
    localStorage.setItem('usuario', imput.value);
    localStorage.setItem('comprimento', 'obrigado pela sua presença,');
    window.location = 'cadastro.html';
}
form.addEventListener('submit', handleSubmit);
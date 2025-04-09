const HTTP_EMAIL = 'qa+1@pruebas.com';
const HTTP_PASSWORD = 'Test123.';

const errorMessage = document.getElementById('error-message');

const credentialValidator = async (loginData) => {
  errorMessage.style.display = 'none';
  errorMessage.textContent = '';

  if (loginData.password !== HTTP_PASSWORD) {
    errorMessage.textContent = 'La contraseña es incorrecta';
    errorMessage.style.display = 'block';
    return;
  } 
  
  if (loginData.email !== HTTP_EMAIL) {
    errorMessage.textContent = 'El correo esta mal';
    errorMessage.style.display = 'block';
    return;
  }

  window.location.href = '../html/home.html';
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('Entre desde js');
  const session = document.getElementById('formLog');

  session.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    if (!email || !password) {
      errorMessage.textContent = 'Todos los campos son obligatorios';
      errorMessage.style.display = 'block';
      return;
    }

    if (password.length <= 6) {
      errorMessage.textContent = 'La contraseña debe ser mayor a 6 caracteres';
      errorMessage.style.display = 'block';
      return;
    }

    const loginData = { email, password };
    credentialValidator(loginData);
  });
});

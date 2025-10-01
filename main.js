document.addEventListener("DOMContentLoaded", () => {

    const boutonSombre = document.getElementById("sombre");
    const body = document.body;
    const icone = boutonSombre.querySelector("i");

    boutonSombre.addEventListener("click", () => {
        const actif = body.classList.toggle("dark-mode");
        icone.classList.toggle("fa-moon", !actif);
        icone.classList.toggle("fa-sun", actif);
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        
        
        nav.classList.toggle("active");
    });
});




const textarea = document.getElementById('comment');
const errorMessage = document.getElementById('error-message');
const maxLength = 200;

textarea.addEventListener('input', () => {
  if (textarea.value.length > maxLength) {
    textarea.classList.add('error');
    errorMessage.style.display = 'block';
  } else {
    textarea.classList.remove('error');
    errorMessage.style.display = 'none';
  }
});

// Bloquer la soumission si trop long
document.querySelector('form').addEventListener('submit', (e) => {
  if (textarea.value.length > maxLength) {
    e.preventDefault();
    alert('Votre commentaire dépasse la limite de 200 caractères.');
  }
});
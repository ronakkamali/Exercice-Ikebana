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
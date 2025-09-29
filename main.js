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
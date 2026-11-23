
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
        const abierto = menu.classList.toggle('abierto');

        menuToggle.setAttribute('aria-expanded', abierto);
        menuToggle.textContent = abierto ? '✕' : '☰';
    });
}

const anio = document.getElementById('anio');

if (anio) {
    anio.textContent = new Date().getFullYear();
}

window.addEventListener('scroll', () => {
    const header = document.getElementById('contenido-encabezado');
    header.style.opacity = '1' - window.pageYOffset / 650;
})
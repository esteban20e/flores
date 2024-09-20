const parrafo = document.getElementById('mi-parrafo');
const textoOriginal = '¡HOLA LARA!';
const textoCambiado = '¡BIENVENIDA!';

parrafo.addEventListener('mouseover', () => {
    parrafo.textContent = textoCambiado; // Cambia el texto al pasar el mouse
});

parrafo.addEventListener('mouseout', () => {
    parrafo.textContent = textoOriginal; // Vuelve al texto original al salir
});


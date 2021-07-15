'use strict';
const confUsuarios = document.getElementById('conf-usuarios');
const botonConfig = document.getElementById('boton-config');
const listarusuarios = document.getElementById('listar-usuarios');
const botonListar = document.getElementById('boton-listar');


listarusuarios.classList.add('ocultar');
/*Llamar los formularios del usuario ya sea listar o configurar */
botonConfig.addEventListener('click', () => {
    confUsuarios.classList.remove('ocultar');
    listarusuarios.classList.add('ocultar');
});
botonListar.addEventListener('click', () => {
    listarusuarios.classList.remove('ocultar');
    confUsuarios.classList.add('ocultar');
});
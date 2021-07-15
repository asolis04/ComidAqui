'use strict';

const confClasificacion = document.getElementById('conf-clasificacion-platos');
const listarClasificacion = document.getElementById('listar-clasificacion');
const botonListar = document.getElementById('boton-listar');
const botonConfig = document.getElementById('boton-config');

listarClasificacion.classList.add('ocultar');
/*Llamar los formularios del usuario ya sea listar o configurar */
botonConfig.addEventListener('click', () => {
    confClasificacion.classList.remove('ocultar');
    listarClasificacion.classList.add('ocultar');
});
botonListar.addEventListener('click', () => {
    listarClasificacion.classList.remove('ocultar');
    confClasificacion.classList.add('ocultar');
});
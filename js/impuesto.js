'use strict';

const confImpuesto = document.getElementById('conf-impuestos');
const listarImpuesto = document.getElementById('listar-impuestos');
const btnListarImpuesto = document.getElementById('btnListarImpuesto');
const btnConfiImpuesto = document.getElementById('btnConfiImpuesto');
const botonConfig = document.getElementById('admin-impuestos');

/*Llamar los formularios del usuario ya sea listar o configurar */
listarImpuesto.classList.add('ocultar');
btnListarImpuesto.addEventListener('click', () => {
    listarImpuesto.classList.remove('ocultar');
    confImpuesto.classList.add('ocultar');
});
btnConfiImpuesto.addEventListener('click', () => {
    listarImpuesto.classList.add('ocultar');
    confImpuesto.classList.remove('ocultar');
});
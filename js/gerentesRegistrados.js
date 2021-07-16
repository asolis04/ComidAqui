'use strict';

// estado
// 1 --> activo
// 2 --> inactivo
// 3 --> pendiente de aceptación
// 4 --> vetado
// 5 --> pendiente de cambio de contraseña

let listaUsuarios = [{
    nombreDelGerente: 'Ada Calderón Olivares ',
    correo:'acalderon@gmail.com',
    restaurante: 'Chilis'
}, {
    nombreDelGerente: 'Ana Solís Rostrán',
    correo: 'asolis@gmail.com',
    restaurante: 'La Parrillita de Pepe'
}, {
    nombreDelGerente: 'Kayla Baylis Fernández',
    correo:  'kbaylis@gmail.com',
    restaurante: 'Restaurante Nuestra Tierra'

}, {
    nombreDelGerente: 'Vivian Martin Ramírez',
    correo: 'vMartin@gmail.com',
    restaurante: 'Tin Jo'



}, {
    nombreDelGerente: 'Danny Cruz González',
    correo: 'dcruz@gmail.com',
    restaurante: 'Tsunami Sushi'
}];

const obtenerUsuarios = () => {
    return listaUsuarios;
};

const confEncargados = document.getElementById('conf-encargados');
const botonConfig = document.getElementById('boton-config');
const listarEncargados = document.getElementById('listar-encargados');
const botonListar = document.getElementById('boton-listar');


listarEncargados.classList.add('ocultar');
/*Llamar los formularios del usuario ya sea listar o configurar */
botonConfig.addEventListener('click', () => {
    confEncargados.classList.remove('ocultar');
    listarEncargados.classList.add('ocultar');
});
botonListar.addEventListener('click', () => {
    listarEncargados.classList.remove('ocultar');
    confEncargados.classList.add('ocultar');
});
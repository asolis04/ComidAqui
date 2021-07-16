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

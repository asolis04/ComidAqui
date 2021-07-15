'use strict';
/*Cliente */
const nombrePerfilCliente = document.querySelector('#nombrePerfilCliente')
const correoPerfilCliente = document.querySelector('#correoPerfilCliente');
const fechaNacimientoPerfilCliente = document.querySelector('#fechaNacimientoPerfilCliente');
const cedualPerfilCliente = document.querySelector('#cedualPerfilCliente');
const restauranteUno = document.querySelector('#restauranteUno');
const restauranteDos = document.querySelector('#restauranteDos');
const restauranteTres = document.querySelector('#restauranteTres');

let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));

/*Cliente */
nombrePerfilCliente.innerText = usuarioConectado.nombre;
correoPerfilCliente.innerText = usuarioConectado.correo;
fechaNacimientoPerfilCliente.innerText = usuarioConectado.fechaNacimiento;
cedualPerfilCliente.innerText = usuarioConectado.cedula;
restauranteUno.innerText = usuarioConectado.favoritos[0];
restauranteDos.innerText = usuarioConectado.favoritos[1];
restauranteTres.innerText = usuarioConectado.favoritos[2];

console.log(usuarioConectado.favoritos)
'use strict';

let listaSolicitudes = [{
        nombre: 'Tatiana Fallas Castillo',
        correo: 'tfallas@gmail.com',

    },
    {
        nombre: 'Andre Fallas',
        correo: 'afallas@gmail.com',

    },


]

const obtenerSolicitudes = () => {

    return listaSolicitudes;
};

//Funcion para mostrar los datos
const tabla = document.querySelector('#tbl-usuarios tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let coleccionSolicitudes = obtenerSolicitudes();



const mostrarSolicitudes = () => {

    tabla.innerHTML = '';

    //Iterar sobre una coleccion de datos
    coleccionSolicitudes.forEach(objSolicitudes => {
        let filtro = inputFiltro.value.toLowerCase();
        if (objSolicitudes.nombre.toLowerCase().includes(filtro) || objSolicitudes.correo.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = objSolicitudes.nombre;
            fila.insertCell().innerHTML = objSolicitudes.correo;

        }
    });
};

mostrarSolicitudes();

inputFiltro.addEventListener('keyup', mostrarSolicitudes);
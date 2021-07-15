'use strict';
const tabla=document.querySelector( '#tbl-usuarios tbody');
const inputFiltro=document.querySelector('#txt-filtro');
let listaGobalDeUsuarios=obtenerUsuarios();


const mostarUsuarios= () =>{

    tabla.innerHTML = '';
//limpiar tabla

    listaGobalDeUsuarios.forEach(objUsuario => {
        //filtrar 
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = objUsuario.nombreDelGerente;
        fila.insertCell().innerHTML = objUsuario.correo;
        fila.insertCell().innerHTML = objUsuario.restaurante; });

};
mostarUsuarios()//invocarla

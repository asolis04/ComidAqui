const tabla = document.querySelector('#tbl-usuarios tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let listaGobalDeUsuarios = obtenerDatos();


const confRestaurantes = document.getElementById('conf-restaurantes');
const botonConfig = document.getElementById('boton-config');
const listarRestaurantes = document.getElementById('listar-restau');
const botonListar = document.getElementById('boton-listar');

listarRestaurantes.classList.add('ocultar');
/*Llamar los formularios del usuario ya sea listar o configurar */
botonConfig.addEventListener('click', () => {
    confRestaurantes.classList.remove('ocultar');
    listarRestaurantes.classList.add('ocultar');
});
botonListar.addEventListener('click', () => {
    listarRestaurantes.classList.remove('ocultar');
    confRestaurantes.classList.add('ocultar');
});


const mostarUsuarios = () => {

    tabla.innerHTML = '';
    //limpiar tabla

    listaGobalDeUsuarios.forEach(objUsuario => {
        let filtro = inputFiltro.value.toLowerCase();
        if (objUsuario.nombreDelRestaurante.toLocaleLowerCase().includes(filtro)) { //filtrar 
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = objUsuario.nombreDelRestaurante;



        }
        //crear una fila


    });

};
mostarUsuarios() //invocarla
inputFiltro.addEventListener('keyup', mostarUsuarios);
'use strict';
// Estados
// 1 -> activo
// 2 -> inactivo
// 3 -> pendiente de aceptación
// 4 -> vetado
// 5 -> pendiente de cambio de contraseña

let listaUsuarios = [{
        nombre: 'Ana Solis Rostrán',
        correo: 'asolis@gmail.com',
        telefono: '83031506',
        fechaNacimiento: '4-Jul-1991',
        cedula: '2-0689-0142',
        contrasenna: '123',
        rol: 'administrador',
        estado: 1
    },
    {
        nombre: 'Ada Calderón Olivares',
        correo: 'acalderon@gmail.com',
        telefono: '88751423',
        fechaNacimiento: '4-Jul-1991',
        cedula: '1-0987-0142',
        contrasenna: '456',
        rol: 'dueno',
        estado: 1
    },

    {
        nombre: 'Kayla Baylis Fernández',
        correo: 'kbaylis@gmail.com',
        fechaNacimiento: '4-Jul-1991',
        telefono: '98651402',
        cedula: '1-0987-0874',
        contrasenna: '789',
        rol: 'cliente',
        estado: 1,
        favoritos: {
            nombre: 'Nuestra Tierra',
            nombre: 'Tin Jo',
            nombre: 'La Parillita'
        }
    },
    {
        nombre: 'Danny Cruz González',
        correo: 'dcruz@gmail.com',
        telefono: '96021485',
        fechaNacimiento: '4-Jul-1991',
        cedula: '1-0787-0874',
        contrasenna: '963',
        rol: 'cliente',
        estado: 2,
        favoritos: {
            restauranteUno: 'Nuestra Tierra',
            restauranteDos: 'Tin Jo',
            restauranteTres: 'La Parillita'
        }
    },
    {
        nombre: 'Vivian Martin Ramírez',
        correo: 'vMartin@gmail.com',
        telefono: '96021485',
        fechaNacimiento: '4-Jul-1991',
        cedula: '1-0787-0874',
        contrasenna: '963',
        rol: 'encargado',
        estado: 1
    },

]


const obtenerUsuarios = () => {
    return listaUsuarios;
};

const validarCredenciales = (correo, contrasenna) => {
    let listaUsuarios = obtenerUsuarios();
    let autenticado = false;
    let msjError = 'Usuario o contraseña incorrecta'
    let usuarioRoll = '';


    //Recorrer la lista de usuarioi
    listaUsuarios.forEach(usuario => {
        if (usuario.correo == correo) {
            if ((usuario.contrasenna == contrasenna) && (usuario.estado == 1)) {
                localStorage.setItem('usuarioConectado', JSON.stringify(usuario))
                autenticado = true;
                usuarioRoll = usuario.rol;
            } else {
                if (usuario.estado != 1) {
                    msjError = 'El usuario se encuentra inactivo o pendiente de confirmación, por favor contacte al administrador de la aplicacion'

                }
            }
        }
    });
    if ((autenticado == true)) {
        if ((usuarioRoll == 'administrador'))
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sessión correcto'

            }).then(() => {
                window.location.href = 'perfiles.html';
            });
        if ((usuarioRoll == 'encargado'))
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sessión correcto'

            }).then(() => {
                window.location.href = 'perfiles.html';
            });
        if ((usuarioRoll == 'cliente')) {
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sessión correcto'

            }).then(() => {
                window.location.href = 'Pagina-inicio-cliente.html';
            });

        }
        if ((usuarioRoll == 'dueno')) {
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sessión correcto'

            }).then(() => {
                window.location.href = 'perfiles.html';
            });

        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Inicio de sessión incorrecto',
            text: msjError
        });

    }
};

const validarSoloCorreo = (correo) => {
    let listaUsuarios = obtenerUsuarios();
    let autenticado = false;
    let msjError = 'Correo no existe, en el sistema.'

    //Recorrer la lista de usuarioi
    listaUsuarios.forEach(usuario => {
        if (usuario.correo == correo) {
            if ((usuario.estado == 1)) {
                localStorage.setItem('usuarioConectado', JSON.stringify(usuario))
                autenticado = true;
            } else {
                if (usuario.estado != 1) {
                    msjError = 'El usuario se encuentra inactivo o pendiente de confirmación, por favor contacte al administrador de la aplicacion'

                }
            }
        }
    });
    if (autenticado == true) {
        Swal.fire({
            icon: 'success',
            title: 'Correo Enviado, Revise su email e ingrese con el código enviado.'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Correo no existe.',
            text: msjError
        });

    }
};
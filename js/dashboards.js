/*Super Admin */
const elementoNombreUsuario = document.querySelector('#nombrePerfil')
const correoPerfil = document.querySelector('#correoPerfiles');
const fechaNacimientoPerfil = document.querySelector('#fechaNacimientoPerfil');
const cedulaPerfil = document.querySelector('#cedualPerfil');

/*Encargado */
const NombreUsuarioEncargado = document.querySelector('#nombrePerfilEncargado')
const correoPerfilEncfargado = document.querySelector('#correoPerfilEncargado');
const fechaNacimientoPerfilEncargado = document.querySelector('#fechaNacimientoPerfilEncargado');
const cedulaPerfilEncargado = document.querySelector('#cedualPerfilEncargado');


/*Dueño */
const nombrePerfilDueno = document.querySelector('#nombrePerfilDueno')
const correoPerfilDueno = document.querySelector('#correoPerfilDueno');
const fechaNacimientoPerfilDueno = document.querySelector('#fechaNacimientoPerfilDueno');
const cedualPerfilDueno = document.querySelector('#cedualPerfilDueno');




/*Super Admin */
elementoNombreUsuario.innerText = usuarioConectado.nombre;
correoPerfil.innerText = usuarioConectado.correo;
fechaNacimientoPerfil.innerText = usuarioConectado.fechaNacimiento;
cedulaPerfil.innerText = usuarioConectado.cedula;
/*Encargado */
NombreUsuarioEncargado.innerText = usuarioConectado.nombre;
correoPerfilEncfargado.innerText = usuarioConectado.correo;
fechaNacimientoPerfilEncargado.innerText = usuarioConectado.fechaNacimiento;
cedulaPerfilEncargado.innerText = usuarioConectado.cedula;
/*Dueño */
nombrePerfilDueno.innerText = usuarioConectado.nombre;
correoPerfilDueno.innerText = usuarioConectado.correo;
fechaNacimientoPerfilDueno.innerText = usuarioConectado.fechaNacimiento;
cedualPerfilDueno.innerText = usuarioConectado.cedula;
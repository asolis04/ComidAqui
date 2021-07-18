const camposRequeridosReservacion = document.querySelectorAll('#frm-reservacion :required');
const btnEnviarInfo = document.querySelector('#btn');

const validar = () => {
    let error = false;

    camposRequeridosReservacion.forEach(campo => {
        if (campo.value == '') {
            error = true;
            campo.classList.add('error');
        } else {
            campo.classList.remove('error');
        }
    });
    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'No se pudo realizar la reservación',
            text: 'Por Favor ingrese todos los datos'
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Reservación Confirmada!',
            text: 'Su número de reservación es 001'
        });
        camposRequeridosReservacion.values = "";


    }




};
function validarFormulario() {
    // Obtener los valores de los campos del formulario
    let id = document.getElementById('id').value;
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let edad = document.getElementById('edad').value;
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let mensajeError = ''; // Variable para almacenar mensajes de error

    // Validación de ID
    if (!/^\d{5}$/.test(id)) {
        mensajeError += 'El ID debe ser un número de 5 dígitos exactamente.<br>';
    }

    // Validación de nombre y apellidos
    if (nombre.trim() === '' || apellidos.trim() === '') {
        mensajeError += 'El nombre y los apellidos no pueden estar vacíos.<br>';
    }

    // Validación de teléfono
    if (!/\(\d{3}\)\d{3}-\d{4}/.test(telefono)) {
        mensajeError += 'El teléfono debe tener el siguiente formato (###)###-####.<br>';
    }

    // Validación de correo electrónico
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        mensajeError += 'El correo electrónico debe ser válido.<br>';
    }

    // Validación de edad
    if (isNaN(edad) || parseInt(edad) < 0) {
        mensajeError += 'La edad debe ser un número positivo.<br>';
    }

    // Validación de fecha de nacimiento
    let fechaActual = new Date();
    let fechaNac = new Date(fechaNacimiento);
    if (fechaNac >= fechaActual) {
        mensajeError += 'La fecha de nacimiento debe ser válida.<br>';
    }

    // Mostrar mensajes de error en el elemento con id "mensajeError"
    if (mensajeError !== '') {
        document.getElementById('mensajeError').innerHTML = '<div class="alert alert-danger">' + mensajeError + '</div>';
        return false; // Evitar el envío del formulario si hay errores
    }

    return true; // Permitir el envío del formulario si no hay errores
}
# EDVAN DANIEL MERCADO LAMAS 20490721 (PASO 4 ESTA ABAJO)
ING SISTEMAS COMPUTACIONALES


# Formulario de Validación
Descripción
Este proyecto consiste en desarrollar un formulario de registro con validaciones en HTML, CSS y JavaScript. El formulario incluye campos para ID, nombre, apellidos, teléfono, correo electrónico, edad y fecha de nacimiento. Al presionar el botón "Enviar", se realizan validaciones para asegurar que los datos ingresados sean correctos.

# objetivo
El objetivo principal de este proyecto es demostrar el uso de HTML, CSS y JavaScript para crear un formulario interactivo y funcional que cumpla con requisitos específicos de validación.

# Funcionalidades
Validación de ID: se verifica que el ID tenga exactamente 5 dígitos.
Validación de nombre y apellidos: se asegura de que estos campos no estén vacíos.
Validación de teléfono: se comprueba que el teléfono tenga el formato correcto (###)###-####.
Validación de correo electrónico: se valida que el correo electrónico tenga un formato válido.
Validación de edad: se verifica que la edad sea un número positivo.
Validación de fecha de nacimiento: se comprueba que la fecha de nacimiento sea una fecha válida.

# utilizadas
HTML
CSS (con Bootstrap para estilos adicionales)
JavaScript

# Paso 4: Análisis
Etiqueta <input> en HTML
La etiqueta <input> se utiliza para crear controles interactivos en formularios web. Algunos de los atributos más comunes que puede tener son:

type: Define el tipo de control que se va a crear (texto, contraseña, checkbox, radio, etc.).
id: Identificador único para el control.
name: Nombre del control que se enviará al servidor cuando se envíe el formulario.
placeholder: Texto de ayuda que se muestra en el control cuando está vacío.
required: Indica que el campo es obligatorio.
pattern: Expresión regular que debe coincidir para que el valor sea válido.
# Etiqueta <button> en HTML
La etiqueta <button> se utiliza para crear un botón en un formulario. Puede configurarse de varias formas, como por ejemplo:

type: Define el tipo de botón (submit, reset o button).
class: Clases de CSS para estilizar el botón.
onclick: Evento que se ejecuta cuando se hace clic en el botón.
# Método addEventListener
El método addEventListener se utiliza para adjuntar un evento a un elemento HTML. En este proyecto, se utiliza para adjuntar una función de validación al evento submit del formulario.

# Validación de entradas
Cada entrada del formulario se valida utilizando expresiones regulares y condiciones específicas:

ID: Se verifica que tenga exactamente 5 dígitos.
Nombre y apellidos: Se asegura de que no estén vacíos.
Teléfono: Se comprueba que tenga el formato correcto (###)###-####.
Correo electrónico: Se valida con una expresión regular.
Edad: Se verifica que sea un número positivo.
Fecha de nacimiento: Se comprueba que tenga el formato AAAA-MM-DD.

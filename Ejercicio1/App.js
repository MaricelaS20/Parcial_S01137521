// Aquí escribire mi nombre
const nombre = 'Maricela';

// Función para actualizar el mensaje de bienvenida
function actualizarMensaje() {
    // Seleccionar el elemento donde se mostrará el mensaje
    const mensajeElemento = document.getElementById('welcome-message');
    
    // Crear el mensaje personalizado
    const mensaje = `¡Bienvenida, ${nombre}!`;
    
    // Actualizael contenido con el mensaje
    mensajeElemento.textContent = mensaje;
}

// Llama a la función para actualizar el mensaje cuando la página se carga
document.addEventListener('DOMContentLoaded', actualizarMensaje);


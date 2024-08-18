// Inicializa el contador en 0
let contador = 0;

// Esta función es para actualizar el valor del contador
function actualizarContador() {
    // Esta funcion es para incrementar el contador
    contador++;
    
    // aqui se selecciona el elemento que muestra el contador
    const contadorElemento = document.getElementById('contador');
    
    // Actualiza el contenido del elemento con el nuevo valor del contador
    contadorElemento.textContent = contador;
}

// Aqui se selecciona el botón y agregar un evento de clic
const botonIncrementar = document.getElementById('incrementar');
botonIncrementar.addEventListener('click', actualizarContador);

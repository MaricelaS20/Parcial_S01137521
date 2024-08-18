const { createApp, ref } = Vue;

createApp({
    setup() {
        // Estado dinámico para la entrada del usuario
        const inputValue = ref('');

        // Esta función muestra el valor del input en una alerta
        function mostrarAlerta() {
            alert(inputValue.value);
        }

        return {
            inputValue,
            mostrarAlerta
        };
    }
}).mount('#app');

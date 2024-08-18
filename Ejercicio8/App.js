const { createApp, ref } = Vue;

createApp({
    setup() {
        // Estado que cambia para manejar la condición
        const condicion = ref(true);

        // esta funcion es para alternar la condición
        function toggleCondicion() {
            condicion.value = !condicion.value;
        }

        return {
            condicion,
            toggleCondicion
        };
    }
}).mount('#app');

const { createApp, ref } = Vue;

createApp({
    setup() {
        // Este estado reacciona para controlar la visibilidad del mensaje
        const mostrarMensaje = ref(false);

        // Esta función es para alternar la visibilidad del mensaje
        function toggleMensaje() {
            mostrarMensaje.value = !mostrarMensaje.value;
        }

        return {
            mostrarMensaje,
            toggleMensaje
        };
    }
}).mount('#app');

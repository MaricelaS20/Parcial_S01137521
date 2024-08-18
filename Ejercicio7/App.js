const { createApp, ref, onMounted } = Vue;

createApp({
    setup() {
        // Estado reactivo para almacenar si el tema es oscuro
        const esModoOscuro = ref(false);

        // Función para alternar el tema
        function toggleTema() {
            esModoOscuro.value = !esModoOscuro.value;
            // Guardar la preferencia en localStorage
            localStorage.setItem('modoOscuro', esModoOscuro.value.toString());
            // Aplicar la clase correspondiente al <body>
            document.body.className = esModoOscuro.value ? 'dark-mode' : 'light-mode';
        }

        // Cargar la preferencia de tema desde localStorage al montar el componente
        onMounted(() => {
            const modoOscuroGuardado = localStorage.getItem('modoOscuro');
            esModoOscuro.value = modoOscuroGuardado === 'true';
            // Aplicar la clase correspondiente al <body>
            document.body.className = esModoOscuro.value ? 'dark-mode' : 'light-mode';
        });

        return {
            esModoOscuro,
            toggleTema
        };
    }
}).mount('#app');
